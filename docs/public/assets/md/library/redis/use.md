
# OnesyRedis

### Options

#### uri

Redis connection uri.

### Connection

#### connection

Make a connection.

```ts
const onesyRedis = new OnesyRedis(options);

// Connect
await onesyRedis.connection;
```

#### client

Get a client.

```ts
const onesyRedis = new OnesyRedis(options);

// Client
await onesyRedis.client;
```

#### disconnect

Closes the connection to the database.

```ts
const onesyRedis = new OnesyRedis(options);

// Connect
await onesyRedis.connection;

// Disconnect
await onesyRedis.disconnect;
``` 

### Methods 

#### set 

Sets a value 

```ts
const onesyRedis = new OnesyRedis(options);

// Connect
await onesyRedis.connection;

const value = await onesyRedis.set('a', 'a14');
```

#### get 

Gets a value 

```ts
const onesyRedis = new OnesyRedis(options);

// Connect
await onesyRedis.connection;

const value = await onesyRedis.get('a'); 

value; 
// a14 
```

#### publish 

Publishes a value to a channel 

```ts
const onesyRedis = new OnesyRedis(options);

// Connect
await onesyRedis.connection;

await onesyRedis.publish('a', { a: 14 });
```

#### subscribe  

Subscribes a method for receiving messages from 1 or more channels 

```ts
const onesyRedis = new OnesyRedis(options);

// Connect
await onesyRedis.connection;

await onesyRedis.subscribe('a', message => {
  console.log('Received a message:', message);
});

await onesyRedis.publish('a', { a: 14 });

// Received a message: { a: 14 }
```

### Other

#### reset

Removes all the redis data, and emits a `reset` subscription event.

```ts
const onesyRedis = new OnesyRedis(options);

// Connect
await onesyRedis.connection;

// Reset
await onesyRedis.reset();
```

#### subscriptions

Using `@onesy/subscription` library, provides `subscription` property, where you'll receive following events:
- `connected` on connect success.
- `connect:error` on connect error.
- `disconnected` on disconnect success.
- `disconnect:error` on disconnect error.
- `reset` on reset success.


## API

#### IMessageDataOptions

```ts
interface IMessageDataOptions {
    parse?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    uri?: string;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### OnesyRedis

```ts
class OnesyAmqp {
    client_: IRedisClient;
    clientSubscriber: IRedisClient;
    connected: boolean;
    private amalog;
    private options_;
    subscription: OnesySubscription<any>;
    get options(): IOptions;
    set options(options: IOptions);
    constructor(options?: IOptions);
    get(key: string, options?: {
        parse: boolean;
    }): Promise<any>;
    set(key: string, value: any): Promise<any>;
    subscribe(channels: string | string[], method: (message: string) => any, bufferMode?: boolean): Promise<void>;
    unsubscribe(channels: string | string[], method: (message: string) => any, bufferMode?: boolean): Promise<void>;
    messageData(message: string, options?: IMessageDataOptions): any;
    publish(channel: string, data?: any, options?: {
        serialize: boolean;
    }): Promise<any>;
    get client(): Promise<IRedisClient>;
    connection: Promise<IRedisClient>;
    get disconnect(): Promise<void>;
    connect(): Promise<IRedisClient | undefined>;
    reset(): Promise<any>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Redis: Start",
      "to": "/library/redis/start"
    },
    "next": {
      "label": "Request: Start",
      "to": "/library/request/start"
    }
  }
}~
