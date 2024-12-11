
# format

Formats an OnesyDate based on a format string.

You can find format options in formats documentation page.

```ts
const onesyDate = new OnesyDate('2014-04-14T14:04:14.147');

format(onesyDate, 'MM-DD-YYYY HH:mm:ss.SSS');

// '04-14-2014 14:04:14.147'
```

### Constants

You can add any constant, word, character, etc. within the format string, that won't be affected during formatting.

You can do it by wrapping it in one of the following, `''`, `""`, `{}` or `[]`;

```ts
const onesyDate = new OnesyDate('2014-04-14T14:04:14.147');

format(onesyDate, "MM-DD-YYYY '🙂' HH:mm:ss.SSS");

// '04-14-2014 🙂 14:04:14.147'
```

## API

#### format

```ts
default function format(onesyDate?: OnesyDate, value_?: string): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: endOf",
      "to": "/library/date/use/endOf"
    },
    "next": {
      "label": "Date: formats",
      "to": "/library/date/use/formats"
    }
  }
}~
