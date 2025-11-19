import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { INavigationItemVersion } from '../NavigationItem/NavigationItem';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    padding: '0'
  },

  fixed: {
    position: 'fixed',
    insetInline: '0',
    bottom: '0'
  }
}), { name: 'onesy-NavigationBar' });

export type TNavigationBarValue = Array<string>;

export type INavigationBar = Omit<ISurface, 'version' | 'onChange'> & {
  value?: TNavigationBarValue;
  valueDefault?: TNavigationBarValue;
  onChange?: (value: TNavigationBarValue) => any;

  version?: INavigationItemVersion;

  fixed?: boolean;
};

const NavigationBar: React.FC<INavigationBar> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyNavigationBar?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const {
    color = 'primary',
    tonal = true,
    version = 'regular',

    value,
    valueDefault,
    onChange,

    fixed,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [selected, setSelected] = React.useState(() => {
    const valueNew = valueDefault !== undefined ? valueDefault : value;

    return valueNew !== undefined ? is('array', valueNew) ? valueNew : [valueNew] : [];
  });

  const styles: any = {
    root: {

    },
    icon: {}
  };

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init && value !== selected) setSelected(is('array', value) ? value : [value]);
  }, [value]);

  const onSelect = (itemProps: any) => {
    // Only one item at the time is selectable,
    // and it cannot be unselected by clicking on the same item
    const valueNew = [itemProps.value];

    if (valueNew !== undefined) {
      // Update inner or controlled
      if (!props.hasOwnProperty('value')) setSelected(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  let palette: any;

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
    palette = theme.methods.color(color);
  }

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
    if (tonal) styles.root.backgroundColor = theme.methods.palette.color.value(undefined, 95, true, palette);
    else styles.root.backgroundColor = palette.main;
  }

  if (!tonal) {
    let background = (theme.palette.color[color] as any)?.main;

    if (color === 'default') background = theme.palette.background.default.primary;

    styles.icon.color = theme.methods.palette.color.text(palette?.main || background, true, 'light');
  }
  else {
    styles.icon.color = theme.methods.palette.color.value(color as any, 5, true, palette);
  }

  const children = React.Children
    .toArray(children_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      ...(['onesy-NavigationItem'].includes(item.type?.displayName) ? {
        ...other,

        version
      } : {}),

      color: item.props.color !== undefined ? item.props.color : (['onesy-NavigationItem'].includes(item.type?.displayName) ? color : styles.icon.color),

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

      selected: selected.includes(item.props.value),

      onClick: () => {
        if (!item.props.disabled) {
          onSelect(item.props);

          // Invoke items on click method
          if (is('function', item.props.onClick)) item.props.onClick();
        }
      }
    }));

  return (
    <Surface
      Component={Line}

      color={color}

      tonal={tonal}

      direction='row'

      align='center'

      justify='initial'

      gap={1}

      className={classNames([
        staticClassName('NavigationBar', theme) && [
          'onesy-NavigationBar-root'
        ],

        className,
        classes.root,
        fixed && classes.fixed
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </Surface>
  );
};

NavigationBar.displayName = 'onesy-NavigationBar';

export default NavigationBar;
