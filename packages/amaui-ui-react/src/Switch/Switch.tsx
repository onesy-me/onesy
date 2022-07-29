import React, { ChangeEvent } from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import Keyframes from '../Keyframes';
import { transform } from '@babel/core';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
    borderRadius: theme.methods.space.value('lg'),

    // Color
    '&$default': { color: theme.palette.text.default.primary },

    '&$neutral': { color: theme.palette.color.neutral.main },

    '&$primary': { color: theme.palette.color.primary.main },

    '&$secondary': { color: theme.palette.color.secondary.main },

    '&$tertiary': { color: theme.palette.color.tertiary.main },

    '&$quaternary': { color: theme.palette.color.quaternary.main },

    '&$info': { color: theme.palette.color.info.main },

    '&$success': { color: theme.palette.color.success.main },

    '&$warning': { color: theme.palette.color.warning.main },

    '&$error': { color: theme.palette.color.error.main },

    '&$tonal': {
      '&$neutral': { color: theme.methods.palette.color.value('neutral', 60) },

      '&$primary': { color: theme.methods.palette.color.value('primary', 60) },

      '&$secondary': { color: theme.methods.palette.color.value('secondary', 60) },

      '&$tertiary': { color: theme.methods.palette.color.value('tertiary', 60) },

      '&$quaternary': { color: theme.methods.palette.color.value('quaternary', 60) },

      '&$info': { color: theme.methods.palette.color.value('info', 60) },

      '&$success': { color: theme.methods.palette.color.value('success', 60) },

      '&$warning': { color: theme.methods.palette.color.value('warning', 60) },

      '&$error': { color: theme.methods.palette.color.value('error', 60) }
    },

    '&$small': {
      height: theme.methods.space.value('md', 'px'),
      width: theme.methods.space.value('xxl', 'px', -4)
    },

    '&$regular': {
      height: theme.methods.space.value('lg', 'px'),
      width: theme.methods.space.value('xxxl', 'px', -4)
    },

    '&$large': {
      height: theme.methods.space.value('xl', 'px'),
      width: theme.methods.space.value('xxxl', 'px', 4)
    },

    '&$disabled': {
      opacity: theme.palette.visual_contrast.default.opacity.disabled,
      cursor: 'default'
    }
  },

  background: {
    display: 'inline-block',
    position: 'absolute',
    inset: 0,
    opacity: theme.palette.visual_contrast.default.opacity.hover,
    width: '100%',
    height: '100%',
    borderRadius: theme.methods.space.value('lg'),
    background: theme.palette.text.default.primary,
    transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 'sm' }),

    '&$tonal': {
      background: 'currentColor'
    },

    '&$checked': {
      opacity: 1,
      background: 'currentColor'
    },

    '&$disabled': {
      background: theme.palette.text.default.secondary
    }
  },

  border: {
    display: 'inline-block',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: `2px solid`,
    borderColor: theme.palette.text.default.secondary,
    opacity: 1,
    borderRadius: theme.methods.space.value('lg'),
    transition: theme.methods.transitions.make(['opacity'], { duration: 'sm' }),

    '&$tonal': {
      '&$neutral': { borderColor: theme.palette.color['neutral'][theme.palette.light ? 40 : 20] },

      '&$primary': { borderColor: theme.palette.color['primary'][theme.palette.light ? 40 : 20] },

      '&$secondary': { borderColor: theme.palette.color['secondary'][theme.palette.light ? 40 : 20] },

      '&$tertiary': { borderColor: theme.palette.color['tertiary'][theme.palette.light ? 40 : 20] },

      '&$quaternary': { borderColor: theme.palette.color['quaternary'][theme.palette.light ? 40 : 20] },

      '&$info': { borderColor: theme.palette.color['info'][theme.palette.light ? 40 : 20] },

      '&$success': { borderColor: theme.palette.color['success'][theme.palette.light ? 40 : 20] },

      '&$warning': { borderColor: theme.palette.color['warning'][theme.palette.light ? 40 : 20] },

      '&$error': { borderColor: theme.palette.color['error'][theme.palette.light ? 40 : 20] }
    },

    '&$checked': {
      opacity: 0
    }
  },

  dot: {
    display: 'inline-flex',
    position: 'relative',
    width: theme.methods.space.value('rg', 'px'),
    height: theme.methods.space.value('rg', 'px'),
    borderRadius: theme.methods.space.value('lg', 'px'),
    transition: theme.methods.transitions.make('transform', { duration: 'sm' })
  }
}), { name: 'AmauiSwitch' });

