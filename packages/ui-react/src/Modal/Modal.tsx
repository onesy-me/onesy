import React from 'react';

import { is, isEnvironment, TMethod } from '@onesy/utils';
import { style as styleMethod, classNames, useOnesyTheme } from '@onesy/style-react';

import PortalElement from '../Portal';
import FocusElement from '../Focus';
import FadeElement from '../Fade';
import SurfaceElement from '../Surface';
import useMediaQuery from '../useMediaQuery';
import { staticClassName } from '../utils';
import { IBaseElement, IElementReference, IPropsAny, IRef } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'fixed',
    inset: '0',
    zIndex: theme.z_index.modal,
    pointerEvents: 'none'
  },

  // Size
  size_small: {
    padding: theme.methods.space.value(2, 'px'),
    borderRadius: `${(theme.shape.radius.unit * 2) + (theme.shape.radius.unit / 2)}px`
  },

  size_regular: {
    padding: theme.methods.space.value('md', 'px'),
    borderRadius: `${(theme.shape.radius.unit * 3) + (theme.shape.radius.unit / 2)}px`
  },

  size_large: {
    padding: theme.methods.space.value('lg', 'px'),
    borderRadius: `${(theme.shape.radius.unit * 4) + (theme.shape.radius.unit / 2)}px`
  },

  background: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.44)',
    zIndex: -1,
    pointerEvents: 'all'
  },

  backgroundInvisible: {
    background: 'transparent'
  },

  modalRoot: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  },

  surface: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: `280px`,
    maxHeight: `calc(100% - ${theme.methods.space.value('xl') * 2}px)`,
    margin: theme.methods.space.value('xl', 'px'),
    overflow: 'hidden',
    pointerEvents: 'all'
  },

  noSurface: {
    pointerEvents: 'all',
    maxWidth: '100%'
  },

  fullScreen: {
    width: '100%',
    height: '100%',
    borderRadius: '0 !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
    margin: '0 !important'
  },

  fullWidth: { width: `calc(100% - ${theme.methods.space.value('xl') * 2}px)` },

  // minWidth
  minWidth_xxs: { minWidth: 'clamp(0px, 320px, calc(100vw - 48px))' },

  minWidth_xs: { minWidth: 'clamp(0px, 400px, calc(100vw - 48px))' },

  minWidth_sm: { minWidth: 'clamp(0px, 480px, calc(100vw - 48px))' },

  minWidth_rg: { minWidth: 'clamp(0px, 560px, calc(100vw - 48px))' },

  minWidth_lg: { minWidth: 'clamp(0px, 800px, calc(100vw - 48px))' },

  minWidth_xl: { minWidth: 'clamp(0px, 1120px, calc(100vw - 48px))' },

  minWidth_xxl: { minWidth: 'clamp(0px, 1360px, calc(100vw - 48px))' },

  minWidth_unset: { minWidth: `unset` },

  // maxWidth
  maxWidth_xxs: { maxWidth: `320px` },

  maxWidth_xs: { maxWidth: `400px` },

  maxWidth_sm: { maxWidth: `480px` },

  maxWidth_rg: { maxWidth: `560px` },

  maxWidth_lg: { maxWidth: `800px` },

  maxWidth_xl: { maxWidth: `1120px` },

  maxWidth_xxl: { maxWidth: `1360px` },

  maxWidth_unset: { maxWidth: `unset` }
}), { name: 'onesy-Modal' });

let MODALS_OPEN = 0;

// To do

// 1. Add padding right for freezeScroll for the scroll bar if it exists and width that it is

export type IModal = IBaseElement & {
  open?: boolean;
  openDefault?: boolean;

  mainRef?: IRef;
  backgroundRef?: IRef;

  partialyOpened?: boolean | number;

  minWidth?: 'xss' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl';

  maxWidth?: 'xss' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl';

  fullScreen?: boolean;

  fullWidth?: boolean;

  background?: boolean;
  modalWrapper?: boolean;
  modalWrapperSurface?: boolean;

  portal?: boolean;
  focus?: boolean;
  freezeScroll?: boolean;

  disableKeyboardClose?: boolean;
  disableBackgroundClose?: boolean;

  backgroundInvisible?: boolean;

  onClose?: TMethod;

  NoSurfaceProps?: IPropsAny;
  SurfaceProps?: IPropsAny;
  BackgroundProps?: IPropsAny;
  PortalProps?: IPropsAny;
  TransitionComponentProps?: IPropsAny;

  BackgroundComponent?: IElementReference;
  TransitionComponent?: IElementReference;
};

