import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';
import Line from '../Line';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    flex: '0 1 auto'
  },

  auto: {
    flex: '1 1 auto',
    width: 'auto'
  },

  // gaps
  // gap
  gap_0: { gap: 0 },

  'gap_05': { gap: `${0.5 * theme.space.unit}px` },

  'gap_1': { gap: `${1 * theme.space.unit}px` },

  'gap_2': { gap: `${2 * theme.space.unit}px` },

  'gap_3': { gap: `${3 * theme.space.unit}px` },

  'gap_4': { gap: `${4 * theme.space.unit}px` },

  'gap_8': { gap: `${8 * theme.space.unit}px` },

  'gap_12': { gap: `${12 * theme.space.unit}px` },

  'gap_16': { gap: `${16 * theme.space.unit}px` },

  // rowGap
  rowGap_0: { rowGap: 0 },

  'rowGap_05': { rowGap: `${0.5 * theme.space.unit}px` },

  'rowGap_1': { rowGap: `${1 * theme.space.unit}px` },

  'rowGap_2': { rowGap: `${2 * theme.space.unit}px` },

  'rowGap_3': { rowGap: `${3 * theme.space.unit}px` },

  'rowGap_4': { rowGap: `${4 * theme.space.unit}px` },

  'rowGap_8': { rowGap: `${8 * theme.space.unit}px` },

  'rowGap_12': { rowGap: `${12 * theme.space.unit}px` },

  'rowGap_16': { rowGap: `${16 * theme.space.unit}px` },

  // columnGap
  columnGap_0: { columnGap: 0 },

  'columnGap_05': { columnGap: `${0.5 * theme.space.unit}px` },

  'columnGap_1': { columnGap: `${1 * theme.space.unit}px` },

  'columnGap_2': { columnGap: `${2 * theme.space.unit}px` },

  'columnGap_3': { columnGap: `${3 * theme.space.unit}px` },

  'columnGap_4': { columnGap: `${4 * theme.space.unit}px` },

  'columnGap_8': { columnGap: `${8 * theme.space.unit}px` },

  'columnGap_12': { columnGap: `${12 * theme.space.unit}px` },

  'columnGap_16': { columnGap: `${16 * theme.space.unit}px` }
}), { name: 'AmauiGrid' });

const Grid = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiGrid?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    auto,
    line,
    wrap = 'wrap',
    columns = 10,
    gap: gap_,
    rowGap: rowGap_,
    columnGap: columnGap_,
    direction: direction_,
    offsets,
    values,

    RootProps,

    Component: Component_ = 'div',

    style,
    className,

    children,

    ...other
  } = props;

  const gap = valueBreakpoints(gap_, 2, breakpoints, theme);
  const rowGap = valueBreakpoints(rowGap_, undefined, breakpoints, theme);
  const columnGap = valueBreakpoints(columnGap_, undefined, breakpoints, theme);
  const direction = valueBreakpoints(direction_, 'row', breakpoints, theme);

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

  let Component = Component_;

  if (line) {
    Component = Line;

    other.wrap = wrap;
    other.gap = gap;
    other.columnGap = columnGap;
    other.direction = direction;
  }

  // Width
  const breakpoint = values && Object.keys(breakpoints).find(item => values && !!values[item] && breakpoints[item]);

  let width = values?.[breakpoint] || columns;
  let offset = offsets?.[breakpoint] || 0;

  const valueGap = columnGap !== undefined ? columnGap : gap;

  if (auto) width = undefined;
  else width = `calc(${(width / columns) * 100}% - ${(valueGap * theme.space.unit)}px)`;

  styles.root.width = width;

  if (offset > 0) styles.root.marginInlineStart = `${(offset / columns) * 100}%`;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Grid', theme) && [
          'AmauiGrid-root',
          `AmauiGrid-wrap-${wrap}`,
          `AmauiGrid-direction-${direction}`,
          `AmauiGrid-columns-${columns}`,
          `AmauiGrid-gap-${gap}`,
          line && 'AmauiGrid-root-line',
          auto && 'AmauiGrid-root-auto',
          rowGap !== undefined && 'AmauiGrid-row-gap-${rowGap',
          columnGap !== undefined && 'AmauiGrid-column-gap-${columnGap'
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

      {...RootProps}

      {...other}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, item.type?.displayName !== 'Grid' ? {} : {
          gap,
          rowGap,
          columnGap,

          ...other
        })
      ))}
    </Component>
  );
});

Grid.displayName = 'AmauiGrid';

export default Grid;
