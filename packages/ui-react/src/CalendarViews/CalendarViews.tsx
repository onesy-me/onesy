import React from 'react';

import { capitalize, is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';
import { add, OnesyDate, endOf, format, remove, startOf } from '@onesy/date';

import IconMaterialArrowBackIosNew from '@onesy/icons-material-rounded-react/IconMaterialArrowBackIosNewW100';
import IconMaterialArrowForwardIos from '@onesy/icons-material-rounded-react/IconMaterialArrowForwardIosW100';

import CalendarWeekElement from '../CalendarWeek';
import CalendarMonthElement from '../CalendarMonth';
import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import SelectElement from '../Select';
import ButtonElement from '../Button';
import { ICalendar } from '../Calendar/Calendar';
import { staticClassName } from '../utils';
import { ICalendarEvent } from '../CalendarAvailability/CalendarAvailability';

const useStyle = styleMethod(theme => ({
  root: {
    padding: '16px',
    color: theme.methods.palette.color.value('primary', 10),
    background: theme.palette.background.default.primary,

    '& .onesy-Label-text': {
      whiteSpace: 'nowrap'
    }
  },

  main: {
    paddingTop: '4px',
    overflow: 'auto hidden'
  },

  aside: {
    width: 'auto',
    maxWidth: '100%'
  },

  month: {
    position: 'relative',
    width: 'auto',
    minWidth: '100%'
  },

  monthDay: {
    width: '32px',
    height: '32px',
    marginTop: '4px',
    borderRadius: '50%'
  },

  today: {
    background: theme.palette.color.primary[40],
    color: '#fff'
  },

  contentItemsMonth: {
    position: 'relative',
    padding: '0px 4px 8px',
    height: '100px',
    overflow: 'hidden auto'
  },

  calendarMonth: {
    '&.onesy-CalendarMonth-root': {
      width: '100%',
      height: '100%',
      minHeight: '0',
      flex: '0 0 auto',
      minWidth: 'unset',
      overflow: 'unset',
      transition: theme.methods.transitions.make('opacity')
    },

    '& .onesy-CalendarMonth-weeks': {
      position: 'relative',
      top: '0',
      width: 'calc(100% - 2px)',
      height: 'auto',
      marginLeft: '1px',
      gap: '0'
    },

    '& .onesy-CalendarMonth-week': {
      flex: '1 1 auto'
    },

    '& .onesy-CalendarMonth-day': {
      height: 'unset',
      minWidth: '170px',
      minHeight: '100px',
      marginTop: '-1px',
      marginLeft: '-1px',
      border: `1px solid ${theme.palette.light ? '#dadada' : '#575757'}`
    },

    '& .onesy-CalendarMonth-day-name': {
      minWidth: '170px'
    },

    '& .onesy-CalendarMonth-day-out': {
      zIndex: '-1px'
    }
  },

  dayWrapper: {
    height: '100%'
  },

  overflowX: {
    padding: '2px 0',
    overflow: 'auto hidden'
  }
}), { name: 'onesy-CalendarViews' });

export type ICalendarViewsView = 'day' | 'week' | 'month';

export type ICalendarViews = ICalendar & {
  viewDefault?: ICalendarViewsView;

  dateDefault?: OnesyDate;

  times?: any;

  events?: ICalendarEvent[];

  views?: ICalendarViewsView[];

  render?: (date: OnesyDate, view: ICalendarViewsView) => any;

  onTimeClick?: (date: OnesyDate, view: ICalendarViewsView, event: MouseEvent) => any;

  onChangeView?: (view: ICalendarViewsView) => any;

  onChangeDate?: (value: OnesyDate) => any;

  startHeader?: any;

  endHeader?: any;

  startLeft?: any;

  endLeft?: any;

  startRight?: any;

  endRight?: any;

  noViews?: boolean;

  IconPrevious?: any;

  IconNext?: any;

  WeekProps?: any;

  DayProps?: any;

  CalendarMonthProps?: any;
};

const CalendarViews: React.FC<ICalendarViews> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCalendarViews?.props?.default, ...props_ }), [props_]);

  const CalendarMonth = React.useMemo(() => theme?.elements?.CalendarMonth || CalendarMonthElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const CalendarWeek = React.useMemo(() => theme?.elements?.CalendarWeek || CalendarWeekElement, [theme]);

  const {
    viewDefault,

    dateDefault,

    times: timesProps,

    events,

    views: viewsProps = ['month', 'week', 'day'],

    render,

    onTimeClick,

    onChangeView: onChangeViewProps,

    onChangeDate: onChangeDateProps,

    startHeader,

    endHeader,

    startLeft,

    endLeft,

    startRight,

    endRight,

    noViews,

    IconPrevious = IconMaterialArrowBackIosNew,

    IconNext = IconMaterialArrowForwardIos,

    WeekProps,

    DayProps,

    CalendarMonthProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const [now, setNow] = React.useState(new OnesyDate());
  const [date, setDate] = React.useState(dateDefault || new OnesyDate());
  const [view, setView] = React.useState<ICalendarViewsView>(viewDefault || 'month');

  const refs = {
    interval: React.useRef<any>(undefined)
  };

  React.useEffect(() => {
    // 1 minute
    refs.interval.current = setInterval(() => {
      setNow(new OnesyDate());
    }, 60 * 1e3);

    return () => {
      clearInterval(refs.interval.current);
    };
  }, []);

  const times = React.useMemo(() => {
    if (events) {
      return [
        {
          dates: {
            active: true,
            values: (is('array', events) ? events : [events] as any).filter(Boolean)
          }
        }
      ];
    }

    return (is('array', timesProps) ? timesProps : [timesProps]).filter(Boolean);
  }, [events, timesProps]);

  const viewOptions = React.useMemo(() => {
    return viewsProps?.map(item => ({
      name: capitalize(item),
      value: item
    }));
  }, [viewsProps]);

  const formattedDate = React.useMemo(() => {
    if (view === 'day') return format(date, `MMMM DD, YYYY`);

    if (view === 'week') return `${format(startOf(date, 'week'), `MMM DD, YYYY`)} – ${format(endOf(date, 'week'), `MMM DD, YYYY`)}`;

    if (view === 'month') return format(date, `MMMM YYYY`);
  }, [view, date]);

  const onChangeView = React.useCallback((valueNew: any) => {
    setView(valueNew);

    if (is('function', onChangeViewProps)) onChangeViewProps(valueNew);
  }, [onChangeViewProps]);

  const onToday = React.useCallback(() => {
    const valueNew = new OnesyDate();

    setDate(valueNew);

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [onChangeDateProps]);

  const onPrevious = React.useCallback(() => {
    let valueNew = new OnesyDate();

    setDate(previous => {
      valueNew = remove(1, view, previous);

      return valueNew;
    });

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [view, onChangeDateProps]);

  const onNext = React.useCallback(() => {
    let valueNew = new OnesyDate();

    setDate(previous => {
      valueNew = add(1, view, previous);

      return valueNew;
    });

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [view, onChangeDateProps]);

  const renderDay = React.useCallback((valueCalendarMonth: OnesyDate, propsDay: any, day: any, outside: boolean) => {

    return (
      <Line
        gap={0.5}

        direction='column'

        align='center'

        flex

        fullWidth

        className={classes.dayWrapper}
      >
        <Line
          direction='row'

          justify='center'

          align='center'

          fullWidth

          className={classNames([
            classes.monthDay,
            day.today && classes.today
          ])}
        >
          <Type
            version='b2'
          >
            {format(valueCalendarMonth, 'D')}
          </Type>
        </Line>

        <Line
          gap={0.5}

          flex

          fullWidth

          className={classes.contentItemsMonth}
        >
          {is('function', render) && render(valueCalendarMonth, view)}
        </Line>
      </Line>
    );
  }, [render, view]);

  const renderDayName = React.useCallback((order: number) => {
    const values: any = {
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
      7: 'Sun'
    };

    return values[order];
  }, []);

  const ui: any = {
    month: <>
      <Line
        gap={0}

        className={classes.month}
      >
        <CalendarMonth
          value={now}

          calendar={date}

          renderDay={renderDay as any}

          renderDayName={renderDayName}

          onTimeClick={onTimeClick}

          size='large'

          dayNamesFull

          noTransition

          outside={false}

          DayNameProps={{
            version: 'l1',
            weight: 200
          }}

          {...CalendarMonthProps}

          className={classNames([
            CalendarMonthProps?.className,
            classes.calendarMonth
          ])}
        />
      </Line>
    </>,

    week: (
      <CalendarWeek
        date={date}

        times={times}

        events={events}

        onTimeClick={onTimeClick}

        {...WeekProps}
      />
    ),

    day: (
      <CalendarWeek
        date={date}

        times={times}

        events={events}

        onTimeClick={onTimeClick}

        day

        {...WeekProps}
      />
    )
  };

  const iconProps: any = {
    size: 'regular'
  };

  const iconButtonProps: any = {
    size: 'regular'
  };

  return (
    <Line
      ref={ref}

      flex

      fullWidth

      className={classNames([
        staticClassName('CalendarViews', theme) && [
          'onesy-CalendarViews-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={1}

        fullWidth

        className={classNames([
          staticClassName('CalendarViews', theme) && [
            'onesy-CalendarViews-header'
          ]
        ])}
      >
        {startHeader}

        <Line
          gap={2}

          direction='row'

          wrap='wrap'

          justify='space-between'

          align='center'

          fullWidth
        >
          <Line
            gap={1.5}

            direction='row'

            wrap='wrap'

            align='center'

            className={classes.aside}
          >
            {startLeft}

            <Button
              color='inherit'

              version='outlined'

              size='small'

              onClick={onToday}

              selected={now.days === date.days}
            >
              Today
            </Button>

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              <Tooltip
                name={`Previous ${view}`}
              >
                <IconButton
                  onClick={onPrevious}

                  {...iconButtonProps}
                >
                  <IconPrevious
                    {...iconProps}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip
                name={`Next ${view}`}
              >
                <IconButton
                  onClick={onNext}

                  {...iconButtonProps}
                >
                  <IconNext
                    {...iconProps}
                  />
                </IconButton>
              </Tooltip>
            </Line>

            <Type
              version='h2'

              weight={500}

              whiteSpace='nowrap'
            >
              {formattedDate}
            </Type>

            {endLeft}
          </Line>

          <Line
            gap={1.5}

            direction='row'

            align='center'

            flexNo

            className={classNames([
              classes.aside,
              classes.overflowX
            ])}
          >
            {startRight}

            {!noViews && (
              <Select
                name='View'

                value={view}

                onChange={onChangeView}

                options={viewOptions}

                size='small'

                MenuProps={{
                  portal: true,
                  size: 'regular'
                }}

                WrapperProps={{
                  style: {
                    width: 170,
                    minWidth: 'unset'
                  }
                }}

                style={{
                  width: 170,
                  minWidth: 'unset'
                }}
              />
            )}

            {endRight}
          </Line>
        </Line>

        {endHeader}
      </Line>

      <Line
        flex

        fullWidth

        className={classes.main}
      >
        {ui[view]}
      </Line>
    </Line>
  );
});

CalendarViews.displayName = 'onesy-CalendarViews';

export default CalendarViews;
