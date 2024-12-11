
# OnesyStorage

### Options

#### Variant

If `local` localStorage, if `session` sessionStorage.

#### namespace

Namespace value under which all keys will be prefixed prior to adding to, and reading from the storage.

#### namespace_separator

Separator between namespace, and key name.

```ts
// separator: -
// namespace-key: value
```

### Methods

#### add

Adds new key, value into the storage.

Value is stringified, prior to writing into the storage, so you can pass any reference value as well.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.add('todo-1', { id: 1114 });

// onesy_todo-1: '{ "id": 1114 }'
```

#### update

Alias for the add method, as it basically does the same thing, updating is just overwriting the existing key's value.

#### get

Gets a value from the storage, based on a key.

Value is automatically parsed back into its value type, while reading from the storage, prior to returning.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.get('todo-1');

// { id: 1114 }
```

#### items

Returns an object with all the storage items, with a prefix for the instance.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.add('todo-1', { id: 1114 });

onesyStorage.items;

// {
//   'todo-1': { id: 1114 }
// }
```

#### properties

Returns all the properties from the storage, prefixed with a prefix for the instance.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.add('todo-1', { id: 1114 });

onesyStorage.properties;

// ['todo-1']
```

#### values

Returns all the values from the storage, with a key prefixed with a prefix for the instance.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.add('todo-1', { id: 1114 });

onesyStorage.values;

// [{ id: 1114 }]
```

#### has

Check is the storage has any value under this key.

Prefix is added on the key, as it's the same prefix added while writing the value to the storage.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.add('todo-1', { id: 1114 });

onesyStorage.has('todo-1');

// true
```

#### remove

Removes a value from the storage, based on a key.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.add('todo-1', { id: 1114 });

onesyStorage.remove('todo-1');
```

#### clear static method

Clears the entire storage.

```ts
OnesyStorage.clear();
```

#### clear instance getter method

Removes all prefixed key items from the storage, other than ones mentioned in `removeNotAllowed` internal array variable.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.add('todo-1', { id: 1114 });

// onesy_todo-1: '{ "id": 1114 }'

onesyStorage.clear;

// All onesy_[name] key items are removed from the storage.
```

### Other

#### namespace

Returns the namespace for in the instance.

```ts
const onesyStorage = new OnesyStorage({ namespace: 'a' });

onesyStorage.namespace;

// a_
```

#### removeNotAllowed

Instance of this class has `removeNotAllowed`, which is an array of string values, defining any key that will not be removed, on calling clear method.

```ts
const onesyStorage = new OnesyStorage();

onesyStorage.removeNotAllowed = ['a'];

onesyStorage.clear;

// onesy_a: 4 is still there
// but other onesy_[name] properties are removed from the storage.
```

## API

#### TVariant

```ts
type TVariant = 'local' | 'session';
```

#### IOptions

```ts
interface IOptions {
    variant?: TVariant;
    storage?: Storage;
    namespace?: string;
    namespace_separator?: string;
}
```

#### OnesyStorage

```ts
class OnesyStorage {
    options: IOptions;
    storage: Storage;
    removeNotAllowed: string[];
    constructor(options?: IOptions);
    init(): void;
    static clear(variant: TVariant): void;
    get namespace(): string;
    get properties(): Array<string>;
    get values(): Array<string>;
    get items(): Record<string, any>;
    get clear(): void;
    get(name: string): any;
    has(name: string): boolean;
    add(name: string, value: any): void;
    update(...args: [string, any]): void;
    remove(name: string): void;
    private property;
    private propertyOriginal;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Storage: Start",
      "to": "/library/storage/start"
    },
    "next": {
      "label": "Style: Start",
      "to": "/library/style/start"
    }
  }
}~
