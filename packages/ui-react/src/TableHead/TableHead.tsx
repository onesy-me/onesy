import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { getOverflowParent, staticClassName } from '../utils';
import TableRowElement from '../TableRow';
import LinearProgressElement from '../LinearProgress';
import useResize from '../useResize';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-header-group',
    background: 'inherit',

    '& .onesy-TableCell-root': {
      whiteSpace: 'nowrap',
      wordBreak: 'normal'
    }
  },

  sticky: {
    position: 'sticky',
    top: '0',
    zIndex: '114',
    transition: theme.methods.transitions.make('box-shadow')
  },

  stickyActive: {
    boxShadow: `0px 0px 16px ${theme.palette.light ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.14)'}`
  },

  rowLoader: {

  },

  tdLoader: {
    '&.onesy-LinearProgress-root': {
      position: 'absolute',
      inset: 0
    }
  }
}), { name: 'onesy-TableHead' });

export type ITableHead = ISurface & {
  sticky?: boolean;

  stickyOffset?: number;

  loading?: boolean;

  timeout?: number;

  LinearGradientProps?: any;
  TableRowLoaderProps?: any;
};

const TableHead: React.FC<ITableHead> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTableHead?.props?.default, ...props_ };

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const TableRow = theme?.elements?.TableRow || TableRowElement;

  const LinearProgress = theme?.elements?.LinearProgress || LinearProgressElement;

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    sticky,
    stickyOffset = 0,

    timeout = 150,

    loading,

    LinearGradientProps,

    TableRowLoaderProps,

    Component = 'thead',

    className,

    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const windowWidth = useResize();

  const [root, setRoot] = React.useState<HTMLElement>();
  const [stickyActive, setStickyActive] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>(undefined),
    offset: React.useRef(null),
    observer: React.useRef<MutationObserver>(null),
    sticky: React.useRef(sticky)
  };

  refs.root.current = root;

  refs.sticky.current = sticky;

  const styleOther: any = {};

  if (sticky && stickyOffset !== undefined) styleOther.top = stickyOffset;

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
  }, [timeout, windowWidth, sticky, root]);

  return (
    <Surface
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          ref.current = item;
        }

        refs.root.current = item;

        setRoot(item);
      }}

      tonal={tonal}

      color={color}

      role='rowgroup'

      Component={Component}

      className={classNames([
        staticClassName('TableHead', theme) && [
          `onesy-TableHead-root`,
          `onesy-TableHead-size-${size}`,
          sticky && `onesy-TableHead-sticky`,
          stickyActive && `onesy-TableHead-sticky-active`
        ],

        className,
        classes.root,
        sticky && classes.sticky,
        stickyActive && classes.stickyActive
      ])}

      style={{
        ...style,

        ...styleOther
      }}

      {...other}
    >
      {React.Children.toArray(children).map((item: any, index: number) => (
        React.cloneElement(item, {
          key: index,

          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          position: 'head'
        })
      ))}

      {loading && (
        <TableRow
          {...TableRowLoaderProps}

          className={classNames([
            staticClassName('TableHead', theme) && [
              `onesy-TableHead-row-loader`
            ],

            TableRowLoaderProps?.className,
            classes.rowLoader
          ])}
        >
          <LinearProgress
            tonal

            color='primary'

            colspan='100%'

            Component='td'

            {...LinearGradientProps}

            className={classNames([
              staticClassName('TableHead', theme) && [
                `onesy-TableHead-td-loader`
              ],

              LinearGradientProps?.className,
              classes.tdLoader
            ])}
          />
        </TableRow>
      )}
    </Surface>
  );
});

TableHead.displayName = 'onesy-TableHead';

export default TableHead;
