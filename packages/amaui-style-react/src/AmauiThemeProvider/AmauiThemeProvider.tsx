import React from 'react';

import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';
import hash from '@amaui/utils/hash';
import isEnvironment from '@amaui/utils/isEnvironment';
import { AmauiTheme } from '@amaui/style';
import { IAmauiTheme } from '@amaui/style/amaui-theme';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';
import { AmauiThemeRequired } from '../style';

export interface IAmauiThemeProviderValue extends AmauiThemeRequired {
  updateWithRerender: (value: IAmauiTheme) => AmauiThemeRequired;
}

const resolveValue = (value: IAmauiTheme) => {
  const toFilterOut = ['id', 'element', 'subscriptions'];

  const valueNew: any = {};

  Object.keys(value).filter((item: any) => toFilterOut.indexOf(item) === -1).forEach((item: any) => valueNew[item] = value[item]);

  return valueNew;
};

interface IAmauiThemeProvider extends React.HTMLAttributes<any> {
  root?: boolean;

  value?: IAmauiTheme;

  children?: any;
}

const AmauiThemeProvider = React.forwardRef((props: IAmauiThemeProvider, ref: any) => {
  const [init, setInit] = React.useState(false);

  const {
    root = false,

    value: valueLocal = {},

    children,

    ...other } = props;

  const refs = {
    root: React.useRef<any>(),
    init: React.useRef<any>()
  };

  refs.init.current = init;

  const valueParent = useAmauiTheme() as any || {};

  const [value, setValue] = React.useState<IAmauiThemeProviderValue>(() => new AmauiTheme(merge(resolveValue(is('function', valueLocal) ? (valueLocal as any)(valueParent) : valueLocal), resolveValue(valueParent), { copy: true }) as any) as any);

  React.useEffect(() => {
    if (refs.root.current) {
      const amauiTheme = new AmauiTheme(value as any, refs.root.current) as any;

      amauiTheme.id = value.id;

      amauiTheme.subscriptions = value.subscriptions;

      // Init
      setValue(amauiTheme);
    }

    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      value.update(merge(resolveValue(is('function', valueLocal) ? (valueLocal as any)(valueParent) : valueLocal), resolveValue(valueParent), { copy: true }) as any);

      const amauiTheme = new AmauiTheme(value as any, refs.root?.current) as any;

      amauiTheme.id = value.id;

      amauiTheme.subscriptions = value.subscriptions;

      setValue(amauiTheme);
    }
  }, [hash(resolveValue(valueLocal as any)), valueParent?.palette?.light]);

  const update = (updateValue: IAmauiTheme) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      const amauiTheme = new AmauiTheme(value as any, refs.root?.current || (isEnvironment('browser') && window.document.body)) as any;

      amauiTheme.id = value.id;

      amauiTheme.subscriptions = value.subscriptions;

      // Init
      setValue(amauiTheme);

      return value;
    }
  };

  // Update method
  (value as any).updateWithRerender = update;

  if (root) {
    return (
      <AmauiThemeContext.Provider
        value={value}
      >
        <div
          ref={(item: any) => {
            refs.root.current = item;

            if (ref?.current) ref.current = item;
          }}

          {...other}
        >
          {children}
        </div>
      </AmauiThemeContext.Provider>
    );
  }

  return (
    <AmauiThemeContext.Provider
      value={value}
    >
      {children}
    </AmauiThemeContext.Provider>
  );
});

export default AmauiThemeProvider;
