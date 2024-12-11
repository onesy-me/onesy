

## API

#### TCalendarMonthValue

```ts
type TCalendarMonthValue = OnesyDate | [OnesyDate, OnesyDate];
```

#### TCalendarMonthCalendar

```ts
type TCalendarMonthCalendar = OnesyDate;
```

#### ICalendarMonthValuesValue

```ts
interface ICalendarMonthValuesValue {
    day: string;
    month: string;
    year: string;
    inputModal: string;
    input: string;
    selected: OnesyDate;
    date: OnesyDate;
    previous: OnesyDate;
    move: 'previous' | 'next';
}
```

#### TCalendarMonthValues

```ts
type TCalendarMonthValues = [ICalendarMonthValuesValue, ICalendarMonthValuesValue];
```

#### ICalenarDays

```ts
interface ICalenarDays extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    value?: TCalendarMonthValue;
    valueDefault?: TCalendarMonthValue;
    onChange?: (value: TCalendarMonthValue) => any;
    calendar?: TCalendarMonthCalendar;
    calendarDefault?: TCalendarMonthCalendar;
    onChangeCalendar?: (value: TCalendarMonthCalendar) => any;
    now?: boolean;
    outside?: boolean;
    range?: boolean;
    weekStartDay: 'Monday' | 'Sunday';
    noTransition?: boolean;
    offset?: number;
    min?: OnesyDate;
    max?: OnesyDate;
    validate?: (value: OnesyDate) => boolean;
    labels?: boolean;
    valid?: (value: OnesyDate, version: 'day' | 'month' | 'year') => boolean;
    renderDay?: (value: OnesyDate, props: any, today: boolean, weekend: boolean, selected: boolean, outside: boolean) => React.ReactNode;
    TransitionProps?: TPropsAny;
    TransitionsProps?: TPropsAny;
}
```

#### CalendarMonth

```ts
const CalendarMonth: React.ForwardRefExoticComponent<Omit<ICalenarDays, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Calendar",
      "to": "/library/ui-react/use/Calendar"
    },
    "next": {
      "label": "UI react: Card",
      "to": "/library/ui-react/use/Card"
    }
  }
}~
