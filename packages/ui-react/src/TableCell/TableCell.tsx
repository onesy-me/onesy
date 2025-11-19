import React from 'react';

import { clamp, is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialArrowDownwardAlt from '@onesy/icons-material-rounded-react/IconMaterialArrowDownwardAltW100';

import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import TypeElement from '../Type';
import DividerElement from '../Divider';
import { TLineAlign, TLineJustify } from '../Line/Line';
import { getOverflowParent, staticClassName } from '../utils';
import { IBaseElement, IPropsAny } from '../types';
import Tooltip from '../Tooltip';
import useResize from '../useResize';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-cell',
    position: 'relative',
    zIndex: '1',
    background: 'inherit',

    ...theme.typography.values.b2,

    '&::before': {
      content: "''",
      position: 'absolute',
      inset: '0',
      background: 'currentColor',
      opacity: '0',
      transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),
      zIndex: '-1'
    }
  },

  value: {

  },

  size_small: {
    padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  size_regular: {
    padding: theme.methods.space.value(2, 'px')
  },

  size_large: {
    padding: theme.methods.space.value(3, 'px')
  },

  head: {
    fontWeight: 'bold'
  },

  body: {},

  divider: {
    '&.onesy-Divider-root': {
      position: 'absolute',
      left: '0px',
      bottom: '0px',
      margin: '0px'
    }
  },

  noWeight: {
    fontWeight: '400'
  },

  sticky: {
    position: 'sticky',
    zIndex: '14'
  },

  sticky_left: {
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '0',
      right: '-24px',
      bottom: '0',
      width: '24px',
      transition: theme.methods.transitions.make('box-shadow'),
      pointerEvents: 'none'
    }
  },

  sticky_right: {
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '-24px',
      bottom: '0',
      width: '24px',
      transition: theme.methods.transitions.make('box-shadow'),
      pointerEvents: 'none'
    }
  },

  stickyActive_left: {
    '&::after': {
      boxShadow: `inset 11px 0 7px -7px ${theme.palette.light ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.14)'}`
    }
  },

  stickyActive_right: {
    '&::after': {
      boxShadow: `inset -11px 0 7px -7px ${theme.palette.light ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.14)'}`
    }
  },

  sort: {
    cursor: 'pointer',
    borderRadius: 2,

    '& > *:nth-child(1)': {
      // '&:focus': {
      //   outline: `1px solid ${theme.palette.text.default.primary}`,
      //   outlineOffset: 2
      // }
    }
  },

  sortedBy: {
    '& .onesy-Icon-root': {
      transition: theme.methods.transitions.make('transform')
    }
  },

  sortedBy_asc: {
    '& .onesy-Icon-root': {
      transform: 'rotate(180deg)'
    }
  }
}), { name: 'onesy-TableCell' });

export type ITableCellSort = 'asc' | 'desc';

export type ITableCell = IBaseElement & {
  sort?: boolean;
  sortedByDefault?: ITableCellSort;
  sortedBy?: ITableCellSort;

  onSort?: (value: ITableCellSort) => any;

  position?: 'head' | 'body';
  align?: TLineAlign;
  justify?: TLineJustify;
  noWeight?: boolean;

  sticky?: boolean;
  stickyPosition?: 'left' | 'right';
  stickyOffset?: number;

  timeout?: number;

  IconArrow?: any;

  IconButtonSortProps?: any;
  TypeProps?: any;
  DividerProps?: IPropsAny;
};

