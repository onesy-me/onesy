
# OnesyError

Main Error class is OnesyError that extends Error, and adds onto it.

```ts
const onesyError = new OnesyError('a');

onesyError.name;
onesyError.message;
onesyError.added_at;
onesyError.stack;

// OnesyError
// 'a'
// 1643893234
// 'OnesyError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)'
```

### All error version

Each has a specific error class, and error name.

Useful for example in the express API in the error middleware to check error name, and based on it send a specific response status code, ie:

- 'ValidationError' 400
- 'AuthenticationError' 401
- 'PermissionError' 403
- etc.

#### OnesyError

```ts
new OnesyError();
```

#### OnesyTestError

```ts
new OnesyTestError();
```

#### AssertError

```ts
new AssertError();
```

#### AuthenticationError

```ts
new AuthenticationError();
```

#### AuthorizationError

```ts
new AuthorizationError();
```

#### ValidationError

```ts
new ValidationError();
```

#### NotFoundError

```ts
new NotFoundError();
```

#### PermissionError

```ts
new PermissionError();
```

#### OnesyAmqpError

```ts
new OnesyAmqpError();
```

#### OnesyAwsError

```ts
new OnesyAwsError();
```

#### OnesyMongoError

```ts
new OnesyMongoError();
```

#### ConnectionError

```ts
new ConnectionError();
```

#### DeveloperError

```ts
new DeveloperError();
```

### Custom errors

You can make your own custom error by extending the main `OnesyError`.

```ts
class MyError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, MyError, ...args);

    this.name = 'MyError';
  }

}
```

## API

#### IClass

```ts
interface IClass {
    new (...args: any[]): any;
    [p: string]: any;
}
```

#### IOnesyError

```ts
interface IOnesyError {
    message: string;
    name: string;
    stack: string;
    added_at: number;
    [p: string]: any;
}
```

#### TOnesyErrorValue

```ts
type TOnesyErrorValue = Error | string;
```

#### OnesyError

```ts
class OnesyError extends Error implements IOnesyError {
    added_at: number;
    stack: string;
    [p: string]: any;
    constructor(value?: TOnesyErrorValue, Constructor?: IClass, options?: any);
}
```

#### OnesyTestError

```ts
class OnesyTestError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### AssertError

```ts
class AssertError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### AuthenticationError

```ts
class AuthenticationError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### AuthorizationError

```ts
class AuthorizationError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### ValidationError

```ts
class ValidationError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### NotFoundError

```ts
class NotFoundError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### PermissionError

```ts
class PermissionError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### OnesyAmqpError

```ts
class OnesyAmqpError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### OnesyAwsError

```ts
class OnesyAwsError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### OnesyMongoError

```ts
class OnesyMongoError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### ConnectionError

```ts
class ConnectionError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```

#### DeveloperError

```ts
class DeveloperError extends OnesyError {
    constructor(value?: TOnesyErrorValue, ...args: any[]);
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Errors: Start",
      "to": "/library/errors/start"
    },
    "next": {
      "label": "Graph: Start",
      "to": "/library/graph/start"
    }
  }
}~
