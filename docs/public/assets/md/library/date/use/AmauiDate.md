
# OnesyDate

### Value

Value can be any of the following, any value that's a valid argument for the `Date` class:

- Date string
- Milliseconds as a number
- OnesyDate instance
- Date instance

### Properties

#### Value

Value as a Date value.

```ts
const onesyDate = new OnesyDate();

onesyDate.value;

// Date { }
```

#### Millisecond

Millisecond value.

```ts
const onesyDate = new OnesyDate();

onesyDate.millisecond;

// 114
```

#### Milliseconds

Milliseconds value.

```ts
const onesyDate = new OnesyDate();

onesyDate.milliseconds;

// 1685217383990
```

#### Second

Second value.

```ts
const onesyDate = new OnesyDate();

onesyDate.second;

// 14
```

#### Minute

Minute value.

```ts
const onesyDate = new OnesyDate();

onesyDate.minute;

// 41
```

#### Hour

Hour value.

```ts
const onesyDate = new OnesyDate();

onesyDate.hour;

// 14
```

#### Day

Day value.

```ts
const onesyDate = new OnesyDate();

onesyDate.day;

// 27
```

#### Day week

Day in the week value.

```ts
const onesyDate = new OnesyDate();

onesyDate.dayWeek;

// 4
```

#### Day year

Day in the year value.

```ts
const onesyDate = new OnesyDate();

onesyDate.dayYear;

// 147
```

#### Week

Week value.

```ts
const onesyDate = new OnesyDate();

onesyDate.week;

// 24
```

#### Month

Month value.

```ts
const onesyDate = new OnesyDate();

onesyDate.month;

// 4
```

#### Year

Year value.

```ts
const onesyDate = new OnesyDate();

onesyDate.year;

// 2024
```

### Methods

#### unix

Returns unix date value.

```ts
const onesyDate = new OnesyDate();

onesyDate.unix;

// 1685217383
```

#### utc

All time unit values will be in utc.

```ts
const onesyDate = new OnesyDate();

onesyDate.hour;

// 14

onesyDate.utc().hour;

// 13
```

#### iso

Returns iso date value.

```ts
const onesyDate = new OnesyDate();

onesyDate.unix;

// '2023-05-27T19:56:23.990Z'
```

#### local

All time unit values will be in the local timezone value.

```ts
const onesyDate = new OnesyDate();

onesyDate.local().hour;

// 14
```

#### valid

Returns if the value is valid Date.

```ts
const onesyDate = new OnesyDate();

onesyDate.valid;

// true
```

#### Value of

Returns value in milliseconds.

```ts
const onesyDate = new OnesyDate();

onesyDate.valueOf;

// 1685217383990
```

#### Days in month

Returns days in the value's month.

```ts
const onesyDate = new OnesyDate();

onesyDate.daysInMonth;

// 31
```

#### Weeks in year

Returns weeks in the value's year.

```ts
const onesyDate = new OnesyDate();

onesyDate.weeksInYear;

// 52
```

#### Months

Returns month names of the year.

```ts
const onesyDate = new OnesyDate();

onesyDate.months;

// ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
```

#### Months abbreviated

Returns month abbreviated names of the year.

```ts
const onesyDate = new OnesyDate();

onesyDate.monthsAbr;

// ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
```

#### Days week

Returns day names of the week.

```ts
const onesyDate = new OnesyDate();

onesyDate.daysWeek;

// ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

#### Days week abbreviated

Returns day abbreviated names of the week.

```ts
const onesyDate = new OnesyDate();

onesyDate.daysWeekAbr;

// ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
```

#### Timezone

Returns new OnesyDate with the value localized to that timezone.

```ts
const onesyDate = new OnesyDate();

onesyDate.hour;

// 14

onesyDate.timezone('UTC').hour;

// 13
```

### Methods static

#### unix

```ts
OnesyDate.unix;

// 1685219927
```

#### milliseconds

```ts
OnesyDate.milliseconds;

// 1685219933011
```

#### iso

```ts
OnesyDate.iso;

// '2023-05-27T20:38:58.490Z'
```

#### daysInMonth

```ts
OnesyDate.daysInMonth;

// 31
```

#### valueOf

```ts
OnesyDate.unix;

// 1685219933011
```

#### local

```ts
OnesyDate.local;

// OnesyDate { }
```

#### onesyDate

```ts
OnesyDate.onesyDate;

// OnesyDate { }
```

## API

#### IOptionsOverrides

```ts
interface IOptionsOverrides {
    months?: string[];
    monthsAbr?: string[];
    daysWeek?: string[];
    daysWeekAbr?: string[];
}
```

#### IOptions

```ts
interface IOptions {
    utc?: boolean;
    overrides?: IOptionsOverrides;
}
```

#### TTimeUnits

```ts
type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'hour' | 'day' | 'dayWeek' | 'dayYear' | 'week' | 'month' | 'year';
```

#### TIsQuery

```ts
type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';
```

#### units

```ts
const units: string[];
```

#### months

```ts
const months: string[];
```

#### monthsAbr

```ts
const monthsAbr: string[];
```

#### daysWeek

```ts
const daysWeek: string[];
```

#### daysWeekAbr

```ts
const daysWeekAbr: string[];
```

#### OnesyDate

```ts
default class OnesyDate {
    value_: string | number | OnesyDate | Date;
    options: IOptions;
    value: Date;
    millisecond: number;
    milliseconds: number;
    second: number;
    minute: number;
    hour: number;
    day: number;
    dayWeek: number;
    dayYear: number;
    week: number;
    month: number;
    year: number;
    static get utc(): OnesyDate;
    static get daysInMonth(): number;
    static get valueOf(): number;
    static get unix(): number;
    static get milliseconds(): number;
    static get iso(): string;
    static get onesyDate(): OnesyDate;
    static get local(): OnesyDate;
    constructor(value_?: string | number | OnesyDate | Date, options?: IOptions);
    private init;
    weekValue(): number;
    get months(): string[];
    get monthsAbr(): string[];
    get daysWeek(): string[];
    get daysWeekAbr(): string[];
    get valid(): boolean;
    get local(): OnesyDate;
    get utc(): OnesyDate;
    get iso(): string;
    get daysInMonth(): number;
    get weeksInYear(): number;
    get valueOf(): number;
    get unix(): number;
    timezone(value: string): OnesyDate;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: ago",
      "to": "/library/date/use/ago"
    },
    "next": {
      "label": "Date: diff",
      "to": "/library/date/use/diff"
    }
  }
}~
