
# OnesyMeta

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

You can key, value referenced to an object, or object's property. \
Property doesn't have to exist in that object, but can be anything, property, method name, etc.

```ts
const object = {};

OnesyMeta.add('a', 114, object);
OnesyMeta.add('a', 1114, object, 'p');

OnesyMeta.get('a', object);
OnesyMeta.get('a', object, 'p');

// 114
// 1114
```

#### Update

Updates key's value referenced to an object, or object's property.

```ts
const object = {};

OnesyMeta.add('a', 114, object);
OnesyMeta.add('a', 1114, object, 'p');

OnesyMeta.update('a', 1114, object);
OnesyMeta.update('a', 11114, object, 'p');

OnesyMeta.get('a', object);
OnesyMeta.get('a', object, 'p');

// 1114
// 11114
```

#### Get

Returns a value referenced to an object, or object's property.

```ts
const object = {};

OnesyMeta.add('a', 11, object);
OnesyMeta.add('a', 114, object, 'p');

OnesyMeta.get('a', object);
OnesyMeta.get('a', object, 'p');

// 11
// 114
```

#### Has

Returns true if there's a key, value referenced to an object, or object's property.

```ts
const object = {};

OnesyMeta.add('a', 11, object);
OnesyMeta.add('a', 114, object, 'p');

OnesyMeta.has('a', object);
OnesyMeta.has('a', object, 'p');

// true
// true
```

#### Remove

Removes key, value referenced to an object, or object's property.

```ts
const object = {};

OnesyMeta.add('a', 11, object);
OnesyMeta.add('a', 114, object, 'p');

OnesyMeta.remove('a', object);
OnesyMeta.remove('a', object, 'p');

OnesyMeta.has('a', object);
OnesyMeta.has('a', object, 'p');

// undefined
// undefined
```

#### Values

Returns all values referenced to an object, or object's property.

```ts
const object = {};

OnesyMeta.add('a', 11, object);
OnesyMeta.add('a1', 14, object);

OnesyMeta.add('a14', 114, object, 'p');
OnesyMeta.add('a114', 1114, object, 'p');

OnesyMeta.values(object);
OnesyMeta.values(object, 'p');

// [11, 14]
// [114, 1114]
```

#### Keys

Returns all keys referenced to an object, or object's property.

```ts
const object = {};

OnesyMeta.add('a', 11, object);
OnesyMeta.add('a1', 14, object);

OnesyMeta.add('a14', 114, object, 'p');
OnesyMeta.add('a114', 1114, object, 'p');

OnesyMeta.keys(object);
OnesyMeta.keys(object, 'p');

// ['a', 'a1']
// ['a14', 'a114']
```

#### Reset

Resets the entire meta value, to its empty value.

```ts
const object = {};

OnesyMeta.add('a', 11, object);
OnesyMeta.add('a', 114, object, 'p');

OnesyMeta.reset();

OnesyMeta.get('a', object);
OnesyMeta.get('a', object, 'p');

// undefined
// undefined
```

### Decorators

Typescript decorators for classes, class's methods, properties & parameters.

#### class

```ts
@OnesyMeta.class(
  'a',
  1114
)
class A { }

OnesyMeta.get('a', A);

// 1114
```

#### method

```ts
class A {

  @OnesyMeta.method(
    'a',
    1114
  )
  public m() {

  }
}

OnesyMeta.get('a', A, 'm');

// 1114
```

#### property

```ts
class A {

  @OnesyMeta.property(
    'a',
    1114
  )
  public p = 'a';

}

OnesyMeta.get('a', A, 'p');

// 1114
```

#### parameter

```ts
class A {

  public m(
    @OnesyMeta.parameter(
      1114
    )
    p = 'a'
  ) { }

}

OnesyMeta.get('onesy-meta-param:0', A, 'm');

// 1114
```

## API

#### IOptionsValue

```ts
interface IOptionsValue {
    // default: false
    copy?: boolean;
}
```

#### IOptionsAdd

```ts
interface IOptionsAdd {
    // default: true
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

#### OnesyMeta

```ts
class OnesyMeta {
    static meta: WeakMap<object, any>;
    private static options_;
    static get options(): IOptions;
    static set options(value: IOptions);
    static class(...args: any[]): ClassDecorator;
    static method(...args: any[]): MethodDecorator;
    static property(...args: any[]): PropertyDecorator;
    static parameter(...args: any[]): ParameterDecorator;
    static add(key: any, value: any, object: any, property?: any): void;
    static update(key: any, value: any, object: any, property?: any): void;
    static values(object: any, property?: any): Array<any> | undefined;
    static keys(object: any, property?: any): Array<any> | undefined;
    static get(key: any, object: any, property?: any): any | undefined;
    static has(key: any, object: any, property?: any): boolean;
    static remove(key: any, object: any, property?: any): void;
    static reset(): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Meta: Start",
      "to": "/library/meta/start"
    },
    "next": {
      "label": "Models: Start",
      "to": "/library/models/start"
    }
  }
}~
