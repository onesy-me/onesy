import React from 'react';

import { is, clamp, numberWithCommas, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialKeyboardArrowUp from '@onesy/icons-material-rounded-react/IconMaterialKeyboardArrowUpW100';
import IconMaterialKeyboardArrowDown from '@onesy/icons-material-rounded-react/IconMaterialKeyboardArrowDownW100';

import AdvancedTextFieldElement from '../AdvancedTextField';
import IconButtonElement from '../IconButton';
import { IAdvancedTextField } from '../AdvancedTextField/AdvancedTextField';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-NumericTextField' });

export type INumericTextField = IAdvancedTextField & {
  min?: number;
  max?: number;

  increment?: boolean;
  decrement?: boolean;

  incrementValue?: number;
  decrementValue?: number;

  IconIncrement?: IElementReference;
  IconDecrement?: IElementReference;

  IconButtonProps?: IPropsAny;
};

const NumericTextField: React.FC<INumericTextField> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyNumericTextField?.props?.default, ...props_ };

  const AdvancedTextField = theme?.elements?.AdvancedTextField || AdvancedTextFieldElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const {
    valueDefault,
    value: value_,

    onChange: onChange_,

    version = 'outlined',
    size = 'regular',

    min,
    max,

    increment = true,
    decrement = true,

    incrementValue = 1,
    decrementValue = 1,

    onFocus: onFocus_,
    onBlur: onBlur_,

    IconIncrement = IconMaterialKeyboardArrowUp,
    IconDecrement = IconMaterialKeyboardArrowDown,

    IconButtonProps,
    IconProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    focus: React.useRef<any>(undefined),
    min: React.useRef<any>(undefined),
    max: React.useRef<any>(undefined),
    onChange: React.useRef(onChange_),
    props: React.useRef(props)
  };

  refs.value.current = value;

  refs.focus.current = focus;

  refs.min.current = min;

  refs.max.current = max;

  refs.onChange.current = onChange_;

  refs.props.current = props;

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'End', 'Home'].includes(event.key)) {
        event.preventDefault();
      }

      switch (event.key) {
        case 'End':
          if (refs.focus.current && refs.min.current !== undefined) {
            let valueNew = refs.min.current;

            if (props.thousand) valueNew = numberWithCommas(valueNew);

            if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

            onChange(valueNew);
          }

          return;

        case 'Home':
          if (refs.focus.current && refs.max.current !== undefined) {
            let valueNew = refs.max.current;

            if (props.thousand) valueNew = numberWithCommas(valueNew);

            if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

            onChange(valueNew);
          }

          return;

        case 'ArrowUp':
          if (refs.focus.current) onIncrement();

          return;

        case 'ArrowDown':
          if (refs.focus.current) onDecrement();

          return;

        default:
          break;
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', method);

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) setValue(value_);
    }
  }, [value_]);

  const onFocus = (event: React.FocusEvent<any>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  };

  const onBlur = (event: React.FocusEvent<any>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  };

  const onChange = (valueNew_: any) => {
    let valueNew: any = valueNew_;

    const min_ = refs.min.current !== undefined ? refs.min.current : Number.MIN_SAFE_INTEGER;

    const max_ = refs.max.current !== undefined ? refs.max.current : Number.MAX_SAFE_INTEGER;

    if (['', ' ', refs.props.current.prefix, `${refs.props.current.prefix} `, undefined].includes(valueNew)) valueNew = '';

    if (!['', ' ', '+', '-', 'e', 'e+', 'e-', `${refs.props.current.prefix}+`, `${refs.props.current.prefix}-`, undefined].includes(valueNew)) {
      if (refs.props.current.prefix !== undefined) valueNew = valueNew.replace(refs.props.current.prefix, '');

      if (refs.props.current.thousand) valueNew = valueNew.replace(new RegExp(`\\${refs.props.current.thousandSeparator || ','}`, 'g'), '');

      valueNew = clamp(+valueNew, min_, max_);

      if (refs.props.current.thousand) valueNew = numberWithCommas(valueNew);

      if (refs.props.current.prefix !== undefined) valueNew = `${refs.props.current.prefix}${valueNew}`;
    }

    if (
      ['+', '-', 'e', 'e+', 'e-'].includes(valueNew_) ||
      ((String(valueNew_).startsWith('-0') || String(valueNew_).includes('.')) && clamp(+valueNew_, min_, max_) === +valueNew_)
    ) valueNew = valueNew_;

    // Update inner or controlled
    if (!refs.props.current.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', refs.onChange.current)) refs.onChange.current(valueNew);
  };

  const onIncrement = () => {
    let valueNew: any = refs.value.current || '0';

    if (refs.props.current.prefix !== undefined) valueNew = valueNew.replace(refs.props.current.prefix, '');

    if (refs.props.current.thousand) valueNew = valueNew.replace(new RegExp(`\\${refs.props.current.thousandSeparator || ','}`, 'g'), '');

    const min_ = refs.min.current !== undefined ? refs.min.current : Number.MIN_SAFE_INTEGER;

    const max_ = refs.max.current !== undefined ? refs.max.current : Number.MAX_SAFE_INTEGER;

    valueNew = clamp(+valueNew + incrementValue, min_, max_);

    if (refs.props.current.thousand) valueNew = numberWithCommas(valueNew);

    if (refs.props.current.prefix !== undefined) valueNew = `${refs.props.current.prefix}${valueNew}`;

    // Update
    onChange(valueNew);
  };

  const onDecrement = () => {
    let valueNew: any = refs.value.current || '0';

    if (refs.props.current.prefix !== undefined) valueNew = valueNew.replace(refs.props.current.prefix, '');

    if (refs.props.current.thousand) valueNew = valueNew.replace(new RegExp(`\\${refs.props.current.thousandSeparator || ','}`, 'g'), '');

    const min_ = refs.min.current !== undefined ? refs.min.current : Number.MIN_SAFE_INTEGER;

    const max_ = refs.max.current !== undefined ? refs.max.current : Number.MAX_SAFE_INTEGER;

    valueNew = clamp(+valueNew - decrementValue, min_, max_);

    if (refs.props.current.thousand) valueNew = numberWithCommas(valueNew);

    if (refs.props.current.prefix !== undefined) valueNew = `${refs.props.current.prefix}${valueNew}`;

    // Update
    onChange(valueNew);
  };

  const end = [];

  const iconButtonProps = {
    size: 24,
    fontSize: '1.5rem'
  };

  if (decrement) end.push(
    <IconButton
      onClick={onDecrement}

      {...iconButtonProps}

      {...IconButtonProps}
    >
      <IconDecrement {...IconProps} />
    </IconButton>
  );

  if (increment) end.push(
    <IconButton
      onClick={onIncrement}

      {...iconButtonProps}

      {...IconButtonProps}
    >
      <IconIncrement {...IconProps} />
    </IconButton>
  );

  return (
    <AdvancedTextField
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      value={value}

      onFocus={onFocus}

      onBlur={onBlur}

      onChange={onChange}

      version={version}

      size={size}

      validate={(valueNew_: any) => {
        if (valueNew_.startsWith(' ') || valueNew_.endsWith(' ')) return;

        if (['', ' ', '+', '-', 'e', 'e+', 'e-', '-0', '-0.', props.prefix, `${props.prefix} `, `${props.prefix}+`, `${props.prefix}-`, undefined].includes(valueNew_)) return true;

        let valueNew = valueNew_;

        if (props.prefix !== undefined) valueNew = valueNew_.replace(props.prefix, '');

        if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

        valueNew = +valueNew;

        return is('number', valueNew);
      }}

      end={end}

      endVerticalAlign='center'

      className={classNames([
        staticClassName('NumericTextField', theme) && [
          'onesy-NumericTextField-root',
          `onesy-NumericTextField-version-${version}`,
          `onesy-NumericTextField-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

NumericTextField.displayName = 'onesy-NumericTextField';

export default NumericTextField;
