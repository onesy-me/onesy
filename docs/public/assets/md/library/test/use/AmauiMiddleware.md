
# OnesyMiddleware

Use to run a method priror or post running of specific methods. \
Types of middleware methods, and order in which they run is explained in the OnesyGroup page.

## API

#### IOnesyMiddleware

```ts
interface IOnesyMiddleware {
    name: string;
    method: TMethod;
    parent: OnesyGroup;
    file?: string;
    responses?: Array<IOnesyResponse>;
}
```

#### OnesyMiddleware

```ts
class OnesyMiddleware implements IOnesyMiddleware {
    name: string;
    method: TMethod;
    parent: OnesyGroup;
    file?: string;
    responses: Array<IOnesyResponse>;
    constructor(name: string, method: TMethod);
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: OnesyGroup",
      "to": "/library/test/use/OnesyGroup"
    },
    "next": {
      "label": "Test: OnesyTest",
      "to": "/library/test/use/OnesyTest"
    }
  }
}~
