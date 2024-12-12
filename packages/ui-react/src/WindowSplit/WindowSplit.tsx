import React from 'react';

import { is, clamp, valueFromPercentageWithinRange, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialSwapHoriz from '@onesy/icons-material-rounded-react/IconMaterialSwapHorizW100';
import IconMaterialSwapVert from '@onesy/icons-material-rounded-react/IconMaterialSwapVertW100';

import LineElement from '../Line';
import DividerElement from '../Divider';
import IconButtonElement from '../IconButton';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    touchAction: 'none',
    overflow: 'hidden'
  },

  mouseDown_orientation_horizontal: {
    '& *': {
      cursor: 'ew-resize !important'
    }
  },

  mouseDown_orientation_vertical: {
    '& *': {
      cursor: 'ns-resize !important'
    }
  },

  focus: {
    outline: '4px solid currentColor',
    outlineOffset: '8px'
  },

  wrapper: {
    width: '100%',
    height: '100%'
  },

  item: {
    flex: '1 1 auto'
  },

  iconButton: {
    position: 'absolute',
    userSelect: 'none',
    zIndex: '4'
  },

  iconButton_orientation_horizontal: {
    cursor: 'ew-resize',
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`
  },

  iconButton_orientation_vertical: {
    cursor: 'ns-resize',
    transform: `translateY(50%)`
  },

  divider: {
    position: 'absolute',
    userSelect: 'none',
    flex: '0 0 auto',
    zIndex: '3',

    '&.onesy-Divider-root': {
      opacity: '1',
      margin: '0px'
    }
  },

  divider_orientation_horizontal: {
    insetBlock: '0',
    cursor: 'ew-resize',
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`,

    '&.onesy-Divider-root': {
      width: '8px'
    }
  },

  divider_orientation_vertical: {
    insetInline: '0',
    cursor: 'ns-resize',
    transform: `translateY(50%)`,

    '&.onesy-Divider-root': {
      height: '8px'
    }
  }
}), { name: 'onesy-WindowSplit' });

export interface IWindowSplit extends ILine {
  tonal?: ITonal;
  color?: IColor;

  valueDefault?: number;
  value?: number;

  onChange?: (value: number) => any;

  padding?: number;
  paddingStart?: number;
  paddingEnd?: number;

  iconButton?: IElement;
  orientation?: 'vertical' | 'horizontal';

  noKeyboard?: boolean;
  noDivider?: boolean;

  focus?: boolean;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;
  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;

  iconButtonComponent?: IElement;
  iconOrientationHorizontal?: IElement;
  iconOrientationVertical?: IElement;

  IconButtonProps?: IPropsAny;
  DividerProps?: IPropsAny;
}

