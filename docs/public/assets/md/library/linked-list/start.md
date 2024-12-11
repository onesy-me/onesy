
# onesy linked list

Linked list data type & its methods.

### Use cases
- Implementation of stacks
- Efficient removal of elements
- Reduced memory fragmentation
- etc.

### Add

```sh
yarn add @onesy/linked-list
```

### Use

```ts
import OnesyLinkedList from '@onesy/linked-list';

// Make a new linked list instance
const onesyLinkedList = new OnesyLinkedList();

// Add values
onesyLinkedList.add(1).add(4);

onesyLinkedList.first;
// 1

onesyLinkedList.last;
// 4

const value = onesyLinkedList.search(4);
// OnesyNode { value: 4, ... }

onesyLinkedList.remove(1);

onesyLinkedList.first;
// 4

onesyLinkedList.length;
// 1
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
      "label": "Huffman Code: Start",
      "to": "/library/huffman-code/start"
    },
    "next": {
      "label": "Linked List: Use",
      "to": "/library/linked-list/use"
    }
  }
}~
