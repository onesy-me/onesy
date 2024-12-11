
# OnesyHashTable

Each hash represents a table of items, where each item is key, value pair.

When you add items with a key, value, key is hashed, and that key, value item gets added to that hash's array (table).

From there you can query based on a key, that key's hash's table for the item with the same key, to retrive its value.

### Options

#### limit

Limit for the number of entries in the hash table.

### Methods

#### set

Sets the value for a key.

```ts
const onesyHashTable = new OnesyHashTable();

onesyHashTable.set('a', 1114);
```

#### get

Gets the value for a key.

```ts
const onesyHashTable = new OnesyHashTable();

onesyHashTable.set('a', 1114);

onesyHashTable.get('a');

// 1114
```

#### remove

Removes the key, value for a key.

```ts
const onesyHashTable = new OnesyHashTable();

onesyHashTable.set('a', 1114);

onesyHashTable.get('a');

// 1114

onesyHashTable.remove('a');

onesyHashTable.get('a');

// undefined
```

#### clear

Resets the entire onesy hash table to its initial empty value.

```ts
const onesyHashTable = new OnesyHashTable();

onesyHashTable.set('a', 1114);

onesyHashTable.get('a');

// 1114

onesyHashTable.clear();

onesyHashTable.get('a');

onesyHashTable.length;

// undefined
// 0
```

### Other

#### hash

You can override, and make your own hash method.

The default hash method summarizes each character in the property string, where it replaces it with its UTF-16 character code in the number format.

```ts
const onesyHashTable = new OnesyHashTable();

onesyHashTable.set('a', 114).set('a1', 1114);

// indexes with values
[...Object.keys(onesyHashTable.value)];

// ['19', '97']
```

#### length

Length is the number of items in the onesy hash table.

```ts
 const onesyHashTable = new OnesyHashTable();

onesyHashTable.set('a1', 14).set('a14', 1114).set('a114', 1114);

onesyHashTable.length;

// 3
```

## API

#### TOnesyHashTableValue

```ts
type TOnesyHashTableValue = any;
```

#### OnesyHashTable

```ts
default class OnesyHashTable {
    value: Array<[string?, TOnesyHashTableValue?]>;
    length: number;
    limit: number;
    constructor(limit?: number);
    hash(property: string): number;
    get(property: string): TOnesyHashTableValue;
    set(property: string, value: TOnesyHashTableValue): OnesyHashTable;
    remove(property: string): boolean;
    clear(): OnesyHashTable;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Hash table: Start",
      "to": "/library/hash-table/start"
    },
    "next": {
      "label": "Heap: Start",
      "to": "/library/heap/start"
    }
  }
}~
