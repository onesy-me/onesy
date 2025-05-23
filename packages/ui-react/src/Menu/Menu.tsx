import React from 'react';

import { is, isEnvironment } from '@onesy/utils';
import { style as styleMethod, classNames, useOnesyTheme, getID } from '@onesy/style-react';

import ListElement from '../List';
import TooltipElement from '../Tooltip';
import ClickListenerElement from '../ClickListener';
import { ITooltip } from '../Tooltip/Tooltip';
import { staticClassName } from '../utils';
import { IElement, IHTMLElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-Menu' });

export const MENUS = {
  open: [],

  priority: (value: any) => MENUS.open[MENUS.open.length - 1] === value,

  add: (value: any) => {
    const index = MENUS.open.findIndex(item => item === value);

    if (index === -1) MENUS.open.push(value);

    MENUS.open = MENUS.open.filter(Boolean);
  },

  remove: (value: any) => {
    const index = MENUS.open.findIndex(item => item === value);

    if (index > -1) MENUS.open.splice(index, 1);

    MENUS.open = MENUS.open.filter(Boolean);
  }
};

export type IMenu = Omit<ITooltip, 'name' | 'label'> & {
  open?: boolean;

  openDefault?: boolean;

  name?: ((method: (item: any, index: number) => any) => any) | IElement;

  label?: ((method: (item: any, index: number) => any) => any) | IElement;

  menuItems?: Array<IElement>;

  include?: Array<IHTMLElement>;
  includeParentQueries?: Array<string>;
  includeQueries?: Array<string>;
  ignoreNonExisting?: boolean;

  autoSelect?: boolean;
  autoSelectOnBlur?: boolean;
  resetKeyboardNavigation?: boolean;
  closeOnClickAway?: boolean;

  onSelect?: (value: any) => any;

  onOpen?: () => any;
  onClose?: () => any;

  ListProps?: IPropsAny;
  ModalProps?: IPropsAny;
  WrapperProps?: IPropsAny;
  ClickListenerProps?: IPropsAny;
};

const Menu: React.FC<IMenu> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMenu?.props?.default, ...props_ }), [props_]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const ClickListener = React.useMemo(() => theme?.elements?.ClickListener || ClickListenerElement, [theme]);

  const {
    open: open_,

    openDefault,

    name,

    label,

    menuItems,

    arrow,
    anchor,
    anchorElement,
    autoSelect,
    autoSelectOnBlur,
    resetKeyboardNavigation = false,
    closeOnClickAway = true,

    include = [],
    includeParentQueries = [],
    includeQueries = [],
    ignoreNonExisting,

    onSelect,

    onOpen: onOpen_,
    onClose: onClose_,

    ListProps,
    ModalProps,
    WrapperProps: WrapperProps_,
    ClickListenerProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const id = React.useId();

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [preselected, setPreselected] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(undefined),
    id: React.useRef<any>(undefined),
    main: React.useRef<any>(undefined),
    props: React.useRef<any>(undefined),
    preselected: React.useRef<any>(undefined),
    include: React.useRef<any>([]),
    menuClassName: React.useRef(`a-${new Date().getTime()}`)
  };

  refs.id.current = id;

  refs.preselected.current = preselected;

  refs.props.current = props;

  React.useEffect(() => {
    if (open) {
      MENUS.add(refs.id.current);

      if (autoSelect) {
        const values = React.Children.toArray(refs.props.current.children).map((item: any, index: number) => ((item.props?.button || item.props?.href) && !item.props?.disabled) ? index : undefined).filter(item => is('number', item));

        setPreselected(values[0]);
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (refs.props.current.open && MENUS.priority(refs.id.current)) {
        const values = React.Children.toArray(refs.props.current.children).map((item: any, index: number) => ((item.props?.button || item.props?.href) && !item.props?.disabled) ? index : undefined).filter(item => is('number', item));

        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();

            return setPreselected(() => {
              let value = refs.preselected.current;

              const index = values.findIndex(item_ => item_ === value);

              if (index === -1) value = values[values.length - 1];
              else if (index > 0) value = values[index - 1];
              else if (refs.props.current.resetKeyboardNavigation) value = values[values.length - 1];

              return value;
            });

          case 'ArrowDown':
            event.preventDefault();

            return setPreselected(() => {
              let value = refs.preselected.current;

              const index = values.findIndex(item_ => item_ === value);

              if (index === -1) value = values[0];
              else if (index < values.length - 1) value = values[index + 1];
              else if (refs.props.current.resetKeyboardNavigation) value = values[0];

              return value;
            });

          case 'Escape':
            event.preventDefault();

            return onClose();

          case 'Home':
            event.preventDefault();

            return setPreselected(values[0]);

          case 'End':
            event.preventDefault();

            return setPreselected(values[values.length - 1]);

          default:
            break;
        }
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', onKeyDown);

    return () => {
      MENUS.remove(refs.id.current);

      rootDocument.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      if (autoSelect) {
        const values = React.Children.toArray(refs.props.current.children).map((item: any, index: number) => ((item.props?.button || item.props?.href) && !item.props?.disabled) ? index : undefined).filter(item => is('number', item));

        setPreselected(values[0]);
      }
    }

    setTimeout(() => {
      if (include && refs.root.current) include.push(refs.root.current);
    });

    return () => {
      if (include) {
        const index = include.findIndex(item => item === refs.root.current);

        if (index > -1) include.splice(index, 1);
      }
    };
  }, [open]);

  React.useEffect(() => {
    if (open !== open_) setOpen(open_);
  }, [open_]);

  const onMouseLeave = React.useCallback(() => {
    setPreselected('');
  }, []);

  const onOpen = () => {
    if (open_ === undefined) setOpen(true);

    if (is('function', onOpen_)) onOpen_();
  };

  const onClose = () => {
    if (open_ === undefined) setOpen(false);

    if (refs.props.current.autoSelectOnBlur) {
      const item: any = React.Children.toArray(refs.props.current.children)[refs.preselected.current];

      if (item && is('function', refs.props.current.onSelect)) refs.props.current.onSelect(item.props?.value !== undefined ? item.props?.value : item.props?.primary);
    }

    setPreselected('');

    if (is('function', onClose_)) onClose_();
  };

  const Wrapper = closeOnClickAway ? ClickListener : React.Fragment;

  let WrapperProps: any = {
    ...WrapperProps_
  };

  if (closeOnClickAway) {
    WrapperProps.onClickOutside = onClose;

    WrapperProps.include = [refs.main.current, ...(refs.include.current || []), ...include].filter(Boolean);

    WrapperProps.includeParentQueries = [...includeParentQueries, `.${refs.menuClassName.current}`];

    WrapperProps.includeQueries = [...includeQueries, `.${refs.menuClassName.current}`];

    WrapperProps.ignoreNonExisting = ignoreNonExisting;

    WrapperProps = {
      ...WrapperProps,

      ...ClickListenerProps
    };
  }

  if (open) MENUS.add(id);
  else MENUS.remove(id);

  const methodItem = (item: any, index: number) => ({
    key: item.key || index,

    role: 'menuitem',

    menuId: id,

    MenuProps: {
      ...item.props?.MenuProps,

      className: classNames([
        item.props?.MenuProps?.className,
        refs.menuClassName.current
      ])
    },

    onClose,

    // Only if button or href value
    ...(((item.props?.button || item.props?.href) && !item.props.disabled) ? {
      onMouseEnter: () => {
        setPreselected(index);
      },

      onMouseLeave: () => {
        setPreselected('');
      },

      preselected: index === preselected,

      onClick: (event: React.MouseEvent<any>) => {
        if (is('function', item.props?.onClick)) item.props?.onClick(event);

        if (item.props?.menuCloseOnClick) onClose();
      },

      onKeyDown: (event: React.KeyboardEvent<any>) => {
        if (event.target === event.currentTarget && event.key === 'Enter') {
          if (is('function', item.props?.onClick)) item.props?.onClick();

          if (is('function', item.props?.onKeyDown)) item.props?.onKeyDown(event);

          if (item.props?.menuCloseOnClick) onClose();
        }
      }
    } : {})
  });

  const nameValue = name || label;

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Tooltip
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        open={open}

        className={classNames([
          staticClassName('Menu', theme) && [
            'onesy-Menu-root',
            open && `onesy-Menu-open`
          ],

          className,
          classes.root
        ])}

        onMouseLeave={onMouseLeave}

        anchor={anchor}

        anchorElement={anchorElement}

        label={nameValue ? is('function', nameValue) ? (nameValue as any)(methodItem) : nameValue : (menuItems && (
          <List
            menu

            menuOpen={open}

            include={refs.include.current}

            role='menu'

            {...ListProps}
          >
            {ListProps?.noChildrenTransform ? menuItems : React.Children.toArray(menuItems).map((item: any, index: number) => (
              React.cloneElement(item, methodItem(item, index))
            ))}
          </List>
        ))}

        click

        arrow={arrow}

        hover={false}

        focus={false}

        longPress={false}

        noMargin={!arrow}

        onOpen={onOpen}

        onClose={onClose}

        ModalProps={{
          background: true,
          backgroundInvisible: true,
          freezeScroll: false,

          ...ModalProps
        }}

        {...other as any}
      >
        {children && React.cloneElement(children, {
          ref: item => {
            if (children.ref) {
              if (is('function', children.ref)) children.ref(item);
              else children.ref.current = item;
            }

            refs.main.current = item;
          }
        })}
      </Tooltip>
    </Wrapper>
  );
});

Menu.displayName = 'onesy-Menu';

export default Menu;
