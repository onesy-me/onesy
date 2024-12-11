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
    color: theme.palette.text.default.primary,
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

  hidden: {
    lineHeight: '0',
    visibility: 'hidden'
  },

  item: {
    lineHeight: '0',
    overflow: 'hidden'
  },

  start: {
    position: 'absolute',
    inset: '0',
    zIndex: '1',

    '& > *': {
      maxWidth: 'unset !important'
    }
  },

  end: {
    position: 'absolute',
    inset: '0',
    zIndex: '0'
  },

  iconButton: {
    position: 'absolute',
    userSelect: 'none',
    zIndex: '4'
  },

  iconButton_manual_orientation_horizontal: {
    cursor: 'ew-resize'
  },

  iconButton_manual_orientation_vertical: {
    cursor: 'ns-resize'
  },

  iconButton_orientation_horizontal: {
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`
  },

  iconButton_orientation_vertical: {
    transform: `translateY(50%)`
  },

  divider: {
    position: 'absolute',
    userSelect: 'none',
    zIndex: '3',
    borderRadius: theme.methods.shape.radius.value('lg', 'px'),

    '&.onesy-Divider-root': {
      margin: '0px'
    }
  },

  divider_manual_orientation_horizontal: {
    cursor: 'ew-resize'
  },

  divider_manual_orientation_vertical: {
    cursor: 'ns-resize'
  },

  divider_orientation_horizontal: {
    insetBlock: '0',
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`,

    '&.onesy-Divider-root': {
      width: '8px'
    }
  },

  divider_orientation_vertical: {
    insetInline: '0',
    transform: `translateY(50%)`,

    '&.onesy-Divider-root': {
      height: '8px'
    }
  }
}), { name: 'onesy-ViewSplit' });

export interface IViewSplit extends ILine {
  tonal?: ITonal;
  color?: IColor;

  valueDefault?: number;
  value?: number;

  onChange?: (value: number) => any;

  version?: 'auto' | 'manual';
  orientation?: 'vertical' | 'horizontal';
  divider?: boolean;

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

const ViewSplit: React.FC<IViewSplit> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyViewSplit?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    valueDefault,
    value: value_ = 50,

    onChange: onChange_,

    version = 'auto',
    orientation = 'horizontal',
    divider = props.version === 'manual',

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

