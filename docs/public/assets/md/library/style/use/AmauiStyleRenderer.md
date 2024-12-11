
# OnesyStyleRenderer

Used to insert css values to the DOM.

### make

Makes the element with provided element, data attributes.

### add

Method called to add the element into the DOM.

### remove

Method called to remove the element from the DOM.

## API

```ts
class OnesyStyleRenderer {
    make(attributes?: {
        element: {};
        data: {};
    }, version?: string): Element;
    add(value: Element, priority: TPriority, attributes: any): Element;
    remove(value: Element): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: OnesyStyle",
      "to": "/library/style/use/OnesyStyle"
    },
    "next": {
      "label": "Style: OnesyStyleRule",
      "to": "/library/style/use/OnesyStyleRule"
    }
  }
}~
