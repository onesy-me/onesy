
# onesy cookie

Cookie storage management utils.

### Add

```sh
yarn add @onesy/cookie
```

### Use

```ts
import OnesyCookie from '@onesy/cookie';

const onesyCookie = new OnesyCookie();

// Add
onesyCookie.add('a', 4);

// Has
onesyCookie.has('a');

// true

// Get
onesyCookie.get('a');

// 4

// Remove
onesyCookie.remove('a');

onesyCookie.get('a');

// undefined
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
      "label": "Cache: Start",
      "to": "/library/cache/start"
    },
    "next": {
      "label": "Cookie: Use",
      "to": "/library/cookie/use"
    }
  }
}~