const WindowSplit: React.FC<IWindowSplit> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyWindowSplit?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const {
    tonal = false,
    color = 'inverted',

    valueDefault,
    value: value_ = 50,

    onChange: onChange_,

    padding,
    paddingStart,
    paddingEnd,

    iconButton,
    orientation = 'horizontal',

    noKeyboard,
    noDivider,

    focus: focus_ = false,

    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,

    iconButtonComponent,
    iconOrientationHorizontal = <IconMaterialSwapHoriz />,
    iconOrientationVertical = <IconMaterialSwapVert />,

    IconButtonProps = {
      version: 'filled',
      elevation: false
    },
    SeparatorProps: SeparatorProps_,
    DividerProps = {},

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState<boolean>();
  const [mouseDown, setMouseDown] = React.useState<boolean>();
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<HTMLElement>(undefined),
    value: React.useRef<any>(undefined),
    mouseDown: React.useRef<any>(undefined),
    hover: React.useRef<any>(undefined),
    props: React.useRef<any>(undefined),
    orientation: React.useRef<any>(undefined),
    direction: React.useRef<any>(undefined),
    ids: {
      root: React.useId()
    }
  };

  refs.value.current = value;
  refs.mouseDown.current = mouseDown;
  refs.props.current = props;
  refs.orientation.current = orientation;
  refs.direction.current = theme.direction;

  const styles: any = {
    start: {
      [orientation === 'horizontal' ? 'width' : 'height']: `${100 - value}%`
    },

    end: {
      [orientation === 'horizontal' ? 'width' : 'height']: `${value}%`
    },

    divider: {
      [orientation === 'horizontal' ? 'insetInlineEnd' : 'insetBlockEnd']: `${value}%`
    }
  };

  IconButtonProps.tonal = IconButtonProps.tonal !== undefined ? IconButtonProps.tonal : tonal;
  IconButtonProps.color = IconButtonProps.color !== undefined ? IconButtonProps.color : color;

  DividerProps.tonal = DividerProps.tonal !== undefined ? DividerProps.tonal : tonal;
  DividerProps.color = DividerProps.color !== undefined ? DividerProps.color : color;

  const min = 0;
  const max = 100;

  const valuePrecision = (valueMouse: number) => {
    let valueNew = (max + min) - valueFromPercentageWithinRange(valueMouse * 100, min, max);

    if (refs.direction.current === 'rtl' && refs.orientation.current === 'horizontal') valueNew = (max + min) - valueNew;

    if (valueNew <= min) return min;

    if (valueNew >= max) return max;

    return valueNew;
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      setMouseDown(false);

      setFocus(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (refs.mouseDown.current) {
        const x: number = event.clientX;
        const y: number = event.clientY;

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        let valueNew = refs.orientation.current === 'horizontal' ? (x - rect.x) / width : (y - rect.y) / height;

        valueNew = valuePrecision(valueNew);

        onChange(valueNew);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current) {
        const x: number = event.touches[0].clientX;
        const y: number = event.touches[0].clientY;

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        let valueNew = refs.orientation.current === 'horizontal' ? (x - rect.x) / width : (y - rect.y) / height;

        valueNew = valuePrecision(valueNew);

        onChange(valueNew);
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);
    rootDocument.addEventListener('mousemove', onMouseMove);
    rootDocument.addEventListener('touchend', onMouseUp, { passive: true });
    rootDocument.addEventListener('touchmove', onTouchMove);

    setInit(true);

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);
      rootDocument.removeEventListener('touchend', onMouseUp);
      rootDocument.removeEventListener('mousemove', onMouseMove);
      rootDocument.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) setValue(value_);
    }
  }, [value_]);

  const onTouchStart = (event: React.TouchEvent<any>) => {
    setMouseDown(true);
  };

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onFocusIconButton = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);
  }, []);

  const onBlurIconButton = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);
  }, []);

  const onMouseDown = React.useCallback(() => {
    setMouseDown(true);
  }, []);

  const move = (forward_ = true) => {
    let forward = forward_;

    if (refs.orientation.current === 'horizontal') {
      if (refs.direction.current === 'rtl') forward = !forward;
    }

    let valueNew = refs.value.current || 0;

    valueNew = clamp(valueNew + (forward ? 1 : -1), 0, 100);

    // Update
    onChange(valueNew);
  };

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<any>) => {
    if (['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      if (
        ['Home', 'End'].includes(event.key) ||
        (['ArrowLeft', 'ArrowRight'].includes(event.key) && refs.orientation.current === 'horizontal') ||
        (['ArrowUp', 'ArrowDown'].includes(event.key) && refs.orientation.current === 'vertical')
      ) {
        // Prevent default
        event.preventDefault();

        let valueNew: number;

        switch (event.key) {
          case 'Home':
            valueNew = refs.orientation.current !== 'vertical' ? 0 : 100;

            return onChange(valueNew);

          case 'End':
            valueNew = refs.orientation.current !== 'vertical' ? 100 : 0;

            return onChange(valueNew);

          case 'ArrowUp':
          case 'ArrowLeft':
            return move();

          case 'ArrowDown':
          case 'ArrowRight':
            return move(false);

          default:
            break;
        }
      }
    }
  }, []);

  const onChange = (valueItem: number) => {
    const minValue = paddingEnd !== undefined ? paddingEnd : padding !== undefined ? padding : 0;
    const maxValue = paddingStart !== undefined ? paddingStart : padding !== undefined ? padding : 0;

    const valueNew = clamp(valueItem, minValue, 100 - maxValue);

    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const SeparatorProps = {
    ...SeparatorProps_,

    role: 'separator',

    'aria-label': 'Window separator',

    'aria-valuenow': value,

    'aria-valuemin': 0,

    'aria-valuemax': 100,

    'aria-valuetext': `${value}%`,

    'aria-controls': refs.ids.root
  };

  const direction = orientation === 'horizontal' ? 'row' : 'column';

  // Only 2 children to use
  const children = React.Children.toArray(children_).slice(0, 2);

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item as any;
      }}

      tabIndex={!iconButton ? 0 : undefined}

      gap={0}

      direction={direction}

      align='center'

      justify='center'

      {...(focus_ && {
        onFocus,

        onBlur
      })}

      onKeyDown={!noKeyboard ? onKeyDown : undefined}

      id={refs.ids.root}

      aria-orientation={orientation}

      className={classNames([
        staticClassName('WindowSplit', theme) && [
          'onesy-WindowSplit-root',
          focus && `onesy-WindowSplit-focus`,
          mouseDown && `onesy-WindowSplit-mouse-down`,
        ],

        className,
        classes.root,
        mouseDown && classes[`mouseDown_orientation_${orientation}`],
        focus_ && focus && !mouseDown && classes.focus
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction={direction}

        align='unset'

        justify='unset'

        className={classNames([
          staticClassName('WindowSplit', theme) && [
            'onesy-WindowSplit-wrapper'
          ],

          classes.wrapper
        ])}
      >
        {children[0] && (
          <Line
            direction='row'

            align='unset'

            justify='unset'

            className={classNames([
              staticClassName('WindowSplit', theme) && [
                'onesy-WindowSplit-start'
              ],

              classes.item,
              classes.start
            ])}

            style={{
              ...styles.start
            }}
          >
            {children[0]}
          </Line>
        )}

        {children[1] && (
          <Line
            direction='row'

            align='unset'

            justify='unset'

            className={classNames([
              staticClassName('WindowSplit', theme) && [
                'onesy-WindowSplit-end'
              ],

              classes.item,
              classes.end
            ])}

            style={{
              ...styles.end
            }}
          >
            {children[1]}
          </Line>
        )}
      </Line>

      {!noDivider && (
        <Divider
          onTouchStart={onTouchStart}

          onMouseDown={(event: React.MouseEvent<any>) => {
            onMouseDown();

            if (is('function', DividerProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
          }}

          orientation={orientation === 'vertical' ? 'horizontal' : 'vertical'}

          {...DividerProps}

          className={classNames([
            staticClassName('WindowSplit', theme) && [
              'onesy-WindowSplit-divider'
            ],

            DividerProps?.className,
            classes.divider,
            classes[`divider_orientation_${orientation}`]
          ])}

          style={{
            ...styles.divider,

            ...DividerProps?.style
          }}
        />
      )}

      {iconButton && !noDivider && (
        (iconButtonComponent && React.cloneElement(iconButtonComponent as any, {
          className: classNames([
            staticClassName('WindowSplit', theme) && [
              'onesy-WindowSplit-icon-button'
            ],

            classes.iconButton,
            classes[`iconButton_orientation_${orientation}`]
          ]),

          ...SeparatorProps
        })) ||

        <IconButton
          onFocus={onFocusIconButton}

          onBlur={onBlurIconButton}

          onTouchStart={onTouchStart}

          onMouseDown={(event: React.MouseEvent<any>) => {
            onMouseDown();

            if (is('function', IconButtonProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
          }}

          {...SeparatorProps}

          {...IconButtonProps}

          className={classNames([
            staticClassName('WindowSplit', theme) && [
              'onesy-WindowSplit-icon-button'
            ],

            IconButtonProps?.className,
            classes.iconButton,
            classes[`iconButton_orientation_${orientation}`]
          ])}

          style={{
            ...styles.divider,

            ...IconButtonProps?.style
          }}
        >
          {orientation === 'horizontal' ? iconOrientationHorizontal : orientation === 'vertical' ? iconOrientationVertical : undefined}
        </IconButton>
      )}
    </Line>
  );
});

WindowSplit.displayName = 'onesy-WindowSplit';

export default WindowSplit;
