
# onesy subscription

Use as a subscription method where you can emit values to the subscribed methods, anywhere in your app.

### Add

```sh
yarn add @onesy/subscription
```

### Use

```ts
import OnesySubscription from '@onesy/subscription';

// Make a new subscription instance
// with an optional initial value
const onesySubscription = new OnesySubscription('🙂');

// Value
onesySub.value;

// '🙂'

const method = (...value) => console.log('Yup, I got it ', ...value);

const method1 = value => console.log('Yup, I got it as well ', value);

// Methods subscribe
onesySub.subscribe(method);

onesySub.subscribe(method1);

// Emit a value to all subscribed methods
// a value always emitted as arguments received by emit method
onesySub.emit('🌱', '🌱', '🌱', '🌱');

// method, log:
// Yup, I got it 🌱 🌱 🌱 🌱

// method1, log:
// Yup, I got it as well 🌱

// Methods unsubscribe
onesySub.unsubscribe(method);

onesySub.unsubscribe(method1);

// or with anonymous method
const subscription = onesySub.subscribe(value => console.log(value));

subscription.unsubscribe();
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: Start",
      "to": "/library/style/start"
    },
    "next": {
      "label": "Subscription: Use",
      "to": "/library/subscription/use"
    }
  }
}~
