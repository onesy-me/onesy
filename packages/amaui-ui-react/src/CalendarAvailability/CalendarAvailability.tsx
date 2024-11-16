import React from 'react';

import { capitalize, cleanValue, is, textToInnerHTML } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme, colors } from '@amaui/style-react';
import { AmauiDate, add, endOf, format, remove, set, startOf } from '@amaui/date';

import CalendarWeekElement from '../CalendarWeek';
import SelectElement from '../Select';
import ButtonElement from '../Button';
import LineElement from '../Line';
import ModalElement from '../Modal';
import ModalHeaderElement from '../ModalHeader';
import ModalMainElement from '../ModalMain';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import LabelElement from '../Label';
import SlideElement from '../Slide';
import SwitchElement from '../Switch';
import IconElement from '../Icon';
import { formats, staticClassName } from '../utils';
import { IElement } from '../types';
import { ICalendarViewsView } from '../CalendarViews/CalendarViews';

const IconMaterialEdit = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Edit'

      short_name='Edit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387.075-.188.225-.338l10.3-10.3 4.25 4.25-10.3 10.3q-.15.15-.337.225-.188.075-.388.075ZM14.325 9.675l-.7-.7 1.4 1.4Z" />
    </IconElement>
  );
});

const IconMaterialKeyboardArrowDown = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='KeyboardArrowDown'

      short_name='KeyboardArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.975q-.2 0-.387-.075-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.9-3.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z" />
    </IconElement>
  );
});

const IconMaterialArrowForwardIos = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowForwardIos'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 21.1q-.375-.375-.375-.888 0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375.512 0 .887.375l8.4 8.425q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35-.513 0-.888-.375Z" />
    </IconElement>
  );
});

const IconMaterialArrowBackIosNew = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowBackIosNew'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.125 21.1 6.7 12.7q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862 0 .513-.375.888t-.875.375q-.5 0-.875-.375Z" />
    </IconElement>
  );
});

const IconMaterialDelete = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Delete'

      short_name='Delete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    padding: '16px',
    paddingBottom: '24px',
    color: theme.methods.palette.color.value('primary', 10),
    background: theme.palette.background.default.primary,

    '& .amaui-Label-text': {
      whiteSpace: 'nowrap'
    }
  },

  calendar: {
    padding: '12px 8px',
    background: theme.palette.background.default.primary
  },

  aside: {
    width: 'auto',
    maxWidth: '100%'
  },

  weekDay: {
    width: '47px',
    height: '47px',
    borderRadius: '50%'
  },

  today: {
    background: theme.palette.color.primary[40],
    color: '#fff'
  },

  palettePreview: {
    width: '17px',
    height: '17px',
    boxShadow: theme.palette.light ? '0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px 0px rgba(0, 0, 0, 0.11)' : '0px 1px 1px 0px rgba(255, 255, 255, 0.21), 0px 2px 1px -1px rgba(255, 255, 255, 0.12), 0px 1px 3px 0px rgba(255, 255, 255, 0.40)',
    borderRadius: '50%',
    cursor: 'default',
    flex: '0 0 auto',
    transition: theme.methods.transitions.make('transform'),

    '& > *': {
      width: '100% !important',
      height: 'calc(100% + 12px) !important'
    },

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  dayWeekSimple: {
    maxWidth: 184
  },

  simpleTimes: {
    '&.amaui-Line-direction-row': {
      '& > *': {
        flex: '1 1 auto'
      }
    },

    '&.amaui-Line-direction-column': {
      '& > *': {
        width: '100%'
      }
    }
  },

  itemLegend: {
    cursor: 'pointer',
    userSelect: 'none',
    opacity: 0.5,
    transition: theme.methods.transitions.make(['opacity', 'transform']),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  itemLegendActive: {
    opacity: 1
  },

  overflowX: {
    padding: '2px 0',
    overflow: 'auto hidden'
  }
}), { name: 'amaui-CalendarAvailability' });

export interface ICalendarAvailability extends ILine {
  name?: string | IElement;

  dateDefault?: AmauiDate;

  times?: any;

  meta?: boolean;

  views?: ICalendarViewsView[];

  onUpdate?: (object?: any) => any;

  onRemove?: (object?: any) => any;

  onChangeDate?: (value: AmauiDate) => any;

