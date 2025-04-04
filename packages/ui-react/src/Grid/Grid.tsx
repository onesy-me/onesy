import React from 'react';

import { is, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import useMediaQuery from '../useMediaQuery';
import { ILine } from '../Line/Line';
import { valueBreakpoints, staticClassName } from '../utils';
import { IValueBreakpoints, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    flex: '0 1 auto'
  },

  auto: {
    flex: '1 1 auto',
    width: 'auto'
  },

  // gaps
  // gap
  gap_0: { gap: '0' },

  'gap_05': { gap: `${0.5 * theme.space.unit}px` },

  'gap_1': { gap: `${1 * theme.space.unit}px` },

  'gap_2': { gap: `${2 * theme.space.unit}px` },

  'gap_3': { gap: `${3 * theme.space.unit}px` },

  'gap_4': { gap: `${4 * theme.space.unit}px` },

  'gap_8': { gap: `${8 * theme.space.unit}px` },

  'gap_12': { gap: `${12 * theme.space.unit}px` },

  'gap_16': { gap: `${16 * theme.space.unit}px` },

  // rowGap
  rowGap_0: { rowGap: '0' },

  'rowGap_05': { rowGap: `${0.5 * theme.space.unit}px` },

  'rowGap_1': { rowGap: `${1 * theme.space.unit}px` },

  'rowGap_2': { rowGap: `${2 * theme.space.unit}px` },

  'rowGap_3': { rowGap: `${3 * theme.space.unit}px` },

  'rowGap_4': { rowGap: `${4 * theme.space.unit}px` },

  'rowGap_8': { rowGap: `${8 * theme.space.unit}px` },

  'rowGap_12': { rowGap: `${12 * theme.space.unit}px` },

  'rowGap_16': { rowGap: `${16 * theme.space.unit}px` },

  // columnGap
  columnGap_0: { columnGap: '0' },

  'columnGap_05': { columnGap: `${0.5 * theme.space.unit}px` },

  'columnGap_1': { columnGap: `${1 * theme.space.unit}px` },

  'columnGap_2': { columnGap: `${2 * theme.space.unit}px` },

  'columnGap_3': { columnGap: `${3 * theme.space.unit}px` },

  'columnGap_4': { columnGap: `${4 * theme.space.unit}px` },

  'columnGap_8': { columnGap: `${8 * theme.space.unit}px` },

  'columnGap_12': { columnGap: `${12 * theme.space.unit}px` },

  'columnGap_16': { columnGap: `${16 * theme.space.unit}px` }
}), { name: 'onesy-Grid' });

export type IGridValues = Partial<Record<IValueBreakpoints, number>>;

export type IGrid = ILine & {
  auto?: boolean;

  columns?: number | IGridValues;

  parentGap?: any;
  parentRowGap?: any;
  parentColumnGap?: any;

  offsets?: IGridValues;

  responsive?: boolean;

  values?: IGridValues;

  RootProps?: IPropsAny;
};

const Grid: React.FC<IGrid> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyGrid?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    auto,

    wrap,

    columns = 12,

    gap: gap_,
    rowGap: rowGap_,
    columnGap: columnGap_,

    parentGap,
    parentRowGap,
    parentColumnGap,

    direction: direction_,

    offsets,
    values,

    responsive: responsive_,

    RootProps,

    Component = 'div',

    style,
    className,

    children,

    ...otherProps
  } = props;

  const other: any = otherProps;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    responsiveIFrame: React.useRef<any>({})
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [gap_, rowGap_, columnGap_, direction_, responsive_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [gap_, rowGap_, columnGap_, direction_, responsive_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const gap = valueBreakpoints(gap_, 2, breakpoints, theme);
  const rowGap = valueBreakpoints(rowGap_, undefined, breakpoints, theme);
  const columnGap = valueBreakpoints(columnGap_, undefined, breakpoints, theme);
  const direction = valueBreakpoints(direction_, 'column', breakpoints, theme);
  const responsive = valueBreakpoints(responsive_, undefined, breakpoints, theme);

  const responsiveValues = {
    mobile: useMediaQuery(`(max-width: 767px)`, { element: refs.root.current })
  };

  const styles: any = {
    root: {

    },
    divider: {}
  };

  const valuesGaps = [0, 0.5, 1, 2, 3, 4, 8, 12, 16];

  if (rowGap !== undefined || columnGap !== undefined) {
    if (!valuesGaps.includes(rowGap)) styles.root.rowGap = is('string', rowGap) ? rowGap : `${rowGap * theme.space.unit}px`;

    if (!valuesGaps.includes(columnGap)) styles.root.columnGap = is('string', columnGap) ? columnGap : `${columnGap * theme.space.unit}px`;
  }
  else {
    if (!valuesGaps.includes(gap)) styles.root.gap = is('string', gap) ? gap : `${gap * theme.space.unit}px`;
  }

  other.wrap = wrap;

  other.gap = gap;

  other.columnGap = columnGap;

  other.direction = direction;

  // Width
  // first smallest to largest
  // that is true
  const breakpoint = is('object', values) && ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].find(item => !!values[item] && breakpoints[item]);

  let width: any = values?.[breakpoint] || values?.default || (is('number', values) && values) || columns;

  // responsive
  // value provided, override
  const isResponsive = responsive && responsiveValues.mobile;

  const offset = offsets?.[breakpoint] || offsets?.default || 0;

  const valueGap = (parentColumnGap !== undefined ? parentColumnGap : parentGap) || 0;

  const part = width / (columns as number);

  const partGap = (valueGap * theme.space.unit) - ((valueGap * theme.space.unit) * part);

  if (auto) width = undefined;
  else if (isResponsive) width = '100%';
  else if (width === columns) width = '100%';
  else width = `calc(${part * 100}% - ${partGap}px)`;

  if (isResponsive) {
    other.direction = 'column';
  }

  styles.root.width = width;

  if (offset > 0) styles.root.marginInlineStart = `${(offset / (columns as number)) * 100}%`;

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      Component={Component}

      className={classNames([
        staticClassName('Grid', theme) && [
          'onesy-Grid-root'
        ],

        className,
        classes.root,
        auto && classes.auto,
        classes[`gap_${String(gap).replace('.', '')}`],
        classes[`rowGap_${String(rowGap).replace('.', '')}`],
        classes[`columnGap_${String(columnGap).replace('.', '')}`]
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}

      {...RootProps}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, !item.type?.displayName?.includes('Grid') ? {} : {
          ...(other.direction === 'row' && {
            parentGap: gap,
            parentRowGap: rowGap,
            parentColumnGap: columnGap
          })
        })
      ))}
    </Line>
  );
});

Grid.displayName = 'onesy-Grid';

export default Grid;
