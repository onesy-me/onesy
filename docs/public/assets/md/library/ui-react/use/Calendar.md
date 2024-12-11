

## API

#### TGetOnesyDates

```ts
type TGetOnesyDates = (value: TCalendarMonthValue, calendar: TCalendarMonthCalendar, props: TPropsAny) => Array<{
    value: OnesyDate;
}>;
```

#### TCalendarUnit

```ts
type TCalendarUnit = 'day' | 'month' | 'year';
```

#### ICalendar

```ts
interface ICalendar extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    version?: 'regular' | 'year';
    value?: TCalendarMonthValue;
    valueDefault?: TCalendarMonthValue;
    onChange?: (value: TCalendarMonthValue) => any;
    calendar?: TCalendarMonthCalendar;
    calendarDefault?: TCalendarMonthCalendar;
    onChangeCalendar?: (value: TCalendarMonthCalendar) => any;
    menu?: 'month-year' | 'month';
    now?: boolean;
    range?: boolean;
    calendars?: number;
    min?: OnesyDate;
    max?: OnesyDate;
    validate?: (value: OnesyDate) => boolean;
    menu_month_previous_unit?: TCalendarUnit;
    menu_month_next_unit?: TCalendarUnit;
    valid?: (value: OnesyDate, version: TCalendarUnit) => boolean;
    geMonths?: TGetOnesyDates;
    geYears?: TGetOnesyDates;
    belowCalendars?: any;
    IconPrevious?: TElementReference;
    IconNext?: TElementReference;
    IconDropDown?: TElementReference;
    CalendarMonthProps?: any;
    CalendarDayProps?: ICalenarDays;
    OptionButtonProps: any;
}
```

#### Calendar

```ts
const Calendar: React.ForwardRefExoticComponent<Omit<ICalendar, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Buttons",
      "to": "/library/ui-react/use/Buttons"
    },
    "next": {
      "label": "UI react: CalendarMonth",
      "to": "/library/ui-react/use/CalendarMonth"
    }
  }
}~
