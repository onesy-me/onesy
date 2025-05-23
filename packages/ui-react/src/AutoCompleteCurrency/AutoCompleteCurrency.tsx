import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import AutoCompleteElement from '../AutoComplete';
import { currencies, staticClassName } from '../utils';
import { IAutoComplete } from '../AutoComplete/AutoComplete';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-AutoCompleteCurrency' });

export type IAutoCompleteCurrency = IAutoComplete & {

};

const AutoCompleteCurrency: React.FC<IAutoCompleteCurrency> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAutoCompleteCurrency?.props?.default, ...props_ }), [props_]);

  const AutoComplete = React.useMemo(() => theme?.elements?.AutoComplete || AutoCompleteElement, [theme]);

  const {
    valueInputDefault: valueInputDefault_,

    size = 'regular',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  // {
  //   symbol: '€',
  //   name: 'Euro',
  //   symbol_native: '€',
  //   'decimal_digits': 2,
  //   rounding: 0,
  //   code: 'EUR',
  //   name_plural: 'euros'
  // }
  const options = React.useMemo(() => {
    return [
      { name: l('No currency'), value: '' },

      ...currencies.map(item => ({
        name: `${item.code} ${item.name} (${item.symbol})`,
        value: item.code
      }))
    ];
  }, [currencies]);

  const valueInputDefault = React.useMemo(() => {
    return valueInputDefault_ !== undefined ? valueInputDefault_ : options.find(item => item.value === (other.value !== undefined ? other.value : other.valueDefault))?.name;
  }, []);

  return (
    <AutoComplete
      ref={ref}

      valueInputDefault={valueInputDefault}

      options={options}

      size={size}

      className={classNames([
        staticClassName('AutoCompleteCurrency', theme) && [
          'onesy-AutoCompleteCurrency-root',
          `onesy-AutoCompleteCurrency-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

AutoCompleteCurrency.displayName = 'onesy-AutoCompleteCurrency';

export default AutoCompleteCurrency;
