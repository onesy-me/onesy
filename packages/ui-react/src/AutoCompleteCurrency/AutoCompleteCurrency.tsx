import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import AutoCompleteElement from '../AutoComplete';
import { currencies, staticClassName } from '../utils';
import { IAutoComplete } from '../AutoComplete/AutoComplete';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-AutoCompleteCurrency' });

// "l('US Dollar') l('Canadian Dollar') l('Euro') l('United Arab Emirates Dirham') l('Afghan Afghani') l('Albanian Lek') l('Armenian Dram') l('Argentine Peso') l('Australian Dollar') l('Azerbaijani Manat') l('Bosnia-Herzegovina Convertible Mark') l('Bangladeshi Taka') l('Bulgarian Lev') l('Bahraini Dinar') l('Burundian Franc') l('Brunei Dollar') l('Bolivian Boliviano') l('Brazilian Real') l('Botswanan Pula') l('Belarusian Ruble') l('Belize Dollar') l('Congolese Franc') l('Swiss Franc') l('Chilean Peso') l('Chinese Yuan') l('Colombian Peso') l('Costa Rican Colón') l('Cape Verdean Escudo') l('Czech Republic Koruna') l('Djiboutian Franc') l('Danish Krone') l('Dominican Peso') l('Algerian Dinar') l('Estonian Kroon') l('Egyptian Pound') l('Eritrean Nakfa') l('Ethiopian Birr') l('British Pound Sterling') l('Georgian Lari') l('Ghanaian Cedi') l('Guinean Franc') l('Guatemalan Quetzal') l('Hong Kong Dollar') l('Honduran Lempira') l('Croatian Kuna') l('Hungarian Forint') l('Indonesian Rupiah') l('Israeli New Sheqel') l('Indian Rupee') l('Iraqi Dinar') l('Iranian Rial') l('Icelandic Króna') l('Jamaican Dollar') l('Jordanian Dinar') l('Japanese Yen') l('Kenyan Shilling') l('Cambodian Riel') l('Comorian Franc') l('South Korean Won') l('Kuwaiti Dinar') l('Kazakhstani Tenge') l('Lebanese Pound') l('Sri Lankan Rupee') l('Lithuanian Litas') l('Latvian Lats') l('Libyan Dinar') l('Moroccan Dirham') l('Moldovan Leu') l('Malagasy Ariary') l('Macedonian Denar') l('Myanma Kyat') l('Macanese Pataca') l('Mauritian Rupee') l('Mexican Peso') l('Malaysian Ringgit') l('Mozambican Metical') l('Namibian Dollar') l('Nigerian Naira') l('Nicaraguan Córdoba') l('Norwegian Krone') l('Nepalese Rupee') l('New Zealand Dollar') l('Omani Rial') l('Panamanian Balboa') l('Peruvian Nuevo Sol') l('Philippine Peso') l('Pakistani Rupee') l('Polish Zloty') l('Paraguayan Guarani') l('Qatari Rial') l('Romanian Leu') l('Serbian Dinar') l('Russian Ruble') l('Rwandan Franc') l('Saudi Riyal') l('Sudanese Pound') l('Swedish Krona') l('Singapore Dollar') l('Somali Shilling') l('Syrian Pound') l('Thai Baht') l('Tunisian Dinar') l('Tongan Paʻanga') l('Turkish Lira') l('Trinidad and Tobago Dollar') l('New Taiwan Dollar') l('Tanzanian Shilling') l('Ukrainian Hryvnia') l('Ugandan Shilling') l('Uruguayan Peso') l('Uzbekistan Som') l('Venezuelan Bolívar') l('Vietnamese Dong') l('CFA Franc BEAC') l('CFA Franc BCEAO') l('Yemeni Rial') l('South African Rand') l('Zambian Kwacha')"

export type IAutoCompleteCurrency = IAutoComplete & {

};

const AutoCompleteCurrency: React.FC<IAutoCompleteCurrency> = props_ => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAutoCompleteCurrency?.props?.default, ...props_ };

  const AutoComplete = theme?.elements?.AutoComplete || AutoCompleteElement;

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
        name: `${item.code} ${l(item.name)} (${item.symbol})`,
        value: item.code
      }))
    ];
  }, [currencies]);

  const valueInputDefault = React.useMemo(() => {
    return valueInputDefault_ !== undefined ? valueInputDefault_ : options.find(item => item.value === (other.value !== undefined ? other.value : other.valueDefault))?.name;
  }, []);

  return (
    <AutoComplete
      name={l('Select a currency')}

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
};

AutoCompleteCurrency.displayName = 'onesy-AutoCompleteCurrency';

export default AutoCompleteCurrency;
