
# onesy redis

Utils for easier using of the redis, memory database.

### Add

```bash
yarn add @onesy/redis
```

<br />
Add `redis` peer dependency.

```bash
yarn add redis
```

### Use

```ts
import OnesyRedis from '@onesy/redis';
// Make if you wanna a config file and
// inside of it add all the process.env related props
import Config from './config';

// Make a new redis instance
const onesyRedis = new OnesyRedis({
  uri: Config.redis.uri
});

// Await for a connection
await onesyRedis.connection;

// Send to a queue
await onesyRedis.publish('a', 'a'); 
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
      "label": "Queue: Start",
      "to": "/library/queue/start"
    },
    "next": {
      "label": "Redis: Use",
      "to": "/library/redis/use"
    }
  }
}~
