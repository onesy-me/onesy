import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IVersion, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  label_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  disabled: {
    cursor: 'default',
    userSelect: 'none'
  }
}), { name: 'onesy-Radios' });

export type IRadios = Omit<ILine, 'onChange'> & {
  colorUnchecked?: IColor;
  version?: IVersion;

  name?: IElement;
  label?: IElement;

  uncheck?: boolean;

  valueDefault?: any;
  checkedDefault?: any;

  value?: any;
  checked?: any;

  onChange?: (value: any) => any;

  WrapperProps?: IPropsAny;
  LabelProps?: IPropsAny;
};

const Radios: React.FC<IRadios> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyRadios?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    tonal = true,
    color = 'primary',
    colorUnchecked,
    version = 'text',
    size = 'regular',

    name,
    label: label_,

    uncheck = true,

    direction = 'column',
    align = 'center',
    justify = 'center',

    valueDefault: valueDefault_,
    checkedDefault: checkedDefault_,

    value: value_,
    checked: checked_,

    onChange,

    disabled,

    WrapperProps,
    LabelProps,

    Component = 'div',

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const checkedDefault = valueDefault_ !== undefined ? valueDefault_ : checkedDefault_;
  const checked = value_ !== undefined ? value_ : checked_;

  const [value, setValue] = React.useState(checkedDefault !== undefined ? checkedDefault : value_);

  const refs = {
    value: React.useRef<any>(undefined),
    ids: {
      label: React.useId()
    }
  };

  refs.value.current = value;

  const label = name !== undefined ? name : label_;

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) setValue(checked);
  }, [checked]);

  const children: any[] = React.Children.toArray(children_);

  const onUpdate = (valueNew_: any) => {
    let valueNew = valueNew_;

    if (uncheck && refs.value.current === valueNew) valueNew = '';

    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  return (
    <Line
      ref={ref}

      gap={1}

      direction={direction}

      align={props.align !== undefined ? props.align : props.direction === 'row' ? 'center' : 'flex-start'}

      justify={justify}

      role='radiogroup'

      aria-labelledby={refs.ids.label}

      Component={Component}

      className={classNames([
        staticClassName('Radios', theme) && [
          'onesy-Radios-root',
          `onesy-Radios-version-${version}`,
          `onesy-Radios-size-${size}`,
          disabled && `onesy-Radios-disabled`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {label && (
        <Type
          version={size === 'regular' ? 'l2' : size === 'large' ? 'l1' : 'l3'}

          id={refs.ids.label}

          {...LabelProps}

          className={classNames([
            staticClassName('Radios', theme) && [
              'onesy-Radios-label'
            ],

            LabelProps?.className,
            classes.label,
            disabled && classes.label_disabled
          ])}
        >
          {label}
        </Type>
      )}

      <Line
        gap={1}

        direction={direction}

        align={props.align !== undefined ? props.align : props.direction === 'row' ? 'center' : 'flex-start'}

        justify={justify}

        {...WrapperProps}
      >
        {children.map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index,

            checked: item.props.value === value,

            onChange: () => onUpdate(item.props.value),

            tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

            color: item.props.color !== undefined ? item.props.color : color,

            colorUnchecked: item.props.colorUnchecked !== undefined ? item.props.colorUnchecked : colorUnchecked,

            version: item.props.version !== undefined ? item.props.version : version,

            size: item.props.size !== undefined ? item.props.size : size,

            disabled: item.props.disabled !== undefined ? item.props.disabled : disabled
          })
        ))}
      </Line>
    </Line>
  );
});

Radios.displayName = 'onesy-Radios';

export default Radios;
