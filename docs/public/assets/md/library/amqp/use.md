
# OnesyAmqp

### Options

#### uri

AMQP service connection uri.

#### queues

Array of queue names, to assert upon connecting to the service.

#### exchanges

Array of exchanges's name, type values, to assert upon connecting to the service.

### Connection

#### connection

Make a connection.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;
```

#### client

Get a client.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Client
await onesyAmqp.client;
```

#### disconnect

Closes the connection to the service.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

// Disconnect
await onesyAmqp.disconnect;
```

### Queues

Queue management

#### send

Sends a message to the queue. \
All values will by default be stringified, so you can pass into it value of any type.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.send('a', { a: 1114 });
```

#### consume

Subscribe a method to a queue, for incoming messages for it.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.consume('a', async message => {
  ...
});
```

#### subscribe

Alias of the consume method.

#### messageData

Extracts data from the message, and parses it back into its original value type.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.consume('a', async message => {
  const data = onesyAmqp.messageData(message);

  data;

  // { a: 1114 }
});
```

#### ack

Acknowledges the message, meaning, it will be removed, as message is marked as done. \
You have to use it to mark a message as resolved, so it doesn't go back into the queue.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.consume('a', async message => {
  ...

  await onesyAmqp.ack(message);
});
```

#### nack

Not acknowledges the message, meaning, it will be marked as failed, and optionally (by default true) requeued to be consumed all over again.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.consume('a', async message => {
  ...

  await onesyAmqp.nack(message);
});
```

#### cancel

Cancel the consumer for a queue.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

const consumer = await onesyAmqp.consume('a', async message => {
  const data = onesyAmqp.messageData(message);

  data;

  // { a: 1114 }
});

await onesyAmqp.cancel(consumer.consumerTag);
```

#### bindQueue

Used when we want to bind a queue to a certain exchange, and its routing key, in order to receive only messages from that exchange, and that routing key.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

const queue = await onesyAmqp.assertQueue('', { exclusive: true });

// Bind the queue for 'a' exchange, and 'a.*' routing key
await onesyAmqp.bindQueue(queue.queue, 'a', 'a.*');

// Consume
await onesyAmqp.consume(queue.queue, async message => {
  ...
});
```

#### assertQueue

Asserts a queue, based on a queue name. \
Meaning creates a queue if it doesn't already exist.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

// Assert a queue
await onesyAmqp.assertQueue('a');
```

#### assertQueues

Asserts an array of queues that are mentioned in the `options.queues`.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

// Asserts all queues
await onesyAmqp.assertQueues();
```

#### checkQueue

Checks if queue exists, and if not throws error, if yes returns it.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.checkQueue('a');
```

#### get

Returns a queue if it exists.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.get('a');
```

#### removeQueue

Removes a queue if it exists, if it doesn't exist, it throws an error.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.removeQueue('a');
```

### Exchanges

Exchanges management.

#### publish

Publishes a message to an exchange.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

// Publish
await onesyAmqp.publish('a', 'a.a114', { a: 1114 });
```

#### assertExchange

Asserts an exchange, based on an exchange name. \
Meaning creates an exchange if it doesn't already exist.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

// Assert an exchange
await onesyAmqp.assertExchange('a');
```

#### assertExhanges

Asserts an array of exchanges that are mentioned in the `options.exchanges`.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

// Asserts all exchanges
await onesyAmqp.assertExhanges();
```

#### checkExchange

Checks if an exchange exists, and if not throws error, if yes returns it.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.checkExchange('a');
```

#### removeExchange

Removes an exchange if it exists, if it doesn't exist, it throws an error.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

await onesyAmqp.removeExchange('a');
```

### Other

#### reset

Removes all queues, exchanges mentioned in the options, and emits a `reset` subscription event.

```ts
const onesyAmqp = new OnesyAmqp(options);

// Connect
await onesyAmqp.connection;

// Reset
await onesyAmqp.reset();
```

#### subscriptions

Using `@onesy/subscription` library, provides `subscription` property, where you'll receive following events:
- `connected` on connect success.
- `connect:error` on connect error.
- `disconnected` on disconnect success.
- `disconnect:error` on disconnect error.
- `channel` on create channel success.
- `channel:error` on create channel error.
- `reset` on reset success.


## API

#### IExchange

```ts
interface IExchange {
    name: string;
    type: string;
}
```

#### IMessageDataOptions

```ts
interface IMessageDataOptions {
    parse?: boolean;
}
```

#### TSend

```ts
type TSend = amqp.Options.Publish & {
    stringify?: boolean;
};
```

#### IOptions

```ts
interface IOptions {
    uri?: string;
    queues?: Array<string>;
    exchanges?: Array<IExchange>;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### OnesyAmqp

```ts
class OnesyAmqp {
    connection_: amqp.Connection;
    channel_: amqp.Channel;
    connected: boolean;
    private amalog;
    private options_;
    subscription: OnesySubscription;
    queues: Record<string, any>;
    exchanges: Record<string, any>;
    sendOptions: amqp.Options.Publish;
    exchangeOptions: amqp.Options.Publish;
    get options(): IOptions;
    set options(options: IOptions);
    constructor(options?: IOptions);
    get(queue: string, options?: amqp.Options.Get): Promise<amqp.GetMessage | false>;
    ack(message: amqp.Message, allUpTo?: boolean): Promise<void>;
    nack(message: amqp.Message, requeue?: boolean, allUpTo?: boolean): Promise<void>;
    consume(queue: string, method: (msg: amqp.ConsumeMessage) => any, options?: amqp.Options.Consume): Promise<amqp.Replies.Consume>;
    subscribe: (queue: string, method: (msg: amqp.ConsumeMessage) => any, options?: amqp.Options.Consume) => Promise<amqp.Replies.Consume>;
    messageData(message: amqp.ConsumeMessage, options?: IMessageDataOptions): any;
    send(queue: string, data_?: any, options?: TSend): Promise<boolean>;
    publish(exchange: string, routingKey: string, data?: any, options?: amqp.Options.Publish): Promise<boolean>;
    bindQueue(queue: string, exchange: string, routingKey: string): Promise<amqp.Replies.Empty>;
    cancel(consumerTag: string): Promise<amqp.Replies.Empty>;
    get connection(): Promise<amqp.Connection>;
    get channel(): Promise<amqp.Channel>;
    createChannel(): Promise<amqp.Channel>;
    assertQueue(name?: string, options?: amqp.Options.AssertQueue): Promise<amqp.Replies.AssertQueue>;
    assertExchange(exchange: IExchange, options?: amqp.Options.AssertExchange): Promise<amqp.Replies.AssertExchange>;
    assertQueues(): Promise<any>;
    assertExhanges(): Promise<any>;
    checkQueue(name: string): Promise<amqp.Replies.AssertQueue>;
    checkExchange(name: string): Promise<amqp.Replies.Empty>;
    removeQueue(name: string, options?: amqp.Options.DeleteQueue): Promise<amqp.Replies.DeleteQueue>;
    removeExchange(name: string, options?: amqp.Options.DeleteQueue): Promise<amqp.Options.DeleteExchange>;
    get disconnect(): Promise<void>;
    connect(): Promise<amqp.Connection | undefined>;
    reset(): Promise<void>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/library/amqp/start"
    },
    "next": {
      "label": "API: Start",
      "to": "/library/api/start"
    }
  }
}~
