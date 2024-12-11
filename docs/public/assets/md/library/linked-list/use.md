
# OnesyLinkedList

### Options

#### main

First OnesyNode in the list.

### Methods

#### Add

Adds an item to the list, by adding it to the last item's next value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114);

onesyLinkedList.array;

// [114]
```

#### Add at start

Adds an item to the start of the list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114);

onesyLinkedList.addAtStart(1114);

onesyLinkedList.array;

// [1114, 114]
```

#### Add at end

Alias for add, as they both add the value to the last item in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114);

onesyLinkedList.addAtEnd(1114);

onesyLinkedList.array;

// [114, 1114]
```

#### Add after

Adds a value after an OnesyNode on the provided index.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(14).add(114);

onesyLinkedList.addAfter(1114, 0);

onesyLinkedList.array;

//  [14, 1114, 114]
```

#### Add before

Adds a value before an OnesyNode on the provided index.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(14).add(114);

onesyLinkedList.addBefore(1114, 1);

onesyLinkedList.array;

//  [14, 1114, 114]
```

#### Update

Updates an item based on its value, with a new provided value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.array;

// [114, 1114]

onesyLinkedList.update(114, 1114);

onesyLinkedList.array;

// [1114, 1114]
```

#### Update at index

Updates an item based on its index, with a new provided value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.array;

// [114, 1114]

onesyLinkedList.updateAtIndex(1114, 0);

onesyLinkedList.array;

// [1114, 1114]
```

#### Remove

Removes the first item it finds whose value equals the provided value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.remove(1114);

onesyLinkedList.array;

// [114]
```

#### Remove first

Removes the first item in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.removeFirst();

onesyLinkedList.array;

// [1114]
```

#### Remove last

Removes the last item in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.removeLast();

onesyLinkedList.array;

// [114]
```

#### Remove at index

Removes the item at specified index in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.removeAtIndex(1);

onesyLinkedList.array;

// [114]
```

#### Find

Finds an OnesyNode at a provided index.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.find(1).value;

// 1114
```

#### Find value

Finds the first OnesyNode whose value equals the provided value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.findValue(114).value;

// 114
```

#### Search

Alias for the `findValue` method.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.search(114).value;

// 114
```

#### Index of

Returns the index of the first OnesyNode whose value equals the provided value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.indexOf(1114);

// 1
```

#### Includes

True if linked list includes at least one OnesyNode whose value equals the provided value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.includes(1114);

// true
```

#### array

Returns array of values as a representation of the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(14).add(114).add(1114);

onesyLinkedList.array;

// [14, 114, 1114]
```

#### map

Makes an array using `array` method and calls map method on it, with a provided method as the first argument.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(14).add(114).add(1114);

onesyLinkedList.map(item => item + 3);

// [17, 117, 1117]
```

#### forEach

Makes an array using `array` method and calls forEach method on it, with a provided method as the first argument.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(14).add(114).add(1114);

onesyLinkedList.forEach(item => console.log(item));

// 14
// 114
// 1114
```

#### clear

Resets the entire linked list into its initial empty value.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(14).add(114).add(1114);

onesyLinkedList.clear();

onesyLinkedList.array;

// []
```

### Properties

#### length

Number of items in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114);

onesyLinkedList.length;

// 1
```

#### empty

True if there are no items in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.empty;

// true
```

#### first

First item in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.first.value;

// 114
```

#### last

Last item in the linked list.

```ts
const onesyLinkedList = new OnesyLinkedList();

onesyLinkedList.add(114).add(1114);

onesyLinkedList.last.value;

// 1114
```

### OnesyNode

#### Value

Any value.

#### Next

OnesyNode.

#### Previous

OnesyNode.

## API

#### IOnesyLinkedListNode

```ts
interface IOnesyLinkedListNode {
    value: any;
    previous?: IOnesyLinkedListNode;
    next?: IOnesyLinkedListNode;
}
```

#### OnesyNode

```ts
class OnesyNode {
    value: any;
    next?: IOnesyLinkedListNode;
    previous?: IOnesyLinkedListNode;
    constructor(value: any, next?: IOnesyLinkedListNode, previous?: IOnesyLinkedListNode);
}
```

#### OnesyLinkedList

```ts
default class OnesyLinkedList {
    main?: IOnesyLinkedListNode;
    length: number;
    constructor(main?: IOnesyLinkedListNode);
    get empty(): boolean;
    get first(): IOnesyLinkedListNode;
    get last(): IOnesyLinkedListNode;
    get array(): Array<any>;
    map(method: TMethod): Array<any>;
    forEach(method: TMethod): void;
    add(value: any): OnesyLinkedList;
    addAtStart(value: any): OnesyLinkedList;
    addAtEnd: (value: any) => OnesyLinkedList;
    addAfter(value: any, index: number): OnesyLinkedList;
    addBefore(value: any, index: number): OnesyLinkedList;
    update(previousValue: any, value: any): OnesyLinkedList;
    updateAtIndex(value: any, index: number): OnesyLinkedList;
    remove(value: any): OnesyLinkedList;
    removeFirst(): OnesyLinkedList;
    removeLast(): OnesyLinkedList;
    removeAtIndex(value: number): OnesyLinkedList;
    find(value: number): OnesyNode;
    findValue(value: any): OnesyNode;
    search: (value: any) => OnesyNode;
    indexOf(value: any): number;
    includes(value: any): boolean;
    clear(): OnesyLinkedList;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Linked list: Start",
      "to": "/library/linked list/start"
    },
    "next": {
      "label": "Linked list: Start",
      "to": "/library/linked list/start"
    }
  }
}~
