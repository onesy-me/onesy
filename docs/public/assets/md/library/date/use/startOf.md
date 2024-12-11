
# startOf

Start of provided time unit, from a provided OnesyDate.

```ts
const onesyDate = new OnesyDate('2014-04-14T14:04:14.147');

const value = startOf(onesyDate, 'day');

format(value);

// '2014-04-14T00:00:00'
```

### Units

- second
- minute
- hour
- day
- month
- year

## API

#### startOf

```ts
default function startOf(onesyDate_?: OnesyDate, unit?: TTimeUnits): OnesyDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: set",
      "to": "/library/date/use/set"
    },
    "next": {
      "label": "Date: timezones",
      "to": "/library/date/use/timezones"
    }
  }
}~