  startLeft?: any;

  endLeft?: any;

  startRight?: any;

  endRight?: any;

  startLeftModal?: any;

  endLeftModal?: any;

  startRightModal?: any;

  endRightModal?: any;

  IconPrevious?: any;

  IconNext?: any;

  IconDescription?: any;

  IconRemove?: any;

  IconClose?: any;

  WeekProps?: any;

  DayProps?: any;

  IconProps?: any;

  IconButtonProps?: any;
}

const CalendarAvailability: React.FC<ICalendarAvailability> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCalendarAvailability?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Label = React.useMemo(() => theme?.elements?.Label || LabelElement, [theme]);

  const Switch = React.useMemo(() => theme?.elements?.Switch || SwitchElement, [theme]);

  const Modal = React.useMemo(() => theme?.elements?.Modal || ModalElement, [theme]);

  const ModalHeader = React.useMemo(() => theme?.elements?.ModalHeader || ModalHeaderElement, [theme]);

  const ModalMain = React.useMemo(() => theme?.elements?.ModalMain || ModalMainElement, [theme]);

  const Slide = React.useMemo(() => theme?.elements?.Slide || SlideElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const CalendarWeek = React.useMemo(() => theme?.elements?.CalendarWeek || CalendarWeekElement, [theme]);

  const {
    name,

    dateDefault,

    times: timesProps,

    meta,

    views: viewsProps = ['week', 'day', 'simple'],

    onUpdate,

    onRemove,

    onChangeDate: onChangeDateProps,

    startLeft,

    endLeft,

    startRight,

    endRight,

    startLeftModal,

    endLeftModal,

    startRightModal,

    endRightModal,

    Component = Line,

    IconEdit = IconMaterialEdit,

    IconPrevious = IconMaterialArrowBackIosNew,

    IconNext = IconMaterialArrowForwardIos,

    IconRemove = IconMaterialDelete,

    IconClose = IconMaterialKeyboardArrowDown,

    WeekProps,

    DayProps,

    IconProps,

    IconButtonProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [now, setNow] = React.useState(new AmauiDate());
  const [date, setDate] = React.useState(dateDefault || new AmauiDate());
  const [view, setView] = React.useState<any>('week');
  const [displayTime, setDisplayTime] = React.useState(true);
  const [modal, setModal] = React.useState<any>();
  const [statuses, setStatuses] = React.useState<any>({});

  const refs = {
    date: React.useRef(date),
    displayTime: React.useRef(displayTime),
    interval: React.useRef<any>(),
    calendar: React.useRef<any>(),
    days: React.useRef<any>({}),
    overlaping: React.useRef<any>({}),
    statuses: React.useRef(statuses)
  };

  refs.date.current = date;

  refs.displayTime.current = displayTime;

  refs.statuses.current = statuses;

  const onStatusToggle = React.useCallback((value = 'working') => {
    setStatuses(previous => ({
      ...previous,

      [value]: previous[value] === undefined ? false : !previous[value]
    }));
  }, []);

  const times = React.useMemo(() => {
    return (is('array', timesProps) ? timesProps : [timesProps]).filter(Boolean);
  }, [timesProps]);

  const rangeShade = theme.palette.light ? 70 : 40;

  React.useEffect(() => {
    // 1 minute
    refs.interval.current = setInterval(() => {
      setNow(new AmauiDate());
    }, 60 * 1e3);

    return () => {
      clearInterval(refs.interval.current);
    };
  }, []);

  const onOpen = React.useCallback((item: any) => {
    setModal({ ...item, open: true });
  }, []);

  const onClose = React.useCallback(() => {
    setModal((item: any) => ({
      ...item,

      open: false
    }));
  }, []);

  const onChangeDisplayTime = React.useCallback((valueNew: any) => {
    setDisplayTime(valueNew);
  }, []);

  const onChangeView = React.useCallback((valueNew: any) => {
    setView(valueNew);
  }, []);

  const optionsStatus = React.useMemo(() => {
    return [
      { name: 'Working', value: 'working' },
      { name: 'Not working', value: 'not-working' },
      { name: 'On a break', value: 'break' },
      { name: 'Scheduled', value: 'pending' },
      { name: 'Rescheduled', value: 'rescheduled' },
      { name: 'Cancelled', value: 'canceled' },
      { name: 'Other', value: 'other' }
    ];
  }, []);

  const onToday = React.useCallback(() => {
    const valueNew = new AmauiDate();

    setDate(valueNew);

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [onChangeDateProps]);

  const onPrevious = React.useCallback(() => {
    let valueNew = new AmauiDate();

    setDate(previous => {
      valueNew = remove(1, ['week', 'simple'].includes(view) ? 'week' : view, previous);

      return valueNew;
    });

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [view, onChangeDateProps]);

  const onNext = React.useCallback(() => {
    let valueNew = new AmauiDate();

    setDate(previous => {
      valueNew = add(1, ['week', 'simple'].includes(view) ? 'week' : view, previous);

      return valueNew;
    });

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [view, onChangeDateProps]);

  const getDates = React.useCallback((available: any) => {
    const values = available.dates?.values || [];

    return values.map((item: any) => {
      if (item.entire) {
        if (item.from) {
          let from = new AmauiDate(item.from);

          let to: AmauiDate;

          if (['day', 'week', 'month', 'year'].includes(item.entire)) from = startOf(from, 'day');

          if (item.entire === 'minute') from = startOf(from, 'minute');

          if (item.entire === 'hour') from = startOf(from, 'hour');

          to = endOf(from, item.entire);

          item.from = from.milliseconds;

          item.to = to.milliseconds;
        }
      }

      return item;
    });
  }, [times]);

  const getDatesWeek = React.useCallback((available: any) => {
    const weekFrom = startOf(date, 'week');
    const weekTo = endOf(date, 'week');

    return getDates(available).filter((item: any) => {
      const from = new AmauiDate(item.from);
      const to = new AmauiDate(item.to);

      return !(from.milliseconds >= weekTo.milliseconds || to.milliseconds <= weekFrom.milliseconds);
    });
  }, [date, getDates]);

  const weekStart = startOf(date, 'week');

  const getColor = React.useCallback((item: any) => {
    let palette = theme.palette.color.neutral;

    if (item?.status === 'working') palette = theme.palette.color.success;

    if (item?.status === 'not-working') palette = theme.palette.color.info;

    if (item?.status === 'break') palette = theme.palette.color.warning;

    if (item?.status === 'pending') palette = theme.methods.color(colors.yellow[50]) as any;

    if (item?.status === 'rescheduled') palette = theme.methods.color(colors.purple[50]) as any;

    if (item?.status === 'canceled') palette = theme.palette.color.error;

    if (item?.status === 'other') palette = theme.palette.color.neutral;

    return palette[rangeShade];
  }, [rangeShade, colors, theme]);

  const itemToText = React.useCallback((item: any) => {
    if (item === 'pending') return 'scheduled';

    if (item === 'not-count-workout-session') return `don't count workout session`;

    return item;
  }, []);

  const viewOptions = React.useMemo(() => {
    return viewsProps?.map(item => ({
      name: capitalize(item),
      value: item
    }));
  }, [viewsProps]);

  const days = React.useMemo(() => {
    const weekStartDate = set(4, 'hour', startOf(date, 'week'));

    return Array.from({ length: 7 }).map((_, index) => add(index, 'day', weekStartDate));
  }, [date]);

  const simpleTimesUI = () => {

    return (
      <Line
        gap={3}

        direction={{
          xxs: 'column',
          xs: 'column',
          sm: 'column',
          md: 'column',
          default: 'row'
        }}

        className={classes.simpleTimes}

        fullWidth
      >
        {days.map((itemDay, index) => {
          const values = times.filter(item => item.weekly.days[index + 1]?.active).flatMap(item => item.weekly.days[index + 1].values).filter(item => item && [undefined, true].includes(refs.statuses.current[item.status || 'working']));

          values.sort((a, b) => b.from > a.from ? -1 : 1);

          return (
            <Line
              key={index}

              gap={1.5}

              direction='column'
            >
              <Line
                gap={0}

                align='center'

                fullWidth
              >
                <Type
                  version='h3'

                  weight={400}
                >
                  {format(itemDay, 'dd')}
                </Type>

                <Line
                  align='center'

                  justify='center'

                  className={classNames([
                    classes.weekDay,
                    itemDay.year === now.year && itemDay.dayYear === now.dayYear && classes.today
                  ])}
                >
                  <Type
                    version='b2'

                    weight={200}
                  >
                    {format(itemDay, 'DD.MM.')}
                  </Type>
                </Line>
              </Line>

              <Line
                gap={2}

                fullWidth
              >
                {!!values.length ? values.map((itemValue: any, indexItem: number) => {
                  const itemValueFrom = new AmauiDate(itemValue.from);
                  const itemValueTo = new AmauiDate(itemValue.to);

                  return (
                    <Line
                      key={indexItem}

                      gap={0.5}

                      className={classes.dayWeekSimple}
                    >
                      <Line
                        gap={1}

                        direction='row'

                        align='center'
                      >
                        <Line
                          className={classes.palettePreview}

                          style={{
                            background: getColor(itemValue)
                          }}
                        />

                        <Type
                          version='b2'

                          weight={300}
                        >
                          {format(itemValueFrom, 'hh:mm a')} — {format(itemValueTo, 'hh:mm a')}
                        </Type>
                      </Line>

                      {itemValue.description && (
                        <Type
                          version='b2'

                          weight={200}

                          whiteSpace='pre-wrap'

                          className={classNames([
                            classes.timeDescription,
                            !refs.displayTime.current && 'amaui-work-day-time'
                          ])}

                          dangerouslySetInnerHTML={{
                            __html: textToInnerHTML(itemValue.description)
                          }}
                        />
                      )}
                    </Line>
                  );
                }) : (
                  <Type
                    version='b2'
                  >
                    No information for this day
                  </Type>
                )}
              </Line>
            </Line>
          );
        })}
      </Line>
    );
  };

  const simpleExceptionsUI = () => {
    const items = times.flatMap(item => getDatesWeek(item));

    if (!items.length) return (
      <Type
        version='b1'
      >
        No exceptions this week
      </Type>
    );

    return <>
      {items.map((itemValue: any, index: number) => {
        const day = set(index + 1, 'dayWeek');

        const itemValueFrom = new AmauiDate(itemValue.from);
        const itemValueTo = new AmauiDate(itemValue.to);

        return (
          <Line
            key={index}

            gap={1}

            direction='column'
          >
            <Line
              gap={1}

              direction='row'

              align='center'

              fullWidth
            >
              <Line
                className={classes.palettePreview}

                style={{
                  background: getColor(itemValue)
                }}
              />

              <Line
                gap={1}

                direction='row'

                align='center'
              >
                <Type
                  version='b2'

                  weight={400}
                >
                  {format(day, 'dd')}
                </Type>

                <Type
                  version='b2'
                >
                  {format(itemValueFrom, formats.entire)} — {format(itemValueTo, formats.entire)}
                </Type>
              </Line>
            </Line>

            {itemValue.description && (
              <Type
                version='b2'

                weight={200}

                whiteSpace='pre-wrap'

                className={classNames([
                  classes.timeDescription,
                  !refs.displayTime.current && 'amaui-work-day-time'
                ])}

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(itemValue.description)
                }}
              />
            )}
          </Line>
        );
      })}
    </>;
  };

  const formattedDate = React.useMemo(() => {
    if (view === 'day') return format(date, `MMMM DD, YYYY`);

    if (['week', 'simple'].includes(view)) return `${format(startOf(date, 'week'), `MMM DD, YYYY`)} – ${format(endOf(date, 'week'), `MMM DD, YYYY`)}`;
  }, [view, date]);

  const legend = React.useMemo(() => {
    return (
      <Line
        rowGap={1.5}

        direction='row'

        align='center'

        justify='center'

        wrap='wrap'

        className={classes.legend}

        fullWidth

        style={{
          height: 40
        }}
      >
        {optionsStatus.map((item, index) => (
          <Line
            key={index}

            gap={1}

            direction='row'

            align='center'

            onClick={() => onStatusToggle(item.value)}

            className={classNames([
              classes.itemLegend,
              [undefined, true].includes(refs.statuses.current[item.value || 'working']) && classes.itemLegendActive
            ])}
          >
            <Line
              className={classes.palettePreview}

              style={{
                background: getColor({ status: item.value })
              }}
            />

            <Type
              version='b2'
            >
              {item.name}
            </Type>
          </Line>
        ))}
      </Line>
    );
  }, [theme, statuses, optionsStatus]);

  return (
    <Component
      ref={ref}

      flex

      fullWidth

      className={classNames([
        staticClassName('CalendarAvailability', theme) && [
          'amaui-CalendarAvailability-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
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

                {...IconButtonProps}
              >
                <IconPrevious
                  size='regular'
                />
              </IconButton>
            </Tooltip>

            <Tooltip
              name={`Next ${view}`}
            >
              <IconButton
                onClick={onNext}

                {...IconButtonProps}
              >
                <IconNext
                  size='regular'
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

          {['week', 'day'].includes(view) && (
            <Label
              value={displayTime}

              onChange={onChangeDisplayTime}
            >
              <Switch />

              Display time
            </Label>
          )}

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
                width: '140px',
                minWidth: 'unset'
              }
            }}

            style={{
              width: '140px',
              minWidth: 'unset'
            }}
          />

          {endRight}
        </Line>
      </Line>

      <Line
        ref={refs.calendar}

        gap={2}

        flex

        fullWidth
      >
        {view === 'simple' && (
          <Line
            gap={1}

            flex

            fullWidth
          >
            <Line
              gap={4}

              fullWidth

              className={classes.calendar}
            >
              {/* Weekly */}
              {simpleTimesUI()}

              {/* Dates */}
              <Line
                gap={1.5}
              >
                <Type
                  version='t2'
                >
                  Exceptions this week
                </Type>

                <Line
                  gap={1}
                >
                  {simpleExceptionsUI()}
                </Line>
              </Line>
            </Line>
          </Line>
        )}

        {['week', 'day'].includes(view) && (
          <CalendarWeek
            onOpen={onOpen}

            date={date}

            displayTime={displayTime}

            statuses={statuses}

            times={timesProps}

            day={view === 'day'}

            {...WeekProps}
          />
        )}

        {legend}
      </Line>

      {times && (
        <Modal
          open={!!modal?.open}

          onClose={onClose}

          minWidth='lg'

          TransitionComponent={Slide}

          size='small'
        >
          <ModalHeader
            gap={1}

            direction='row'

            align='center'

            justify='space-between'

            fullWidth
          >
            <Line
              gap={1}

              direction='row'

              align='center'
            >
              {startLeftModal}

              <Line
                className={classes.palettePreview}

                style={{
                  background: getColor(modal)
                }}
              />

              <Type
                version='b2'

                weight={100}
              >
                {cleanValue(itemToText(modal?.status), { capitalize: true })}
              </Type>

              {endLeftModal}
            </Line>

            <Line
              gap={1}

              direction='row'

              align='center'
            >
              {startRightModal}

              {onUpdate && (
                <Tooltip
                  name='Update'
                >
                  <IconButton
                    onClick={() => {
                      onUpdate(modal?.object);

                      onClose();
                    }}
                  >
                    <IconEdit
                      {...IconProps}
                    />
                  </IconButton>
                </Tooltip>
              )}

              {onRemove && (
                <Tooltip
                  name='Remove'
                >
                  <IconButton
                    onClick={() => {
                      onRemove(modal?.object);

                      onClose();
                    }}
                  >
                    <IconRemove
                      {...IconProps}
                    />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip
                name='Close'
              >
                <IconButton
                  onClick={onClose}
                >
                  <IconClose
                    {...IconProps}
                  />
                </IconButton>
              </Tooltip>

              {endRightModal}
            </Line>
          </ModalHeader>

          <ModalMain
            align='flex-start'

            className={classes.modalMain}
          >
            <Line
              gap={1.5}

              fullWidth
            >
              <Type
                version='l1'

                weight={200}
              >
                {format(modal?.day, 'dd')} {format(new AmauiDate(modal?.from), modal?.weekly ? `hh:mm a` : formats.entire)} — {format(new AmauiDate(modal?.to), modal?.weekly ? `hh:mm a` : formats.entire)}
              </Type>

              {modal?.description && (
                <Type
                  version='b2'

                  dangerouslySetInnerHTML={{
                    __html: textToInnerHTML(modal.description)
                  }}
                />
              )}
            </Line>
          </ModalMain>
        </Modal>
      )}
    </Component>
  );
});

CalendarAvailability.displayName = 'amaui-CalendarAvailability';

export default CalendarAvailability;
