
# OnesyCache

All methods are static methods.

### Options

#### value

##### copy

If true, copy of the value will be saved as a value, default value is false.

#### add

##### override

If true, even if key exists already during add method, it will override the existing key, value with the new value, default value is true.

### Methods

#### Add

You can add a value, based on a key, where key can be any value or even list of arguments.

```ts
const args = [4, { a: 4, ab: 4 }];

OnesyCache.add(1114, ...args);

OnesyCache.get(...args);

// 1114
```

#### Update

Updates key's value.

```ts
const args = [4, { a: 4, ab: 4 }];

OnesyCache.add(114, ...args);

OnesyCache.get(...args);

OnesyCache.update(1114, ...args);

OnesyCache.get(...args);

// 114
// 1114
```

#### Get

Returns a value from a key.

```ts
const args = [4, { a: 4, ab: 4 }];

OnesyCache.add(1114, ...args);

OnesyCache.get(...args);

// 1114
```

#### Has

Returns true if there's a key.

```ts
const args = [4, { a: 4, ab: 4 }];

OnesyCache.add(1114, ...args);

OnesyCache.has(...args);

// true
```

#### Remove

Removes a key.

```ts
const args = [4, { a: 4, ab: 4 }];

OnesyCache.add(1114, ...args);

OnesyCache.remove(...args);

OnesyCache.get(...args);

// undefined
```

#### Reset

Resets the entire cache value, to its empty value.

```ts
const args = [4, { a: 4, ab: 4 }];

OnesyCache.add(1114, ...args);

OnesyCache.reset();

OnesyCache.get(...args);

// undefined
```

## API

#### ICacheItem

```ts
interface ICacheItem {
    value: any;
    added_at?: number;
    updated_at?: number;
}
```

#### IOptionsValue

```ts
interface IOptionsValue {
    copy?: boolean;
}
```

#### IOptionsAdd

```ts
interface IOptionsAdd {
    override?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    value?: IOptionsValue;
    add?: IOptionsAdd;
}
```

#### OnesyCache

```ts
class OnesyCache {
    static caches: Record<string, ICacheItem>;
    private static options_;
    static get options(): IOptions;
    static set options(value: IOptions);
    static add(value: any, ...args: any[]): void;
    static update(value: any, ...args: any[]): any | undefined;
    static get(...args: any[]): undefined | any;
    static has(...args: any[]): boolean;
    static remove(...args: any[]): void;
    static reset(): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Cache: Start",
      "to": "/library/cache/start"
    },
    "next": {
      "label": "Cookie: Start",
      "to": "/library/cookie/start"
    }
  }
}~