const TableCell: React.FC<ITableCell> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTableCell?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const Divider = theme?.elements?.Divider || DividerElement;

  const {
    tonal = true,
    color,
    size = 'regular',

    position = 'body',
    align = 'center',
    justify = 'flex-end',
    noWeight,

    sort,
    sortedBy: sortedBy_,
    sortedByDefault,

    onSort: onSort_,

    sticky,
    stickyPosition = 'left',
    stickyOffset,

    timeout = 150,

    disabled,

    IconArrow = IconMaterialArrowDownwardAlt,

    IconButtonSortProps,
    TypeProps,
    DividerProps,

    Component = props.position === 'head' ? 'th' : 'td',

    className,

    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const windowWidth = useResize();

  const [root, setRoot] = React.useState<HTMLElement>();
  const [stickyActive, setStickyActive] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const [sortedBy, setSortedBy] = React.useState(sortedByDefault);

  const refs = {
    root: React.useRef<HTMLElement>(undefined),
    offset: React.useRef(null),
    observer: React.useRef<MutationObserver>(null),
    sticky: React.useRef(sticky)
  };

  refs.root.current = root;

  refs.sticky.current = sticky;

  const init = () => {
    setTimeout(() => {
      if (sticky) {
        const parent = refs.root.current?.parentElement;

        if (parent) {
          const elements = Array.from(parent.children);

          const index = elements.findIndex(item => item === refs.root.current);

          let elementsOffset = stickyPosition === 'left' ? elements.slice(0, index) : elements.slice(index + 1);

          elementsOffset = elementsOffset.filter(item => item.classList.contains('onesy-TableCell-sticky'));

          const offset_ = elementsOffset.reduce((result, item) => {
            result += item.clientWidth;

            return result;
          }, 0);

          setOffset(clamp(offset_, 0));
        }
      }
    }, 140);
  };

  React.useEffect(() => {
    // init
    init();
  }, [windowWidth]);

  React.useEffect(() => {
    if (sortedBy !== sortedBy_) setSortedBy(sortedBy_);
  }, [sortedBy_]);

  const onStickyMove = () => {
    const offsetNew = refs.root.current.offsetLeft;

    setStickyActive(refs.offset.current !== offsetNew);
  };

  const onStickyInit = () => {
    if (refs.sticky.current && refs.root.current) {
      refs.root.current.style.position = 'unset';

      refs.offset.current = refs.root.current.offsetLeft;

      refs.root.current.style.position = 'sticky';

      onStickyMove();
    }
  };

  const onObserve = () => {
    const element = refs.root.current?.closest('table');

    // clean up
    if (refs.observer.current) refs.observer.current.disconnect();

    if (!element) return;

    // init
    const config = {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-*'],
      characterData: true
    };

    const method = mutations => {
      for (const mutation of mutations) {
        switch (mutation.type) {
          case 'childList':
          case 'attributes':
          case 'characterData':
            onStickyInit();
            break;
        }
      }
    };

    refs.observer.current = new MutationObserver(method);

    refs.observer.current.observe(element, config);

    return refs.observer.current;
  };

  React.useEffect(() => {
    if (root && sticky) {
      onStickyInit();

      setTimeout(() => {
        onStickyInit();
      }, 250);

      // observer
      onObserve();

      // scroll
      const parentOverflow = window.document.querySelector('.onesy-Table-wrapper');

      if (parentOverflow) parentOverflow.addEventListener('scroll', onStickyMove, { passive: false });

      return () => {
        if (parentOverflow) parentOverflow.removeEventListener('scroll', onStickyMove);
      };
    }
  }, [timeout, windowWidth, sticky, stickyPosition, root]);

  const onSort = () => {
    let valueNew: any;

    setSortedBy(item => {
      valueNew = item === 'asc' ? 'desc' : 'asc';

      return valueNew;
    });

    if (is('function', onSort_)) onSort_!(valueNew);
  };

  const stylesOther: any = {};

  if (sticky) {
    stylesOther[stickyPosition === 'left' ? 'left' : 'right'] = offset + (stickyOffset !== undefined ? stickyOffset : 0);

    if (position === 'head') stylesOther.zIndex = '17';
  }

  return (
    <Component
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          ref.current = item;
        }

        refs.root.current = item;

        setRoot(item);
      }}

      role='cell'

      className={classNames([
        staticClassName('TableCell', theme) && [
          `onesy-TableCell-root`,
          `onesy-TableCell-size-${size}`,
          sticky && `onesy-TableCell-sticky`,
          stickyPosition && `onesy-TableCell-sticky-position-${stickyPosition}`,
          stickyActive && `onesy-TableHead-sticky-active`
        ],

        className,
        classes.root,
        position === 'head' ? classes.head : classes.body,
        noWeight && classes.noWeight,
        sticky && [
          classes.sticky,
          classes[`sticky_${stickyPosition}`]
        ],
        stickyActive && classes[`stickyActive_${stickyPosition}`]
      ])}

      style={{
        ...style,

        ...stylesOther
      }}

      {...other}
    >
      <Line
        gap={0}

        direction='row'

        align={align}

        justify={justify}

        className={classNames([
          staticClassName('TableCell', theme) && [
            `onesy-TableCell-value`
          ],

          classes.value,
          classes[`size_${size}`],
          sort !== undefined && classes.sort
        ])}
      >
        {is('simple', children) ? (
          <Type
            version='l2'

            tabIndex={sort !== undefined ? 0 : undefined}

            {...TypeProps}

            className={classNames([
              staticClassName('TableCell', theme) && [
                `onesy-TableCell-value-type`
              ],

              TypeProps?.className
            ])}
          >
            {children}
          </Type>
        ) : (
          children && React.cloneElement(children as any, {
            tabIndex: sort !== undefined ? 0 : undefined
          })
        )}

        {sort && (
          <Tooltip
            name={sortedBy === 'asc' ? l('Ascending') : l('Descending')}
          >
            <IconButton
              size='small'

              onClick={onSort}

              disabled={disabled}

              className={classNames([
                staticClassName('TableCell', theme) && [
                  `onesy-TableCell-sort-icon-button`
                ],

                classes.sortedBy,
                classes[`sortedBy_${sortedBy}`]
              ])}
            >
              <IconArrow />
            </IconButton>
          </Tooltip>
        )}
      </Line>

      <Divider
        color='inherit'

        {...DividerProps}

        className={classNames([
          DividerProps?.className,
          classes.divider
        ])}
      />
    </Component>
  );
});

TableCell.displayName = 'onesy-TableCell';

export default TableCell;
