
# In

Returns how long until date is from now, in a nicely formated string (optional, default true).

You can provide both to, and from date.

```ts
const onesyDate = new OnesyDate(new Date().getTime() + (44 * 1000));

In(onesyDate);

// 44 seconds
```

### withPrefix

```ts
const onesyDate = new OnesyDate(new Date().getTime() + (44 * 1000));

In(onesyDate);

// in 44 seconds
```

## API

#### In

```ts
default function In(to?: OnesyDate, withPrefix?: boolean, from?: OnesyDate): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: getTimezoneOffset",
      "to": "/library/date/use/getTimezoneOffset"
    },
    "next": {
      "label": "Date: is",
      "to": "/library/date/use/is"
    }
  }
}~