const Modal: React.FC<IModal> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModal?.props?.default, ...props_ }), [props_]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Portal = React.useMemo(() => theme?.elements?.Portal || PortalElement, [theme]);

  const Focus = React.useMemo(() => theme?.elements?.Focus || FocusElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',

    open: open_,
    openDefault,

    mainRef,
    backgroundRef,

    partialyOpened,

    minWidth: minWidth_,
    maxWidth: maxWidth_ = 'rg',

    fullScreen,
    fullWidth,

    background = true,
    modalWrapper = true,
    modalWrapperSurface = true,

    portal = true,
    focus = true,
    freezeScroll = true,

    disableKeyboardClose,
    disableBackgroundClose,

    backgroundInvisible,

    onClose: onClose_,

    NoSurfaceProps,
    SurfaceProps,
    BackgroundProps,
    PortalProps: PortalProps_,
    TransitionComponentProps,

    BackgroundComponent = Fade,
    TransitionComponent = Fade,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [inProp, setInProp] = React.useState(open_);
  const [portalElement, setPortalElement] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(undefined),
    focus: React.useRef<HTMLDivElement>(undefined),
    open: React.useRef(open),
    freezeScroll: React.useRef<any>(undefined),
    interval: React.useRef<any>(undefined)
  };

  const mobile = useMediaQuery('(max-width: 767px)', { element: refs.root.current });

  const minWidth = minWidth_ !== undefined ? minWidth_ : !mobile ? 'sm' : undefined;

  refs.open.current = open;

  refs.freezeScroll.current = freezeScroll;

  const modal = {
    open: () => {
      MODALS_OPEN++;

      const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

      if (freezeScroll) rootDocument.body.style.overflow = 'hidden';
    },
    close: () => {
      MODALS_OPEN--;

      const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

      if (MODALS_OPEN <= 0 && freezeScroll) rootDocument.body.style.removeProperty('overflow');
    }
  };

  let maxWidth = maxWidth_;

  if (fullWidth) maxWidth = undefined;

  const onClose = () => {
    if (is('function', onClose_) && open) onClose_();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (!refs.open.current) return;

    if (event.key === 'Escape' && !disableKeyboardClose) {
      event.stopPropagation();

      onClose();
    }
  };

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    if (open) modal.open();

    // Bug clean up fix
    refs.interval.current = setInterval(() => {
      if (MODALS_OPEN <= 0 && refs.freezeScroll.current && rootDocument.body.style.overflow === 'hidden') {
        rootDocument.body.style.removeProperty('overflow');
      }
    }, 1400);

    return () => {
      if (open) modal.close();

      clearInterval(refs.interval.current);
    };
  }, []);

  React.useEffect(() => {
    if (open_ && !open) {
      setOpen(true);
      setInProp(true);

      modal.open();
    }
    else if (!open_ && open) modalWrapper ? setInProp(false) : setOpen(false);
  }, [open_]);

  React.useEffect(() => {
    if (open) refs.focus.current?.focus();
  }, [open]);

  const onExited = (value: any) => {
    setOpen(false);

    modal.close();

    if (is('function', TransitionComponentProps?.onExited)) TransitionComponentProps?.onExited(value);
  };

  if (!open && !partialyOpened) return null;

  const PortalComponent: any = portal ? Portal : React.Fragment;

  let PortalProps: any = {};

  if (portal) {
    const rootDocumentElement = isEnvironment('browser') ? ((portalElement || refs.root.current)?.ownerDocument || window.document) : undefined;

    if (isEnvironment('browser')) PortalProps.element = rootDocumentElement.body;

    PortalProps = {
      ...PortalProps,

      ...PortalProps_
    };
  }

  const FocusComponent = focus ? Focus : React.Fragment;

  const FocusProps = focus ? {
    ref: refs.focus,
    onKeyDown
  } : {};

  const MainProps: any = {
    role: 'dialog',

    'aria-labelledby': 'onesy-modal-title',

    'aria-describedby': 'onesy-modal-text',

    'aria-modal': 'true',

    'aria-live': 'assertive'
  };

  let Main: any = children && React.cloneElement(children as any, {
    ...MainProps
  });

  if (modalWrapper) Main = (
    <div
      {...MainProps}

      className={classNames([
        staticClassName('Modal', theme) && [
          'onesy-Modal-modal-root'
        ],

        classes.modalRoot
      ])}
    >
      <TransitionComponent
        in={inProp}

        {...TransitionComponentProps}

        onExited={onExited}

        add
      >
        {!modalWrapperSurface ?
          (
            <div
              className={classNames([
                staticClassName('Modal', theme) && [
                  'onesy-Modal-no-surface'
                ],

                NoSurfaceProps?.className,
                classes.noSurface
              ])}
            >
              {children}
            </div>
          ) :

          <Surface
            ref={mainRef}

            tonal={tonal}

            color={color}

            tabIndex='-1'

            {...SurfaceProps}

            className={classNames([
              staticClassName('Modal', theme) && [
                'onesy-Modal-surface',
                `onesy-Modal-size-${size}`
              ],

              classes.surface,
              classes[`minWidth_${minWidth}`],
              classes[`maxWidth_${maxWidth}`],
              classes[`size_${size}`],
              fullScreen && classes.fullScreen,
              fullWidth && classes.fullWidth,

              SurfaceProps?.className
            ])}

            onKeyDown={onKeyDown}
          >
            {children}
          </Surface>
        }
      </TransitionComponent>
    </div>
  );

  return (
    <PortalComponent
      {...PortalProps}
    >
      <Component
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;

          setPortalElement(item);
        }}

        className={classNames([
          staticClassName('Modal', theme) && [
            'onesy-Modal-root',
            open && `onesy-Modal-open`,
            focus && `onesy-Modal-focus`
          ],

          className,
          classes.root
        ])}

        {...other}
      >
        <FocusComponent
          {...FocusProps}
        >
          {/* Background */}
          {background && (
            <BackgroundComponent
              in={inProp}

              add

              {...BackgroundProps}
            >
              <div
                ref={backgroundRef}

                onClick={() => !disableBackgroundClose && onClose()}

                className={classNames([
                  staticClassName('Modal', theme) && [
                    'onesy-Modal-background',
                    backgroundInvisible && 'onesy-Modal-background-invisible'
                  ],

                  classes.background,
                  backgroundInvisible && classes.backgroundInvisible
                ])}
              />
            </BackgroundComponent>
          )}

          {/* Main */}
          {Main}
        </FocusComponent>
      </Component>
    </PortalComponent>
  );
});

Modal.displayName = 'onesy-Modal';

export default Modal;
