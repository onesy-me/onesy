import React from 'react';

import { classNames, style, useOnesyTheme } from '@onesy/style-react';

import useOpen from '../useOpen';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import MainProgressContext from './Context';

const useStyle = style(theme => ({
  '@keyframes move': {
    from: {
      transform: 'translateX(-100%)'
    },

    to: {
      transform: 'translateX(250%)'
    }
  },

  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: 3,
    overflow: 'hidden',
    pointerEvents: 'none',
    transition: theme.methods.transitions.make('opacity'),
    zIndex: theme.z_index.tooltip
  },

  loader: {
    position: 'relative',
    width: '50%',
    height: '100%',
    background: `linear-gradient(to right, transparent, ${theme.palette.color.primary[50]}, transparent)`,
    animation: '$move 2s linear infinite'
  }
}), { name: 'onesy-MainProgress' });

export type IMainProgressValue = {
  start: () => void;
  done: () => void;
};

export interface IMainProgress extends ILine {

}

const MainProgress: React.FC<IMainProgress> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMainProgress?.props?.default, ...props_ }), [props_]);

  const {
    children,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const open = useOpen();

  const start = React.useCallback(() => {
    open.onOpen();
  }, []);

  const done = React.useCallback(() => {
    open.onClose();
  }, []);

  const value = React.useMemo(() => {
    return {
      start,
      done
    };
  }, []);

  return (
    <MainProgressContext.Provider
      value={value}
    >
      {open.open && (
        <Line
          ref={ref}

          fullWidth

          className={classNames([
            'onesy-MainProgress-root',

            className,
            classes.root
          ])}

          {...other}
        >
          <Line
            className={classes.loader}
          />
        </Line>
      )}

      {children}
    </MainProgressContext.Provider>
  );
});

export default MainProgress;
