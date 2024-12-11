
# onesy errors

Useful error versions for various use cases, and more useful properties added to each error instance.

### Add

```sh
yarn add @onesy/errors
```

### Use

```ts
import { OnesyError } from '@onesy/errors';
import OnesyLog from '@onesy/log';

const onesyError = new OnesyError('a');

onesyError.name;
onesyError.message;
onesyError.added_at;
onesyError.stack;

// OnesyError
// 'a'
// 1643893234
// 'OnesyError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)'

OnesyLog.error(onesyError);

// Output

  // 04-04-2014 04:04:14.141 (error):

  // a

  // OnesyError: a
  //    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)
  //    at t.default.evaluate (<anonymous>:3:2412)
  //    at t.default.<anonymous> (<anonymous>:1:44)

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
      "label": "Diff: Start",
      "to": "/library/diff/start"
    },
    "next": {
      "label": "Errors: Use",
      "to": "/library/errors/use"
    }
  }
}~
