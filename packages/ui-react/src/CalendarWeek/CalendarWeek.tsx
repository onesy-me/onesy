import React from 'react';

import { cleanValue, is, textToInnerHTML } from '@onesy/utils';
import { style as styleMethod, classNames, useOnesyTheme, colors } from '@onesy/style-react';
import { OnesyDate, add, endOf, format, set, startOf } from '@onesy/date';

import LineElement from '../Line';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import TooltipElement from '../Tooltip';
import { formats, staticClassName } from '../utils';
import { ICalendarEvent } from '../CalendarAvailability/CalendarAvailability';
import { ICalendarViewsView } from '../CalendarViews/CalendarViews';

const useStyle = styleMethod(theme => ({
  root: {
    color: theme.methods.palette.color.value('primary', 10),
    background: theme.palette.background.default.primary,
    paddingLeft: '12px'
  },

  weekDay: {
    width: '44px',
    height: '44px',
    borderRadius: '50%'
  },

  today: {
    background: theme.palette.color.primary[40],
    color: '#fff'
  },

  days: {
    overflow: 'auto hidden'
  },

  day: {
    minWidth: '184px',
    height: '134vh',
    width: 'calc((100% / 7) - 106px)'
  },

  dayBody: {
    position: 'relative',
    borderLeft: `1px solid ${theme.palette.light ? '#dadada' : '#575757'}`
  },

  dayHeader: {
    height: '78px',
    padding: '4px'
  },

  hours: {
    position: 'sticky',
    top: '0px',
    left: '0px',
    width: '44px',
    height: '134vh',
    flex: '0 0 auto',
    marginRight: '8px',
    background: theme.palette.background.default.primary,
    zIndex: 14
  },

  hourWrapper: {
    position: 'relative'
  },

  hour: {
    width: '50px',
    alignSelf: 'flex-start',
    left: '0px',
    position: 'absolute',
    top: '0',
    marginTop: '-8px',
    zIndex: '40',
    borderRadius: theme.methods.shape.radius.value(0.5)
  },

  guide: {
    position: 'absolute',
    left: '-9px',
    height: '1px',
    width: 'calc(100% + 9px)',
    background: theme.palette.light ? '#dadada' : '#575757'
  },

  guidelineHour: {
    position: 'absolute',
    left: '0px',
    height: '2px',
    transform: 'translateY(-50%)',
    background: theme.palette.color.tertiary[50],
    zIndex: 14,

    '&::before': {
      position: 'absolute',
      content: "''",
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: theme.palette.color.tertiary[50],
      top: '-5px',
      left: '-6.5px'
    }
  },

  range: {
    position: 'absolute',
    left: 0,
    right: 0,
    cursor: 'pointer',
    zIndex: 1,
    transition: theme.methods.transitions.make('box-shadow'),
    overflow: 'hidden',

    '& > *': {
      whiteSpace: 'pre-wrap',
      transition: theme.methods.transitions.make('opacity')
    },

    '& > .onesy-work-day-time': {
      opacity: 0
    },

    '&:hover': {
      zIndex: 14,
      boxShadow: theme.shadows.values.default[2],

      '& > .onesy-work-day-time': {
        opacity: 1
      }
    }
  },

  time: {
    position: 'relative',
    zIndex: 1,
    padding: '0px 2px',
    borderRadius: 2
  }
}), { name: 'onesy-CalendarWeek' });

export type ICalendarWeek = ILine & {
  date?: OnesyDate;

  times?: any;

  events?: ICalendarEvent[];

  onOpen?: (object?: any, event?: MouseEvent) => any;

  onTimeClick?: (date: OnesyDate, view: ICalendarViewsView, event: MouseEvent) => any;

  render?: (item: any, view: 'week' | 'day') => any;

  statuses?: any;

  displayTime?: any;

  day?: boolean;
};

