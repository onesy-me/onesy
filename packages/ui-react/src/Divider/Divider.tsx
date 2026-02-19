import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { staticClassName, valueBreakpoints } from '../utils';
import { IValueBreakpoints } from '../types';
import { is, unique } from '@onesy/utils';
import useMediaQuery from '../useMediaQuery';

const useStyle = styleMethod(theme => ({
  root: {
    // Reset
    margin: '0',
    border: 'none',

    display: 'flex',
    flexShrink: '0',
    opacity: theme.palette.visual_contrast.default.opacity.divider,
    transition: theme.methods.transitions.make('background')
  },

  divider_tonal: {
    opacity: '1'
  },

  orientation_vertical: {
    margin: '0 8px',
    height: '100%',
    width: '1px'
  },

  orientation_vertical_middle: {
    margin: `16px 8px`,
    height: `calc(100% - 32px)`
  },

  // Orientation
  orientation_horizontal: {
    margin: '8px 0',
    height: '1px',
    width: '100%'
  },

  orientation_horizontal_middle: {
    margin: `8px 16px`,
    width: `calc(100% - 32px)`
  },

  rootWithChildren: {
    display: 'flex',
    opacity: '1',
    color: theme.palette.text.default.primary,
    background: 'transparent',

    // Reset
    height: 'unset',
    width: 'unset',
    margin: '0',
    border: 'none'
  },

  // Orientation
  rootWithChildren_orientation_horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },

  rootWithChildren_orientation_horizontal_middle: {
    margin: `0 16px`,
    width: `calc(100% - 32px)`
  },

  rootWithChildren_orientation_vertical: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },

  rootWithChildren_orientation_vertical_middle: {
    margin: `16px 0`,
    height: `calc(100% - 32px)`
  },

  // flex
  flex_orientation_horizontal: {
    flex: '1 1 auto',
    width: 'auto'
  },

  flex_orientation_vertical: {
    flex: '1 1 auto'
  },

  text: {
    flex: '0 0 auto'
  },

  // Orientation
  text_horizontal: {
    margin: `0 16px`,
  },

  text_vertical: {
    margin: `16px 0`,
  },

  divider: {
    flex: '0 1 100%',
    opacity: theme.palette.visual_contrast.default.opacity.divider
  },

  // Orientation
  divider_orientation_horizontal: {
    height: '1px'
  },

  divider_orientation_vertical: {
    width: '1px'
  },

  orientation_horizontal_padding: {
    marginInline: '16px',
    width: 'calc(100% - 32px)'
  },

  orientation_vertical_padding: {
    marginBlock: '16px',
    height: 'calc(100% - 32px)'
  },

  color_inherit: {
    opacity: theme.palette.visual_contrast.default.opacity.divider,
    color: 'inherit',
    background: 'currentColor'
  },

  inset: {
    marginLeft: `72px`,
    width: `calc(100% - 72px)`
  }
}), { name: 'onesy-Divider' });

export type IDividerAlignment = 'start' | 'center' | 'end';

export type IDividerOrientation = 'vertical' | 'horizontal';

export type IDivider = ISurface & {
  inset?: boolean;
  middle?: boolean;
  padding?: number;
  opacity?: number;
  alignment?: IDividerAlignment | Partial<Record<IValueBreakpoints, IDividerAlignment>>;
  orientation?: IDividerOrientation | Partial<Record<IValueBreakpoints, IDividerOrientation>>;
  flex?: boolean;
};

const Divider: React.FC<IDivider> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyDivider?.props?.default, ...props_ };

  const Type = theme?.elements?.Type || TypeElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const {
    ref,

    tonal = true,
    color = 'inverted',

    inset,
    middle,
    padding,
    opacity = theme.palette.visual_contrast.default.opacity.divider,
    alignment: alignmentProps,
    orientation: orientationProps,
    flex,

    Component: Component_ = 'hr',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const styles: any = {
    root: {

    },
    divider: {},
    start: {},
    end: {}
  };

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [alignmentProps, orientationProps];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [alignmentProps, orientationProps]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const alignment = valueBreakpoints(alignmentProps, 'center', breakpoints, theme);
  const orientation = valueBreakpoints(orientationProps, 'horizontal', breakpoints, theme);

  let Component = Component_;

  if (children && Component === 'hr') Component = 'div';

  if (alignment === 'start') styles.start.flexBasis = '15%';

  if (alignment === 'end') styles.end.flexBasis = '15%';

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      version='filled'

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('Divider', theme) && [
          'onesy-Divider-root'
        ],

        className,
        classes[children ? 'rootWithChildren' : 'root'],
        classes[`${children ? 'rootWithChildren_' : ''}orientation_${orientation}`],
        flex && classes[`flex_orientation_${orientation}`],
        inset && classes.inset,
        middle && classes[`${children ? `rootWithChildren_` : ''}orientation_${orientation}_middle`],
        padding && classes[`orientation_${orientation}_padding`],
        color === 'inherit' && classes.color_inherit,
        tonal && classes.divider_tonal
      ])}

      style={{
        opacity,

        ...style,

        ...styles.root,
      }}

      {...other}
    >
      {children && <>
        <Surface
          version='filled'

          tonal={tonal}

          color={color}

          className={classNames([
            staticClassName('Divider', theme) && [
              'onesy-Divider-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`],
            tonal && classes.divider_tonal
          ])}

          style={{
            ...styles.divider,

            ...styles.start
          }}
        />

        <Type
          version='b2'

          className={classNames([
            staticClassName('Divider', theme) && [
              'onesy-Divider-text'
            ],

            classes.text,
            classes[`text_${orientation}`]
          ])}
        >
          {children}
        </Type>

        <Surface
          version='filled'

          tonal={tonal}

          color={color}

          className={classNames([
            staticClassName('Divider', theme) && [
              'onesy-Divider-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`],
            tonal && classes.divider_tonal
          ])}

          style={{
            ...styles.divider,

            ...styles.end
          }}
        />
      </>}
    </Surface>
  );
};

Divider.displayName = 'onesy-Divider';

export default Divider;
