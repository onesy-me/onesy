import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import LineElement from '../Line';
import { ILine, TLineAlign } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IVersion, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  },

  text_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  error_color: {
    color: [theme.palette.light ? theme.palette.color.error[40] : theme.palette.color.error[80], '!important']
  },

  footer: {
    marginTop: '4px',
    paddingInline: theme.methods.space.value(2, 'px')
  },

  footer_version_text: {
    paddingInline: '0'
  },

  helperText: {
    display: 'inline-flex',
    color: theme.palette.text.default.secondary,
    userSelect: 'none'
  },

  disabled: {
    cursor: 'default',
    pointerEvents: 'none'
  }
}), { name: 'onesy-Label' });

export type ILabel = Omit<ILine, 'onChange'> & {
  colorUnchecked?: IColor;
  version?: IVersion;

  position?: 'start' | 'top' | 'bottom' | 'end';

  input?: IElement;

  label?: IElement;
  name?: IElement;

  valueDefault?: boolean;
  checkedDefault?: boolean;

  value?: any;
  checked?: any;

  onChange?: (value: boolean, event?: React.ChangeEvent<any>) => any;

  error?: boolean;
  helperText?: string;
  footer?: IElement;

  LabelProps?: IPropsAny;
  TypeProps?: IPropsAny;
  TextProps?: IPropsAny;
};

const Label: React.FC<ILabel> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyLabel?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    tonal = true,
    color,
    colorUnchecked,
    version,

    position: position_,

    size = 'regular',

    input,

    name,
    label: label_,

    valueDefault: valueDefault_,
    checkedDefault: checkedDefault_,

    checked: checked_,

    onChange,

    error,
    helperText,
    footer: footer_,

    disabled,

    LabelProps,
    TypeProps,
    TextProps,

    Component = 'label',

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const checkedDefault = valueDefault_ !== undefined ? valueDefault_ : checkedDefault_;
  const checked = checked_;

  const [value, setValue] = React.useState((checkedDefault !== undefined ? checkedDefault : checked) || false);

  const refs = {
    value: React.useRef<any>(undefined),
    ids: {
      label: React.useId()
    }
  };

  refs.value.current = value;

  const label = name !== undefined ? name : label_;

  const onUpdate = (value__: any, event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && event) {
      // Inner controlled checkbox
      if (!props.hasOwnProperty('checked')) setValue(event.target.checked);

      if (is('function', onChange)) onChange(event.target.checked, event);
    }
  };

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) setValue(checked);
  }, [checked]);

  let position = position_;

  const children: any[] = React.Children.toArray(children_);

  const Input = input !== undefined ? input : children[0];

  const Text = label !== undefined ? label : name !== undefined ? name : children.slice(1);

  const inlineElement = ['checkbox', 'radio', 'switch'].some(item => Input?.type?.displayName?.toLowerCase().includes(item)) || Input?.type?.displayName === undefined;

  let align: TLineAlign = 'center';

  const justify = 'center';

  if (position === undefined) position = inlineElement ? 'start' : 'bottom';

  if (!inlineElement && !['start', 'end'].includes(position)) align = 'flex-start';

  const footer = footer_ || helperText;

  let gap = size === 'small' ? 1 : size === 'regular' ? 1.5 : 2;

  if (version === 'text') gap = size === 'small' ? 0.25 : size === 'regular' ? 0.5 : 0.75;

  return (
    <Line
      gap={0}

      direction='column'

      {...other}
    >
      <Line
        gap={gap}

        direction={['top', 'bottom'].includes(position) ? position === 'bottom' ? 'column-reverse' : 'column' : position === 'end' ? 'row-reverse' : 'row'}

        align={align}

        justify={justify}

        role='group'

        aria-labelledby={refs.ids.label}

        aria-disabled={disabled}

        disabled={disabled}

        Component={Component}

        {...LabelProps}

        className={classNames([
          staticClassName('Label', theme) && [
            'onesy-Label-root',
            `onesy-Label-version-${version}`,
            `onesy-Label-size-${size}`,
            disabled && `onesy-Label-disabled`
          ],

          LabelProps?.className,
          className,
          classes.root,
          disabled && classes.disabled
        ])}
      >
        {Input && React.cloneElement(Input, {
          className: classNames([
            staticClassName('Label', theme) && [
              'onesy-Label-input'
            ],

            classes.input
          ]),

          tonal: Input?.props?.tonal !== undefined ? Input.props.tonal : tonal,

          color: Input?.props?.color !== undefined ? Input.props.color : color,

          colorUnchecked: Input?.props?.colorUnchecked !== undefined ? Input.props.colorUnchecked : colorUnchecked,

          version: Input?.props?.version !== undefined ? Input.props.version : version,

          size: Input?.props?.size !== undefined ? Input.props.size : size,

          onChange: onUpdate,

          checked: value,

          disabled
        })}

        {(Text as any[])?.length === 1 && is('simple', (Text as any[])[0]) ? (
          <Type
            version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

            id={refs.ids.label}

            {...TypeProps}

            {...TextProps}

            className={classNames([
              staticClassName('Label', theme) && [
                'onesy-Label-text'
              ],

              TextProps?.className,
              TypeProps?.className,
              classes.text,
              disabled && classes.text_disabled
            ])}
          >
            {Text[0]}
          </Type>
        ) : (
          <Line
            direction='row'

            id={refs.ids.label}

            {...TextProps}

            className={classNames([
              staticClassName('Label', theme) && [
                'onesy-Label-text-wrapper'
              ],

              TextProps?.className
            ])}
          >
            {(Text as any)?.map((item: any, index: number) => is('simple', item) ?
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}
              >
                {item}
              </Type> :

              React.cloneElement(item as any, { key: index })
            )}
          </Line>
        )}
      </Line>

      {footer && <>
        {(helperText !== undefined) && (
          <Line
            gap={2}

            direction='row'

            justify='space-between'

            className={classNames([
              staticClassName('Label', theme) && [
                'onesy-Label-footer'
              ],

              classes.footer
            ])}
          >
            {helperText && (
              <Type
                version='b3'

                className={classNames([
                  staticClassName('Label', theme) && [
                    'onesy-Label-helper-text',
                    error && 'onesy-Label-error'
                  ],

                  classes.helperText,
                  error && classes.error_color
                ])}
              >
                {helperText}
              </Type>
            )}
          </Line>
        )}

        {footer_}
      </>}
    </Line>
  );
};

Label.displayName = 'onesy-Label';

export default Label;