const CalendarWeek: React.FC<ICalendarWeek> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCalendarWeek?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const {
    date,

    times: timesProps,

    events,

    onOpen,

    onTimeClick,

    render,

    statuses = {},

    displayTime = true,

    day: dayProp,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [now, setNow] = React.useState(new OnesyDate());

  const refs = {
    date: React.useRef(date),
    displayTime: React.useRef(displayTime),
    interval: React.useRef<any>(undefined),
    days: React.useRef<any>({}),
    overlaping: React.useRef<any>({}),
    statuses: React.useRef(statuses)
  };

  refs.date.current = date;

  refs.displayTime.current = displayTime;

  refs.statuses.current = statuses;

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

  const rangeShade = theme.palette.light ? 60 : 40;

  React.useEffect(() => {
    // 1 minute
    refs.interval.current = setInterval(() => {
      setNow(new OnesyDate());
    }, 60 * 1e3);

    return () => {
      clearInterval(refs.interval.current);
    };
  }, []);

  const getDates = React.useCallback((available: any) => {
    const values = available.dates?.values || [];

    return values.map((item: any) => {
      if (item.entire) {
        if (item.from) {
          let from = new OnesyDate(item.from);

          let to: OnesyDate;

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

  const getColor = React.useCallback((item: any) => {
    let palette = theme.palette.color.neutral;

    if (item?.status === 'working') palette = theme.palette.color.success;

    if (item?.status === 'not-working') palette = theme.palette.color.info;

    if (item?.status === 'break') palette = theme.palette.color.warning;

    if (item?.status === 'pending') palette = theme.methods.color(colors.yellow[50]) as any;

    if (item?.status === 'rescheduled') palette = theme.methods.color(colors.purple[50]) as any;

    if (item?.status === 'canceled') palette = theme.palette.color.error;

    if (item?.status === 'other') palette = theme.palette.color.neutral;

    if (item.color) palette = theme.methods.color(item.color) as any;

    return palette[rangeShade];
  }, [rangeShade, colors, theme]);

  const itemToText = React.useCallback((item: any) => {
    if (item === 'pending') return 'scheduled';

    if (item === 'not-count-workout-session') return `don't count workout session`;

    return item;
  }, []);

  const renderTimes = (day: OnesyDate, valuesAll: any, weekly = true, itemDay?: any) => {
    if (itemDay !== undefined && !itemDay?.active) return null;

    if (weekly) {
      const ends_at = itemDay?.ends_at ? new OnesyDate(itemDay.ends_at) : undefined;

      if (ends_at) {
        const day_StartDay = startOf(day, 'day');
        const ends_at_StartDay = startOf(ends_at, 'day');

        if (day_StartDay.milliseconds >= ends_at_StartDay.milliseconds) return null;
      }
    }

    const dayStartOfDay = startOf(day, 'day');

    const dayDate = format(day, formats.date);

    const values = valuesAll?.filter((item: any) => {
      const from = new OnesyDate(item.from);
      const fromStartOfDay = startOf(from, 'day');

      const to = new OnesyDate(item.to);
      const toStartOfDay = startOf(to, 'day');

      return [undefined, true].includes(refs.statuses.current[item.status || 'working']) && (weekly ? weekly : (
        // from
        (
          (dayDate === format(from, formats.date)) ||
          (dayStartOfDay.milliseconds > fromStartOfDay.milliseconds)
        ) &&
        // to
        (
          (dayDate === format(to, formats.date)) ||
          (dayStartOfDay.milliseconds < toStartOfDay.milliseconds)
        )
      ));
    });

    const elements: any = [];

    const renderTo = (valueNew: any) => {
      if (valueNew === '23:59') return '24:00';

      return valueNew;
    };

    values?.forEach((item: any, index: number) => {
      if (!(item.from && item.to)) return;

      let from = new OnesyDate(item.from);

      let to = new OnesyDate(item.to);

      if (!weekly) {
        const fromStartOfDay = startOf(from, 'day');

        const toStartOfDay = startOf(to, 'day');

        if (
          (dayStartOfDay?.milliseconds > fromStartOfDay?.milliseconds) &&
          (
            (dayDate === format(to, formats.date)) ||
            (dayStartOfDay.milliseconds < toStartOfDay.milliseconds)
          )
        ) item.from = startOf(from, 'day').milliseconds;

        if (
          (
            (dayDate === format(from, formats.date)) ||
            (dayStartOfDay.milliseconds > fromStartOfDay.milliseconds)
          ) &&
          (dayStartOfDay?.milliseconds < toStartOfDay?.milliseconds)
        ) item.to = endOf(to, 'day').milliseconds;
      }

      from = new OnesyDate(item.from);

      to = new OnesyDate(item.to);

      const itemDate = format(day, formats.date);

      const top = +(100 * (((from.hour * 60) + from.minute) / (24 * 60))).toFixed(4);

      const bottom = +((100 - (100 * (((to.hour * 60) + (to.minute === 59 ? 60 : to.minute)) / (24 * 60))))).toFixed(4);

      if (!refs.days.current[itemDate]) refs.days.current[itemDate] = [];

      if (!refs.overlaping.current[itemDate]) refs.overlaping.current[itemDate] = [];

      const bottom_ = 100 - bottom;

      // intersections
      const overlaps = refs.days.current[itemDate].filter(([itemTop, itemBottom]: [number, number]) => {
        return !(top >= itemBottom || bottom_ <= itemTop);
      });

      let level = 0;

      if (overlaps.length) {
        level = refs.overlaping.current[itemDate].filter(([itemTop, itemBottom]: [number, number]) => {
          return !(top >= itemBottom || bottom_ <= itemTop);
        }).length + 1;

        refs.overlaping.current[itemDate].push([top, bottom_]);
      }

      refs.days.current[itemDate].push([top, bottom_]);

      const minimal = ((100 - bottom) - top) < 5;

      const background = getColor(item);

      const WrapperElement = item.status ? Tooltip : React.Fragment;

      const WrapperElementProps = item.status ? {
        name: cleanValue(itemToText(item.status), { capitalize: true }),
        color: getColor(item)
      } : undefined;

      const itemProps = {
        onClick: (event: MouseEvent) => onOpen({ ...item, day, weekly }, event),
        className: classes.range
      };

      const style = {
        top: `${top}%`,
        bottom: `${bottom}%`,
        color: theme.methods.palette.color.text(background),
        background,
        left: `calc(0px + ${level * 10}px)`,

        ...(top === 0 && bottom === 0 && {
          border: 'none'
        })
      };

      const elementRendered = is('function', render) ? render(item, dayProp ? 'day' : 'week') : (
        <Line
          key={index}

          gap={0.5}

          align='center'

          justify='center'

          {...itemProps}
        >
          {!minimal && refs.displayTime.current && (
            <Type
              version='l2'

              weight={300}

              align='center'

              className={classes.time}

              style={{
                background: getColor(item)
              }}
            >
              {format(from, 'hh:mm a', { l })} - {renderTo(format(to, 'hh:mm a', { l }))}
            </Type>
          )}

          {item.description && (
            <Type
              version='b2'

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.description)
              }}

              style={{
                maxHeight: 24,
                maxWidth: '90%'
              }}
            />
          )}
        </Line>
      );

      elements.push(
        <WrapperElement
          {...WrapperElementProps}
        >
          {React.cloneElement(elementRendered, {
            ...itemProps,

            className: classNames([
              itemProps.className,
              elementRendered.props?.className
            ]),

            style: {
              ...style,

              ...elementRendered.props?.style
            }
          })}
        </WrapperElement>
      );
    });

    return elements;
  };

  const onTimeClickMethod = React.useCallback((itemDay: OnesyDate, event: MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();

    const relativeY = event.clientY - rect.top;

    const relativePercentage = (relativeY / rect.height) * 100;

    let timeDate = set(Math.floor(24 * (relativePercentage / 100)), 'hour', itemDay);

    // start of the hour
    timeDate = startOf(timeDate, 'hour');

    onTimeClick?.(timeDate, dayProp ? 'day' : 'week', event);
  }, []);

  const timesUI = React.useCallback((dayDate: OnesyDate) => {
    // clean up
    refs.days.current = {};
    refs.overlaping.current = {};

    const day = dayDate.dayWeek === 0 ? 7 : dayDate.dayWeek;

    return <>
      {times.map(item => <>
        {/* Weekly */}
        {item.weekly && renderTimes(dayDate, (item.weekly!.days as any)![day]?.values as any, true, (item.weekly!.days as any)![day])}

        {/* Dates */}
        {item.dates && renderTimes(dayDate, getDates(item), false)}
      </>)}
    </>;
  }, [theme, times, date]);

  const hours = React.useMemo(() => {
    return Array.from({ length: 24 }).map((item, index) => set(index, 'hour', date));
  }, [date]);

  const days = React.useMemo(() => {
    const weekStartDate = set(4, 'hour', startOf(date, 'week'));

    return Array.from({ length: 7 }).map((_, index) => add(index, 'day', weekStartDate));
  }, [date]);

  return (
    <Line
      ref={ref}

      gap={1.5}

      flex

      fullWidth

      className={classNames([
        staticClassName('CalendarWeek', theme) && [
          'onesy-CalendarWeek-root',
          dayProp && 'onesy-CalendarWeek-prop-day'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction='row'

        align='stretch'

        flex

        fullWidth

        className={classes.days}
      >
        <Line
          gap={0}

          align='center'

          fullWidth

          className={classNames([
            'onesy-hours',

            classes.hours
          ])}
        >
          <Line
            className={classes.dayHeader}
          />

          <Line
            gap={0}

            flex

            fullWidth

            className={classes.hourWrapper}
          >
            {hours.map((itemHour, index) => (
              <Line
                key={index}

                gap={1}

                align='unset'

                className={classes.hour}

                style={{
                  top: `${(100 / 24) * index}%`
                }}
              >
                <Type
                  version='b3'

                  whiteSpace='nowrap'
                >
                  {format(itemHour, 'h A', { l })}
                </Type>
              </Line>
            ))}
          </Line>
        </Line>

        {dayProp && (
          <Line
            gap={0}

            direction='column'

            align='center'

            flex

            className={classNames([
              'onesy-day',

              classes.day
            ])}
          >
            <Line
              gap={0}

              align='center'

              fullWidth

              className={classes.dayHeader}
            >
              <Type
                version='l1'

                weight={200}
              >
                {format(date, 'd', { l })}
              </Type>

              <Line
                align='center'

                justify='center'

                className={classNames([
                  classes.weekDay,
                  date.year === now.year && date.dayYear === now.dayYear && classes.today
                ])}
              >
                <Type
                  version='h3'

                  weight={400}

                  align='center'
                >
                  {format(date, 'D', { l })}
                </Type>
              </Line>
            </Line>

            <Line
              className={classes.dayBody}

              flex

              fullWidth

              onClick={(event: MouseEvent) => onTimeClickMethod(date, event)}
            >
              {timesUI(date)}

              {/* Guides */}
              {hours.map((itemGuide, indexGuide) => (
                <Line
                  key={indexGuide}

                  className={classes.guide}

                  fullWidth

                  style={{
                    top: `${(100 / 24) * indexGuide}%`
                  }}
                />
              ))}

              {/* Now */}
              {(format(now, formats.date) === format(date, formats.date)) && (
                <Line
                  className={classes.guidelineHour}

                  fullWidth

                  style={{
                    top: `${(((now.hour * 60) + now.minute) / (24 * 60)) * 100}%`
                  }}
                />
              )}
            </Line>
          </Line>
        )}

        {!dayProp && days.map((itemDay, index) => {
          return (
            <Line
              key={index}

              gap={0}

              direction='column'

              align='center'

              flex

              className={classNames([
                'onesy-day',

                classes.day
              ])}
            >
              <Line
                gap={0}

                align='center'

                fullWidth

                className={classes.dayHeader}
              >
                <Type
                  version='l1'

                  weight={200}
                >
                  {format(itemDay, 'd', { l })}
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
                    version='h3'

                    weight={400}

                    align='center'
                  >
                    {format(itemDay, 'D', { l })}
                  </Type>
                </Line>
              </Line>

              <Line
                className={classes.dayBody}

                flex

                fullWidth

                onClick={(event: MouseEvent) => onTimeClickMethod(itemDay, event)}
              >
                {timesUI(itemDay)}

                {/* Guides */}
                {hours.map((itemGuide, indexGuide) => (
                  <Line
                    key={indexGuide}

                    className={classes.guide}

                    fullWidth

                    style={{
                      top: `${(100 / 24) * indexGuide}%`
                    }}
                  />
                ))}

                {/* Now */}
                {(format(now, formats.date) === format(itemDay, formats.date)) && (
                  <Line
                    className={classes.guidelineHour}

                    fullWidth

                    style={{
                      top: `${(((now.hour * 60) + now.minute) / (24 * 60)) * 100}%`
                    }}
                  />
                )}
              </Line>
            </Line>
          );
        })}
      </Line>
    </Line>
  );
});

CalendarWeek.displayName = 'onesy-CalendarWeek';

export default CalendarWeek;
