
# onesy storage

Local, session storage management utils.

### Add

```sh
yarn add @onesy/storage
```

### Use

```ts
import OnesyStorage from '@onesy/storage';

const onesyStorage = new OnesyStorage();

const value = { a: 4 };

// Add
onesyStorage.add('a', value);

// Get
onesyStorage.get('a');

// { a: 4 }

// Remove
onesyStorage.remove('a');

onesyStorage.get('a');

// null
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
      "label": "Stack: Start",
      "to": "/library/stack/start"
    },
    "next": {
      "label": "Storage: Use",
      "to": "/library/storage/use"
    }
  }
}~
