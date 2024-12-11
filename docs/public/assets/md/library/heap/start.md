
# onesy heap

Heap value type & its methods.

### Add

```sh
yarn add @onesy/heap
```

### Use cases
- Priority queues
- Schedulers
- etc.

### Use

```ts
import { OnesyHeap } from '@onesy/heap';

// Make a new heap instance
// with an optional initial value a variant (min or max)
// a min heap as a default value
const onesyMinHeap = new OnesyHeap();

// Add a onesy node / value
onesyMinHeap.add(4);

// You can also make a heap from array of values
onesyMinHeap.make([4, 44, 54, 14, 31, 37, 24]);

// values
       4
      /  \
     /    \
   14     24
  / \     / \
44   31  37  54

// Remove priority min (first) value
onesyMinHeap.remove();

// 4

// values
        14
       /  \
      /    \
    31     24
   / \     /
 44   54  37
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
      "label": "Hash Table: Start",
      "to": "/library/hash-table/start"
    },
    "next": {
      "label": "Heap: Use",
      "to": "/library/heap/use"
    }
  }
}~
