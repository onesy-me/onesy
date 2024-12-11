
# request

Accepts express application as the first argument, and starts the app on an available port in the system (may be different every time), and return an object with request method, which then you can pass any arguments to like described in the API below. \

Uses `@onesy/request` library to make requests to the passed app in the localhost.

### Example

It makes a request with request method, and asserts the response in the response method, with equalDeep operator.

```ts
const instance = await request(app);

await instance
  .get('/query')
  .response({
    response: [
      'a'
    ],
    pagination: {
      total: 4,
      next: 'a',
      previous: 'a1'
    },
    meta: {
      status: 201
    }
  });
```

## API

#### IOptions

```ts
interface IOptions {
    keepOpen?: boolean;
}
```

#### IOnesyTestRequestStatusOperator

```ts
type IOnesyTestRequestStatusOperator = 'eq' | 'equal' | 'lt' | 'less-than' | 'lte' | 'less-than-equal' | 'gt' | 'greater-than' | 'gte' | 'greater-than-equal';
```

#### IOnesyTestRequestResponse

```ts
interface IOnesyTestRequestResponse {
    value?: IOnesyRequestResponse;
    response?: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    meta?: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    pagination?: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    property?: (property: string, value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    options?: (value: string, value1: any, options?: IAssertOptions) => IAssertObject;
    request?: (value: string, value1: any, options?: IAssertOptions) => IAssertObject;
    headers?: (value: string, value1: any, options?: IAssertOptions) => IAssertObject;
    status?: (value: Array<number> | number, operator?: IOnesyTestRequestStatusOperator, options?: IAssertOptions) => IAssertObject;
}
```

#### IOnesyTestRequest

```ts
interface IOnesyTestRequest {
    request: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
    get: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
    post: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
    put: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
    delete: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
    head: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
    options: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
    patch: (url: string, options?: IOptionsRequest) => Promise<IOnesyTestRequestResponse>;
}
```

#### request

```ts
function request(app?: express.Application | http.Server | https.Server | string, options_?: IOptions): Promise<IOnesyTestRequest>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: cli",
      "to": "/library/test/use/cli"
    },
    "next": {
      "label": "Utils: Start",
      "to": "/library/utils/start"
    }
  }
}~
