
# OnesyZip

### Zipping

More or less any value can be zipped, as if it's not `uint8array`, `buffer` or `string` it will be serialized, so a javascript object will get zipped as a serialized JSON, and on unzip it will be parsed back into an object. Very useful yes. :)

Value zipped is stateless, meaning it doesn't require any information other than the information in itself to be unzipped on the other end.

Under the hood OnesyZip uses 2 data compression algorithms, also with onesy libraries OnesyHuffmanCode, OnesyLZ77.

Library **OnesyHuffmanCode** essentially takes the string, and orders all characters by their frequency, and to the them assigns the lowest byte value, while in the process of replacing each charater with 0s and 1s.

Library **OnesyLZ77** algorithm finds already mentioned parts of the string on its left, and just removes it from that location, and instead replaces it with a pointer where that data is on the left, and how many characters it is. That way if string has redundency in itself it will get compressed well.

Meaning the more redundency the data has, the better the compression will be.

```ts
new OnesyZip('Value to zip');

new OnesyZip(14);

new OnesyZip({ a: 14 });
```

### Unzipping

```ts
const zipped = new OnesyZip('Value to zip');
const response = zipped.encoded;

const unzipped = OnesyZip.decode(response.value);

unzipped.value;

// Value to zip
```

### Options

```ts
const options = {
  // default true
  encode_values: true,
  // default 'auto'
  huffman_code: 'auto'
};

new OnesyZip('Value to zip', options);
```

#### encode\_values

Values: `true`, `false`

Is an option passed into the OnesyHuffmanCode, for it to either encode the huffman code values or not.

In some use cases it depends, and toggling it might influence difference in value byte size.

#### huffman\_code

Values: `'auto'`, `true`, `false`

If auto, than if encoding value with huffman code algorithm produces larger data size than the original input, huffman code algorithm isn't used, otherwise it is used.

If true, even if huffman code produces larger output than the input, it will still be used.

If false, huffman code algorithm won't be used.

### Response

Inside the zip response you have the value, and other useful meta data, including whether the zip was positive.

If zip is positive it means that the zipped value in byte size is smaller, than the original data, which means we succesfully compressed the data.

If zip is negative it means that the zipped value in byte size is larger, than the original data, in that case using original data (if smaller data size is your goal) is a better way to go.

```ts
const zipped = new OnesyZip('Value to zip');
const response = zipped.encoded;

response;

{
    // Compressed value
    "value": "00 Value to zip",
    // Byte size of the original input
    "original_byte_size": 2941,
    // Value byte size
    "value_byte_size": 2664,
    // Compression ratio, above 1 it's positive, and below is negative compression
    "compression_ratio": 1.1,
    // Data compression in percentage as a number value
    "compression_percentage": 9.42,
    // If compression is positive or negative
    "positive": true,
    // Time it took to compress the data in milliseconds
    "performance_milliseconds": 57,
    // Perfomance time as a formated value
    "performance": "57 milliseconds"
}
```

### Try it

~{
  "element": "Example",
  "props": {
    "label": "Zip",
    "id": "zip-examples-zip"
  }
}~

~{
  "element": "Example",
  "props": {
    "label": "Unzip",
    "id": "zip-examples-unzip"
  }
}~

## API

#### OnesyZipResponse

```ts
class OnesyZipResponse {
    value?: any;
    original_byte_size?: number;
    value_byte_size?: number;
    compression_ratio?: number;
    compression_percentage?: number;
    positive?: boolean;
    performance_milliseconds?: number;
    performance?: string;
    constructor(value?: any, original_byte_size?: number, value_byte_size?: number, compression_ratio?: number, compression_percentage?: number, positive?: boolean, performance_milliseconds?: number, performance?: string);
}
```

#### IOptions

```ts
interface IOptions {
    encode_values?: boolean;
    huffman_code?: 'auto' | boolean;
}
```

#### OnesyZip

```ts
class OnesyZip {
    value?: any;
    options: IOptions;
    serialized: boolean;
    response: OnesyZipResponse;
    static get OnesyZipResponse(): typeof OnesyZipResponse;
    static decode(value: string): OnesyZipResponse;
    get encoded(): OnesyZipResponse;
    constructor(value?: any, options?: IOptions);
    private init;
    encode(): OnesyZipResponse;
    decode(value_: string): OnesyZipResponse;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Zip: Start",
      "to": "/library/zip/start"
    }
  }
}~
