
# max

Returns max OnesyDate from array of OnesyDates.

```ts
format(max([
  new OnesyDate('2014-04-14T14:04:14'),
  new OnesyDate('2014-04-17T14:04:14'),
  new OnesyDate('2014-04-14T14:40:14'),
  new OnesyDate('2014-04-14T14:41:14')
]));

// '2014-04-17T14:04:14'
```

## API

#### max

```ts
default function max(values?: Array<OnesyDate>): OnesyDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: is",
      "to": "/library/date/use/is"
    },
    "next": {
      "label": "Date: min",
      "to": "/library/date/use/min"
    }
  }
}~
