
# onesy stack

Stack data structure.

### Use cases
- Reversing
- Undo/redo
- Backtracking
- Call stack
- etc.

### Add

```sh
yarn add @onesy/stack
```

### Use

```ts
import OnesyStack from '@onesy/stack';

// Make a new stack instance
const onesyStack = new OnesyStack();

// Add values
onesyStack.push(1, 2, 3, 4);

onesyStack.first;
// 4

onesyStack.length;
// 4

const value = onesyStack.pop();

value;
// 4

onesyStack.first;
// 3

onesyStack.length;
// 3
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
      "label": "Request: Start",
      "to": "/library/request/start"
    },
    "next": {
      "label": "Stack: Use",
      "to": "/library/stack/use"
    }
  }
}~
