
# onesy queue

Queue data structure.

### Add

```bash
yarn add @onesy/queue
```

### Use cases
- First come, first serve, use cases
- CPU Scheduling
- Memory management
- Website requests handling on the server
- Routers and switches in networking
- etc.

### Use

```ts
import OnesyQueue from '@onesy/queue';

// Make a new queue instance
const onesyQueue = new OnesyQueue();

// Add values
onesyQueue.push(1, 2, 3, 4);

onesyQueue.first;
// 1

onesyQueue.length;
// 4

const value = onesyQueue.pop();

value;
// 1

onesyQueue.first;
// 2

onesyQueue.length;
// 3
```

### Dev

Install

```bash
yarn
```

Test

```bash
yarn test
```

### Prod

Build

```bash
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Node: Start",
      "to": "/library/node/start"
    },
    "next": {
      "label": "Queue: Use",
      "to": "/library/queue/use"
    }
  }
}~
