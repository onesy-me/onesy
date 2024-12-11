
# onesy amqp

Utils for easier using of the amqplib, ie. rabbitmq, queue messaging service.

### Add

```bash
yarn add @onesy/amqp
```

<br />
Add `amqplib` peer dependency.

```bash
yarn add amqplib
```

### Use

```ts
import OnesyAmqp from '@onesy/amqp';
// Make if you wanna a config file and
// inside of it add all the process.env related props
import Config from './config';

// Make a new amqp instance
const onesyAmqp = new OnesyAmqp({
  uri: Config.amqp.rabbitmq.uri,
  queues: Config.amqp.rabbitmq.queues,
  exchanges: Config.amqp.rabbitmq.exchanges,
});

// Await for a connection
await onesyAmqp.connection;

// Subscribe to a queue
await onesyAmqp.subscribe('a', async message => {
  ...
});

// Send to a queue
await onesyAmqp.send('a', { a: 1114 });

// Check a queue
await onesyAmqp.checkQueue();

// { queue: 'a', messageCount: 1, etc. }
```

### Dev

#### One time local setup

Install docker and docker-compose

- https://docs.docker.com/get-docker
- https://docs.docker.com/compose/install

Make docker containers

```bash
yarn docker
```

Install

```bash
yarn
```

Test

```bash
yarn test
```

### Prod

Build

```bash
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Algorithms: Start",
      "to": "/library/algorithms/start"
    },
    "next": {
      "label": "AMQP: Use",
      "to": "/library/amqp/use"
    }
  }
}~
