import React from 'react';

import { countries } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import AutoCompleteElement from '../AutoComplete';
import ListItemElement from '../ListItem';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IAutoComplete } from '../AutoComplete/AutoComplete';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-AutoCompleteCountry' });

// "l('Afghanistan') l('Åland Islands') l('Albania') l('Algeria') l('American Samoa') l('Andorra') l('Angola') l('Anguilla') l('Antarctica') l('Antigua and Barbuda') l('Argentina') l('Armenia') l('Aruba') l('Australia') l('Austria') l('Azerbaijan') l('Bahamas') l('Bahrain') l('Bangladesh') l('Barbados') l('Belarus') l('Belgium') l('Belize') l('Benin') l('Bermuda') l('Bhutan') l('Bolivia (Plurinational State of)') l('Bonaire') l('Bosnia and Herzegovina') l('Botswana') l('Bouvet Island') l('Brazil') l('British Indian Ocean Territory') l('Brunei Darussalam') l('Bulgaria') l('Burkina Faso') l('Burundi') l('Cabo Verde') l('Cambodia') l('Cameroon') l('Canada') l('Cayman Islands') l('Central African Republic') l('Chad') l('Chile') l('China') l('Christmas Island') l('Cocos (Keeling) Islands') l('Colombia') l('Comoros') l('Congo (the Democratic Republic of the)') l('Congo') l('Cook Islands') l('Costa Rica') l('Côte d'Ivoire') l('Croatia') l('Cuba') l('Curaçao') l('Cyprus') l('Czechia') l('Denmark') l('Djibouti') l('Dominica') l('Dominican Republic') l('Ecuador') l('Egypt') l('El Salvador') l('Equatorial Guinea') l('Eritrea') l('Estonia') l('Eswatini') l('Ethiopia') l('Falkland Islands') l('Faroe Islands') l('Fiji') l('Finland') l('France') l('French Guiana') l('French Polynesia') l('French Southern Territories') l('Gabon') l('Gambia') l('Georgia') l('Germany') l('Ghana') l('Gibraltar') l('Greece') l('Greenland') l('Grenada') l('Guadeloupe') l('Guam') l('Guatemala') l('Guernsey') l('Guinea') l('Guinea-Bissau') l('Guyana') l('Haiti') l('Heard Island and McDonald Islands') l('Holy See') l('Honduras') l('Hong Kong') l('Hungary') l('Iceland') l('India') l('Indonesia') l('Iran (Islamic Republic of)') l('Iraq') l('Ireland') l('Isle of Man') l('Israel') l('Italy') l('Jamaica') l('Japan') l('Jersey') l('Jordan') l('Kazakhstan') l('Kenya') l('Kiribati') l('Korea (the Democratic People's Republic of)') l('Korea (the Republic of)') l('Kuwait') l('Kyrgyzstan') l('Lao People's Democratic Republic') l('Latvia') l('Lebanon') l('Lesotho') l('Liberia') l('Libya') l('Liechtenstein') l('Lithuania') l('Luxembourg') l('Macao') l('North Macedonia') l('Madagascar') l('Malawi') l('Malaysia') l('Maldives') l('Mali') l('Malta') l('Marshall Islands') l('Martinique') l('Mauritania') l('Mauritius') l('Mayotte') l('Mexico') l('Micronesia (Federated States of)') l('Moldova (the Republic of)') l('Monaco') l('Mongolia') l('Montenegro') l('Montserrat') l('Morocco') l('Mozambique') l('Myanmar') l('Namibia') l('Nauru') l('Nepal') l('Netherlands') l('New Caledonia') l('New Zealand') l('Nicaragua') l('Niger') l('Nigeria') l('Niue') l('Norfolk Island') l('Northern Mariana Islands') l('Norway') l('Oman') l('Pakistan') l('Palau') l('Palestine, State of') l('Panama') l('Papua New Guinea') l('Paraguay') l('Peru') l('Philippines') l('Pitcairn') l('Poland') l('Portugal') l('Puerto Rico') l('Qatar') l('Réunion') l('Romania') l('Russian Federation') l('Rwanda') l('Saint Barthélemy') l('Saint Helena') l('Saint Kitts and Nevis') l('Saint Lucia') l('Saint Martin (French part)') l('Saint Pierre and Miquelon') l('Saint Vincent and the Grenadines') l('Samoa') l('San Marino') l('Sao Tome and Principe') l('Saudi Arabia') l('Senegal') l('Serbia') l('Seychelles') l('Sierra Leone') l('Singapore') l('Sint Maarten (Dutch part)') l('Slovakia') l('Slovenia') l('Solomon Islands') l('Somalia') l('South Africa') l('South Georgia and the South Sandwich Islands') l('South Sudan') l('Spain') l('Sri Lanka') l('Sudan') l('Suriname') l('Svalbard') l('Sweden') l('Switzerland') l('Syrian Arab Republic') l('Taiwan (Province of China)') l('Tajikistan') l('Tanzania, the United Republic of') l('Thailand') l('Timor-Leste') l('Togo') l('Tokelau') l('Tonga') l('Trinidad and Tobago') l('Tunisia') l('Turkey') l('Turkmenistan') l('Turks and Caicos Islands') l('Tuvalu') l('Uganda') l('Ukraine') l('United Arab Emirates') l('United Kingdom of Great Britain and Northern Ireland') l('United States Minor Outlying Islands') l('United States of America') l('Uruguay') l('Uzbekistan') l('Vanuatu') l('Venezuela (Bolivarian Republic of)') l('Viet Nam') l('Virgin Islands (British)') l('Virgin Islands (U.S.)') l('Wallis and Futuna') l('Western Sahara') l('Yemen') l('Zambia') l('Zimbabwe')"

