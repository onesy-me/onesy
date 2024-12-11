
# diff

Difference between 2 OnesyDates in a provided time unit.

```ts
OnesyDate.diff(new OnesyDate('2014-04-14T14:04:14.147'), new OnesyDate('04/13/2014 14:04:14'), 'day');

// 1
```

### Units

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

## API

#### diff

```ts
default function diff(value: OnesyDate, value1: OnesyDate, unit?: TTimeUnits): number;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: OnesyDate",
      "to": "/library/date/use/OnesyDate"
    },
    "next": {
      "label": "Date: duration",
      "to": "/library/date/use/duration"
    }
  }
}~
