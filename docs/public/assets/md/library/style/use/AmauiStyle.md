
# OnesyStyle

Main class that maintains the state of all the plugins that are methods can use, generated css, classNames, style sheets added to the DOM, etc.

### Options

#### element

Element in the DOM that this `OnesyStyle` instance will be attached to.

#### mode

Values are `regular`, `atomic`, by default `regular`.

In `regular` mode, class values 1 or more are added as a part of the same selector. \
In `atomic` mode, every selector property, value pair will be generated into its own class name, it might be very usefull for some use cases to improve reusability of styles.

#### renderer

Instance of `OnesyStyleRenderer`.

#### rule

##### sort

If true, it will use sort plugin on `OnesyStyleRule`s.

##### prefix

If true, it will use prefix plugin on `OnesyStyleRule`s.

##### rtl

If true, it will use rtl plugin on `OnesyStyleRule`s.

#### minify

If true it will minify the css, by default true.

#### optimize

If true will try to optimize `OnesyStyleRule`s by reusing existing classes with exactly the same hash (css property, values), even if it's in another style sheet, manager, by default false.

### Use

```ts
const onesyStyle = new OnesyStyle(options);
```

### Plugins

#### Add

```ts
const onesyStyle = new OnesyStyle();

onesyStyle.plugins.add = [
  OnesyStyle.unit,
  OnesyStyle.prefix,
  OnesyStyle.sort
];
```

#### Remove

It removes based on the method reference.

```ts
const onesyStyle = new OnesyStyle();

onesyStyle.plugins.remove = [
  OnesyStyle.unit,
  OnesyStyle.prefix,
  OnesyStyle.sort
];
```

#### Making custom plugins

- All of the plugins depend on the `subscriptions` property, and emits for specific use cases.
- You can inspect any plugin file to see exact implementation of the plugin. More or less it takes in an instance of `OnesyStyle`, and simply subscribes inside to certain `subscriptions` emits, and does some transformations on the css properties, values, etc.
- You can find in the API part, all the `subscriptions` events that are available.

### response

This property is an object with css property, that will have, once all css is made, entire css made as a string.

### css

In this property you'll find once css is made, all the css as a string.

### Util methods

#### attributes

Defines array of attributes that will be added to an element, on which `OnesyStyle` instance will be attached to as a value.

#### Find `OnesyStyle` instance from an element

All these methods will try to find an element that has `OnesyStyle` instance attached to it, and return it.

```ts
OnesyStyle.get(element, 0);

OnesyStyle.first(element);

OnesyStyle.last(element);

OnesyStyle.nearest(element);

OnesyStyle.furthest(element);

OnesyStyle.all(element);

// OnesyStyle {}
// OnesyStyle {}
// OnesyStyle {}
// OnesyStyle {}
// OnesyStyle {}
// [OnesyStyle {}, OnesyStyle {}, OnesyStyle {}]
```

### Other

#### refs

Refs property in the `OnesyStyle` instance will hold refs of all classNames with specific hashes that can be reused, if `optimize` option is true.

#### sheets

Reference of all `OnesyStyleSheet`s that are a part of this `OnesyStyle` instance.

#### sheet_managers

Reference of all `OnesyStyleSheetManager`s that are a part of this `OnesyStyle` instance.

#### counter

Counter of all className, keyframesName's made, in the `OnesyStyle` instance.

## API

#### IOnesyPluginItem

```ts
interface IOnesyPluginItem {
    method: TMethod;
    arguments: any[];
}
```

#### TOnesyPlugin

```ts
type TOnesyPlugin = TMethod | IOnesyPluginItem;
```

#### OnesyPlugins

```ts
type OnesyPlugins = TOnesyPlugin | TOnesyPlugin[];
```

#### IOptions

```ts
interface IOptions {
    element?: Element;
    mode?: TMode;
    renderer?: OnesyStyleRenderer;
    rule?: IOptionsRule;
    minify?: boolean;
    optimize?: boolean;
}
```

#### OnesyStyle

```ts
class OnesyStyle {
    options: IOptions;
    id?: string;
    element?: Element;
    mode?: TMode;
    renderer: OnesyStyleRenderer;
    direction: string;
    subscriptions: {
        className: {
            pre: OnesySubscription;
            name: OnesySubscription;
            post: OnesySubscription;
        };
        keyframes: {
            pre: OnesySubscription;
            name: OnesySubscription;
            post: OnesySubscription;
        };
        rule: {
            pre: OnesySubscription;
            unit: OnesySubscription;
            value: OnesySubscription;
            prefix: OnesySubscription;
            rtl: OnesySubscription;
            add: OnesySubscription;
            update: OnesySubscription;
            update_props: OnesySubscription;
            remove: OnesySubscription;
            post: OnesySubscription;
        };
        rules: {
            sort: OnesySubscription;
        };
        sheet: {
            add: OnesySubscription;
            update: OnesySubscription;
            update_props: OnesySubscription;
            remove: OnesySubscription;
        };
        sheet_manager: {
            add: OnesySubscription;
            update: OnesySubscription;
            update_props: OnesySubscription;
            remove: OnesySubscription;
        };
    };
    values: {
        css: string;
    };
    refs: TRefs;
    sheets: Array<OnesyStyleSheet>;
    sheet_managers: Array<OnesyStyleSheetManager>;
    counter: {
        className: number;
        keyframesName: number;
    };
    [p: string]: any;
    constructor(options?: IOptions);
    get response(): IValuesVersion;
    get css(): string;
    get plugins(): {
        add: OnesyPlugins;
        remove: OnesyPlugins;
    };
    init(): void;
    static attributes: string[];
    static get(value: Element, index?: number): OnesyStyle;
    static first(value: Element): OnesyStyle;
    static last(value: Element): OnesyStyle;
    static nearest(value: Element): OnesyStyle;
    static furthest(value: Element): OnesyStyle;
    static all(value: Element): Array<OnesyStyle>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: Start",
      "to": "/library/style/start"
    },
    "next": {
      "label": "Style: OnesyStyleRenderer",
      "to": "/library/style/use/OnesyStyleRenderer"
    }
  }
}~
