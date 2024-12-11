

## API

#### TDateTimePicker

```ts
type TDateTimePicker = OnesyDate;
```

#### IDateTimePicker

```ts
interface IDateTimePicker extends Omit<IAdvancedTextField, 'version'> {
    tonal?: TTonal;
    color?: TColor;
    version?: 'auto' | 'mobile' | 'desktop';
    value?: TCalendarMonthValue;
    valueDefault?: TCalendarMonthValue;
    onChange?: (value: TCalendarMonthValue) => any;
    now?: boolean;
    range?: boolean;
    static?: boolean;
    valid?: (value: OnesyDate, version: TCalendarUnit | TClockUnit) => boolean;
    validate?: (value: OnesyDate) => boolean;
    min?: OnesyDate;
    max?: OnesyDate;
    headingText?: string;
    headingTextTime?: string;
    headingTextTimeRange?: string;
    headingTextDate?: string;
    headingTextDateRange?: string;
    useHelperText?: boolean | Record<TValueBreakpoints, boolean>;
    format?: '12' | '24';
    hour?: boolean;
    minute?: boolean;
    second?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    disabled?: boolean;
    onClose?: (event: React.MouseEvent<any>) => any;
    onCancel?: (event: React.MouseEvent<any>) => any;
    onToday?: (event: React.MouseEvent<any>) => any;
    onOk?: (event: React.MouseEvent<any>) => any;
    Icon?: TElementReference;
    IconDate?: TElementReference;
    IconTime?: TElementReference;
    ModalProps?: TPropsAny;
    TooltipProps?: TPropsAny;
    AdvancedTextFieldProps?: TPropsAny;
    DatePickerProps?: TPropsAny;
    TimePickerProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    ButtonProps?: TPropsAny;
    PickerProps?: TPropsAny;
    MiddleProps?: TPropsAny;
    MainProps?: TPropsAny;
}
```

#### DateTimePicker

```ts
const DateTimePicker: React.ForwardRefExoticComponent<Omit<IDateTimePicker, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: DateRangePicker",
      "to": "/library/ui-react/use/DateRangePicker"
    },
    "next": {
      "label": "UI react: DateTimeRangePicker",
      "to": "/library/ui-react/use/DateTimeRangePicker"
    }
  }
}~
