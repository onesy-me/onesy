
# endOf

End of provided time unit, from a provided OnesyDate.

```ts
const onesyDate = new OnesyDate('2014-04-14T14:04:14.147');

const value = endOf(onesyDate, 'day');

format(value);

// '2014-04-14T23:59:59'
```

### Units

- second
- minute
- hour
- day
- month
- year

## API

#### endOf

```ts
default function endOf(onesyDate_?: OnesyDate, unit?: TTimeUnits): OnesyDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: duration",
      "to": "/library/date/use/duration"
    },
    "next": {
      "label": "Date: format",
      "to": "/library/date/use/format"
    }
  }
}~