    Component = 'div',

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [rect, setRect] = React.useState<DOMRect>();
  const [hover, setHover] = React.useState<boolean>();
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
    version: React.useRef<any>(undefined),
    direction: React.useRef<any>(undefined),
    ids: {
      root: React.useId()
    }
  };

  refs.value.current = value;
  refs.mouseDown.current = mouseDown;
  refs.hover.current = hover;
  refs.props.current = props;
  refs.orientation.current = orientation;
  refs.version.current = version;
  refs.direction.current = theme.direction;

  const styles: any = {
    start: {
      [orientation === 'horizontal' ? 'insetInlineEnd' : 'insetBlockEnd']: `${value}%`
    },

    startItem: {
      width: rect?.width
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
      if (
        (refs.version.current === 'auto' && refs.hover.current) ||
        (refs.version.current === 'manual' && refs.mouseDown.current)
      ) {
        const x: number = event.clientX;
        const y: number = event.clientY;

        const rect_ = refs.root.current.getBoundingClientRect();

        const { width, height } = rect_;

        // Value to the precision point value
        let valueNew = refs.orientation.current === 'horizontal' ? (x - rect_.x) / width : (y - rect_.y) / height;

        valueNew = valuePrecision(valueNew);

        onChange(valueNew);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current) {
        const x: number = event.touches[0].clientX;
        const y: number = event.touches[0].clientY;

        const rect_ = refs.root.current.getBoundingClientRect();

        const { width, height } = rect_;

        // Value to the precision point value
        let valueNew = refs.orientation.current === 'horizontal' ? (x - rect_.x) / width : (y - rect_.y) / height;

        valueNew = valuePrecision(valueNew);

        onChange(valueNew);
      }
    };

    const method = () => {
      if (refs.root.current) {
        const rect_ = refs.root.current.getBoundingClientRect();

        setRect(rect_);
      }
    };

    const observer = new ResizeObserver(method);

    observer.observe(refs.root.current);

    method();

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);
    rootDocument.addEventListener('mousemove', onMouseMove);
    rootDocument.addEventListener('touchend', onMouseUp, { passive: true });
    rootDocument.addEventListener('touchmove', onTouchMove);

    setInit(true);

    return () => {
      // Clean up
      observer.disconnect();

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
    const x: number = event.touches[0].clientX;
    const y: number = event.touches[0].clientY;

    const rect_ = refs.root.current.getBoundingClientRect();

    const { width, height } = rect_;

    // Value to the precision point value
    let valueNew = refs.orientation.current === 'horizontal' ? (x - rect_.x) / width : (y - rect_.y) / height;

    valueNew = valuePrecision(valueNew);

    onChange(valueNew);

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

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(false);

    setFocus(false);

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
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
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueItem);

    if (is('function', onChange_)) onChange_(valueItem);
  };

  const SeparatorProps = {
    ...SeparatorProps_,

    role: 'separator',

    'aria-label': 'View separator',

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

      tabIndex={version === 'auto' ? 0 : undefined}

      gap={0}

      direction={direction}

      align='center'

      justify='center'

      onFocus={onFocus}

      onBlur={onBlur}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      onTouchStart={onTouchStart}

      onKeyDown={onKeyDown}

      id={refs.ids.root}

      aria-orientation={orientation}

      Component={Component}

      className={classNames([
        staticClassName('ViewSplit', theme) && [
          'onesy-ViewSplit-root',
          `onesy-ViewSplit-version-${version}`,
          hover && `onesy-ViewSplit-hover`,
          focus && `onesy-ViewSplit-focus`,
          mouseDown && `onesy-ViewSplit-mouse-down`
        ],

        className,
        classes.root,
        version === 'manual' && mouseDown && classes[`mouseDown_orientation_${orientation}`],
        focus && !(hover || mouseDown) && classes.focus
      ])}

      {...other}
    >
      {children[0] && <>
        <div
          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'onesy-ViewSplit-hidden'
            ],

            classes.hidden
          ])}
        >
          {children[0]}
        </div>

        <div
          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'onesy-ViewSplit-start'
            ],

            classes.item,
            classes.start
          ])}

          style={{
            ...styles.start
          }}
        >
          {React.cloneElement(children[0] as any, {
            style: {
              ...styles.startItem,

              ...(children[0] as any).props.style
            }
          })}
        </div>
      </>}

      {divider && (
        <Divider
          onMouseDown={(event: React.MouseEvent<any>) => {
            onMouseDown();

            if (is('function', DividerProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
          }}

          orientation={orientation === 'vertical' ? 'horizontal' : 'vertical'}

          {...DividerProps}

          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'onesy-ViewSplit-divider'
            ],

            DividerProps?.className,
            classes.divider,
            classes[`divider_orientation_${orientation}`],
            version === 'manual' && classes[`divider_manual_orientation_${orientation}`]
          ])}

          style={{
            ...styles.divider,

            ...DividerProps?.style
          }}
        />
      )}

      {version === 'manual' && (
        (iconButtonComponent && React.cloneElement(iconButtonComponent as any, {
          className: classNames([
            staticClassName('ViewSplit', theme) && [
              'onesy-ViewSplit-icon-button'
            ],

            classes.iconButton,
            classes[`iconButton_orientation_${orientation}`],
            version === 'manual' && classes[`iconButton_manual_orientation_${orientation}`]
          ]),

          ...SeparatorProps
        })) ||

        <IconButton
          onFocus={onFocusIconButton}

          onBlur={onBlurIconButton}

          onMouseDown={(event: React.MouseEvent<any>) => {
            onMouseDown();

            if (is('function', IconButtonProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
          }}

          {...SeparatorProps}

          {...IconButtonProps}

          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'onesy-ViewSplit-icon-button'
            ],

            IconButtonProps?.className,
            classes.iconButton,
            classes[`iconButton_orientation_${orientation}`],
            version === 'manual' && classes[`iconButton_manual_orientation_${orientation}`]
          ])}

          style={{
            ...styles.start,

            ...IconButtonProps?.style
          }}
        >
          {orientation === 'horizontal' ? iconOrientationHorizontal : orientation === 'vertical' ? iconOrientationVertical : undefined}
        </IconButton>
      )}

      {children[1] && (
        <div
          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'onesy-ViewSplit-end'
            ],

            classes.item,
            classes.end
          ])}
        >
          {React.cloneElement(children[1] as any, {
            style: {
              ...styles.endItem,

              ...(children[1] as any).props.style
            }
          })}
        </div>
      )}
    </Line>
  );
});

ViewSplit.displayName = 'onesy-ViewSplit';

export default ViewSplit;
