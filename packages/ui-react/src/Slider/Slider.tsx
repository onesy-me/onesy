import React from 'react';

import { clamp, equalDeep, is, isEnvironment, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconButtonElement from '../IconButton';
import TooltipElement from '../Tooltip';
import ZoomElement from '../Zoom';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IBaseElement, IElement, IPropsAny, ISizeAny } from '../types';

const useStyle = styleMethod(theme => {
  const rail = {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'inherit'
  };

  const horizontal = {
    top: '50%',
    transform: 'translateY(-50%)'
  };

  const vertical = {
    left: '50%',
    transform: 'translateX(-50%)'
  };

  return {
    root: {
      position: 'relative',
      display: 'inline-flex',
      borderRadius: `${theme.shape.radius.unit * 0.75}px`,
      cursor: 'pointer',
      touchAction: 'none'
    },

    root_orientation_horizontal: {
      width: '100vw',
      maxWidth: 400,
      height: 4,
      margin: '16px 0 28px'
    },

    root_orientation_vertical: {
      height: '100vh',
      maxHeight: 240,
      width: 4,
      margin: '0 16px 0 28px'
    },

    rail: {
      ...rail
    },

    rail_orientation_horizontal: {
      insetInline: '0'
    },

    rail_orientation_vertical: {
      insetBlock: '0'
    },

    rail_orientation_horizontal_size_small: { height: '3px' },

    rail_orientation_horizontal_size_regular: { height: '4px' },

    rail_orientation_horizontal_size_large: { height: '5px' },

    rail_orientation_vertical_size_small: { width: '3px' },

    rail_orientation_vertical_size_regular: { width: '4px' },

    rail_orientation_vertical_size_large: { width: '5px' },

    track: {
      ...rail,
    },

    track_orientation_horizontal: {
      insetInlineStart: '0'
    },

    track_orientation_vertical: {
      insetBlockEnd: '0'
    },

    track_orientation_horizontal_size_small: { height: '5px' },

    track_orientation_horizontal_size_regular: { height: '6px' },

    track_orientation_horizontal_size_large: { height: '7px' },

    track_orientation_vertical_size_small: { width: '5px' },

    track_orientation_vertical_size_regular: { width: '6px' },

    track_orientation_vertical_size_large: { width: '7px' },

    // Color
    // rail
    rail_color_default: { background: theme.methods.palette.color.value('default', 40, true) },

    rail_color_neutral: { background: theme.methods.palette.color.value('neutral', 40, true) },

    rail_color_primary: { background: theme.methods.palette.color.value('primary', 40, true) },

    rail_color_secondary: { background: theme.methods.palette.color.value('secondary', 40, true) },

    rail_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 40, true) },

    rail_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 40, true) },

    rail_color_info: { background: theme.methods.palette.color.value('info', 40, true) },

    rail_color_success: { background: theme.methods.palette.color.value('success', 40, true) },

    rail_color_warning: { background: theme.methods.palette.color.value('warning', 40, true) },

    rail_color_error: { background: theme.methods.palette.color.value('info', 40, true) },

    // track
    track_color_default: { background: theme.methods.palette.color.value('default', 30, true) },

    track_color_neutral: { background: theme.methods.palette.color.value('neutral', 30, true) },

    track_color_primary: { background: theme.methods.palette.color.value('primary', 30, true) },

    track_color_secondary: { background: theme.methods.palette.color.value('secondary', 30, true) },

    track_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 30, true) },

    track_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 30, true) },

    track_color_info: { background: theme.methods.palette.color.value('info', 30, true) },

    track_color_success: { background: theme.methods.palette.color.value('success', 30, true) },

    track_color_warning: { background: theme.methods.palette.color.value('warning', 30, true) },

    track_color_error: { background: theme.methods.palette.color.value('error', 30, true) },

    // Tonal
    track_tonal_color_neutral: { background: theme.methods.palette.color.value('neutral', 20, true) },

    track_tonal_color_primary: { background: theme.methods.palette.color.value('primary', 20, true) },

    track_tonal_color_secondary: { background: theme.methods.palette.color.value('secondary', 20, true) },

    track_tonal_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 20, true) },

    track_tonal_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 20, true) },

    track_tonal_color_info: { background: theme.methods.palette.color.value('info', 20, true) },

    track_tonal_color_success: { background: theme.methods.palette.color.value('success', 20, true) },

    track_tonal_color_warning: { background: theme.methods.palette.color.value('warning', 20, true) },

    track_tonal_color_error: { background: theme.methods.palette.color.value('info', 20, true) },

    // iconButton
    iconButton_color_default: {
      '&.onesy-IconButton-root': {
        color: theme.palette.text.default.primary
      }
    },

    iconButton_color_neutral: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.neutral.main
      }
    },

    iconButton_color_primary: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.primary.main
      }
    },

    iconButton_color_secondary: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.secondary.main
      }
    },

    iconButton_color_tertiary: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.tertiary.main
      }
    },

    iconButton_color_quaternary: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.quaternary.main
      }
    },

    iconButton_color_info: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.info.main
      }
    },

    iconButton_color_success: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.success.main
      }
    },

    iconButton_color_warning: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.warning.main
      }
    },

    iconButton_color_error: {
      '&.onesy-IconButton-root': {
        color: theme.palette.color.error.main
      }
    },

    // Tonal
    iconButton_tonal_color_neutral: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('default', 70)
      }
    },

    iconButton_tonal_color_primary: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('primary', 70)
      }
    },

    iconButton_tonal_color_secondary: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('secondary', 70)
      }
    },

    iconButton_tonal_color_tertiary: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('tertiary', 70)
      }
    },

    iconButton_tonal_color_quaternary: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('quaternary', 70)
      }
    },

    iconButton_tonal_color_info: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('info', 70)
      }
    },

    iconButton_tonal_color_success: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('success', 70)
      }
    },

    iconButton_tonal_color_warning: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('warning', 70)
      }
    },

    iconButton_tonal_color_error: {
      '&.onesy-IconButton-root': {
        color: theme.methods.palette.color.value('error', 70)
      }
    },

    square: {
      borderRadius: '0px'
    },

    iconButton: {
      position: 'absolute'
    },

    icon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`,
      transform: 'scale(0.7)',
      transition: theme.methods.transitions.make('transform', { duration: 'xs' })
    },

    iconActive: {
      transform: 'scale(1)'
    },

    icon_size_small: {
      width: '16px',
      height: '16px',
    },

    icon_size_regular: {
      width: '20px',
      height: '20px',
    },

    icon_size_large: {
      width: '24px',
      height: '24px',
    },

    marks: {
      inset: '0',
      ...rail
    },

    mark: {
      position: 'absolute',
      width: '2px',
      height: '2px',
      borderRadius: theme.methods.shape.radius.value(40, 'px')
    },

    orientation_horizontal: {
      ...horizontal
    },

    orientation_vertical: {
      ...vertical
    },

    labels: {
      position: 'absolute',
      whiteSpace: 'nowrap',
      userSelect: 'none'
    },

    labels_orientation_horizontal: {
      width: '100%',
      left: '0',
      top: '15px'
    },

    labels_orientation_vertical: {
      height: '100%',
      top: '0',
      insetInlineStart: '21px'
    },

    label: {
      position: 'absolute',
      transition: theme.methods.transitions.make('color', { duration: 'xs' }),
      color: theme.palette.text.default.secondary
    },

    label_orientation_horizontal: {
      transform: 'translateX(-50%)'
    },

    label_orientation_horizontal_rtl: {
      transform: 'translateX(50%)'
    },

    label_orientation_vertical: {
      transform: 'translateY(50%)'
    },

    label_active: {
      color: theme.palette.text.default.primary
    },

    focus_outline: {
      outline: `1px solid ${theme.palette.text.default.secondary}`,
      outlineOffset: '8px'
    },

    readOnly: {
      cursor: 'default'
    },

    tooltip: {
      '& .onesy-Tooltip-name': {
        padding: '0',
        lineHeight: '0',
        minWidth: '30px',
        paddingTop: '100%',
        overflow: 'hidden',
        borderRadius: `${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} 0px`,
        transform: 'rotate(-45deg)',

        '& .onesy-Tooltip-name-text': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(45deg)'
        }
      },

      '&.onesy-Tooltip-position-left': {
        '& .onesy-Tooltip-name': {
          borderRadius: `${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} 0px ${theme.methods.shape.radius.value(40, 'px')}`
        }
      },

      '&.onesy-Tooltip-position-right': {
        '& .onesy-Tooltip-name': {
          borderRadius: `0px ${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')}`
        }
      }
    },

    tooltip_switch_orientation_horizontal_ltr: {
      '& .onesy-Tooltip-name': {
        transform: 'rotate(135deg)',

        '& .onesy-Tooltip-name-text': {
          transform: 'translate(-50%, -50%) rotate(-135deg)'
        }
      }
    },

    tooltip_switch_orientation_horizontal_rtl: {
      '& .onesy-Tooltip-name': {
        transform: 'rotate(135deg)',

        '& .onesy-Tooltip-name-text': {
          transform: 'translate(-50%, -50%) rotate(-135deg)'
        }
      }
    },

    tooltipLabelText: {
      minWidth: '40px',
      textAlign: 'center'
    },

    disabled: {
      cursor: 'default',
      pointerEvents: 'none',
      opacity: theme.palette.visual_contrast.default.opacity.disabled
    }
  };
}, { name: 'onesy-Slider' });

