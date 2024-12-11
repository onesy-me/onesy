
# OnesyHeap

### Options

#### variant

`min` or `max` heap, default is `min`.

### Methods

#### Variant min

Min heap.

```ts
const onesyHeap = new OnesyHeap('min').make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### Variant max

Max heap.

```ts
const onesyHeap = new OnesyHeap('max').make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [7, 5, 7, 3, 1, 4, 4]
```

#### array

Returns an array representation of the heap.

```ts
const onesyHeap = new OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### first

Returns priority value in the heap, first value (root node).

```ts
const onesyHeap = new OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.first.value;

// 1
```

#### leafs

Returns all the leafs.

Leafs are nodes with no children.

```ts
const onesyHeap = new OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.leafs.map(item => item.value);

// [4, 5, 7, 7]
```

#### remove

Removes the priority (first) value, and remakes the entire heap tree, and puts new priority value as a root node.

```ts
const onesyHeap = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7]

onesyHeap.remove.value;

onesyHeap.array;

// 1
// [3, 4, 4, 7, 5, 7]
```

#### add

Adds a new value (node) to the heap graph, and it remakes the entire heap starting from root to properly add the new value.

```ts
const onesyHeap = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7]

onesyHeap.add(4);

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7, 4]
```

#### make

Makes a heap graph, from array of values.

```ts
const onesyHeap = new OnesyHeap().make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### forEach

It loops through the entire heap array of values, and for each node returns all the mentioned properties in the `type TMethodForEach`.

```ts
const onesyHeap = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.forEach((value, index, parent, left, right, isPriority, isLeaf, isLeft, isRight) => { });
```

### Util methods

#### min

Min heap.

```ts
const onesyHeap = OnesyHeap.min.make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### max

Max heap.

```ts
const onesyHeap = OnesyHeap.max.make([4, 1, 7, 3, 5, 4, 7]);

onesyHeap.array;

// [7, 5, 7, 3, 1, 4, 4]
```

#### make

##### min

Min heap.

```ts
const onesyHeap = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7], 'min');

onesyHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

##### max

Max heap.

```ts
const onesyHeap = OnesyHeap.make([4, 1, 7, 3, 5, 4, 7], 'max');

onesyHeap.array;

// [7, 5, 7, 3, 1, 4, 4]
```

#### left

Returns the index for a left child of a provided index of a node.

```ts
OnesyHeap.left(1);

// 3
```

#### right

Returns the index for a right child of a provided index of a node.

```ts
OnesyHeap.right(1);

// 4
```

#### parent

Returns the index for a parent node of a provided index of a node.

```ts
OnesyHeap.parent(4);

// 1
```

#### isPriority

Returns true if index is a priority node index.

```ts
OnesyHeap.isPriority(0);

// true
```

#### isLeft

Returns true if index is a left node index.

```ts
OnesyHeap.isLeft(1);

// true
```

#### isRight

Returns true if index is a right node index.

```ts
OnesyHeap.isRight(4);

// true
```

#### isLeaf

Returns true if index is a leaf node index.

```ts
OnesyHeap.isLeaf(4, [1, 2, 3, 4, 5]);

// true
```

### OnesyNode

#### value

Value of the node.

## API

#### IOnesyNode

```ts
interface IOnesyNode {
    value?: any;
    [p: string]: any;
}
```

#### OnesyNode

```ts
class OnesyNode implements IOnesyNode {
    value?: any;
    [p: string]: any;
    constructor(value?: any);
}
```

#### TVariant

```ts
type TVariant = 'min' | 'max';
```

#### TMethodForEach

```ts
type TMethodForEach = (value: OnesyNode, index: number, parent: OnesyNode, left: OnesyNode, right: OnesyNode, isPriority: boolean, isLeaf: boolean, isLeft: boolean, isRight: boolean) => any;
```

#### OnesyHeap

```ts
class OnesyHeap {
    variant: TVariant;
    values: Array<OnesyNode>;
    static get min(): OnesyHeap;
    static get max(): OnesyHeap;
    static make(value: any[], variant?: TVariant): OnesyHeap;
    static left(index: number): number;
    static right(index: number): number;
    static parent(index: number): number;
    static isPriority(index: number): boolean;
    static isLeft(index: number): boolean;
    static isRight(index: number): boolean;
    static isLeaf(index: number, values: Array<any>): boolean;
    constructor(variant?: TVariant);
    get array(): any[];
    get first(): OnesyNode;
    get leafs(): Array<OnesyNode>;
    get remove(): OnesyNode;
    add(value: OnesyNode | any): OnesyHeap;
    swap(index: number, index1: number): OnesyHeap;
    make(value: Array<any>): OnesyHeap;
    forEach(method: TMethodForEach): void;
    heapifyUp(index_?: number): void;
    heapifyDown(index_?: number): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Heap: Start",
      "to": "/library/heap/start"
    },
    "next": {
      "label": "Huffman code: Start",
      "to": "/library/huffman-code/start"
    }
  }
}~
