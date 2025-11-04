import React from 'react';

import { is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialExpandMore from '@onesy/icons-material-rounded-react/IconMaterialExpandMoreW100';
import IconMaterialArrowRight from '@onesy/icons-material-rounded-react/IconMaterialArrowRightW100';

import ListItemElement from '../ListItem';
import ListElement from '../List';
import IconButtonElement from '../IconButton';
import MenuElement from '../Menu';
import ExpandElement from '../Expand';
import FadeElement from '../Fade';
import { iconFontSize, staticClassName } from '../utils';
import { IElement, IHTMLElement, IElementReference, IPropsAny } from '../types';
import { IListItem } from '../ListItem/ListItem';

const useStyle = styleMethod(theme => ({
  icon: {
    transition: theme.methods.transitions.make('transform')
  },

  icon_open: {
    transform: 'rotate(-180deg)'
  }
}), { name: 'onesy-ListItem' });

export type IMenuItem = IListItem & {
  menu?: IElement;
  menuId?: string;

  menuOpen?: boolean;

  openMenu?: boolean;
  openMenuDefault?: boolean;

  openList?: boolean;
  openListDefault?: boolean;

  menuItem?: boolean;
  list?: IElement;
  indicator?: boolean;
  include?: Array<IHTMLElement>;

  menuCloseOnClick?: boolean;
  listCloseOnClick?: boolean;

  ExpandIcon?: IElementReference;
  ListTransitionComponent?: IElementReference;

  ListProps?: IPropsAny;
  ListTransitionComponentProps?: IPropsAny;
  MenuProps?: IPropsAny;
  ExpandProps?: IPropsAny;
};

const ListItemDelays = {
  Transition: {
    enter: 70
  }
};

const MenuItem: React.FC<IMenuItem> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMenuItem?.props?.default, ...props_ }), [props_]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Expand = React.useMemo(() => theme?.elements?.Expand || ExpandElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const {
    tonal = true,
    color = 'default',
    colorSelected = props.color,

    size = 'regular',

    menu,
    menuId,

    menuOpen,

    openMenu: openMenu_,
    openMenuDefault,

    openList: openList_,
    openListDefault,

    menuItem,
    list: list_,
    preselected,
    selected,
    inset,

    end: end_,
    indicator = true,
    include,

    footer,

    menuCloseOnClick,
    listCloseOnClick,

    disabled,

    onClick: onClick_,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,

    ExpandIcon = IconMaterialExpandMore,
    ListTransitionComponent = Fade,

    ListProps,
    ListTransitionComponentProps: ListTransitionComponentProps_,
    ExpandProps,
    MenuProps = {
      autoSelect: true
    },

    ...other
  } = props;

  const { classes } = useStyle();

  const [openMenu, setOpenMenu] = React.useState(openMenuDefault !== undefined ? openMenuDefault : openMenu_);
  const [openList, setOpenList] = React.useState(openListDefault !== undefined ? openListDefault : openList_);
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const refs = {
    root: React.useRef<any>(undefined),
    props: React.useRef<any>(undefined),
    openMenu: React.useRef<any>(undefined),
    openList: React.useRef<any>(undefined),
    focus: React.useRef<any>(undefined),
    ids: {
      primary: React.useId(),
      secondary: React.useId()
    }
  };

  refs.props.current = props;
  refs.openMenu.current = openMenu;
  refs.openList.current = openList;
  refs.focus.current = focus;

  const ListTransitionComponentProps: any = {
    add: true,

    delay: {
      enter: ListItemDelays.Transition.enter
    },

    ...ListTransitionComponentProps_
  };

  const list = list_ && React.Children.toArray(list_).map((item: any, index: number) => (
    React.cloneElement(item, {
      key: index,

      onClick: (event: React.MouseEvent<any>) => {
        if (item.props.listCloseOnClick) onCloseList();

        if (is('function', item.props.onClick)) item.props.onClick(event);
      },

      ...item?.props
    })
  ));

  const onClick = React.useCallback((event?: React.MouseEvent<any>) => {
    if (!refs.props.current.disabled) {
      if (refs.props.current.list) setOpenList(!refs.openList.current);
    }

    if (is('function', onClick_)) onClick_(event);
  }, [onClick_]);

  let end = end_;

  if (menu) end = end_ || <IconMaterialArrowRight />;

  if (list) end = end_ || (indicator && (
    <IconButton
      size={24}

      fontSize={iconFontSize}

      onClick={onClick}

      className={classNames([
        staticClassName('ListItem', theme) && [
          'onesy-ListItem-icon-button'
        ],

        classes.iconButton
      ])}
    >
      <ExpandIcon
        className={classNames([
          classes.icon,
          openList && classes.icon_open
        ])}
      />
    </IconButton>
  ));

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!refs.props.current.disabled) {
        if (menu) {
          if (refs.openMenu.current && ((theme.direction === 'ltr' && event.key === 'ArrowLeft') || (theme.direction === 'rtl' && event.key === 'ArrowRight'))) setOpenMenu(false);

          if (!refs.openMenu.current && ((theme.direction === 'ltr' && event.key === 'ArrowRight') || (theme.direction === 'rtl' && event.key === 'ArrowLeft'))) setOpenMenu(true);
        }
        else if (list) {
          if (refs.openList.current && (event.key === 'ArrowUp' || (theme.direction === 'ltr' && event.key === 'ArrowLeft') || (theme.direction === 'rtl' && event.key === 'ArrowRight'))) setOpenMenu(false);

          if (!refs.openList.current && (event.key === 'ArrowDown' || (theme.direction === 'ltr' && event.key === 'ArrowRight') || (theme.direction === 'rtl' && event.key === 'ArrowLeft'))) setOpenMenu(true);

          if (event.key === 'Enter' && refs.focus.current) onClick();
        }
        else {
          if (event.key === 'Enter' && !refs.props.current.button && refs.focus.current) {
            if (is('function', refs.props.current.onClick)) refs.props.current.onClick(event);
          }
        }
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', onKeyDown);

    return () => {
      rootDocument.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (openMenu_ !== openMenu) setOpenMenu(openMenu_);
  }, [openMenu_]);

  React.useEffect(() => {
    if (openList_ !== openList) setOpenList(openList_);
  }, [openList_]);

  React.useEffect(() => {
    if (menuOpen && preselected) refs.root.current.focus();
  }, [preselected, menuOpen]);

  React.useEffect(() => {
    if (menu) setOpenMenu(hover || preselected || selected);
  }, [hover]);

  React.useEffect(() => {
    if (menu) setOpenMenu(hover || focus || preselected || selected);
  }, [focus]);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) {
      setHover(false);

      setFocus(false);
    }

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    if (event.target === event.currentTarget && !disabled) setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    if (event.target === event.currentTarget && !disabled) setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onCloseList = React.useCallback(() => {
    if (!disabled) {
      setOpenList(false);
      setHover(false);
      setFocus(false);

      // if (is('function', onClose_)) onClose_();
    }
  }, []);

  const onCloseMenu = React.useCallback(() => {
    if (!disabled) {
      setOpenMenu(false);
      setHover(false);
      setFocus(false);

      // if (is('function', onClose_)) onClose_();
    }
  }, []);

  ListTransitionComponentProps.in = !!openList;

  return <>
    <ListItem
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else if (ref?.current) ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      colorSelected={colorSelected}

      size={size}

      inset={inset}

      selected={selected}

      preselected={preselected}

      end={end}

      disabled={disabled}

      onClick={onClick}

      onFocus={onFocus}

      onBlur={onBlur}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      aria-haspopup={!!menu}

      aria-expanded={openMenu}

      menuItem

      className={classNames([
        staticClassName('MenuItem', theme) && [
          'onesy-MenuItem-root',
          `onesy-MenuItem-size-${size}`
        ],

        classes.root
      ])}

      InteractionProps={{
        focus
      }}

      RootProps={{
        className: classNames([
          staticClassName('ListItem', theme) && [
            menu && `onesy-ListItem-menu`,
            list && `onesy-ListItem-list`,
            menuItem && `onesy-ListItem-menu-item`,
            menuOpen && `onesy-ListItem-menu-open`,
            openMenu && `onesy-ListItem-open-menu`,
            openList && `onesy-ListItem-open-list`,
            menuItem && [
              inset && `onesy-ListItem-menu-item-inset`
            ],
          ]
        ])
      }}

      footer={(footer || menu || list) && <>
        {footer}

        {list && (
          <Expand
            in={openList}

            parent={refs.root.current}

            {...ExpandProps}
          >
            <ListTransitionComponent
              {...ListTransitionComponentProps}
            >
              <List
                indent={5}

                {...ListProps}

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'onesy-ListItem-list'
                  ],

                  ListProps?.className,
                  classes.list
                ])}
              >
                {list}
              </List>
            </ListTransitionComponent>
          </Expand>
        )}

        {/* Menu */}
        {menu && (
          <Menu
            open={!!openMenu}

            include={include}

            onClose={onCloseMenu}

            closeOnClickAway={false}

            anchorElement={refs.root.current}

            menuItems={menu as any}

            transformOrigin='left top'

            transformOriginSwitch='right top'

            transformOriginRtl='left top'

            transformOriginRtlSwitch='right top'

            position='right'

            alignment='start'

            onMouseEnter={onMouseEnter}

            {...MenuProps}
          />
        )}
      </>}

      {...other}
    />
  </>;
});

MenuItem.displayName = 'onesy-MenuItem';

export default MenuItem;
