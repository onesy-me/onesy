
# OnesyRequest

### Options

All of the options for request, response.

You can override each of these options per request.

#### request

##### withCredentials

If true, it will include `csrf` property, value to the headers.

##### headers

Default headers for all the requests.

##### zip

###### onesy

If to use `@onesy/zip` library to zip request data.

- zip: If to zip.
- unzip: If to unzip.
- only_positive: If only to zip positive compression results.

##### csrf

###### cookie

CSRF cookie property name.

###### headers

Property name for the CSRF for adding it to headers.

##### agents

###### http

Custom HTTP agent for the back end.

###### https

Custom HTTPS agent for the back end.

##### timeout

Request timeout value, default `0`.

#### response

##### pure

If you want a pure response, instead of the packaged object with meta information.

##### resolveOnError

If request should resolve on error response, instead of rejecting.

##### type

What response type do you want.

Browser `'arraybuffer' | 'blob' | 'document' | 'json' | 'text'`, and for node additionally `'buffer'`.

##### parse

###### json

If to parse the JSON responses.

### defaults

You can add overrides for the `OnesyRequest` per method in that instance, for all the same properties as above.

Methods `request`, `get`, `post`, `put`, `patch`, `delete`, `head`, `options`.

```ts
OnesyRequest.defaults.get.request = { ... };
OnesyRequest.defaults.get.response = { ... };
```

### Order of priority for options

From top to bottom, highest to lowest priority for overriding options values.
- Request options
- `OnesyRequest` instance options.
- `OnesyRequest` defaults method options.

### cancel

Returns an instance of `@onesy/subscription` with a cancel method, which you can pass into a method as options, and on invoking it, it will cancel that request instance.

```ts
const subscriptionCancel = OnesyRequest.cancel;

const onesyRequest = new OnesyRequest();

onesyRequest.get('url', { cancel: subscriptionCancel });

subscriptionCancel.cancel();

// Request is aborted, returns an error
```

### interceptors

Interceptors are very usefull if you want to ie. add an authentication token to every request your `OnesyRequest` instance will make, but on the fly, without presetting it in the options, since the token might change after initial creation of `OnesyRequest` instance.

#### request

#### pre

Emits the request options value that you can update as a reference value type, before the request is sent.

```ts
const onesyRequest = new OnesyRequest();

onesyRequest.interceptors.request.pre.subscribe(value => {
  // Adds an Authorization token to every request on the fly
  value.request.headers['Authorization'] = `Bearer ...`;
});
```

#### post

Emits the request response value that you can update as a reference value type, after the request receives a response, before returning it from the method.

```ts
const onesyRequest = new OnesyRequest();

onesyRequest.interceptors.request.post.subscribe(value => {
  ...
});
```

#### response

##### success

It will emit a response value for every request's success response.

##### error

It will emit a response value for every request's error response.

##### fail

It will emit a response value for every request's fail response.

### interceptors static

Same as interceptors on `OnesyRequest` instance, only they emit values for all `OnesyRequest` instances.

```ts
OnesyRequest.interceptors.request.pre.subscribe(value => {
  // Adds an Authorization token to every request on the fly
  value.request.headers['Authorization'] = `Bearer ...`;
});
```

### onesyRequest

Returns an `OnesyRequest` instance with default options.

```ts
OnesyRequest.onesyRequest;

// OnesyRequest { }
```

### reset

Resets the static defaults to their default options.

```ts
OnesyRequest.reset();
```

### OnesyRequestResponse

Model in which all responses will be in for all the methods.

```ts
OnesyRequestResponse {
  // Response value
  response;
  // Status code
  status;
  // Response headers
  headers;
  // Request instance
  request;
  // Request options
  options;
}
```

### Methods

Methods for making the requests.

#### request

Request method for making any HTTP method request in the same method.

Methods `'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH'`.

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.request({
  method: 'POST',
  url: ...,
  body: ...
});
```

#### get

Request method for making GET HTTP method request.

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.get(url);
```

#### post

Request method for making GET HTTP method request.

Body can be `Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any`;

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post(url, body);
```

#### put

Request method for making PUT HTTP method request.

Body can be `Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any`;

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.put(url, body);
```

#### patch

Request method for making PATCH HTTP method request.

Body can be `Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any`;

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.patch(url, body);
```

#### head

Request method for making HEAD HTTP method request.

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.head(url);
```

#### options

Request method for making OPTIONS HTTP method request.

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.options(url);
```

#### delete

Request method for making DELETE HTTP method request.

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.delete(url);
```

