
# is

Asserts the query between OnesyDate values.

### Time units

- millisecond
- milliseconds
- second
- minute
- hour
- day
- dayWeek
- dayYear
- week
- month
- year

### Query

- before
- after
- same
- between
- before or same
- after or same
- leap-year
- leap-month

### Examples

```ts
is(new OnesyDate('2014-04-14T14:04:14.144'), 'before', new OnesyDate('2014-04-14T14:04:14.147'));
is(new OnesyDate('2014-04-14T14:04:14.147'), 'before or same', new OnesyDate('2014-04-14T14:04:14.147'));
is(new OnesyDate('2014-04-14T14:04:14.147'), 'same', new OnesyDate('2014-04-14T14:04:14.147'));
is(new OnesyDate('2014-04-14T14:04:14.147'), 'between', new OnesyDate('2014-04-04T14:04:14.147'), 'day', new OnesyDate('2014-04-10T14:04:14.147'));
is(new OnesyDate('2014-04-14T14:04:14.147'), 'after or same', new OnesyDate('2014-04-14T14:04:14.147'));
is(new OnesyDate('2014-04-14T14:04:14.147'), 'after', new OnesyDate('2014-04-14T14:04:14.144'));
is(new OnesyDate('2020-04-14T14:04:14.147'), 'leap-year');
is(new OnesyDate('2020-02-14T14:04:14.147'), 'leap-month');

// true
// true
// true
// true
// true
// true
// true
// true
```

## API

#### TTimeUnits

```ts
type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'hour' | 'day' | 'dayWeek' | 'dayYear' | 'week' | 'month' | 'year';
```

#### TIsQuery

```ts
type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';
```

#### is

```ts
default function is(value: OnesyDate, query: TIsQuery, value1?: OnesyDate, unit?: TTimeUnits, value2?: OnesyDate): boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: in",
      "to": "/library/date/use/in"
    },
    "next": {
      "label": "Date: max",
      "to": "/library/date/use/max"
    }
  }
}~
