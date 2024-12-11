
### Add

```bash
yarn add @onesy/ui-react
```

<br />
Add `@onesy/style-react` peer dependency.

```bash
yarn add @onesy/style-react
```

### Use

```tsx
// Import any of the ui
import { Button } from '@onesy/ui-react';

function A(props) {

  return (
    <Button>{props.children}</Button>
  );
}
```

### Dev

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
    "next": {
      "label": "UI react: Accordion",
      "to": "/library/ui-react/use/Accordion"
    }
  }
}~
