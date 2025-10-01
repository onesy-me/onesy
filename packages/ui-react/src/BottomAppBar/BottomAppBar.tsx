import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import { staticClassName } from '../utils';
import { ISurface } from '../Surface/Surface';

const useStyle = styleMethod(theme => ({
  root: {
    background: theme.methods.palette.color.alpha(theme.palette.color.primary[theme.palette.light ? 100 : 5], 0.94),
    boxShadow: '0px 8px 10px 1px rgb(0 0 0 / 1%), 0px 3px 14px 2px rgb(0 0 0 / 1%), 0px 5px 5px -3px rgb(0 0 0 / 4%)',
    borderRadius: '500px',
    zIndex: theme.z_index.app_bar,
    overflow: 'auto hidden',

    '&::-webkit-scrollbar': {
      width: '0px',
      height: '0px'
    }
  },

  size_small: { padding: '6px 10px' },

  size_regular: { padding: '12px 20px' },

  size_large: { padding: '18px 30px' },

  fixed: {
    position: 'fixed',
    bottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}), { name: 'onesy-BottomAppBar' });

export type IBottomAppBar = ISurface & {
  fixed?: boolean;
};

const BottomAppBar: React.FC<IBottomAppBar> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyBottomAppBar?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const {
    tonal = true,
    color = 'default',
    size = 'regular',

    fixed = true,

    className,

    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Surface
      ref={ref}

      color={color}

      tonal={tonal}

      gap={0}

      direction='row'

      align='unset'

      justify='unset'

      Component={Line}

      fullWidth

      className={classNames([
        staticClassName('BottomAppBar', theme) && [
          'onesy-BottomAppBar-root',
          `onesy-BottomAppBar-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        fixed && classes.fixed
      ])}

      style={{
        maxWidth: `clamp(100px, ${(children?.length || 3) * 110}px, calc(100vw - 24px))`,

        ...style
      }}

      {...other}
    >
      {children}
    </Surface>
  );
});

BottomAppBar.displayName = 'onesy-BottomAppBar';

export default BottomAppBar;
