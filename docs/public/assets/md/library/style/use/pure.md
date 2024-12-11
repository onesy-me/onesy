
# pure

Method to add all pure values, meaning any selector writen as property will be added exactly as writen, without making it into a class name.

Usefull for any element selector css styles.

### Options

#### element

Element which potentially has `OnesyStyle`, `OnesyTheme` instanced bound to it.

#### name

Name for this style, usually if `style` method is used per UI element type, name should be that element's name.

#### onesy\_style

Add `OnesyStyle` instance it will be a part of.

#### onesy\_theme

Add `OnesyTheme` instance it will use.

### Use

When adding pure styles, no class names, or classes are made, since the properties (selectors), will be added to the DOM exactly as they were writen.

```ts
const onesyStyle = new OnesyStyle();

// Plugins
onesyStyle.plugins.add = [
  OnesyStyle.unit,
  OnesyStyle.sort,
  OnesyStyle.prefix,
  OnesyStyle.makeClassName,
  OnesyStyle.rtl
];

const styles = pure(
  theme => ({
    '@keyframes a': {
      '0%': {
          color: 'white'
      },
      '40%': {
          color: 'yellow'
      }
    },

    a: {
      // unit
      width: 100,

      'max-width': 100,

      // Simple
      background: '#faa',

      margin: '0 14px 4px 40px',

      // rtl
      marginLeft: 41,
      float: 'left',

      // sort
      paddingLeft: 41,
      padding: 40,

      // prefixes
      position: 'sticky',
      transition: 'all .4s ease',
      maskOrigin: 'inherit',
      maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
      maskPosition: '40% 74%',

      // animation
      animation: 'a .4s ease'
    },

    main: {
      width: 100
    },

    body: {
      // Function
      background: props => props.a === 1 ? 'yellow' : 'orange'
    }
  }),
  {
    name: 'Pure',
    onesy_style: { value: onesyStyle }
  }
);

// Add to the dom
const response = styles.add();

response;

// {
//   ids: {
//     static: [
//       '1b2b0876-238b-416e-b10b-c01f8dbdfd76'
//     ],
//     dynamic: [
//       '4a4e395b-2db7-4619-ad12-f17737a0d3d1'
//     ]
//   },
//   classNames: { },
//   classes: { },
//   keyframes: { }
// }
```

## API

#### IOptions

```ts
interface IOptions {
    element?: Element;
    name?: string;
    onesy_style?: IOptionsOnesyStyle;
    onesy_theme?: IOptionsOnesyTheme;
}
```

#### pure

```ts
function pure(value_: TValue, options_?: IOptions): IMethodResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: prefix",
      "to": "/library/style/use/prefix"
    },
    "next": {
      "label": "Style: reset",
      "to": "/library/style/use/reset"
    }
  }
}~
