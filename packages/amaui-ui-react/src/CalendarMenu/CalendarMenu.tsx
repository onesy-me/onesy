import React from 'react';

import { hash, is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, add, diff, format, is as isDate } from '@amaui/date';

import IconMaterialScheduleRounded from '@amaui/icons-material-rounded-react/IconMaterialScheduleW100';
import IconMaterialWbSunnyRounded from '@amaui/icons-material-rounded-react/IconMaterialWbSunnyW100';
import IconMaterialWbTwilightRounded from '@amaui/icons-material-rounded-react/IconMaterialWbTwilightW100';
import IconMaterialCounter7Rounded from '@amaui/icons-material-rounded-react/IconMaterialCounter7W100';
import IconMaterialCalendarMonthRounded from '@amaui/icons-material-rounded-react/IconMaterialCalendarMonthW100';
import IconMaterialDeleteRounded from '@amaui/icons-material-rounded-react/IconMaterialDeleteW100';

import MenuElement from '../Menu';
import CalendarElement from '../Calendar';
import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import ButtonElement from '../Button';
import ListItemElement from '../ListItem';
import PaginationItemElement from '../PaginationItem';
import TimePickerElement from '../TimePicker';
import TypeElement from '../Type';
import { IMenu } from '../Menu/Menu';

import { formats, staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  weekday: {
    cursor: 'pointer'
  },

  dayValue: {
    '&:hover': {
      boxShadow: 'inset 0px 0px 0px 1px currentColor'
    }
  },

  dayValueRepeating: {
    background: theme.palette.background.secondary.quaternary
  },

  calendar: {
    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.04)',

    '& .amaui-Calendar-header': {
      paddingTop: '0px'
    },

    '& .amaui-Calendar-calendars': {
      paddingBottom: '4px'
    }
  },

  calendarShortcuts: {
    padding: '14px 16px 2px'
  },

  end: {
    padding: '0 12px 12px',

    '& .amaui-ListItem-root': {
      minHeight: '24px !important',
      padding: '0 8px',
      borderRadius: theme.methods.shape.radius.value(0.5, 'px')
    }
  },

  minorMenu: {
    '& .amaui-List-root': {
      width: '100%'
    }
  },

  repeatEndMenu: {
    '& .amaui-List-root': {
      width: '100%'
    }
  },

  menuMore: {
    width: '100%',
    padding: '12px',
    borderRadius: theme.methods.shape.radius.value(0.5, 'px'),

    '& .amaui-TextField-input-wrapper': {
      paddingBlock: '12px',
      height: '40px'
    },

    '& .amaui-TextField-icon-end': {
      paddingBlock: '8px'
    }
  },

  item: {
    '& .amaui-ListItem-root': {
      minHeight: '30px !important'
    },

    '&.amaui-Surface-root': {
      background: 'transparent'
    }
  },

  iconInactive: {
    opacity: '0',
    pointerEvents: 'none'
  },

  menuFooter: {
    marginTop: '8px'
  }
}), { name: 'amaui-CalendarMenu' });

export interface ICalendarMenu extends IMenu {
  value?: any;

  onChange?: (...args: any) => any;

  dateProperty?: string;

  menuOpen?: boolean;

  menuOpenDefault?: boolean;

  timeMenuOpen?: boolean;

  timeMenuOpenDefault?: boolean;

  onRemove?: (value: any) => any;

  closeOnChange?: boolean;

  startBottom?: any;

  endBottom?: any;

  noRemove?: boolean;
}

