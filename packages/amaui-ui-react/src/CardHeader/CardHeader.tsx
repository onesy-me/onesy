import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    margin: '16px'
  }
}), { name: 'AmauiCardHeader' });

const CardHeader = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardHeader?.props?.default }), [props_]);

  const {
    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Line
      ref={ref}

      Component={Component}

      direction='row'

      align='center'

      justify='center'

      className={classNames([
        staticClassName('CardHeader', theme) && [
          `AmauiCardHeader-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Line>
  );
});

CardHeader.displayName = 'AmauiCardHeader';

export default CardHeader;