const Switch = React.forwardRef((props: any, ref: any) => {
  const {
    tonal,
    color = 'primary',
    size = 'regular',
    valueDefault,
    value,
    onChange,
    Component = 'span',
    disabled,

    className,
    style,

    children,

    ...other
  } = props;
  const [checked, setChecked] = React.useState(valueDefault !== undefined ? valueDefault : value);
  const animation = React.useRef(false);

  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const styles: any = {
    root: {},
    background: {},
    border: {},
    dot: {}
  };

  React.useEffect(() => {
    if (value !== undefined && checked !== value) {
      setChecked(value);

      animation.current = true;
    }
  }, [value]);

  const onUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(1341, animation.current);
    if (!disabled && !animation.current) {
      if (is('function', onChange)) onChange(!checked, event);

      // Inner controlled checkbox
      if (!props.hasOwnProperty('value')) {
        setChecked(!checked);

        animation.current = true;
      }
    }
  };

  let palette: any;

  if (!theme.palette.color[color]) {
    palette = theme.methods.color(color);

    styles.root.color = color;
  }

  if (props.tonal) {
    if (palette) {
      styles.dot.background = styles.border.borderColor = palette[theme.palette.light ? 40 : 20];
    }
  }

  const keyframes = {
    checked: [
      { name: 'growStart', timeout: 1400 },
      { name: 'moveEnd', timeout: 700 },
      { name: 'doneEnd', timeout: 900 }
    ],
    unchecked: [
      { name: 'growEnd', timeout: 1400 },
      { name: 'moveStart', timeout: 700 },
      { name: 'doneStart', timeout: 900 }
    ]
  };

  const initial = {
    checked: {
      transform: 'translate(29px, 8px) scale(1.5)',
      background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary
    },
    unchecked: {
      transform: `translate(${theme.methods.space.value('sm', 'px')}, ${theme.methods.space.value('sm', 'px')})`,
      background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary
    }
  };

  const styleKeyframes = {
    growStart: {
      transform: 'translate(8px, 8px) scale(1.76)',
      background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
      transition: theme.methods.transitions.make('transform', { duration: 1400 })
    },
    moveEnd: {
      transform: 'translate(21px, 8px) scale(1.5)',
      background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary,
      width: 22,
      transition: `${theme.methods.transitions.make('width', { duration: 700 })}, ${theme.methods.transitions.make('transform', { duration: 700 })}, ${theme.methods.transitions.make('background', { duration: 350, delay: 350 })}`
    },
    doneEnd: {
      ...initial.checked,
      width: 16,
      transition: `${theme.methods.transitions.make('width', { duration: 900 })}, , ${theme.methods.transitions.make('transform', { duration: 900 })}`
    },
    growEnd: {
      transform: 'translate(28px, 8px) scale(1.76)',
      background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary,
      transition: theme.methods.transitions.make('transform', { duration: 1400 })
    },
    moveStart: {
      transform: 'translate(8px, 8px) scale(1)',
      background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
      width: 22,
      transition: `${theme.methods.transitions.make('width', { duration: 700 })}, ${theme.methods.transitions.make('transform', { duration: 700 })}, ${theme.methods.transitions.make('background', { duration: 350, delay: 350 })}`
    },
    doneStart: {
      ...initial.unchecked,
      width: 16,
      transition: `${theme.methods.transitions.make('width', { duration: 900 })}, , ${theme.methods.transitions.make('transform', { duration: 900 })}`
    }
  };

  return (
    <Component
      ref={ref}

      onClick={!animation && onUpdate}

      className={classNames([
        className,
        classes.root,
        classes[color],
        classes[size],
        tonal && classes.tonal,
        disabled && classes.disabled
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      <span
        className={classNames([
          classes.background,
          tonal && classes.tonal,
          checked && classes.checked,
          disabled && classes.disabled
        ])}

        style={styles.background}
      />

      <span
        className={classNames([
          classes.border,
          classes[color],
          tonal && classes.tonal,
          checked && classes.checked
        ])}

        style={styles.border}
      />

      <Keyframes
        keyframes={keyframes[checked ? 'checked' : 'unchecked']}

        update={checked}

        append
      >
        {(status: any) => {
          if (
            (checked && status === 'doneEnd') ||
            (!checked && status === 'doneStart')
          ) animation.current = false;

          console.log(1, status);
          return (
            <span
              className={classNames([
                classes.dot,
                classes[color],
                tonal && classes.tonal
              ])}

              style={{
                ...(status === 'appended' && initial[checked ? 'checked' : 'unchecked']),

                ...styleKeyframes[status]
              }}
            />
          );
        }}
      </Keyframes>

    </Component>
  );
});

export default Switch;
