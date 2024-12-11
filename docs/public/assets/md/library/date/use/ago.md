
# ago

Returns how long ago date was from now, in a nicely formated string (optional, default true).

```ts
const onesyDate = new OnesyDate(new Date().getTime() - (44 * 1000));

ago(onesyDate);

// 44 seconds ago
```

## API

#### ago

```ts
default function ago(onesyDate?: OnesyDate, withSufix?: boolean): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: add",
      "to": "/library/date/use/add"
    },
    "next": {
      "label": "Date: OnesyDate",
      "to": "/library/date/use/OnesyDate"
    }
  }
}~
