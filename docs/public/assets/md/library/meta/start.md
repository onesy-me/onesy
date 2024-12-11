
# onesy meta

Add & query meta data related to various reference type values objects, classes, method, etc.

### Add

```sh
yarn add @onesy/meta
```

### Use

```ts
import OnesyMeta from '@onesy/meta';

const object = {};

OnesyMeta.add('a', 'a', object);
OnesyMeta.add('a', 'a4', object, 'p');

OnesyMeta.get('a', object);
OnesyMeta.get('a', object, 'p');

// Output
// 'a'
// 'a4'
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
      "label": "LZ77: Start",
      "to": "/library/lz77/start"
    },
    "next": {
      "label": "Meta: Use",
      "to": "/library/meta/use"
    }
  }
}~
