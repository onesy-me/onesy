/* tslint:disable: no-shadowed-variable */
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { assert } from '@onesy/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as OnesyStyleReact from '../src';

group('@onesy/style-react/className', () => {

  to('className', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { className } = window.OnesyStyleReact;

      const A = (props) => {
        const classNameProp = className(theme => ({
          a: {
            color: 'yellow'
          }
        }), props, '', { name: 'a' });

        return (
          eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.OnesyUtils.wait(140);

      return [
        window.document.styleSheets.length,
        Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)),
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      1,
      [
        [
          ".a-0 { color: yellow; }"
        ]
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
    ]));
  });

  to('c', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { c } = window.OnesyStyleReact;

      const A = (props) => {
        const classNameProp = c(theme => ({
          a: {
            color: 'yellow'
          }
        }), props, '', { name: 'a' });

        return (
          eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.OnesyUtils.wait(140);

      return [
        window.document.styleSheets.length,
        Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)),
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      1,
      [
        [
          ".a-0 { color: yellow; }"
        ]
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
    ]));
  });

  to('cs', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { cs } = window.OnesyStyleReact;

      const A = (props) => {
        const classNameProp = cs(theme => ({
          a: {
            color: 'yellow'
          }
        }), props, '', { name: 'a' });

        return (
          eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.OnesyUtils.wait(140);

      return [
        window.document.styleSheets.length,
        Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)),
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      1,
      [
        [
          ".a-0 { color: yellow; }"
        ]
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { className } = window.OnesyStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: 'yellow'
            }
          }), props, '', { name: 'a' });

          return (
            eval(window.Babel.transform(`
              <a className={classNameProp}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <div>
                  <A>a</A>

                  <A>a1</A>
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.OnesyUtils.wait(140);

        return [
          window.document.styleSheets.length,
          Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)),
          window.document.getElementById('app').innerHTML
        ];
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: yellow; }"
          ]
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className, useOnesyTheme, OnesyThemeProvider } = window.OnesyStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: theme.palette.text.default.primary
            }
          }), props, '', { name: 'a' });

          const onesyTheme = useOnesyTheme();

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            setTimeout(() => {
              onesyTheme.update({
                palette: {
                  light: false
                }
              });
            }, 140);
          }, []);

          return (
            eval(window.Babel.transform(`
              <a className={classNameProp}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <OnesyThemeProvider>
                  <A>a</A>

                  <A>a</A>
              </OnesyThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.OnesyUtils.wait(440);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<div data-onesy-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-0\">a</a></div>",
        1,
        [
          [
            ".a-0 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<div data-onesy-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-0\">a</a></div>",
        1,
        [
          [
            ".a-0 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<div data-onesy-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-0\">a</a></div>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className } = window.OnesyStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: props => props.a === 1 ? 'yellow' : 'orange'
            }
          }), props, '', { name: 'a' });

          return (
            eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {
          const [a, setA] = window.React.useState(1);

          window.React.useEffect(() => {
            setTimeout(() => {
              setA(14);
            }, 140);
          }, []);

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [a]);

          return (
            eval(window.Babel.transform(`
              <div>
                  <A a={a}>a</A>

                  <A>a</A>
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.OnesyUtils.wait(440);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-1\">a</a></div>",
        2,
        [
          [
            ".a-0 { color: orange; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-1\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className } = window.OnesyStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: props => props.a === 1 ? 'yellow' : 'orange',
            }
          }), props, '', { name: 'a' });

          return (
            eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {
          const [elements, setElements] = window.React.useState(true);

          window.React.useEffect(() => {
            setTimeout(() => {
              setElements(false);
            }, 140);
          }, []);

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [elements]);

          return (
            eval(window.Babel.transform(`
              <div>
                  {elements && (
                    <window.React.Fragment>
                      <A>a</A>

                      <A>a</A>
                    </window.React.Fragment>
                  )}
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.OnesyUtils.wait(440);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-0 { color: orange; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-1\">a</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { OnesyStyle, OnesyStyleProvider, OnesyThemeProvider, className } = OnesyStyleReact;

      const onesyStyle = new OnesyStyle();

      const A = (props) => {
        const classNameProp = className(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            background: 'orange'
          }
        }), props, '', { name: 'a' });

        return (
          <a className={classNameProp}>
            {props.children}
          </a>
        );
      };

      const App = () => {
        return (
          <OnesyStyleProvider value={onesyStyle}>
            <OnesyThemeProvider>
              <A>a</A>

              <A>a1</A>
            </OnesyThemeProvider>
          </OnesyStyleProvider>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

      assert(value).eq('<div><div><a class="a-0 a1-1">a</a><a class="a-0 a1-1">a1</a></div></div>');

      assert(onesyStyle.css).eq(`

.a-0 {
  color: yellow;
}

.a1-1 {
  background: orange;
}

`);
    });

  });

});
