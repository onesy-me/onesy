import React from 'react';
import { Location, useLocation } from 'react-router-dom';

import { hash } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  '@keyframes fadeIn': {
    from: {
      opacity: 0
    },

    to: {
      opacity: 1
    }
  },

  '@keyframes fadeOut': {
    from: {
      opacity: 1
    },

    to: {
      opacity: 0
    }
  },

  root: {

  },

  in: {
    animation: '$fadeIn 0.24s forwards'
  },

  out: {
    animation: '$fadeOut 0.24s forwards'
  }
}), { name: 'onesy-PageTransition' });

export interface IPageTransition extends ILine {
  add?: boolean;

  duration?: number;

  classNames?: {
    in?: string;
    out?: string;
  };
}

const PageTransition: React.FC<IPageTransition> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyPageTransition?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    add,

    classNames: classNames_,

    duration = 254,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const location = useLocation();

  const [locationUsed, setLocationUsed] = React.useState(location);
  const [transition, setTransition] = React.useState<'in' | 'out'>(add ? 'in' : undefined);

  const refs = {
    location: React.useRef(location),
    transition: React.useRef(transition),
    inProgress: React.useRef(false),
    timeout: React.useRef<NodeJS.Timeout>(undefined),
    duration: React.useRef(duration)
  };

  refs.location.current = location;

  refs.transition.current = transition;

  refs.duration.current = duration;

  const classNamesToUse = {
    in: classNames_?.in || classes.in,
    out: classNames_?.out || classes.out
  };

  const hashLocation = React.useCallback((value: Location) => {
    return hash([
      value.hash,
      value.pathname,
      value.search
    ]);
  }, []);

  const onUpdate = React.useCallback(async () => {
    if (refs.inProgress.current) return;

    if (hashLocation(location) !== hashLocation(locationUsed)) {
      setTransition('out');

      clearTimeout(refs.timeout.current);

      refs.timeout.current = setTimeout(() => {
        setLocationUsed(refs.location.current);

        setTransition('in');

        refs.inProgress.current = false;
      }, refs.duration.current);
    }
  }, [location, locationUsed]);

  React.useEffect(() => {
    onUpdate();
  }, [location, locationUsed]);

  return (
    <Line
      ref={ref}

      direction='column'

      align='unset'

      justify='unset'

      flex

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('PageTransition', theme) && [
          `onesy-PageTransition-root`,
          `onesy-PageTransition-transition-${transition}`
        ],

        className,
        classes.root,
        classNamesToUse[transition]
      ])}

      {...other}
    >
      {React.cloneElement(children as any, {
        location: locationUsed
      })}
    </Line>
  );
});

PageTransition.displayName = 'onesy-PageTransition';

export default PageTransition;
