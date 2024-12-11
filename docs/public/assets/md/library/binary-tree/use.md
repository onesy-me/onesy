
# OnesyBinaryTree

### OnesyNode

#### Properties

- value `number`
- left `OnesyNode`
- right `OnesyNode`

### Methods

#### Make

Creates an OnesyBinaryTree from an array.

```ts
new OnesyBinaryTree().make([4, 1, 7, 3, 5, 4, 7]);
```

#### Array

Returns the binary tree in form of an array of values.

You can use the first argument for different order type:
- preorder (default)
- inorder
- postorder

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

onesyBinaryTree.array();

// [4, 1, 3, 7, 5]
```

#### Add

Adds a node.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

onesyBinaryTree.add(4);
onesyBinaryTree.add(14);
onesyBinaryTree.add(new OnesyNode(40));

onesyBinaryTree.array();

// [4, 1, 3, 7, 5, 14, 40]
```

#### Find

Finds a node.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

onesyBinaryTree.find(4);

// {
//     value: 4,
//     left: {
//         value: 1,
//         left: undefined,
//         right: {
//             value: 3
//         }
//     },
//     right: {
//         value: 7,
//         left: {
//             value: 5
//         },
//         right: undefined
//     }
// }
```

#### Remove

Removes a node.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

onesyBinaryTree.remove(1);
onesyBinaryTree.remove(5);

onesyBinaryTree.array();

// [4, 3, 7]
```

#### Remove node

Remove a value from any node. \
Unlike remove method that removes the value it finds within the root node of the entire onesy binary tree.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

onesyBinaryTree.removeNode(onesyBinaryTree.root, 3);
onesyBinaryTree.removeNode(onesyBinaryTree.root, 7);
onesyBinaryTree.removeNode(onesyBinaryTree.root, 5);

onesyBinaryTree.array();

// [4, 1]
```

### Util methods

#### make

Makes an Onesy Binary Tree from an array of values.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);
```

#### lowestCommonAncestor

Finds a lowest common ancestor for two values, for any node.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

OnesyBinaryTree.lowestCommonAncestor(1, 7, onesyBinaryTree.root);

// {
//     value: 4,
//     left: {
//         value: 1,
//         left: undefined,
//         right: {
//             value: 3
//         }
//     },
//     right: {
//         value: 7,
//         left: {
//             value: 5
//         },
//         right: undefined
//     }
// }
```

#### maxDepth

Returns max depth for a provided node.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

OnesyBinaryTree.maxDepth(onesyBinaryTree.root);

// 3
```

#### valid

Returns true if the binary tree is valid.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

OnesyBinaryTree.valid(onesyBinaryTree);

// true
```

#### preorder

Loops through all the OnesyNode values from a provided node, in preorder.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

const values = [];

OnesyBinaryTree.preorder(onesyBinaryTree.root, item => values.push(item.value));

values;

// [4, 1, 3, 7, 5]
```

#### inorder

Loops through all the OnesyNode values from a provided node, in inorder.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

const values = [];

OnesyBinaryTree.inorder(onesyBinaryTree.root, item => values.push(item.value));

values;

// [1, 3, 4, 5, 7]
```

#### postorder

Loops through all the OnesyNode values from a provided node, in postorder.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

const values = [];

OnesyBinaryTree.postorder(onesyBinaryTree.root, item => values.push(item.value));

values;

// [3, 1, 5, 7, 4]
```

#### min

Returns min OnesyNode for a provided node.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

OnesyBinaryTree.min(onesyBinaryTree.root);

// {
//     value: 1,
//     left: undefined,
//     right: {
//         value: 3
//     }
// }
```

#### max

Returns max OnesyNode for a provided node.

```ts
const onesyBinaryTree = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

OnesyBinaryTree.max(onesyBinaryTree.root);

// {
//     value: 7,
//     left: {
//         value: 5
//     },
//     right: undefined
// }
```

## API

#### TArrayVariant

```ts
type TArrayVariant = 'inorder' | 'preorder' | 'postorder';
```

#### IOnesyNode

```ts
interface IOnesyNode {
    value: any;
    left?: OnesyNode;
    right?: OnesyNode;
    [p: string]: any;
}
```

#### OnesyNode

```ts
class OnesyNode implements IOnesyNode {
    value: any;
    left?: OnesyNode;
    right?: OnesyNode;
    [p: string]: any;
    constructor(value: any, left?: OnesyNode, right?: OnesyNode);
}
```

#### IOnesyBinaryTree

```ts
interface IOnesyBinaryTree {
    root?: OnesyNode;
}
```

#### OnesyBinaryTree

```ts
class OnesyBinaryTree implements IOnesyBinaryTree {
    root: OnesyNode;
    static make(value: any[]): OnesyBinaryTree;
    static lowestCommonAncestor(value: OnesyNode | any, value1: OnesyNode | any, root: OnesyNode): OnesyNode | undefined;
    static maxDepth(onesyNode: OnesyNode): number;
    static valid(value: OnesyBinaryTree): boolean;
    static preorder(value: OnesyNode, method: TMethod): void;
    static inorder(value: OnesyNode, method: TMethod): void;
    static postorder(value: OnesyNode, method: TMethod): void;
    static min(value: OnesyNode): OnesyNode;
    static max(value: OnesyNode): OnesyNode;
    array(variant?: TArrayVariant): Array<any>;
    make(value: any[]): OnesyBinaryTree;
    add(value: OnesyNode | any): OnesyBinaryTree;
    find(value: any): OnesyNode | undefined;
    remove(value: any): void;
    removeNode(onesyNode: OnesyNode, value: any): OnesyNode | undefined;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Binary tree: Start",
      "to": "/library/binary-tree/start"
    },
    "next": {
      "label": "Cache: Start",
      "to": "/library/cache/start"
    }
  }
}~
