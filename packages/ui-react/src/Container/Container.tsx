import React from 'react';

import { is, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import useMediaQuery from '../useMediaQuery';

import { staticClassName, valueBreakpoints } from '../utils';
import { IValueBreakpoints } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%'
  },

  // alignment
  alignment_start: {
    marginInlineEnd: 'auto'
  },

  alignment_center: {
    marginInline: 'auto'
  },

  alignment_end: {
    marginInlineStart: 'auto'
  },

  // padding
  // vertical
  padding_vertical_both: {
    paddingBlock: theme.methods.space.value(2, 'px')
  },

  padding_vertical_start: {
    paddingBlockStart: theme.methods.space.value(2, 'px')
  },

  padding_vertical_end: {
    paddingBlockEnd: theme.methods.space.value(2, 'px')
  },

  padding_vertical_none: {
    paddingBlock: '0px'
  },

  // horizontal
  padding_horizontal_both: {
    paddingInline: theme.methods.space.value(2, 'px')
  },

  padding_horizontal_start: {
    paddingInlineStart: theme.methods.space.value(2, 'px')
  },

  padding_horizontal_end: {
    paddingInlineEnd: theme.methods.space.value(2, 'px')
  },

  padding_horizontal_none: {
    paddingInline: '0px'
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: '320px' },

  maxWidth_xs: { maxWidth: '400px' },

  maxWidth_sm: { maxWidth: '600px' },

  maxWidth_rg: { maxWidth: '960px' },

  maxWidth_lg: { maxWidth: '1240px' },

  maxWidth_xl: { maxWidth: '1920px' },

  maxWidth_unset: { maxWidth: 'unset' },

  // full width
  fullWidth: {
    width: '100%',
    maxWidth: 'unset'
  },
}), { name: 'onesy-Container' });

export type IContainer = ILine & {
  alignment?: 'start' | 'center' | 'end' | Partial<Record<IValueBreakpoints, 'start' | 'center' | 'end'>>;

  paddingVertical?: 'both' | 'start' | 'end' | 'none' | Partial<Record<IValueBreakpoints, 'both' | 'start' | 'end' | 'none'>>;

  paddingHorizontal?: 'both' | 'start' | 'end' | 'none' | Partial<Record<IValueBreakpoints, 'both' | 'start' | 'end' | 'none'>>;

  fullWidth?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset' | Partial<Record<IValueBreakpoints, 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset'>>;
};

const Container: React.FC<IContainer> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyContainer?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    alignment: alignment_,

    paddingVertical: paddingVertical_,

    paddingHorizontal: paddingHorizontal_,

    fullWidth: fullWidth_,

    maxWidth: maxWidth_,

    Component = 'div',

    style,
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [alignment_, paddingVertical_, paddingHorizontal_, fullWidth_, maxWidth_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [alignment_, paddingVertical_, paddingHorizontal_, fullWidth_, maxWidth_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const alignment = valueBreakpoints(alignment_, 'center', breakpoints, theme);
  const paddingVertical = valueBreakpoints(paddingVertical_, 'none', breakpoints, theme);
  const paddingHorizontal = valueBreakpoints(paddingHorizontal_, 'both', breakpoints, theme);
  const fullWidth = valueBreakpoints(fullWidth_, undefined, breakpoints, theme);
  const maxWidth = valueBreakpoints(maxWidth_, undefined, breakpoints, theme);

  const styles: any = {
    root: {

    }
  };

  if (!classes[`maxWidth_${maxWidth}`]) styles.root.maxWidth = maxWidth;

  if (!['both', 'start', 'end', 'none'].includes(paddingHorizontal)) styles.root.paddingInline = paddingHorizontal;

  if (!['both', 'start', 'end', 'none'].includes(paddingVertical)) styles.root.paddingBlock = paddingVertical;

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={0}

      direction='row'

      className={classNames([
        staticClassName('Container', theme) && [
          'onesy-Container-root'
        ],

        className,
        classes.root,
        classes[`alignment_${alignment}`],
        classes[`maxWidth_${maxWidth}`],
        classes[`padding_vertical_${paddingVertical}`],
        classes[`padding_horizontal_${paddingHorizontal}`],
        fullWidth && classes.fullWidth
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {children}
    </Line>
  );
});

Container.displayName = 'onesy-Container';

export default Container;
