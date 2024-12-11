
# OnesyTo

Method to run an individual test. \

First argument is name of the test, and second argument is the method that runs the actual test.

Method can be either of 3:
- Synchronous, regular method.
- Async method, which returns or throws an error. Useful when you have to await for methods.
- Synchronous method, with 2 arguments, resolve, reject, same as in promise resolve makes test successfully, and reject errors the test. Useful when you have nested async code, instead of awaited methods.

```ts
to('Regular method', () => {
  ...
});

to('Async method', async () => {
  ...
});

to('Synchronous method with resolve, reject', (resolve, reject) => {
  ...
});
```

## API

#### IOnesyTo

```ts
interface IOnesyTo {
    name: string;
    method: TMethod;
    parent: OnesyGroup;
    level: number;
    file?: string;
    index: number;
    mainIndex: number;
    response?: IOnesyResponse;
}
```

#### OnesyTo

```ts
class OnesyTo implements IOnesyTo {
    name: string;
    method: TMethod;
    parent: OnesyGroup;
    index: number;
    mainIndex: number;
    level: number;
    file?: string;
    response: IOnesyResponse;
    constructor(name: string, method: TMethod);
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: OnesyTest",
      "to": "/library/test/use/OnesyTest"
    },
    "next": {
      "label": "Test: assert",
      "to": "/library/test/use/assert"
    }
  }
}~