### Methods static

They all do the same as the `OnesyRequest` instance methods, only they create an `OnesyRequest` instance with default options per each method call.

#### request

```ts
await OnesyRequest.request(...);
```

#### get

```ts
await OnesyRequest.get(...);
```

#### post

```ts
await OnesyRequest.post(...);
```

#### put

```ts
await OnesyRequest.put(...);
```

#### delete

```ts
await OnesyRequest.delete(...);
```

#### head

```ts
await OnesyRequest.head(...);
```

#### options

```ts
await OnesyRequest.options(...);
```

#### patch

```ts
await OnesyRequest.patch(...);
```

### Examples

#### json

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post('url', { a: 114 });
```

#### application/x-www-form-urlencoded

```ts
const onesyRequest = new OnesyRequest();

const form = new URLSearchParams();

form.append('a', 4);
form.append('ad', 'a4');

await onesyRequest.post('url', form.toString(), {
  request: {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
});
```

#### multipart/form-data

```ts
const onesyRequest = new OnesyRequest();

const file = await OnesyNode.file.get(filePath, false);

const form = new FormData();

form.append('a', 4);
form.append('ad', 'a4');
form.append('file', file);

await onesyRequest.post('api', form.getBuffer(), {
  request: {
    headers: {
      ...form.getHeaders()
    }
  }
});
```

#### binary

##### blob

```ts
const onesyRequest = new OnesyRequest();

const input = window.document.getElementById('a') as HTMLInputElement;
const file = input.files[0];

await onesyRequest.post('url', file, {
  request: {
    headers: {
      'content-type': 'application/octet-stream'
    }
  }
});
```

##### uint8array

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post('url', new Uint8Array([97]), {
  request: {
    headers: {
      'content-type': 'text/plain'
    }
  }
});
```

##### buffer

```ts
const onesyRequest = new OnesyRequest();

const file = await OnesyNode.file.get(filePath, false);

await onesyRequest.post('url', file, {
  request: {
    headers: {
      'content-type': 'application/octet-stream'
    }
  }
});
```

#### raw

In browser use `new TextEncoder().encode('')` to get the `Uint8Array` bytes value.

In nodejs use `Buffer.from('')` to get the bytes value.

##### text/plain

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post('url', Buffer.from('a'), {
  request: {
    headers: {
      'content-type': 'text/plain'
    }
  }
});
```

##### text/html

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post('url', Buffer.from('<a>a</a>'), {
  request: {
    headers: {
      'content-type': 'text/html'
    }
  }
});
```

##### application/javascript

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post('url', Buffer.from('const a = 4;'), {
  request: {
    headers: {
      'content-type': 'application/javascript'
    }
  }
});
```

##### application/json

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post('url', {
  a: 4,
  ad: 'a4'
});
```

##### application/xml

```ts
const onesyRequest = new OnesyRequest();

await onesyRequest.post('url', Buffer.from('<a>a</a>'), {
  request: {
    headers: {
      'content-type': 'application/xml'
    }
  }
});
```

### Other

#### content-type

Default `'content-type'` headers for `post`, `put` & `patch` methods options is `application/json`.

#### browser

In the browser `XMLHttpRequest` is used to make the requests.

#### nodejs

In nodejs `https` or `http` module is used to make the requests.

## API

#### TMethodType

```ts
type TMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH';
```

#### TResponseType

```ts
type TResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
```

#### TResponseTypeNode

```ts
type TResponseTypeNode = 'buffer' | 'json' | 'text';
```

#### TBody

```ts
type TBody = Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any;
```

#### TXhrEvent

```ts
type TXhrEvent = ProgressEvent<EventTarget>;
```

#### IInterceptorsSetRequest

```ts
interface IInterceptorsSetRequest {
    pre: OnesySubscription;
    post: OnesySubscription;
}
```

#### IInterceptorsSetResponse

```ts
interface IInterceptorsSetResponse {
    success: OnesySubscription;
    error: OnesySubscription;
    fail: OnesySubscription;
}
```

#### IInterceptorsSet

```ts
interface IInterceptorsSet {
    request: IInterceptorsSetRequest;
    response: IInterceptorsSetResponse;
}
```

#### IOptionsRequest

```ts
interface IOptionsRequest extends IOptions {
    url?: string;
    method?: TMethodType;
    body?: TBody;
    cancel?: OnesySubscription;
}
```

#### IOnesyRequestResponse

```ts
interface IOnesyRequestResponse {
    response: any;
    status: number;
    headers: object;
    request: XMLHttpRequest | http.ClientRequest;
    options: IOptionsRequest;
}
```

#### OnesyRequestResponse

```ts
class OnesyRequestResponse implements IOnesyRequestResponse {
    response: any;
    status: number;
    headers: object;
    request: XMLHttpRequest | http.ClientRequest;
    options: IOptionsRequest;
    constructor(response: any, status: number, headers: object, request: XMLHttpRequest | http.ClientRequest, options: IOptionsRequest);
}
```

#### IOptionsZipOnesy

```ts
interface IOptionsZipOnesy {
    zip?: boolean;
    unzip?: boolean;
    only_positive?: boolean;
}
```

#### IOptionsZip

```ts
interface IOptionsZip {
    onesy?: IOptionsZipOnesy;
}
```

#### IOptionsCsrf

```ts
interface IOptionsCsrf {
    cookie?: string;
    headers?: string;
}
```

#### IOptionsAgents

```ts
interface IOptionsAgents {
    http?: http.Agent;
    https?: https.Agent;
}
```

#### IOptionsRequest

```ts
interface IOptionsRequest {
    url?: string;
    withCredentials?: boolean;
    headers?: Record<string, string | number>;
    zip?: IOptionsZip;
    csrf?: IOptionsCsrf;
    agents?: IOptionsAgents;
    timeout?: number;
}
```

#### IOptionsResponseParse

```ts
interface IOptionsResponseParse {
    json?: boolean;
}
```

#### IOptionsResponse

```ts
interface IOptionsResponse {
    pure?: boolean;
    resolveOnError?: boolean;
    type?: TResponseType | TResponseTypeNode;
    parse?: IOptionsResponseParse;
}
```

#### IOptions

```ts
interface IOptions {
    request?: IOptionsRequest;
    response?: IOptionsResponse;
}
```

#### TOnesyRequestDefaults

```ts
type TOnesyRequestDefaults = Record<string, IOptions>;
```

#### OnesyRequestDefaults

```ts
const OnesyRequestDefaults: TOnesyRequestDefaults;
```

#### IOnesyRequestOnesySub

```ts
interface IOnesyRequestOnesySub extends OnesySubscription {
    cancel?(): void;
}
```

#### OnesyRequest

```ts
class OnesyRequest {
    private options_;
    interceptors: IInterceptorsSet;
    static interceptors: IInterceptorsSet;
    static defaults: TOnesyRequestDefaults;
    static get cancel(): IOnesyRequestOnesySub;
    static get onesyrequest(): OnesyRequest;
    static request(...args: [IOptionsRequest]): Promise<IOnesyRequestResponse>;
    static get(...args: [string, IOptionsRequest?]): Promise<IOnesyRequestResponse>;
    static post(...args: [string, TBody, IOptionsRequest?]): Promise<IOnesyRequestResponse>;
    static put(...args: [string, TBody, IOptionsRequest?]): Promise<IOnesyRequestResponse>;
    static delete(...args: [string, IOptionsRequest?]): Promise<IOnesyRequestResponse>;
    static head(...args: [string, IOptionsRequest?]): Promise<IOnesyRequestResponse>;
    static options(...args: [string, IOptionsRequest?]): Promise<IOnesyRequestResponse>;
    static patch(...args: [string, TBody, IOptionsRequest?]): Promise<IOnesyRequestResponse>;
    static reset(): void;
    constructor(options?: IOptions);
    request(options: IOptionsRequest): Promise<IOnesyRequestResponse>;
    get(url: string, options?: IOptionsRequest): Promise<IOnesyRequestResponse>;
    post(url: string, body: TBody, options?: IOptionsRequest): Promise<IOnesyRequestResponse>;
    put(url: string, body: TBody, options?: IOptionsRequest): Promise<IOnesyRequestResponse>;
    patch(url: string, body: TBody, options?: IOptionsRequest): Promise<IOnesyRequestResponse>;
    head(url: string, options?: IOptionsRequest): Promise<IOnesyRequestResponse>;
    options(url: string, options?: IOptionsRequest): Promise<IOnesyRequestResponse>;
    delete(url: string, options?: IOptionsRequest): Promise<IOnesyRequestResponse>;
    private onPre;
    private onPost;
    private onSuccess;
    private onError;
    private onFail;
    private parseHeaders;
    private xhr;
    private https;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Request: Start",
      "to": "/library/request/start"
    },
    "next": {
      "label": "Stack: Start",
      "to": "/library/stack/start"
    }
  }
}~
