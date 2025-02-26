import React from 'react';

import { debounce, is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import AutoCompleteElement from '../AutoComplete';
import ListItemElement from '../ListItem';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IAutoComplete } from '../AutoComplete/AutoComplete';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-AutoCompleteGooglePlaces' });

export interface IAutoCompleteGooglePlaces extends IAutoComplete {

}

const AutoCompleteGooglePlaces: React.FC<IAutoCompleteGooglePlaces> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAutoCompleteGooglePlaces?.props?.default, ...props_ }), [props_]);

  const AutoComplete = React.useMemo(() => theme?.elements?.AutoComplete || AutoCompleteElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    value,

    valueDefault,

    valueInputDefault: valueInputDefault_,

    onChangeInput: onChangeInputProps,

    size = 'regular',

    optionsGoogle: optionsGoogle_,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [places, setPlaces] = React.useState<any>([]);

  const refs = {
    google: React.useRef<any>(undefined)
  };

  const optionsGoogle = React.useMemo(() => {
    return optionsGoogle_ || {
      fields: ['name', 'address_component', 'location', 'geometry']
    };
  }, [optionsGoogle_]);

  const onGoogleResults = React.useCallback((results: any) => {
    // update places
    setPlaces(results?.map((item: any) => ({
      ...item,

      name: item.description
    })) || []);
  }, []);

  const init = React.useCallback(async () => {
    if (!(window as any).google) return;

    const google = (window as any).google;

    const { AutocompleteService } = await google.maps.importLibrary('places');

    refs.google.current = new AutocompleteService(undefined, options);
  }, []);

  React.useEffect(() => {
    // init
    init();
  }, []);

  const onChangeInput = React.useCallback(debounce((valueNew: string) => {
    if (is('function', onChangeInputProps)) onChangeInputProps(valueNew);

    if (!refs.google.current) return;

    // Make a Google request
    refs.google.current.getQueryPredictions({ input: valueNew }, onGoogleResults);
  }, 440), [optionsGoogle, onChangeInputProps]);

  const options = React.useMemo(() => {
    return places.map((item: any) => ({
      ...item,

      value: item.name
    }));
  }, [places]);

  const valueInputDefault = React.useMemo(() => {
    return valueInputDefault_ !== undefined ? valueInputDefault_ : options.find((item: any) => item.value === (value !== undefined ? value : valueDefault))?.name;
  }, []);

  return (
    <AutoComplete
      ref={ref}

      valueInputDefault={valueInputDefault}

      valueDefault={valueDefault}

      value={value}

      options={options}

      onChangeInput={onChangeInput}

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
        staticClassName('AutoCompleteGooglePlaces', theme) && [
          'onesy-AutoCompleteGooglePlaces-root',
          `onesy-AutoCompleteGooglePlaces-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

AutoCompleteGooglePlaces.displayName = 'onesy-AutoCompleteGooglePlaces';

export default AutoCompleteGooglePlaces;
