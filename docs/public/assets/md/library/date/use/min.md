
# min

Returns min OnesyDate from array of OnesyDates.

```ts
format(min([
  new OnesyDate('2014-04-14T14:04:14'),
  new OnesyDate('2014-04-17T14:04:14'),
  new OnesyDate('2014-04-14T14:40:14'),
  new OnesyDate('2014-04-14T14:41:14')
]));

// '2014-04-14T14:04:14'
```

## API

#### min

```ts
default function min(values?: Array<OnesyDate>): OnesyDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: max",
      "to": "/library/date/use/max"
    },
    "next": {
      "label": "Date: my",
      "to": "/library/date/use/my"
    }
  }
}~