export type IAutoCompleteCountry = IAutoComplete & {

};

const AutoCompleteCountry: React.FC<IAutoCompleteCountry> = props_ => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAutoCompleteCountry?.props?.default, ...props_ };

  const AutoComplete = theme?.elements?.AutoComplete || AutoCompleteElement;

  const ListItem = theme?.elements?.ListItem || ListItemElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    value,

    valueDefault,

    valueInputDefault: valueInputDefault_,

    size = 'regular',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  // {
  //   flag: string;
  //   name: string;
  //   full_name: string;
  //   sovereignty: string;
  //   'alpha-2': string;
  //   'alpha-3': string;
  //   numeric: string;
  //   subdivision: string;
  //   tlds: string[];
  // }
  const options = React.useMemo(() => {
    return countries.map(item => ({
      ...item,

      name: l(item.name),

      value: item['alpha-2']
    }));
  }, [countries]);

  const valueInputDefault = React.useMemo(() => {
    return valueInputDefault_ !== undefined ? valueInputDefault_ : options.find(item => item.value === (value !== undefined ? value : valueDefault))?.name;
  }, []);

  return (
    <AutoComplete
      name={l('Select a country')}

      valueInputDefault={valueInputDefault}

      valueDefault={valueDefault}

      value={value}

      options={options}

      size={size}

      renderOption={(item: any, index_: number, propsItem: any) => (
        <ListItem
          key={index_}

          start={item.flag}

          startAlign='center'

          primary={(
            <Type
              version='b3'
            >
              {item.name}
            </Type>
          )}

          value={item.value}

          selected={item.value === (value?.value !== undefined ? value?.value : value)}

          size='small'

          button

          {...propsItem}
        />
      )}

      className={classNames([
        staticClassName('AutoCompleteCountry', theme) && [
          'onesy-AutoCompleteCountry-root',
          `onesy-AutoCompleteCountry-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
};

AutoCompleteCountry.displayName = 'onesy-AutoCompleteCountry';

export default AutoCompleteCountry;
