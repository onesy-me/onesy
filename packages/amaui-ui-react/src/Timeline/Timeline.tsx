import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },
}), { name: 'AmauiTimeline' });

const Timeline = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTimeline?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    orientation = 'vertical',

    Component = 'ul',

    className,

    children,

    ...other
  } = props;

  const direction = orientation === 'vertical' ? 'column' : 'row';

  return (
    <Line
      ref={ref}

      gap={0}

      direction={direction}

      Component={Component}

      className={classNames([
        staticClassName('Timeline', theme) && [
          'AmauiTimeline-root',
          `AmauiTimeline-orientation-${orientation}`
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

Timeline.displayName = 'AmauiTimeline';

export default Timeline;
