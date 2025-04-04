import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import { staticClassName } from '../utils';
import { IBaseElement, IPropsAny } from '../types';

const noShrinkStrokeDashOffset = 194;

const useStyle = styleMethod(theme => ({
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },

    '100%': {
      transform: 'rotate(360deg)'
    }
  },

  '@keyframes shrink': {
    '0%': {
      strokeDashoffset: '240px'
    },

    '50%': {
      strokeDashoffset: `${noShrinkStrokeDashOffset}px`,
      transform: 'rotate(134deg)'
    },

    '100%': {
      strokeDashoffset: '240px',
      transform: 'rotate(360deg)'
    }
  },

  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    fontSize: '3rem'
  },

  // Version
  version_indeterminate: {
    animation: `$spin 1.4s linear infinite`
  },

  version_determinate: {
    transform: 'rotate(-90deg)'
  },

  // Size
  size_extra_small: { fontSize: '1rem' },

  size_small: { fontSize: '1.5rem' },

  size_regular: { fontSize: '3rem' },

  size_large: { fontSize: '3.5rem' },

  // Color
  color_default: { color: theme.palette.text.default.primary },

  color_neutral: { color: theme.palette.color.neutral.main },

  color_primary: { color: theme.palette.color.primary.main },

  color_secondary: { color: theme.palette.color.secondary.main },

  color_tertiary: { color: theme.palette.color.tertiary.main },

  color_quaternary: { color: theme.palette.color.quaternary.main },

  color_info: { color: theme.palette.color.info.main },

  color_success: { color: theme.palette.color.success.main },

  color_warning: { color: theme.palette.color.warning.main },

  color_error: { color: theme.palette.color.error.main },

  // Tonal
  tonal_color_neutral: { color: theme.methods.palette.color.value('neutral', 50) },

  tonal_color_primary: { color: theme.methods.palette.color.value('primary', 50) },

  tonal_color_secondary: { color: theme.methods.palette.color.value('secondary', 50) },

  tonal_color_tertiary: { color: theme.methods.palette.color.value('tertiary', 50) },

  tonal_color_quaternary: { color: theme.methods.palette.color.value('quaternary', 50) },

  tonal_color_info: { color: theme.methods.palette.color.value('info', 50) },

  tonal_color_success: { color: theme.methods.palette.color.value('success', 50) },

  tonal_color_warning: { color: theme.methods.palette.color.value('warning', 50) },

  tonal_color_error: { color: theme.methods.palette.color.value('error', 50) },

  svg: {
    width: '1em',
    height: '1em',
    color: 'inherit',
    stroke: 'currentcolor',
  },

  path: {
    strokeLinecap: 'square',
    transformOrigin: 'center',
    strokeDasharray: '240px',
    strokeDashoffset: '0px'
  },

  // Version
  path_indeterminate: {
    animation: `$shrink 1.4s ease-in-out infinite`
  },

  path_indeterminate_noShrink: {
    strokeDashoffset: `${noShrinkStrokeDashOffset}px`,
    animation: 'none'
  },

  path_determinate: {
    strokeDasharray: '101',
    strokeDashoffset: '0',
    transition: theme.methods.transitions.make('stroke-dashoffset')
  },

  pathBackground: {
    strokeLinecap: 'square',
    strokeDasharray: '240px',
    strokeDashoffset: '0px',
    stroke: 'transparent'
  }
}), { name: 'onesy-RoundProgress' });

export type IRoundProgress = IBaseElement & {
  version?: 'determinate' | 'indeterminate';

  value?: number;
  noShrink?: boolean;
  thickness?: number;
  rounded?: boolean;

  pathProps?: IPropsAny;
  pathBackgroundProps?: IPropsAny;
};

const RoundProgress: React.FC<IRoundProgress> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyRoundProgress?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',

    version = 'indeterminate',

    value,
    noShrink,
    thickness = 2,
    rounded: rounded_ = true,

    pathProps = {},
    pathBackgroundProps,

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  let rounded = rounded_;

  const styles: any = {
    root: {

    },
    circle: {}
  };

  if (!classes[`size_${size}`]) styles.root.fontSize = is('number', size) ? `${size}px` : size;

  if (!classes[`color_${color}`]) {
    styles.root.color = color;

    if (tonal) {
      const palette = theme.methods.color(color);

      styles.root.color = theme.methods.palette.color.value(undefined, 50, true, palette);
    }
  }

  if (version === 'determinate') {
    rounded = false;

    pathProps['pathLength'] = 100;

    styles.circle.strokeDashoffset = 101 - value;

    // 0%
    if (styles.circle.strokeDashoffset === 1) styles.circle.strokeDashoffset = 0;

    other['aria-valuenow'] = value;

    other['aria-valuemin'] = 0;

    other['aria-valuemax'] = 100;

    other['aria-valuetext'] = `${value}%`;
  }

  return (
    <span
      ref={ref}

      className={classNames([
        staticClassName('RoundedProgress', theme) && [
          'onesy-RoundedProgress-root',
          `onesy-RoundedProgress-version-${version}`,
          `onesy-RoundedProgress-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        classes[`color_${color}`],
        classes[`version_${version}`],
        tonal && classes[`tonal_color_${color}`]
      ])}
    >
      <svg
        viewBox='0 0 24 24'

        className={classNames([
          staticClassName('RoundedProgress', theme) && [
            'onesy-RoundedProgress-svg'
          ],

          classes.svg
        ])}

        style={{
          ...styles.root,

          ...style
        }}

        {...other as any}
      >
        <circle
          fill='none'
          strokeWidth={thickness}
          cx='12'
          cy='12'
          r='10'

          {...(!rounded && { strokeLinecap: 'butt' })}

          {...pathBackgroundProps}

          className={classNames([
            staticClassName('RoundedProgress', theme) && [
              'onesy-RoundedProgress-path-background'
            ],

            pathBackgroundProps?.className,
            classes.pathBackground,
            classes[`path_${version}`]
          ])}
        />

        <circle
          fill='none'
          strokeWidth={thickness}
          cx='12'
          cy='12'
          r='10'

          {...(!rounded && { strokeLinecap: 'butt' })}

          {...pathProps}

          className={classNames([
            staticClassName('RoundedProgress', theme) && [
              'onesy-RoundedProgress-path'
            ],

            pathProps?.className,
            classes.path,
            classes[`path_${version}`],
            noShrink && classes.path_indeterminate_noShrink
          ])}

          style={{
            ...styles.circle,

            ...pathProps?.style
          }}
        />
      </svg>

      {children}
    </span>
  );
});

RoundProgress.displayName = 'onesy-RoundProgress';

export default RoundProgress;
