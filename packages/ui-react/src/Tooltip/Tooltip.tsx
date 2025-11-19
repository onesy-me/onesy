import React from 'react';

import { clamp, is, isEnvironment } from '@onesy/utils';
import { style as styleMethod, classNames, useOnesyTheme } from '@onesy/style-react';

import GrowElement from '../Grow';
import ModalElement from '../Modal';
import AppendElement from '../Append';
import SurfaceElement from '../Surface';
import { IModal } from '../Modal/Modal';
import { staticClassName } from '../utils';
import { IElement, IElementReference, IHTMLElement, IMethodTransition, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    inset: '0px auto auto 0px'
  },

  nameRoot: {
    pointerEvents: 'all'
    // whiteSpace: 'nowrap'
  },

  nameRoot_position_top: { paddingBlock: theme.methods.space.value(2, 'px') },

  nameRoot_position_bottom: { paddingBlock: theme.methods.space.value(2, 'px') },

  nameRoot_position_left: { paddingInline: theme.methods.space.value(2, 'px') },

  nameRoot_position_right: { paddingInline: theme.methods.space.value(2, 'px') },

  nameRoot_noMargin: { padding: '0' },

  name: {

  },

  name_size_small: {
    ...theme.typography.values.b3,

    padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(1, 'px')}`,
    borderRadius: `${clamp(theme.shape.radius.unit / 2, 0, 6)}px`,
    lineHeight: '1.3'
  },

  name_size_regular: {
    ...theme.typography.values.b2,

    padding: `${theme.methods.space.value(0.75, 'px')} ${theme.methods.space.value(1.25, 'px')}`,
    borderRadius: `${clamp(theme.shape.radius.unit / 2, 0, 8)}px`,
    lineHeight: '1.3'
  },

  name_size_large: {
    ...theme.typography.values.b1,

    padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.5, 'px')}`,
    borderRadius: `${clamp(theme.shape.radius.unit / 2, 0, 12)}px`,
    lineHeight: '1.3'
  },

  arrow: {
    '&::before': {
      content: "''",
      width: '8px',
      height: '8px',
      background: 'inherit',
      position: 'absolute',
      zIndex: '0'
    }
  },

  arrow_position_top_alignment_start: {
    '&::before': {
      bottom: '-4px',
      left: 'clamp(11px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_top_alignment_center: {
    '&::before': {
      bottom: '-4px',
      left: '50%',
      transform: 'translate(-50%, 0) rotate(45deg)'
    }
  },

  arrow_position_top_alignment_end: {
    '&::before': {
      bottom: '-4px',
      right: 'clamp(11px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_bottom_alignment_start: {
    '&::before': {
      top: '-4px',
      left: 'clamp(11px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_bottom_alignment_center: {
    '&::before': {
      top: '-4px',
      left: '50%',
      transform: 'translate(-50%, 0) rotate(45deg)'
    }
  },

  arrow_position_bottom_alignment_end: {
    '&::before': {
      top: '-4px',
      right: 'clamp(11px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_left_alignment_start: {
    '&::before': {
      right: '-4px',
      top: 'clamp(5.4px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_left_alignment_center: {
    '&::before': {
      right: '-4px',
      top: '50%',
      transform: 'translate(0, -50%) rotate(45deg)'
    }
  },

  arrow_position_left_alignment_end: {
    '&::before': {
      right: '-4px',
      bottom: 'clamp(5.4px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_right_alignment_start: {
    '&::before': {
      left: '-4px',
      top: 'clamp(5.4px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_right_alignment_center: {
    '&::before': {
      left: '-4px',
      top: '50%',
      transform: 'translate(0, -50%) rotate(45deg)'
    }
  },

  arrow_position_right_alignment_end: {
    '&::before': {
      left: '-4px',
      bottom: 'clamp(5.4px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: `320px` },

  maxWidth_xs: { maxWidth: `400px` },

  maxWidth_sm: { maxWidth: `480px` },

  maxWidth_rg: { maxWidth: `560px` },

  maxWidth_lg: { maxWidth: `800px` },

  maxWidth_xl: { maxWidth: `1120px` },

  maxWidth_xxl: { maxWidth: `1360px` },

  maxWidth_unset: { maxWidth: `unset` },

  fullWidth: { maxWidth: `${(isEnvironment('browser') ? window.innerWidth : 1400) - +theme.methods.space.value('rg', '', 1)}px` },

  nowrap: {
    whiteSpace: 'nowrap'
  }
}), { name: 'onesy-Tooltip' });

export type ITooltip = Omit<IModal, 'maxWidth'> & {
  open?: boolean;

  openDefault?: boolean;

  name?: IElement;
  label?: IElement;

  parent?: IHTMLElement;
  position?: 'top' | 'left' | 'bottom' | 'right';
  switch?: boolean;
  alignment?: 'start' | 'center' | 'end';
  portal?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl' | 'unset';
  arrow?: boolean;
  anchor?: DOMRect;
  anchorElement?: IHTMLElement;
  noMargin?: boolean;
  classNameSwitch?: string;
  transformOrigin?: string;
  transformOriginSwitch?: string;
  transformOriginRtl?: string;
  transformOriginRtlSwitch?: string;
  click?: boolean;
  touch?: boolean;
  longPress?: boolean;
  hover?: boolean;
  focus?: boolean;
  inset?: boolean;
  nowrap?: boolean;
  follow?: boolean;
  interactive?: boolean;
  elevation?: boolean;

  onOpen?: () => any;
  onClose?: () => any;
  onExited?: IMethodTransition;

  TransitionComponent?: IElementReference;

  TransitionComponentProps?: IPropsAny;
  AppendProps?: IPropsAny;
  ModalProps?: IPropsAny;
  LabelProps?: IPropsAny;
  LabelTextProps?: IPropsAny;
};

const Tooltip: React.FC<ITooltip> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTooltip?.props?.default, ...props_ };

  const Grow = theme?.elements?.Grow || GrowElement;

  const Append = theme?.elements?.Append || AppendElement;

  const Modal = theme?.elements?.Modal || ModalElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const {
    ref,

    tonal = true,
    color = 'inverted',

    open: open_,

    openDefault,

    name,
    label: label_,

    size = 'regular',

    parent,
    position = 'bottom',
    switch: switch_ = true,
    alignment = 'center',
    portal = true,
    fullWidth,
    maxWidth = 'unset',
    arrow,
    anchor: anchor_,
    anchorElement,
    noMargin,
    classNameSwitch,
    transformOrigin,
    transformOriginSwitch,
    transformOriginRtl,
    transformOriginRtlSwitch,
    click,
    touch: touch_,
    longPress: longPress_ = false,
    hover: hover_ = true,
    focus: focus_ = false,
    inset,
    nowrap,
    follow,
    interactive,

    onOpen: onOpen_,
    onClose: onClose_,
    onExited,

    TransitionComponent = Grow,

    TransitionComponentProps,
    AppendProps,
    ModalProps,
    LabelProps,
    LabelTextProps,

    // other
    elevation,

    className,
    style,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [hover, setHover] = React.useState(false);
  const [touch, setTouch] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [longPress, setLongPress] = React.useState(false);
  const [anchor, setAnchor] = React.useState<any>(anchor_);
  const [inProp, setInProp] = React.useState(open_);

  const refs = {
    root: React.useRef<HTMLElement>(null),
    open: React.useRef(false),
    inProp: React.useRef(inProp),
    longPress: React.useRef(false),
    longPressTimer: React.useRef<any>(null),
    touchProps: React.useRef(touch_),
    props: React.useRef<any>(undefined)
  };

  refs.props.current = props;

  refs.open.current = open;

  refs.inProp.current = inProp;

  refs.touchProps.current = touch_;

  const { classes } = useStyle();

  const styles: any = {
    name: {},
    nameRoot: {}
  };

  const label = name !== undefined ? name : label_;

  const onMouseDown = (event: React.MouseEvent<any>) => {
    if (longPress_) refs.longPressTimer.current = setTimeout(() => setLongPress(true), 700);

    if (is('function', (children as any)?.props.onMouseDown)) (children as any).props.onMouseDown(event);
  };

  const onMouseUp = (event: React.MouseEvent<any>) => {
    if (longPress_) {
      clearTimeout(refs.longPressTimer.current);

      setLongPress(false);
    }

    if (is('function', (children as any)?.props.onMouseUp)) (children as any).props.onMouseUp(event);
  };

  const onMouseEnter = (event: React.MouseEvent<any>) => {
    if (hover_) setHover(true);

    if (is('function', (children as any)?.props.onMouseEnter)) (children as any).props.onMouseEnter(event);
  };

  const onMouseLeave = (event: React.MouseEvent<any>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      if (refs.props.current.open === undefined) {
        if (!refs.inProp.current) onClose();
        else setInProp(false);
      }
    }

    if (hover_) setHover(false);

    if (is('function', (children as any)?.props.onMouseLeave)) (children as any).props.onMouseLeave(event);
  };

  const onTouchStart = (event: React.MouseEvent<any>) => {
    if (!refs.touchProps.current) return;

    setTouch(true);

    if (is('function', (children as any)?.props.onTouchStart)) (children as any).props.onTouchStart(event);
  };

  const onTouchEnd = (event: React.MouseEvent<any>) => {
    if (!refs.touchProps.current) return;

    setTouch(false);

    if (is('function', (children as any)?.props.onTouchEnd)) (children as any).props.onTouchEnd(event);
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_) setFocus(true);

    if (is('function', (children as any)?.props.onFocus)) (children as any).props.onFocus(event);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      if (refs.props.current.open === undefined) {
        if (!refs.inProp.current) onClose();
        else setInProp(false);
      }
    }

    if (focus_) setFocus(false);

    if (is('function', (children as any)?.props.onBlur)) (children as any).props.onBlur(event);
  };

  const onMouseMove = (event: MouseEvent) => {
    if (follow) {
      setAnchor({
        x: event.clientX,
        y: event.clientY,
        width: 10,
        height: 20
      });
    }

    if (is('function', (children as any)?.props.onMouseMove)) (children as any).props.onMouseMove(event);
  };

  const onOpen = () => {
    if (!open) setOpen(true);

    if (!refs.inProp.current) setInProp(true);

    if (is('function', onOpen_) && !open) onOpen_();
  };

  const onClose = () => {
    setOpen(false);

    if (is('function', onClose_)) onClose_();

    if (is('function', onExited)) onExited();
  };

  const onPreClose = () => {
    if (!refs.inProp.current) onClose();
    else setInProp(false);
  };

  const onClick = (event: Event) => {
    !refs.open.current ? onOpen() : onPreClose();
  };

  React.useEffect(() => {
    setInit(true);

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('touchend', onTouchEnd as any);

    return () => {
      rootDocument.removeEventListener('touchend', onTouchEnd as any);
    };
  }, []);

  React.useEffect(() => {
    setAnchor(anchor_);
  }, [anchor_]);

  React.useEffect(() => {
    if (init) {
      refs.open.current = open_;

      if (open_) onOpen();
      else onPreClose();
    }
  }, [open_]);

  React.useEffect(() => {
    if (init && refs.props.current.open === undefined) {
      refs.open.current = (touch || hover || longPress);

      if (refs.open.current) onOpen();
      else {
        if (!refs.inProp.current) onClose();
        else setInProp(false);
      }
    }
  }, [touch, hover, longPress]);

  React.useEffect(() => {
    if (init && refs.props.current.open === undefined) {
      refs.open.current = focus;

      if (refs.open.current) onOpen();
      else {
        if (!refs.inProp.current) onClose();
        else setInProp(false);
      }
    }
  }, [focus]);

  React.useEffect(() => {
    if (init) {
      if (longPress) refs.open.current = longPress;

      refs.longPress.current = longPress;

      if (refs.open.current) onOpen();
    }
  }, [longPress]);

  const resolvePosition = (switched = false) => {
    if (!switched) return position;

    if (position === 'top') return 'bottom';
    if (position === 'left') return 'right';
    if (position === 'right') return 'left';
    if (position === 'bottom') return 'top';
  };

  return (
    <Append
      open={open}

      portal={portal}

      anchor={anchor}

      anchorElement={anchorElement}

      position={position}

      alignment={alignment}

      switch={switch_}

      inset={inset}

      parent={parent}

      padding={[8, 8]}

      {...AppendProps}

      element={items => {
        const rtl = theme.direction === 'rtl';
        const switched = items.values.switch;

        if (!rtl) {
          styles.nameRoot.transformOrigin = (!switched ? transformOrigin : transformOriginSwitch) || transformOrigin;
        }
        else {
          styles.nameRoot.transformOrigin = (!switched ? transformOriginRtl : transformOriginRtlSwitch) || transformOriginRtl;
        }

        if (!styles.nameRoot.transformOrigin) styles.nameRoot.transformOrigin = transformOrigin;

        return (
          <Modal
            ref={item => {
              if (ref) {
                if (is('function', ref)) ref(item);
                else ref.current = item;
              }

              items.ref.current = item;
            }}

            open={open}

            {...(interactive && {
              onMouseEnter,
              onTouchStart,

              onMouseLeave,
              onTouchEnd
            })}

            modalWrapper={false}

            portal={false}

            background={false}

            freezeScroll={false}

            focus={false}

            disableKeyboardClose

            {...ModalProps}

            className={classNames([
              staticClassName('Tooltip', theme) && [
                'onesy-Tooltip-root',
                open && `onesy-Button-open`,
                touch && 'onesy-Tooltip-touch',
                longPress && 'onesy-Tooltip-long-press',
                hover && 'onesy-Tooltip-hover',
                focus && 'onesy-Tooltip-focus',
                `onesy-Tooltip-position-${position}`
              ],

              className,
              classes.root,
              ModalProps?.className,
              switched && classNameSwitch
            ])}

            style={{
              ...items.style,

              ...style,

              ...ModalProps?.style
            }}

            {...other}
          >
            <TransitionComponent
              in={inProp}

              onExited={onClose}

              add

              removeOnExited

              {...TransitionComponentProps}
            >
              <div
                role='tooltip'

                aria-label={is('simple', label) ? label as any : undefined}

                className={classNames([
                  staticClassName('Tooltip', theme) && [
                    'onesy-Tooltip-name-root'
                  ],

                  classes.nameRoot,
                  classes[`nameRoot_position_${resolvePosition(items.values.switch)}`],
                  classes[`maxWidth_${maxWidth}`],
                  noMargin && classes.nameRoot_noMargin,
                  fullWidth && classes.fullWidth,
                  nowrap && classes.nowrap
                ])}

                style={styles.nameRoot}
              >
                {is('simple', label) ?
                  <Surface
                    tonal={tonal}

                    color={color}

                    {...LabelProps}

                    className={classNames([
                      staticClassName('Tooltip', theme) && [
                        'onesy-Tooltip-name'
                      ],

                      LabelProps?.className,
                      classes.name,
                      classes[`name_size_${size}`],
                      arrow && [
                        classes.arrow,
                        classes[`arrow_position_${position}_alignment_${alignment}`]
                      ]
                    ])}

                    style={{
                      ...styles.name,

                      ...LabelProps?.style
                    }}
                  >
                    <span
                      {...LabelTextProps}

                      className={classNames([
                        staticClassName('Tooltip', theme) && [
                          'onesy-Tooltip-name-text'
                        ],

                        LabelTextProps?.className
                      ])}
                    >
                      {label}
                    </span>
                  </Surface> :

                  React.cloneElement(label as any, {
                    className: classNames([
                      (label as any)?.props?.className,
                      arrow && [
                        classes.arrow,
                        classes[`arrow_position_${position}_alignment_${alignment}`]
                      ]
                    ])
                  })
                }
              </div>
            </TransitionComponent>
          </Modal>
        );
      }}
    >
      {children && (
        React.cloneElement(children, {
          ref: item => {
            if (children?.ref) {
              if (is('function', children?.ref)) children?.ref(item);
              else children.ref.current = item;
            }

            refs.root.current = item;
          },

          onMouseMove,

          ...(click && {
            onClick: (event: Event) => {
              if (is('function', children?.props?.onClick)) children?.props?.onClick(event);

              onClick(event);
            }
          }),

          onFocus,
          onBlur,

          onMouseDown,
          onMouseUp,

          onMouseEnter,
          onMouseLeave,

          onTouchStart,
          onTouchEnd
        })
      )}
    </Append>
  );
};

Tooltip.displayName = 'onesy-Tooltip';

export default Tooltip;
