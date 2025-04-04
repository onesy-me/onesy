import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-row-group',
    background: 'inherit',
    transition: theme.methods.transitions.make('opacity'),

    '& .onesy-TableRow-root:last-child hr': {
      display: 'none'
    },

    '& .onesy-TableCell-root': {
      wordBreak: 'normal'
    }
  },

  loading: {
    opacity: 0.4,
    pointerEvents: 'none'
  }
}), { name: 'onesy-TableBody' });

export type ITableBody = ISurface & {
  loading?: boolean;
};

const TableBody: React.FC<ITableBody> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTableBody?.props?.default, ...props_ }), [props_]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    loading,

    Component = 'tbody',

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [children, setChildren] = React.useState<any>(children_);

  React.useEffect(() => {
    if (!loading) {
      if (children_ !== children) setChildren(children_);
    }
  }, [loading, children_]);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      role='rowgroup'

      Component={Component}

      className={classNames([
        staticClassName('TableBody', theme) && [
          `onesy-TableBody-root`,
          `onesy-TableBody-size-${size}`
        ],

        className,
        classes.root,
        loading && classes.loading
      ])}

      {...other}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          position: 'body'
        })
      ))}
    </Surface>
  );
});

TableBody.displayName = 'onesy-TableBody';

export default TableBody;
