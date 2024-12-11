
# onesy hash table

Hash table data type & its methods.

### Use cases
- Indexing data
- Caching
- Storage for data, for efficient quering
- Storing relationships between data
- etc.

### Add

```sh
yarn add @onesy/hash-table
```

### Use

```ts
import OnesyHashTable from '@onesy/hash-table';

// Make a new hash table instance
const onesyHashTable = new OnesyHashTable();

// Add values
onesyHashTable.set('a', 14).set('a1', 114);

onesyHashTable.get('a');
// 14

onesyHashTable.get('a14');
// undefined

// Remove
onesyHashTable.remove('a');
// true

onesyHashTable.get('a');
// undefined
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
      "label": "Graph: Start",
      "to": "/library/graph/start"
    },
    "next": {
      "label": "Hash Table: Use",
      "to": "/library/hash-table/use"
    }
  }
}~
