import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement, { ILine } from '../Line/Line';
import PropertyElement from '../Property';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  maxWidth_extra_small: {
    maxWidth: '240px'
  },

  maxWidth_small: {
    maxWidth: '340px'
  },

  maxWidth_regular: {
    maxWidth: '440px'
  },

  maxWidth_large: {
    maxWidth: '740px'
  },

  maxWidth_extra_large: {
    maxWidth: '1024px'
  },

  maxWidth_extra_extra_large: {
    maxWidth: '1440px'
  }
}), { name: 'onesy-Properties' });

export type IPropertiesValue = {
  name: any;
  value: any;
  separator?: any;
  props?: any;
};

export type IProperties = ILine & {
  version?: 'row' | 'row-20' | 'row-30' | 'row-40' | 'row-50' | 'row-between' | 'column';

  values?: (boolean | IPropertiesValue)[];
  onlyWithValues?: boolean;

  maxWidth?: 'extra_small' | 'small' | 'regular' | 'large' | 'extra_large' | 'extra_extra_large';

  PropertyProps?: IPropsAny;
};

const Properties: React.FC<IProperties> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyProperties?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Property = theme?.elements?.Property || PropertyElement;

  const {
    version = 'row-30',

    size = 'regular',

    values = [],

    onlyWithValues = true,

    maxWidth,

    PropertyProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  if (
    !values?.length ||
    onlyWithValues && !values.every((item: any) => item.value !== undefined)
  ) return null;

  return (
    <Line
      ref={ref}

      gap={size === 'large' ? 1.5 : size === 'regular' ? 1 : 0.5}

      rowGap={size === 'large' ? 1.5 : size === 'regular' ? 1 : 0.5}

      fullWidth

      className={classNames([
        staticClassName('Properties', theme) && [
          'onesy-Properties-root',
          `onesy-Properties-version-${version}`,
          `onesy-Properties-size-${size}`
        ],

        className,
        classes.root,
        maxWidth && classes[`maxWidth_${maxWidth}`]
      ])}

      {...other}
    >
      {(values as IPropertiesValue[])?.filter(Boolean)?.map((item, index) => (
        <Property
          key={index}

          version={version}

          size={size}

          name={item.name}

          value={item.value}

          separator={item.separator}

          {...PropertyProps}

          {...item.props}
        />
      ))}
    </Line>
  );
});

Properties.displayName = 'onesy-Properties';

export default Properties;