const CalendarMenu: React.FC<ICalendarMenu> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCalendarAvailability?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Calendar = React.useMemo(() => theme?.elements?.Calendar || CalendarElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const PaginationItem = React.useMemo(() => theme?.elements?.PaginationItem || PaginationItemElement, [theme]);

  const TimePicker = React.useMemo(() => theme?.elements?.TimePicker || TimePickerElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    value,

    dateProperty = 'ends_at',

    menuOpen: menuOpen_,

    menuOpenDefault,

    timeMenuOpen: timeMenuOpen_,

    timeMenuOpenDefault,

    onChange: onChange_,

    onRemove: onRemove_,

    closeOnChange = true,

    startBottom,

    endBottom,

    noRemove,

    children,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [menuOpen, setMenuOpen] = React.useState(menuOpenDefault !== undefined ? menuOpenDefault : menuOpen_ !== undefined ? menuOpen_ : false);
  const [timeMenuOpen, setTimeMenuOpen] = React.useState<any>(timeMenuOpenDefault !== undefined ? timeMenuOpenDefault : timeMenuOpen_ !== undefined ? timeMenuOpen_ : false);

  const refs = {
    value: React.useRef(value),
    dateProperty: React.useRef(dateProperty),
    time: React.useRef<HTMLElement>(),
    repeat: React.useRef<HTMLElement>(),
    repeatEnd: React.useRef<HTMLElement>(),
    onChange: React.useRef(onChange_),
    repeatCount: React.useRef<any>({})
  };

  refs.dateProperty.current = dateProperty;

  refs.value.current = value;

  refs.onChange.current = onChange_;

  const onChange = React.useCallback(async (...args: any) => {
    if (is('function', onChange_)) onChange_(...args);
  }, [onChange_]);

  React.useEffect(() => {
    if (menuOpen !== menuOpen_ && menuOpen_ !== undefined) setMenuOpen(menuOpen_);
  }, [menuOpen_]);

  React.useEffect(() => {
    if (timeMenuOpen !== timeMenuOpen_ && timeMenuOpen_ !== undefined) setTimeMenuOpen(timeMenuOpen_);
  }, [timeMenuOpen_]);

  const onMenuOpen = React.useCallback(() => {
    setMenuOpen(true);
  }, []);

  const onMenuClose = React.useCallback(() => {
    setMenuOpen(false);
  }, []);

  const onTimeMenuOpen = React.useCallback(() => {
    setTimeMenuOpen(true);
  }, []);

  const onTimeMenuClose = React.useCallback(() => {
    setTimeMenuOpen(false);
  }, []);

  const onChangeDate = React.useCallback((valueNew: AmauiDate) => {
    if (closeOnChange) onMenuClose();

    onChange(refs.dateProperty.current, valueNew?.milliseconds);
  }, [closeOnChange, onChange]);

  const onChangeTime = React.useCallback((valueNew: AmauiDate) => {
    onTimeMenuClose();

    onChange(refs.dateProperty.current, valueNew?.milliseconds);
  }, [onTimeMenuClose, closeOnChange, onChange]);

  const onRemove = React.useCallback(() => {
    if (is('function', onRemove_)) onRemove_(value);
  }, [value, onRemove_]);

  React.useEffect(() => {
    // reset
    refs.repeatCount.current = {};
  }, [hash(value)]);

  const iconProps: any = {
    size: 'regular'
  };

  const shortcuts = [
    { name: 'Today', onClick: () => onChangeDate(new AmauiDate()), icon: <IconMaterialWbSunnyRounded {...iconProps} /> },
    { name: 'Tomorrow', onClick: () => onChangeDate(add(1, 'day')), icon: <IconMaterialWbTwilightRounded {...iconProps} /> },
    { name: '7 days', onClick: () => onChangeDate(add(7, 'day')), icon: <IconMaterialCounter7Rounded {...iconProps} /> },
    { name: '1 month', onClick: () => onChangeDate(add(1, 'month')), icon: <IconMaterialCalendarMonthRounded {...iconProps} /> }
  ];

  const onClear = React.useCallback((event: MouseEvent) => {
    onChange(refs.dateProperty.current, null);
  }, [onChange]);

  const date = React.useMemo(() => new AmauiDate(value?.[dateProperty] || undefined), [value, dateProperty]);

  const repeats = (day: AmauiDate) => {
    if (!value?.repeat?.active) return;

    let unit = value?.repeat?.unit;
    let valueRepeat = value?.repeat?.value;

    if (unit === 'day') unit = 'days';

    if (unit === 'week') {
      unit = 'days';

      valueRepeat *= 7;
    }

    if (unit === 'month') unit = 'months';

    let difference = diff(day, date, unit);

    let repeating = false;

    if (['day', 'week'].includes(value?.repeat?.unit)) {
      if (
        value?.repeat.unit === 'week' &&
        !!value?.repeat?.weekdays?.length
      ) {
        difference = diff(day, date.dayWeek === 0 ? add(-1, 'week', date) : date, 'weeks');

        if (day.dayWeek === 0) difference -= 1;

        const modulus = difference % value?.repeat?.value;

        repeating = isDate(day, 'after or same', date) && !modulus && value?.repeat.weekdays?.includes(day.dayWeek);
      }
      else {
        const modulus = difference % valueRepeat;

        repeating = isDate(day, 'after or same', date) && !modulus;
      }
    }

    if (['month'].includes(value?.repeat?.unit)) {
      const modulus = difference % valueRepeat;

      const monthDate = add(difference, 'month', date);

      repeating = (monthDate.year === day.year && monthDate.dayYear === day.dayYear) && !modulus;
    }

    if (['year'].includes(value?.repeat?.unit)) {
      const modulus = difference % valueRepeat;

      const yearDate = add(difference, 'year', date);

      repeating = isDate(day, 'after', date) && (yearDate.year === day.year && yearDate.dayYear === day.dayYear) && !modulus;
    }

    if (
      (value?.repeat?.skip_weekends) &&
      [0, 6].includes(day.dayWeek)
    ) repeating = false;

    if (repeating) {
      const formated = format(day, formats.date);

      if (value?.repeat?.ends?.active) {
        // date
        if (value?.repeat.ends.version === 'date') {
          const endsDate = new AmauiDate(value?.repeat.ends.value);

          repeating = repeating && (
            (day.year < endsDate.year) ||
            (
              day.year === endsDate.year &&
              (
                (day.month < endsDate.month) ||
                (
                  day.month === endsDate.month &&
                  day.dayYear <= endsDate.dayYear
                )
              )
            )
          );
        }
      }

      if (repeating) {
        if (!refs.repeatCount.current[value?.id]) refs.repeatCount.current[value?.id] = [];

        if (!refs.repeatCount.current[value?.id].includes(formated)) refs.repeatCount.current[value?.id].push(formated);
      }

      if (value?.repeat?.ends?.active) {
        const indexRepeated = refs.repeatCount.current[value?.id]?.indexOf(formated);

        // count
        if (value?.repeat.ends.version === 'count') repeating = repeating && value?.repeat.ends.value >= ((indexRepeated === -1 ? 0 : indexRepeated) + 1);
      }

      repeating = !value?.repeat.ends?.active || repeating;
    }

    return repeating;
  };

  const onContextMenu = React.useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  const palette = theme.palette.color.primary;

  return (
    <Menu
      open={menuOpen}

      onOpen={onMenuOpen}

      onClose={onMenuClose}

      onContextMenu={onContextMenu}

      name={(
        <Calendar
          tonal

          color='themed'

          calendarDefault={date as any}

          start={(
            <Line
              gap={1}

              direction='row'

              align='center'

              justify='center'

              className={classes.calendarShortcuts}
            >
              {shortcuts.map((item: any, index: number) => (
                <Tooltip
                  key={index}

                  name={item.name}
                >
                  <IconButton
                    onClick={() => {
                      item.onClick();

                      onMenuClose();
                    }}

                    size='small'
                  >
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Line>
          )}

          value={value?.[dateProperty] ? date : null as any}

          onChange={onChangeDate as any}

          onContextMenu={onContextMenu}

          size='small'

          end={(
            <Line
              gap={0.5}

              fullWidth

              className={classes.end}
            >
              {startBottom}

              {/* Time */}
              {value?.[dateProperty] && (
                <Menu
                  open={timeMenuOpen}

                  onOpen={onTimeMenuOpen}

                  onClose={onTimeMenuClose}

                  name={() => (
                    <Line
                      gap={1}

                      align='center'

                      fullWidth
                    >
                      <TimePicker
                        value={date as any}

                        onChange={onChangeTime as any}

                        clear={false}

                        MainProps={{
                          elevation: theme.palette.light ? 8 : 0
                        }}

                        static
                      />
                    </Line>
                  ) as any}

                  className={classNames([
                    classes.timeMenu,
                    'amaui-time'
                  ])}

                  style={{
                    width: refs.time.current?.clientWidth
                  }}
                >
                  <ListItem
                    ref={refs.time}

                    start={(
                      <IconMaterialScheduleRounded
                        {...iconProps}
                      />
                    )}

                    primary={(
                      <Type
                        version='b2'

                        color='inherit'
                      >
                        {format(date, 'HH:mm')}
                      </Type>
                    )}

                    startAlign='center'

                    size='small'

                    button

                    Component='div'

                    className={classes.item}
                  />
                </Menu>
              )}

              {endBottom}

              <Line
                gap={0.4}

                direction='row'

                align='center'

                justify='space-between'

                fullWidth

                className={classes.menuFooter}
              >
                <Button
                  onClick={onClear}

                  version='text'

                  size='small'

                  disabled={!value?.[dateProperty]}
                >
                  Clear
                </Button>

                {!noRemove && (
                  <Tooltip
                    name='Remove'
                  >
                    <IconButton
                      size='small'

                      onClick={onRemove}
                    >
                      <IconMaterialDeleteRounded
                        {...iconProps}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </Line>
            </Line>
          )}

          CalendarMonthProps={{
            renderDay: (dayAmauiDate: AmauiDate, propsDay: any, day: any, outside: boolean) => {
              const repeating = repeats(dayAmauiDate);

              return (
                <PaginationItem
                  tonal

                  color='inherit'

                  size='small'

                  InteractionProps={{
                    background: false
                  }}

                  TypeProps={{
                    version: 'b3',

                    priority: !day.selected ? !day.weekend ? 'primary' : 'secondary' : undefined
                  }}

                  aria-label={format(dayAmauiDate, 'DD-MM-YYYY')}

                  className={classNames([
                    classes.dayValue,
                    repeating && classes.dayValueRepeating
                  ])}

                  style={{
                    ...(day.today ? {
                      boxShadow: `inset 0px 0px 0px 1px ${palette[40]}`
                    } : undefined),

                    ...(day.selected ? {
                      color: theme.methods.palette.color.value(undefined as any, 90, true, palette),
                      backgroundColor: theme.methods.palette.color.value(undefined as any, 40, true, palette)
                    } : undefined)
                  }}

                  {...propsDay}
                >
                  {day.value}
                </PaginationItem>
              );
            },

            noTransition: true
          }}

          className={classNames([
            'amaui-ObjectCalendar-root',
            classes.calendar
          ])}
        />
      )}

      ClickListenerProps={{
        contextMenu: false
      }}

      className={classNames([
        staticClassName('CalendarMenu', theme) && [
          'amaui-CalendarMenu-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Menu>
  );
});

CalendarMenu.displayName = 'amaui-CalendarMenu';

export default CalendarMenu;
