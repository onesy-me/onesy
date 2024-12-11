
# onesy lz77

LZ77 compression algorithm implementation.

### Add

```sh
yarn add @onesy/lz77
```

### Use

```ts
import OnesyLz77 from '@onesy/lz77';

// Make a new lz77 instance with a value
const onesyLz77 = new OnesyLz77('Lorem u ipsum dolor sit amet amet amet amet amet amet amet, consectetur adipiscing elit. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.');

// Encoded
// or very simply onesyLz77.response
const response = onesyLz77.encoded;

// {
//   "value": "Lorem u ipsum dolor sit ame`5,v`, consectetur adipiscing elit. Proin egestas mauris elit,`2o,a`molestie nisi semper at. Cras interdum massa nec `1d,9`rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.`57,fl`",
//   "original_byte_size": 836,
//   "value_byte_size": 250,
//   "compression_ratio": 3.34,
//   "compression_percentage": 70.1,
//   "positive": true,
//   "performance_milliseconds": 14,
//   "performance": "14 milliseconds"
// }

// Decode
// with onesyLz77.decode or onesyLz77.decode a static method
OnesyLz77.decode(response.value);

// {
//   "value": "Lorem u ipsum dolor sit amet amet amet amet amet amet amet, consectetur adipiscing elit. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.",
//   "original_byte_size": 836,
//   "value_byte_size": 250,
//   "performance_milliseconds": 1,
//   "performance": "1 millisecond"
// }
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
      "label": "Log: Start",
      "to": "/library/log/start"
    },
    "next": {
      "label": "LZ77: Use",
      "to": "/library/lz77/use"
    }
  }
}~
