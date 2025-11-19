import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    maxWidth: '100%'
  },
}), { name: 'onesy-Timeline' });

export type ITimeline = ILine & {
  orientation?: 'vertical' | 'horizontal';
};

const Timeline: React.FC<ITimeline> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTimeline?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const {
    orientation = 'vertical',

    Component = 'ul',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const direction = orientation === 'vertical' ? 'column' : 'row';

  return (
    <Line
      ref={ref}

      gap={0}

      direction={direction}

      Component={Component}

      className={classNames([
        staticClassName('Timeline', theme) && [
          'onesy-Timeline-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          orientation
        })
      ))}
    </Line>
  );
});

Timeline.displayName = 'onesy-Timeline';

export default Timeline;
