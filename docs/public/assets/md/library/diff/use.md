
# OnesyDiff

### Options

#### init

Method used on both values, prior to making the diff, usually converts value to a string.

#### itemize

Method used to split value on parts to compare, ie. words, sentences, lines, etc.

#### equal

Method used to compare if two parts are equal.

#### join

Method to join split parts back into the value.

### Methods

#### Diff

Makes the diff from two provided values.

By default it compares every character.

It returns the instructions of what to add, remove in the first value to make it equal the second value, in exact otder.

```ts
const onesyDiff = new OnesyDiff();

onesyDiff.diff('aau', 'aay ay');

// { items: ['r', 2, 'a', 2, 'y', 'a', 3, ' ', 'a', 4, 'a', 'a', 5, 'y'] }
```

#### Update

Updates the first value, based on the diff instructions, to make it equal the second provided value.

```ts
const onesyDiff = new OnesyDiff();

onesyDiff.update('aau', onesyDiff.diff('aau', 'aay ay'));

// 'aay ay'
```

### Util methods

#### Update groups

Groups as many of same action types as it can in order, ie. few removes, then few add actions etc. to make update easier, but still get the correct result.

```ts
const onesyDiff = new OnesyDiff();

OnesyDiff.updateGroups(onesyDiff.diff('aaa4aa', 'a44aa'));

// [
//   [['r', 1], ['r', 2]],
//   [['a', 2, '4']]
// ]
```

#### onesyDiff

Makes OnesyDiff instances with default options, per character.

```ts
const onesyDiff = OnesyDiff.onesyDiff;
```

#### word

Makes OnesyDiff instances with word options, per word.

```ts
const onesyDiff = OnesyDiff.word;
```

#### line

Makes OnesyDiff instances with line options, per line.

```ts
const onesyDiff = OnesyDiff.line;
```

#### sentence

Makes OnesyDiff instances with sentence options, per sentence.

```ts
const onesyDiff = OnesyDiff.sentence;
```

#### json

Makes OnesyDiff instances with json options, per json line.

```ts
const onesyDiff = OnesyDiff.json;
```

## API

#### IDiffItemAction

```ts
type IDiffItemAction = 'add' | 'a' | 'remove' | 'r';
```

#### IDiffItem

```ts
type IDiffItem = [IDiffItemAction, number, string?];
```

#### IDiff

```ts
interface IDiff {
    items: Array<IDiffItemAction | number | string>;
}
```

#### IInit

```ts
interface IInit {
    method?: (value: any) => string;
}
```

#### IItemize

```ts
interface IItemize {
    method?: (value: string) => Array<string>;
}
```

#### IEqual

```ts
interface IEqual {
    method: (value: string, value1: string) => boolean;
}
```

#### IJoin

```ts
interface IJoin {
    method?: (value: Array<string>) => string;
}
```

#### IDiffMatrixItem

```ts
type IDiffMatrixItem = [number?, number?, number?];
```

#### IOutput

```ts
interface IOutput {
    compressed?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    init?: IInit;
    itemize?: IItemize;
    equal?: IEqual;
    join?: IJoin;
    output?: IOutput;
}
```

#### TDiffVariants

```ts
type TDiffVariants = 'default' | 'word' | 'line' | 'sentence' | 'json';
```

#### IOPTIONS

```ts
type IOPTIONS = {
    [p in TDiffVariants]?: IOptions;
};
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### OnesyDiff

```ts
class OnesyDiff {
    options: IOptions;
    static get onesydiff(): OnesyDiff;
    static get word(): OnesyDiff;
    static get line(): OnesyDiff;
    static get sentence(): OnesyDiff;
    static get json(): OnesyDiff;
    static get OPTIONS(): IOPTIONS;
    static updateGroups(diff: IDiff): any[];
    constructor(options?: IOptions);
    diff(value_: any, value1_: any, options_?: IOptions): IDiff;
    update(value__: any, diff: IDiff, options_?: IOptions): string;
    private action;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Diff: Start",
      "to": "/library/diff/start"
    },
    "next": {
      "label": "Errors: Start",
      "to": "/library/errors/start"
    }
  }
}~
