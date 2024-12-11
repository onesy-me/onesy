
# add

Adds time unit to the OnesyDate value.

```ts
const onesyDate = new OnesyDate();

add(14, 'day', onesyDate);
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

#### add

```ts
default function add(value: number, unit: TTimeUnits, onesyDate_?: OnesyDate): OnesyDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: Start",
      "to": "/library/date/start"
    },
    "next": {
      "label": "Date: ago",
      "to": "/library/date/use/ago"
    }
  }
}~
