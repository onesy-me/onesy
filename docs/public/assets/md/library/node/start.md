
# onesy node

Nodejs util methods.

### Add

```sh
yarn add @onesy/node
```

### Use

```ts
import path from 'path';

import OnesyNode from '@onesy/node';

// A file add
await OnesyNode.file.add(path.resolve('a.json'), 'a');

// A file read
await OnesyNode.file.get(path.resolve('a.json'));

// A file remove
await OnesyNode.file.remove(path.resolve('a.json'));
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
      "label": "Mongo: Start",
      "to": "/library/mongo/start"
    },
    "next": {
      "label": "Node: Use",
      "to": "/library/node/use"
    }
  }
}~
