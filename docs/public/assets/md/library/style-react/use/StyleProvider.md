
# Style

Provider for `OnesyStyle` instance value.

### Use

- By default all plugins are used in a default `OnesyStyle` instance: `unit`, `makeClassName`, `prefix`, `sort`, `rtl`, `valueObject`.
- If you want to only use specific plugins, or your own instance of `OnesyStyle`, you can provide it as a value to the provider.
- All of the `OnesyStyle` classes, and plugins are also re-exported from this library, but you can import them directly from `@onesy/style` library as well.

```tsx
import { Style, OnesyStyle, unit, sort, prefix } from '@onesy/style-react';

const App = () => {
  const onesyStyle = React.useMemo(() => {
    const instance = new OnesyStyle();

    instance.plugins.add = [unit, sort, prefix];

    return instance;
  }, []);

  return (
    <Style
      value={onesyStyle}
    >
      ...
    </Style>
  );
};
```

### Update

- You can update the `OnesyStyle` by providing new values to it, but, updating it as an instance reference won't trigger the rerender.
- You can use new injected method `updateWithRerender` to update it, while triggering the rerender.
- On `updateWithRerender` new instance of `OnesyStyle` is made, and provided values in this method, are merged with values of the previous `OnesyStyle` instance, as new properties for the new instance.

```tsx
import { Style, useOnesyStyle, OnesyStyle, unit, sort, prefix } from '@onesy/style-react';

const Button = props => {
  // useOnesyStyle (useContext) retrieves
  // the nearest Style value
  const onesyStyle = useOnesyStyle();

  const onClick = React.useCallback(() => {
    onesyStyle.updateWithRerender({ a: 114 });
  }, []);

  console.log(onesyStyle.a);

  // 114

  return (
    <button
      onClick={onClick}

      {...props}
    >
      {props.children}
    </button>
  );
};

const App = () => {
  const onesyStyle = React.useMemo(() => {
    const instance = new OnesyStyle();

    instance.plugins.add = [unit, sort, prefix];

    return instance;
  }, []);

  return (
    <Style
      value={onesyStyle}
    >
      <Button>My button</Button>
    </Style>
  );
};
```

### Other

#### useOnesyStyle

- Using `useOnesyStyle` without the `Style` as a parent returns default `StyleContext` value, which is `OnesyStyle` instance with the default options.

## API

#### IStyle

```ts
interface IStyle extends OnesyStyle {
    updateWithRerender?: (value: any) => OnesyStyle;
}
```

#### Style

```ts
const Style: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: Start",
      "to": "/library/style-react/start"
    },
    "next": {
      "label": "Style react: ThemeProvider",
      "to": "/library/style-react/use/ThemeProvider"
    }
  }
}~
