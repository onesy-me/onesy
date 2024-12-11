
# OnesyStyleSheet

Used to encapsulate all of the different made selectors, and their values.

### Use

```ts
const onesyStyleSheetStatic = new OnesyStyleSheet({
  a: {
    width: 1114
  },

  a14: {
    background: 'yellow'
  }
}, options);

const onesyStyleSheetDynamic = new OnesyStyleSheet({
  a14: {
    background: props => props.a === 1 ? 'yellow' : 'beige'
  }
}, options);
```

### Version

#### Static

Static `OnesyStyleSheet` will have all the `OnesyStyleRule`'s with static `OnesyStyleRuleProperty`'s values.

#### Dynamic

Dynamic `OnesyStyleSheet` will have all the `OnesyStyleRule`'s with dynamic `OnesyStyleRuleProperty`'s values.

### Methods

#### response

Returns in an object with css property's value entire css generated from all the `OnesyStyleRule`'s.

#### css

Returns in a string value entire css generated from all the `OnesyStyleRule`'s.

#### add

Adds the made selectors & their values to the DOM.

#### update

Updates the entire `OnesyStyleSheet` with new rules.

Based on the value provided, it will add new `OnesyStyleRule`'s, update existing ones, and remove ones that currently exist, but are not part of the new value.

#### props

Updates the props, and triggers updates for all `OnesyStyleRule`'s `OnesyStyleRuleProperty`'s with dynamic values of type method.

```ts
const onesyStyleSheet = new OnesyStyleSheet(value, options);

// Updates props
onesyStyleSheet.props = {
  a: 114
};
```

#### remove

Removes the `OnesyStyleSheet` from the DOM.

## API

#### TVersion

```ts
type TVersion = 'all' | 'static' | 'dynamic';
```

#### IRuleItem

```ts
interface IRuleItem {
    property: string;
    value: any;
}
```

#### IOptionsStyle

```ts
interface IOptionsStyle {
    attributes?: Record<string, any>;
}
```

#### IOptions

```ts
interface IOptions {
    version?: TVersion;
    mode?: TMode;
    pure?: boolean;
    priority?: TPriority;
    onesyTheme?: OnesyTheme;
    onesyStyleSheetManager?: OnesyStyleSheetManager;
    onesyStyle?: OnesyStyle;
    props?: any;
    style?: IOptionsStyle;
    rule?: IOptionsRule;
    name?: string;
}
```

#### OnesyStyleSheet

```ts
class OnesyStyleSheet {
    value?: TValueObject;
    options: IOptions;
    id: string;
    version: TVersion;
    mode: TMode;
    pure: boolean;
    priority: TPriority;
    onesyTheme: OnesyTheme;
    onesyStyleSheetManager: OnesyStyleSheetManager;
    onesyStyle: OnesyStyle;
    status: TStatus;
    element: HTMLStyleElement;
    sheet: CSSStyleSheet;
    domElementForTesting: HTMLDivElement;
    private props_;
    values: {
        css: string;
    };
    rules: Array<IRuleItem>;
    names: {
        classNames: {};
        classes: {};
        keyframes: {};
        styles: (...args: string[]) => string;
    };
    constructor(value?: TValueObject, options?: IOptions);
    get props(): any;
    set props(props: any);
    get response(): IValuesVersion;
    get css(): string;
    private get sort();
    private init;
    addRule(value: any, property_?: string, add?: boolean): IAddRuleResponse;
    add(props?: any): void;
    update(value: any): void;
    remove(): void;
    private updateProps;
    private propsAreNew;
    private makeRule;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: OnesyStyleRuleProperty",
      "to": "/library/style/use/OnesyStyleRuleProperty"
    },
    "next": {
      "label": "Style: OnesyStyleSheetManager",
      "to": "/library/style/use/OnesyStyleSheetManager"
    }
  }
}~
