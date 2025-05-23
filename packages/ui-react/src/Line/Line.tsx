import React from 'react';

import { is, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import DividerElement from '../Divider';
import useMediaQuery from '../useMediaQuery';

import { staticClassName, valueBreakpoints } from '../utils';
import { IBaseElement, IPropsAny, IValueBreakpoints } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box'
  },

  // flex
  flex: { flex: '1 1 auto' },

  // flexNo
  flexNo: { flex: '0 0 auto' },

  // full width
  fullWidth: { width: '100%' },

  // display
  display_inherit: { display: 'inherit' },

  display_flex: { display: 'flex' },

  display_inline_flex: { display: 'inline-flex' },

  // wrap
  wrap_inherit: { flexWrap: 'inherit' },

  wrap_nowrap: { flexWrap: 'nowrap' },

  wrap_wrap: { flexWrap: 'wrap' },

  'wrap_wrap-reverse': { flexWrap: 'wrap-reverse' },

  // direction
  direction_inherit: { flexDirection: 'inherit' },

  direction_row: { flexDirection: 'row' },

  'direction_row-reverse': { flexDirection: 'row-reverse' },

  direction_column: { flexDirection: 'column' },

  'direction_column-reverse': { flexDirection: 'column-reverse' },

  // align
  'align_inherit': { alignItems: 'inherit' },

  'align_initial': { alignItems: 'initial' },

  'align_flex-start': { alignItems: 'flex-start' },

  align_center: { alignItems: 'center' },

  'align_flex-end': { alignItems: 'flex-end' },

  'align_baseline': { alignItems: 'baseline' },

  'align_stretch': { alignItems: 'stretch' },

  // justify
  justify_inherit: { justifyContent: 'inherit' },

  justify_initial: { justifyContent: 'initial' },

  'justify_flex-start': { justifyContent: 'flex-start' },

  justify_center: { justifyContent: 'center' },

  'justify_flex-end': { justifyContent: 'flex-end' },

  'justify_space-around': { justifyContent: 'space-around' },

  'justify_space-between': { justifyContent: 'space-between' },

  'justify_space-evenly': { justifyContent: 'space-evenly' },

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
}), { name: 'onesy-Line' });

export type TLineAlign = 'inherit' | 'initial' | 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch' | 'unset';

export type TLineJustify = 'inherit' | 'initial' | 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly' | 'unset';

export type TLineDirection = 'inherit' | 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type TLineWrap = 'inherit' | 'wrap' | 'nowrap' | 'wrap-reverse';

export type TLineDisplay = 'inherit' | 'flex' | 'inline-flex';

export type ILine = IBaseElement & {
  display?: TLineDisplay | Partial<Record<IValueBreakpoints, TLineDisplay>>;

  direction?: TLineDirection | Partial<Record<IValueBreakpoints, TLineDirection>>;

  align?: TLineAlign | Partial<Record<IValueBreakpoints, TLineAlign>>;
  justify?: TLineJustify | Partial<Record<IValueBreakpoints, TLineJustify>>;

  wrap?: TLineWrap | Partial<Record<IValueBreakpoints, TLineWrap>>;

  flex?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  flexNo?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  gap?: string | number | Partial<Record<IValueBreakpoints, string | number>>;
  rowGap?: string | number | Partial<Record<IValueBreakpoints, string | number>>;
  columnGap?: string | number | Partial<Record<IValueBreakpoints, string | number>>;

  fullWidth?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  divider?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  DividerProps?: IPropsAny;
};

const Line: React.FC<ILine> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyLine?.props?.default, ...props_ }), [props_]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const {
    display: display_,
    align: align_,
    justify: justify_,
    direction: direction_,
    gap: gap_,
    rowGap: rowGap_,
    columnGap: columnGap_,
    divider: divider_,
    wrap: wrap_,
    flex: flex_,
    flexNo: flexNo_,
    fullWidth: fullWidth_,

    DividerProps,

    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [display_, align_, justify_, direction_, gap_, rowGap_, columnGap_, divider_, wrap_, flex_, flexNo_, fullWidth_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [display_, align_, justify_, direction_, gap_, rowGap_, columnGap_, divider_, wrap_, flex_, flexNo_, fullWidth_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const display = valueBreakpoints(display_, 'flex', breakpoints, theme);
  const align = valueBreakpoints(align_, 'flex-start', breakpoints, theme);
  const justify = valueBreakpoints(justify_, 'flex-start', breakpoints, theme);
  const direction = valueBreakpoints(direction_, 'column', breakpoints, theme);
  const gap = valueBreakpoints(gap_, 2, breakpoints, theme);
  const rowGap = valueBreakpoints(rowGap_, undefined, breakpoints, theme);
  const columnGap = valueBreakpoints(columnGap_, undefined, breakpoints, theme);
  const divider = valueBreakpoints(divider_, undefined, breakpoints, theme);
  const wrap = valueBreakpoints(wrap_, undefined, breakpoints, theme);
  const flex = valueBreakpoints(flex_, undefined, breakpoints, theme);
  const flexNo = valueBreakpoints(flexNo_, undefined, breakpoints, theme);
  const fullWidth = valueBreakpoints(fullWidth_, undefined, breakpoints, theme);

  const styles: any = {
    root: {

    },
    divider: {}
  };

  const valuesGaps = [0, 0.5, 1, 2, 3, 4, 8, 12, 16];

  if (rowGap !== undefined || columnGap !== undefined) {
    if (rowGap !== undefined && !valuesGaps.includes(rowGap)) styles.root.rowGap = is('string', rowGap) ? rowGap : `${rowGap * theme.space.unit}px`;

    if (columnGap !== undefined && !valuesGaps.includes(columnGap)) styles.root.columnGap = is('string', columnGap) ? columnGap : `${columnGap * theme.space.unit}px`;
  }
  else {
    if (!valuesGaps.includes(gap)) styles.root.gap = is('string', gap) ? gap : `${gap * theme.space.unit}px`;
  }

  const Divider_ = (
    <Divider
      flex

      orientation={direction.includes('row') ? 'vertical' : 'horizontal'}

      {...DividerProps}
    />
  );

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('Line', theme) && [
          'onesy-Line-root',
          `onesy-Line-direction-${direction}`
        ],

        className,
        classes.root,
        classes[`display_${display.replace('-', '_')}`],
        classes[`wrap_${wrap}`],
        classes[`direction_${direction}`],
        classes[`align_${align}`],
        classes[`justify_${justify}`],
        classes[`gap_${String(gap).replace('.', '')}`],
        classes[`rowGap_${String(rowGap).replace('.', '')}`],
        classes[`columnGap_${String(columnGap).replace('.', '')}`],
        flex && classes.flex,
        flexNo && classes.flexNo,
        fullWidth && classes.fullWidth
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {React.Children.toArray(children).flatMap((item: any, index: number) => (!divider || index === (children as any).length - 1) ? [item] : [item, Divider_])}
    </Component>
  );
});

Line.displayName = 'onesy-Line';

export default Line;