export type TSliderValue = number | Array<number>;

export type ISlider = Omit<IBaseElement, 'onChange'> & {
  value?: TSliderValue;
  valueDefault?: TSliderValue;
  onChange?: (value: TSliderValue) => any;

  orientation?: 'vertical' | 'horizontal';

  marks?: Array<{
    value?: number;

    label?: IElement;
  }>;
  precision?: number;
  min?: number;
  max?: number;
  tooltip?: 'always' | boolean;
  labels?: boolean;
  onlyMarks?: boolean;
  labelTooltipResolve?: (value: number) => IElement;
  iconButtonPositionResolve?: (value: number, normalized: number, size: ISizeAny) => string;
  noTrack?: boolean;
  noButtons?: boolean;
  square?: boolean;
  inverted?: boolean;

  icon?: any;

  IconButtonProps?: IPropsAny;
  LabelProps?: IPropsAny;
  TooltipProps?: IPropsAny;
};

const Slider: React.FC<ISlider> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySlider?.props?.default, ...props_ }), [props_]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Zoom = React.useMemo(() => theme?.elements?.Zoom || ZoomElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = true,
    color: color_ = 'primary',
    size = 'regular',

    value: value_,
    valueDefault,
    onChange,

    orientation = 'horizontal',

    marks,
    precision = 0.001,
    min = 0,
    max = 100,
    tooltip,
    labels,
    onlyMarks,
    labelTooltipResolve,
    iconButtonPositionResolve,
    noTrack,
    noButtons,
    square,
    inverted,
    readOnly,
    disabled,

    icon,

    onMouseDown: onMouseDown_,
    onTouchStart: onTouchStart_,

    IconButtonProps,
    LabelProps,
    TooltipProps,

    Component = 'span',

    style,
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(() => {
    const valueNew = (valueDefault !== undefined ? valueDefault : value_) || (is('number', min) ? min : 0);

    return is('array', valueNew) ? (valueNew as any).sort((a, b) => a - b).map(item => clamp(item, min, max)) : clamp(valueNew as any, min, max);
  });
  const [mouseDown, setMouseDown] = React.useState<any>(false);
  const [mouseDownButton, setMouseDownButton] = React.useState<any>(false);
  const [focus, setFocus] = React.useState(false);
  const [focusButton, setFocusButton] = React.useState<any>(false);

  const refs = {
    root: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    props: React.useRef<any>(undefined),
    mouseDown: React.useRef<any>(undefined),
    mouseDownButton: React.useRef<any>(undefined),
    focusButton: React.useRef<any>(undefined),
    direction: React.useRef<any>(undefined),
    iconButtons: React.useRef<Array<any>>([]),
    min: React.useRef(min),
    max: React.useRef(max)
  };

  refs.value.current = value;

  refs.props.current = props;

  refs.mouseDown.current = mouseDown;

  refs.mouseDownButton.current = mouseDownButton;

  refs.focusButton.current = focusButton;

  refs.direction.current = theme.direction;

  refs.min.current = min;

  refs.max.current = max;

  let color = color_;

  if (disabled) color = 'default';

  const valueDecimals = (String(precision).includes('e-') ? +String(precision).split('e-')[1] : String(precision).split('.')[1]?.length) || 0;

  const valuePrecision = (valueMouse: number, mouseDownButtonUpdate = false) => {
    let value__ = valueFromPercentageWithinRange(valueMouse * 100, refs.min.current, refs.max.current);

    if (refs.direction.current === 'rtl' && orientation === 'horizontal') value__ = (refs.max.current + refs.min.current) - value__;

    if (value__ <= refs.min.current) return refs.min.current;

    if (value__ >= refs.max.current) return refs.max.current;

    // previous value
    let previous = clamp(+(value__ - (value__ % precision)).toFixed(valueDecimals), refs.min.current, refs.max.current);

    if (value__ < 0) previous -= precision;

    if (onlyMarks && is('array', marks)) {
      const previousMark = marks.map(item => item.value).sort((a, b) => b - a).find(item => item <= value__);

      previous = previousMark !== undefined ? previousMark : refs.min.current;
    }

    // next value
    let next = clamp(+(previous + precision).toFixed(valueDecimals), refs.min.current, refs.max.current);

    if (onlyMarks && is('array', marks)) {
      const nextMark = marks.map(item => item.value).sort((a, b) => a - b).find(item => item >= value__);

      next = nextMark !== undefined ? nextMark : refs.max.current;
    }

    const valueNew = value__ < previous + ((next - previous) / 2) ? previous : next;

    if (mouseDownButtonUpdate && is('array', refs.value.current)) {
      const items = refs.value.current.map(item => Math.abs(valueNew - item));
      const minItem = Math.min(...items);

      const index = items.findIndex(item => item === minItem);

      setMouseDownButton(index);

      refs.mouseDownButton.current = index;
    }

    return valueNew;
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!disabled && !readOnly) {
        setMouseDown(false);
        setMouseDownButton(false);
      }
    };

    const onMouseMove = (event: TouchEvent | MouseEvent) => {
      if (!refs.props.current.disabled && !refs.props.current.readOnly && refs.mouseDown.current) {
        let x: number;
        let y: number;

        if ((event as MouseEvent).clientX !== undefined) {
          x = (event as MouseEvent).clientX;
          y = (event as MouseEvent).clientY;
        }
        else {
          x = (event as TouchEvent).touches[0].clientX;
          y = (event as TouchEvent).touches[0].clientY;
        }

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        const value__ = valuePrecision(orientation === 'horizontal' ? (x - rect.x) / width : (1 - (y - rect.y) / height));

        const valueNew = is('array', refs.value.current) ? [...refs.value.current] : value__;

        if (is('array', refs.value.current)) {
          let index = is('number', refs.mouseDownButton.current) ? refs.mouseDownButton.current : 0;

          if (index > 0 && value__ < refs.value.current[index - 1]) {
            index -= 1;

            setMouseDownButton(index);
          }

          if (index < refs.value.current.length - 1 && value__ > refs.value.current[index + 1]) {
            index += 1;

            setMouseDownButton(index);
          }

          valueNew[index] = value__;
        }

        if (!equalDeep(valueNew, refs.value.current)) {
          // Inner controlled value
          if (!props.hasOwnProperty('value')) setValue(valueNew);

          if (is('function', onChange)) onChange(valueNew);
        }
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);
    rootDocument.addEventListener('mousemove', onMouseMove);
    rootDocument.addEventListener('touchend', onMouseUp, { passive: true });
    rootDocument.addEventListener('touchmove', onMouseMove, { passive: true });

    setInit(true);

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);
      rootDocument.removeEventListener('touchend', onMouseUp);
      rootDocument.removeEventListener('mousemove', onMouseMove);
      rootDocument.removeEventListener('touchmove', onMouseMove);
    };
  }, []);

  React.useEffect(() => {
    if (init && value_ !== value) setValue(value_);
  }, [value_]);

  const move = React.useCallback((x: number, y: number) => {
    if (!disabled && !readOnly) {
      const rect = refs.root.current.getBoundingClientRect();

      const { width, height } = rect;

      // Value to the precision point value
      const value__ = valuePrecision(orientation === 'horizontal' ? (x - rect.x) / width : (1 - (y - rect.y) / height), true);

      const valueNew = is('array', refs.value.current) ? [...refs.value.current] : value__;

      if (is('array', refs.value.current)) {
        let index = is('number', refs.mouseDownButton.current) ? refs.mouseDownButton.current : 0;

        if (index > 0 && value__ <= refs.value.current[index - 1]) {
          index -= 1;

          setMouseDownButton(index);
        }

        if (index < refs.value.current.length - 1 && value__ >= refs.value.current[index + 1]) {
          index += 1;

          setMouseDownButton(index);
        }

        valueNew[index] = value__;
      }

      if (!equalDeep(valueNew, refs.value.current)) {
        // Inner controlled value
        if (!props.hasOwnProperty('value')) setValue(valueNew);

        if (is('function', onChange)) onChange(valueNew);
      }
    }
  }, [disabled, readOnly, onChange, value, mouseDownButton]);

  const moveItem = (forward_ = true) => {
    const forward = (orientation === 'vertical' || (theme.direction === 'ltr' && orientation === 'horizontal')) ? forward_ : !forward_;

    let valueNew = is('array', refs.value.current) ? [...refs.value.current] : refs.value.current;
    let index = refs.focusButton.current || 0;

    let value__ = is('array', valueNew) ? valueNew[index] : valueNew;

    // previous value
    let previous = clamp(+(value__ - precision).toFixed(valueDecimals), refs.min.current, refs.max.current);

    if (onlyMarks && is('array', marks)) {
      const previousMark = marks.map(item => item.value).sort((a, b) => b - a).find(item => item < value__);

      previous = previousMark !== undefined ? previousMark : refs.min.current;
    }

    // next value
    let next = clamp(+(value__ + precision).toFixed(valueDecimals), refs.min.current, refs.max.current);

    if (onlyMarks && is('array', marks)) {
      const nextMark = marks.map(item => item.value).sort((a, b) => a - b).find(item => item > value__);

      next = nextMark !== undefined ? nextMark : refs.max.current;
    }

    value__ = forward ? next : previous;

    if (is('array', refs.value.current)) {
      if (index > 0 && value__ < refs.value.current[index - 1]) {
        index -= 1;

        refs.focusButton.current = index;

        setFocusButton(index);

        refs.iconButtons.current[index].focus();
      }

      if (index < refs.value.current.length - 1 && value__ > refs.value.current[index + 1]) {
        index += 1;

        refs.focusButton.current = index;

        setFocusButton(index);

        refs.iconButtons.current[index].focus();
      }

      valueNew[index] = value__;
    }
    else valueNew = value__;

    if (!equalDeep(valueNew, refs.value.current)) {
      if (!props.hasOwnProperty('value')) setValue(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<any>) => {
    if (!disabled && !readOnly) {
      if (['Enter', 'Escape', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
        // Prevent default
        event.preventDefault();

        let valueNew = refs.value.current;

        switch (event.key) {
          case 'End':
            if (is('array', refs.value.current)) {
              valueNew = [...refs.value.current];

              valueNew[0] = refs.min.current;
            } else valueNew = refs.min.current;

            if (!props.hasOwnProperty('value')) setValue(valueNew);

            if (is('function', onChange)) return onChange(valueNew);

            return;

          case 'Home':
            if (is('array', refs.value.current)) {
              valueNew = [...refs.value.current];

              valueNew[valueNew.length - 1] = refs.max.current;
            } else valueNew = refs.max.current;

            if (!props.hasOwnProperty('value')) setValue(valueNew);

            if (is('function', onChange)) return onChange(valueNew);

            return;

          case 'ArrowUp':
          case 'ArrowRight':
            return moveItem();

          case 'ArrowDown':
          case 'ArrowLeft':
            return moveItem(false);

          default:
            break;
        }
      }
    }
  }, [disabled, readOnly, value, precision, focusButton]);

  const onFocus = React.useCallback(() => {
    if (!disabled && !readOnly && !mouseDown) setFocus(true);
  }, [disabled, readOnly, mouseDown]);

  const onBlur = React.useCallback(() => {
    if (!disabled && !readOnly) setFocus(false);
  }, [disabled, readOnly]);

  const onFocusButton = React.useCallback((index: number) => {
    if (!disabled && !readOnly) setFocusButton(index);
  }, [disabled, readOnly]);

  const onMouseDownButton = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>, index: number) => {
    if (!disabled && !readOnly) setMouseDownButton(index);
  }, [disabled, readOnly]);

  const onMouseDown = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      setMouseDown(true);

      const x = (event as React.MouseEvent<any>).clientX ? (event as React.MouseEvent<any>).clientX : (event as React.TouchEvent<any>).touches?.[0]?.clientX;

      const y = (event as React.MouseEvent<any>).clientY ? (event as React.MouseEvent<any>).clientY : (event as React.TouchEvent<any>).touches?.[0]?.clientY;

      move(x, y);
    }

    if (is('function', onMouseDown_)) onMouseDown_(event as any);
  }, [disabled, readOnly, onMouseDown_]);

  const onTouchStart = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      setMouseDown(true);

      const x = (event as React.MouseEvent<any>).clientX ? (event as React.MouseEvent<any>).clientX : (event as React.TouchEvent<any>).touches?.[0]?.clientX;

      const y = (event as React.MouseEvent<any>).clientY ? (event as React.MouseEvent<any>).clientY : (event as React.TouchEvent<any>).touches?.[0]?.clientY;

      move(x, y);
    }

    if (is('function', onMouseDown_)) onMouseDown_(event as any);
  }, [disabled, readOnly, onTouchStart_]);

  const styles: any = {
    root: {

    },
    icon: {},
    iconButton: {},
    rail: {},
    track: {},
    markRail: {},
    markTrack: {},
    label: {},
  };

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!theme.palette.color[color] && color !== 'default') {
    styles.markRail.background = styles.rail.background = theme.methods.palette.color.value(undefined, theme.palette.light ? 40 : 90, true, palette);

    styles.label.background = styles.markTrack.background = styles.icon.background = styles.track.background = styles.iconButton.color = !tonal ? palette.main : theme.methods.palette.color.value(undefined, 40, true, palette);

    styles.label.color = theme.methods.palette.color.text(styles.label.background, true, 'light');
  }

  styles.label.background = !tonal ? (palette?.[40] || (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any).main)) : theme.methods.palette.color.value(color as any, 40, true, palette);

  styles.label.color = theme.methods.palette.color.text(styles.label.background, true, 'light');

  const values = (is('array', value) ? value : [value]);

  const valueValue = (value__: any = values[0]) => {
    let valueNew = value__;

    if (value__ === refs.min.current) valueNew = 0;

    else if (value__ === refs.max.current) valueNew = 100;

    else valueNew = percentageFromValueWithinRange(value__, refs.min.current, refs.max.current);

    return clamp(valueNew, 0, 100);
  };

  const valueMark = (value__: any) => {
    if (value__ === refs.min.current) return 0;

    if (value__ === refs.max.current) return `calc(100% - 2px)`;

    return `calc(${valueValue(value__)}% - 1px)`;
  };

  const propInset = orientation === 'horizontal' ? 'insetInlineStart' : 'insetBlockEnd';

  const iconButtonStyles = (value__: number) => {
    const style_ = {};

    if (is('function', iconButtonPositionResolve)) style_[propInset] = iconButtonPositionResolve(value__, valueValue(value__), size);
    else {
      if (size === 'small') {
        style_[propInset] = `calc(${valueValue(value__)}% - 15px)`;
      }

      if (size === 'regular') {
        style_[propInset] = `calc(${valueValue(value__)}% - 20px)`;
      }

      if (size === 'large') {
        style_[propInset] = `calc(${valueValue(value__)}% - 25px)`;
      }
    }

    return style_;
  };

  const propTrac = orientation === 'horizontal' ? 'width' : 'height';

  if (values.length === 1) styles.track[propTrac] = `${valueValue()}%`;
  else {
    const start = Math.min(...values);
    const end = Math.max(...values);

    if (orientation === 'horizontal') {
      styles.track.insetInlineStart = `${valueValue(start)}%`;
      styles.track.insetInlineEnd = `${100 - valueValue(end)}%`;
    }

    if (orientation === 'vertical') {
      styles.track.insetBlockStart = `${100 - valueValue(end)}%`;
      styles.track.insetBlockEnd = `${valueValue(start)}%`;
    }
  }

  const marksValue = Math.ceil((refs.max.current - refs.min.current) / precision);

  let marks_ = [];

  if (marks) {
    if (is('array', marks)) marks_ = marks;
    else if (marksValue <= 1e3) {
      let markSum = refs.min.current;
      let index = 1;

      marks_.push({ value: refs.min.current, label: refs.min.current });

      while (markSum <= refs.max.current) {
        markSum = refs.min.current + (precision * index++);

        if (markSum < refs.max.current) marks_.push({ value: markSum, label: markSum });
      }

      marks_.push({ value: refs.max.current, label: refs.max.current });
    }
  }

  const markTrack = (value__: number) => {
    if (values.length === 1) return !inverted ? value__ <= values[0] : value__ > values[0];
    else return !inverted ? value__ >= values[0] && value__ <= values[values.length - 1] : value__ < values[0] || value__ > values[values.length - 1];
  };

  const labelMethod = is('function', labelTooltipResolve) ? labelTooltipResolve : (value__: number) => +(value__).toFixed();

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tabIndex={noButtons ? 0 : -1}

      onFocus={onFocus}

      onBlur={onBlur}

      onTouchStart={onTouchStart}

      onMouseDown={onMouseDown}

      onKeyDown={onKeyDown}

      role='slider'

      aria-orientation={orientation}

      aria-valuenow={valueValue()}

      aria-valuetext={`${valueValue()}%`}

      aria-valuemin={min}

      aria-valuemax={max}

      className={classNames([
        staticClassName('Slider', theme) && [
          'onesy-Slider-root',
          `onesy-Slider-size-${size}`,
          mouseDown && `onesy-Slider-mouse-down`,
          focus && `onesy-Slider-focus`,
          readOnly && `onesy-Slider-read-only`,
          disabled && `onesy-Slider-disabled`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        tonal && classes[`tonal_color_${color}`],
        classes[`root_orientation_${orientation}`],
        noButtons && focus && classes.focus_outline,
        square && classes.square,
        readOnly && classes.readOnly,
        disabled && classes.disabled
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      <span
        className={classNames([
          staticClassName('Slider', theme) && [
            'onesy-Slider-rail'
          ],

          classes.rail,
          classes[`orientation_${orientation}`],
          classes[`rail_orientation_${orientation}`],
          classes[`rail_orientation_${orientation}_size_${size}`],
          !inverted ? [
            classes[`rail_color_${color}`]
          ] : [
            classes[`track_color_${color}`],
            tonal && classes[`track_tonal_color_${color}`]
          ]
        ])}

        style={styles.rail}
      />

      {!noTrack && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'onesy-Slider-track'
            ],

            classes.track,
            classes[`orientation_${orientation}`],
            classes[`track_orientation_${orientation}`],
            classes[`track_orientation_${orientation}_size_${size}`],
            !inverted ? [
              classes[`track_color_${color}`],
              tonal && classes[`track_tonal_color_${color}`]
            ] : [
              classes[`rail_color_${color}`]
            ]
          ])}

          style={styles.track}
        />
      )}

      {!!marks_.length && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'onesy-Slider-marks'
            ],

            classes.marks,
            classes[`orientation_${orientation}`],
            classes[`track_size_${size}`]
          ])}
        >
          {marks_.map((item: any, index: number) => (
            <span
              key={index}

              className={classNames([
                staticClassName('Slider', theme) && [
                  'onesy-Slider-mark'
                ],

                classes.mark,
                markTrack(item.value) ? classes[`rail_color_${color}`] : [
                  classes[`track_color_${color}`],
                  tonal && classes[`track_tonal_color_${color}`]
                ]
              ])}

              style={{
                ...(markTrack(item.value) ? styles.markRail : styles.markTrack),

                [propInset]: valueMark(item.value)
              }}
            />
          ))}
        </span>
      )}

      {labels && !!marks_.length && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'onesy-Slider-labels'
            ],

            classes.labels,
            classes[`labels_orientation_${orientation}`]
          ])}
        >
          {marks_.map((item: any, index: number) => (
            <Type
              key={index}

              version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

              {...LabelProps}

              className={classNames([
                staticClassName('Slider', theme) && [
                  'onesy-Slider-label'
                ],

                LabelProps?.className,
                classes.label,
                classes[`label_orientation_${orientation}`],
                theme.direction === 'rtl' && classes[`label_orientation_${orientation}_rtl`],
                item.value <= value && classes.label_active
              ])}

              style={{
                [propInset]: valueMark(item.value),

                ...LabelProps?.style
              }}
            >
              {item.label}
            </Type>
          ))}
        </span>
      )}

      {!noButtons && values.map((value__: number, index: number) => {
        const classNameIcon = classNames([
          staticClassName('Slider', theme) && [
            'onesy-Slider-icon'
          ],

          classes.icon,
          classes[`track_color_${color}`],
          tonal && classes[`track_tonal_color_${color}`],
          classes[`icon_size_${size}`],
          (mouseDownButton === index) && classes.iconActive
        ]);

        return (
          <Tooltip
            key={index}

            className={classNames([
              classes.tooltip,
              classes[`tooltip_orientation_${orientation}`]
            ])}

            classNameSwitch={classes[`tooltip_switch_orientation_${orientation}_${theme.direction}`]}

            {...((tooltip === 'always') || (tooltip !== undefined && mouseDownButton === index) ? { open: true } : tooltip === undefined ? { open: false } : {})}

            label={labelMethod(value__)}

            position={orientation === 'horizontal' ? 'top' : theme.direction === 'ltr' ? 'left' : 'right'}

            alignment='center'

            TransitionComponent={Zoom}

            transformOrigin={orientation === 'horizontal' ? 'center bottom' : 'center right'}

            transformOriginSwitch={orientation === 'horizontal' ? 'center top' : 'center left'}

            transformOriginRtl={orientation === 'horizontal' ? 'center bottom' : 'center left'}

            transformOriginRtlSwitch={orientation === 'horizontal' ? 'center top' : 'center right'}

            noMargin

            LabelProps={{
              style: styles.label
            }}

            LabelTextProps={{
              className: classes.tooltipLabelText
            }}

            {...TooltipProps}
          >
            <IconButton
              ref={item => refs.iconButtons.current.push(item)}

              size={size}

              tonal={tonal}

              color={color}

              onBlur={onBlur}

              onFocus={() => {
                onFocus();

                onFocusButton(index);
              }}

              onMouseDown={(event: any) => onMouseDownButton(event, index)}

              aria-valuenow={valueValue(value__)}

              aria-valuetext={`${valueValue(value__)}%`}

              aria-valuemin={min}

              aria-valuemax={max}

              {...IconButtonProps}

              className={classNames([
                staticClassName('Slider', theme) && [
                  'onesy-Slider-icon-button'
                ],

                IconButtonProps?.className,
                classes.iconButton,
                classes[`orientation_${orientation}`],
                !tonal && classes[`iconButton_color_${color}`],
                tonal && classes[`iconButton_tonal_color_${color}`],
              ])}

              style={{
                ...iconButtonStyles(value__),

                ...IconButtonProps?.style
              }}
            >
              {icon ? React.cloneElement(icon, {
                className: classNames([
                  icon?.props?.className,
                  classNameIcon
                ]),

                style: {
                  ...styles.icon,

                  ...icon?.props?.style
                }
              }) : (
                <span
                  className={classNameIcon}

                  style={styles.icon}
                />
              )}
            </IconButton>
          </Tooltip>
        );
      })}
    </Component>
  );
});

Slider.displayName = 'onesy-Slider';

export default Slider;
