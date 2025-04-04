import React from 'react';

import { is, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';
import IconMaterialWidgets from '@onesy/icons-material-rounded-react/IconMaterialWidgetsW100';

import SpeedDialElement from '../SpeedDial';
import SpeedDialItemElement from '../SpeedDialItem';
import TransitionElement, { TTransitionStatus } from '../Transition';
import IconButtonElement from '../IconButton';
import MoveElement from '../Move';
import WidgetsContext from './Context';
import { staticClassName } from '../utils';
import { IBaseElement, IElement, IPropsAny, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    padding: `0 ${theme.methods.space.value(13, 'px')}`,
    pointerEvents: 'none',
    zIndex: theme.z_index.modal - 1
  },

  line: {
    pointerEvents: 'auto'
  },

  fixed: {
    position: 'fixed'
  },

  position_top: {
    top: '24px'
  },

  position_bottom: {
    bottom: '24px'
  },

  widget: {
    userSelect: 'none',
    boxShadow: theme.shadows.values.default[6]
  },

  item: {
    position: 'fixed',
    top: '40px',
    left: '40px',
    opacity: '0',
    transform: 'translateY(100%)',
    transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    zIndex: theme.z_index.modal - 1,

    '&.enter': {
      opacity: '0',
      transform: 'translateY(100%)'
    },

    '&.entering': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.entered': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.exit': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.exiting': {
      opacity: '0',
      transform: 'translateY(100%)'
    },

    '&.exited': {
      opacity: '0',
      transform: 'translateY(100%)'
    }
  },

  iconButton: {
    top: '8px',
    insetInlineEnd: '-8px',
    transform: `translateX(${theme.direction === 'ltr' ? '' : '-'}100%)`,
    zIndex: '1',

    '&.onesy-IconButton-root': {
      position: 'absolute'
    }
  }
}), { name: 'onesy-Widgets' });

export type IWidgetsValue = {
  open: (value?: string) => void;
  openAll: () => void;

  close: (value?: string) => void;
  closeAll: () => void;
};

export type IWidgets = IBaseElement & {
  widgets?: IElement;

  position?: 'top' | 'bottom';

  move?: boolean;

  fixed?: boolean;

  onOpen?: (value: string) => any;
  onOpenAll?: () => any;

  onClose?: (value: string) => any;
  onCloseAll?: () => any;

  SpeedDialProps?: IPropsAny;
  MoveProps?: IPropsAny;

  Icon?: IElementReference;
  IconCloseItem?: IElementReference;
};

const Widgets: React.FC<IWidgets> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyWidgets?.props?.default, ...props_ }), [props_]);

  const SpeedDial = React.useMemo(() => theme?.elements?.SpeedDial || SpeedDialElement, [theme]);

  const SpeedDialItem = React.useMemo(() => theme?.elements?.SpeedDialItem || SpeedDialItemElement, [theme]);

  const Transition = React.useMemo(() => theme?.elements?.Transition || TransitionElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Move = React.useMemo(() => theme?.elements?.Move || MoveElement, [theme]);

  const {
    widgets,

    position = 'bottom',

    move = true,

    fixed = true,

    onOpen,
    onOpenAll,

    onClose,
    onCloseAll,

    SpeedDialProps,
    MoveProps,

    Icon: Icon_ = IconMaterialWidgets,
    IconCloseItem = IconMaterialClose,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [openItems, setOpenItems] = React.useState([]);

  const refs = {
    value: React.useRef<IWidgetsValue>({} as any),
    props: React.useRef<any>(undefined)
  };

  refs.props.current = props;

  const open = React.useCallback((value?: string) => {
    setOpenItems(items => unique([...items, value]));

    if (is('function', onOpen)) onOpen(value);
  }, []);

  const openAll = React.useCallback(() => {
    setOpenItems(() => unique(((widgets || []) as any).map((item: any) => {
      const valueItem = item.value !== undefined ? item.value : item.label;

      return valueItem;
    })));

    if (is('function', onOpenAll)) onOpenAll();
  }, []);

  const close = React.useCallback((value?: string) => {
    setOpenItems(items => unique(items.filter((item: any) => item !== value)));

    if (is('function', onClose)) onClose(value);
  }, []);

  const closeAll = React.useCallback(() => {
    setOpenItems([]);

    if (is('function', onCloseAll)) onCloseAll();
  }, []);

  // Add to the value
  refs.value.current.open = open;

  refs.value.current.openAll = openAll;

  refs.value.current.close = close;

  refs.value.current.closeAll = closeAll;

  const widgetsToUse = [...((widgets || []) as Array<IElement>)].reverse();

  return (
    <WidgetsContext.Provider value={refs.value.current}>
      {(widgets as any)?.length && <>
        <SpeedDial
          ref={ref}

          direction='top'

          position='bottom'

          alignment='start'

          Icon={Icon_}

          noRotate

          {...SpeedDialProps}

          {...other}
        >
          {(widgets as any).map((item: any, index: number) => {
            const valueItem = item.value !== undefined ? item.value : item.label;

            return (
              <SpeedDialItem
                key={index}

                onClick={() => !openItems.includes(valueItem) ? open(valueItem) : close(valueItem)}

                label={!openItems.includes(valueItem) ? item.label : `${l('Close')} ${item.label}`}

                Icon={item.Icon}
              />
            );
          })}
        </SpeedDial>

        {widgetsToUse.map((item: any, index: number) => {
          const valueItem = item.value !== undefined ? item.value : item.label;

          const WidgetWrapper: any = Move;

          const WidgetWrapperProps = {
            version: 'fixed',

            manage: true,
            manageLevel: 1,

            disabled: !(move && item.move !== false),

            ...MoveProps
          };

          return (
            <Transition
              key={index}

              in={openItems.includes(valueItem)}

              removeOnExited
            >
              {(status: TTransitionStatus) => (
                <WidgetWrapper
                  className={classNames([
                    staticClassName('Widgets', theme) && [
                      `onesy-Widgets-item`
                    ],

                    classes.item,
                    status
                  ])}

                  {...WidgetWrapperProps}
                >
                  <IconButton
                    onClick={() => close(valueItem)}

                    color='default'

                    version='filled'

                    size='small'

                    elevation={false}

                    className={classNames([
                      staticClassName('Widgets', theme) && [
                        `onesy-Widgets-icon-button`
                      ],

                      classes.iconButton
                    ])}
                  >
                    <IconCloseItem />
                  </IconButton>

                  {React.cloneElement(item.element, {
                    className: classNames([
                      staticClassName('Widgets', theme) && [
                        `onesy-Widgets-widget`
                      ],

                      classes.widget
                    ]),

                    ...(((['onesy-Weather', 'onesy-Watch'].includes(item.element.type?.displayName))) ? {
                      shadow: true,

                      style: {
                        boxShadow: 'none'
                      }
                    } : undefined)
                  })}
                </WidgetWrapper>
              )}
            </Transition>
          );
        })}
      </>}

      {children}
    </WidgetsContext.Provider>
  );
});

Widgets.displayName = 'onesy-Widgets';

export default Widgets;
