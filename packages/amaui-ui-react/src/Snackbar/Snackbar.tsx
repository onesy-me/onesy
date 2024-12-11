import React from 'react';

import { is, getID, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';

import GrowElement from '../Grow';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { ISize, IElement, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    minWidth: '340px',
    minHeight: '50px',
    borderRadius: `${theme.shape.radius.unit}px`,
    boxShadow: 'rgb(0 0 0 / 1%) 0px 4px 5px 0px, rgb(0 0 0 / 1%) 0px 1px 10px 0px, rgb(0 0 0 / 1%) 0px 2px 4px -1px'
  },

  end: {
    marginInlineStart: 'auto'
  },

  size_small: {
    padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  size_regular: {
    padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(2.5, 'px')}`
  },

  size_large: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  fixed: {
    position: 'fixed',
    zIndex: theme.z_index.modal
  },

  position_top: {
    top: '24px'
  },

  position_bottom: {
    bottom: '24px'
  },

  alignment_left: {
    left: '24px',
    right: 'auto'
  },

  alignment_start: {
    insetInlineStart: '24px',
    insetInlineEnd: 'auto'
  },

  alignment_center: {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  },

  alignment_right: {
    right: '24px',
    left: 'auto'
  },

  alignment_end: {
    insetInlineEnd: '24px',
    insetInlineStart: 'auto'
  }
}), { name: 'onesy-Snackbar' });

export interface ISnackbar extends ISurface {
  size?: ISize;

  open?: boolean;

  primary?: IElement;
  end?: IElement;
  position?: 'top' | 'bottom';
  alignment?: 'start' | 'left' | 'center' | 'right' | 'end';
  autoHide?: boolean;
  autoHideDuration?: number;
  resumeFromStart?: boolean;
  fixed?: boolean;
  closeButton?: boolean;

  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;
  onClose?: () => any;

  IconClose?: any;

  TransitionComponent?: IElementReference;

  IconProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  TransitionComponentProps?: IPropsAny;
}

const timeouts = {};

const Snackbar: React.FC<ISnackbar> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySnackbar?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Grow = React.useMemo(() => theme?.elements?.Grow || GrowElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    id = getID(),

    tonal = true,
    color = 'primary',
    size = 'regular',
    elevation = 0,

    open = true,

    primary,
    end: end_,
    position = 'bottom',
    alignment = 'start',
    autoHide = true,
    autoHideDuration = 4000,
    fixed = props.open !== undefined,
    resumeFromStart = true,
    closeButton = true,

    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onClose: onClose_,

    IconClose = IconMaterialClose,

    TransitionComponent = Grow,

    IconProps,
    IconButtonProps,
    TransitionComponentProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    timeoutStart: React.useRef<any>(undefined),
    timeoutLeftOver: React.useRef<any>(undefined),
    autoHideDuration: React.useRef<any>(undefined)
  };

  refs.autoHideDuration.current = autoHideDuration;

  const end = React.Children.toArray(end_);

  const onClose = React.useCallback(() => {
    if (is('function', onClose_)) onClose_();
  }, [onClose_]);

  const addTimeout = React.useCallback((value = autoHideDuration) => {
    clearTimeout(timeouts[id]);

    timeouts[id] = setTimeout(() => onClose(), value);

    refs.timeoutStart.current = new Date().getTime();
  }, [autoHideDuration, timeouts, onClose]);

  const removeTimeout = React.useCallback(() => {
    clearTimeout(timeouts[id]);

    const start = resumeFromStart ? refs.autoHideDuration.current : (refs.timeoutLeftOver.current !== undefined ? refs.timeoutLeftOver.current : refs.autoHideDuration.current);

    refs.timeoutLeftOver.current = start - (new Date().getTime() - refs.timeoutStart.current);
  }, [resumeFromStart]);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    if (timeouts[id] !== undefined) removeTimeout();

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, [onMouseEnter_]);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    if (refs.timeoutLeftOver.current !== undefined) addTimeout(refs.timeoutLeftOver.current);

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, [onMouseLeave_]);

  React.useEffect(() => {
    const onTabFocus = () => {
      if (refs.timeoutLeftOver.current !== undefined) addTimeout(refs.timeoutLeftOver.current);
    };

    const onTabBlur = () => {
      if (timeouts[id] !== undefined) removeTimeout();
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('focus', onTabFocus);

    rootDocument.addEventListener('blur', onTabBlur);

    return () => {
      rootDocument.removeEventListener('focus', onTabFocus);

      rootDocument.removeEventListener('blur', onTabBlur);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      if (autoHide && props.open !== undefined) addTimeout();
    }
    else {
      clearTimeout(timeouts[id]);

      timeouts[id] = refs.timeoutStart.current = refs.timeoutLeftOver.current = undefined;
    }
  }, [open, autoHide]);

  if (props.open !== undefined) {
    if (closeButton) {
      end.push(
        <IconButton
          version='text'

          color='inherit'

          onClick={onClose}

          {...IconButtonProps}
        >
          <IconClose {...IconProps} />
        </IconButton>
      );
    }
  }

  return (
    <TransitionComponent
      in={open}

      {...TransitionComponentProps}
    >
      <Surface
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        tonal={tonal}

        color={color}

        elevation={elevation}

        gap={2}

        wrap='wrap'

        direction='row'

        align='center'

        justify='space-between'

        onMouseEnter={onMouseEnter}

        onMouseLeave={onMouseLeave}

        Component={Line}

        className={classNames([
          staticClassName('Snackbar', theme) && [
            `onesy-Snackbar-root`,
            `onesy-Snackbar-size-${size}`
          ],

          className,
          classes.root,
          classes[`size_${size}`],
          fixed && [
            classes.fixed,
            classes[`position_${position}`],
            classes[`alignment_${alignment}`]
          ]
        ])}

        {...other}
      >
        {(children !== undefined || primary !== undefined) && (
          <div
            className={classNames([
              staticClassName('Snackbar', theme) && [
                `onesy-Snackbar-primary`
              ],

              classes.primary
            ])}
          >
            {is('string', primary) ? (
              <Type
                version='b2'
              >
                {primary}
              </Type>
            ) : primary}

            {children}
          </div>
        )}

        {!!end.length && (
          <Line
            gap={0}

            direction='row'

            wrap='wrap'

            align='center'

            justify='flex-end'

            className={classNames([
              staticClassName('Snackbar', theme) && [
                `onesy-Snackbar-end`
              ],

              classes.end
            ])}
          >
            {end}
          </Line>
        )}
      </Surface>
    </TransitionComponent>
  );
});

Snackbar.displayName = 'onesy-Snackbar';

export default Snackbar;
