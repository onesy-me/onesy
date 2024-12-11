
# cli

Client command for making static css using the `css` method, in the back end.

### Options

Options can either be in:
- Command line arguments
  ```ts
yarn onesy-style --imports=ts-node/register/transpile-only --files=test/example/test/**/a.ts --package=a/package.json --log=false
  ```
- In `onesy-style.options.js` file.
  ```ts
// onesy-style.options.js
module.exports = {
  imports: [
    'ts-node/register/transpile-only'
  ],
  files: 'test/example/test/**/a.ts',
  log: false
};
  ```
- In `package.json`'s `onesy-style` property.
  ```ts
{
  ...

  'onesy-style': {
    imports: [
      'ts-node/register/transpile-only'
    ],
    files: 'test/example/test/**/a.ts',
    log: false
  },

  ...
}
  ```

#### imports

Libraries to import prior to running the entire main method.

#### files

Files in which all the css is in.

#### log

If to log the entire process.

#### package

Custom path to `package.json`.


### Use

- Make files in which all your css will be using `css` method, and in the bottom of it invoke ie. `await styles\.make()`, for the css method.
- Add options for the client command as explained above.
- Use the command in your package scripts, or in the command line directly.
```ts
// package.json
// {
//   ...

//   "scripts": {
//     // Any name for the command
//     "makeCSS": "onesy-style"
//   },

//   ...
// }

// Using yarn
yarn makeCSS

// or

// Using npm
npm run makeCSS

// or with the command line directly
onesy-style
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: classNames",
      "to": "/library/style/use/classNames"
    },
    "next": {
      "label": "Style: colors",
      "to": "/library/style/use/colors"
    }
  }
}~
