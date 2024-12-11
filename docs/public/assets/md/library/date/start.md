
# onesy date

Utils for managing date.

### Add

```sh
yarn add @onesy/date
```

### Use

```ts
import { OnesyDate, format } from '@onesy/date';

// Make a new OnesyDate instance
// with an optional initial value
const onesyDate = new OnesyDate('2014-04-14T14:04:14.147');

// Value
onesyDate.value;

// a Date instance, Mon Apr 14 2014 14:04:14 GMT+0200 (Central European Summer Time)

// Format
// with various ways to add regular text and variables
format(onesyDate, "MM-DD-YYYY '🙂' HH:mm:ss.SSS");

// '04-14-2014 🙂 14:04:14.147'
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Cookie: Start",
      "to": "/library/cookie/start"
    },
    "next": {
      "label": "Date: add",
      "to": "/library/date/use/add"
    }
  }
}~
