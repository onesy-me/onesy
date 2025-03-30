import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-row',
    position: 'relative'
  },

  hover: {
    '&:hover': {
      '& .onesy-TableCell-root::before': {
        opacity: theme.palette.visual_contrast.default.opacity.hover
      }
    }
  },

  selected: {
    '& .onesy-TableCell-root::before': {
      opacity: [theme.palette.visual_contrast.default.opacity.selected, '!important']
    }
  }
}), { name: 'onesy-TableRow' });

export type ITableRow = ISurface & {
  hover?: boolean;
  selected?: boolean;
  position?: 'head' | 'body';
};

const TableRow: React.FC<ITableRow> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTableRow?.props?.default, ...props_ }), [props_]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    hover = true,
    selected,
    position = 'body',

    Component = 'tr',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      role='row'

      Component={Component}

      className={classNames([
        staticClassName('TableRow', theme) && [
          `onesy-TableRow-root`,
          `onesy-TableRow-size-${size}`,
          (hover && position === 'body') && `onesy-TableRow-hover`,
          selected && `onesy-TableRow-selected`
        ],

        className,
        classes.root,
        (hover && position === 'body') && classes.hover,
        selected && classes.selected
      ])}

      {...other}
    >
      {React.Children.toArray(children).map((item: any, index: number) => is('object', item) ? (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          justify: item.props.justify !== undefined ? item.props.justify : index === 0 ? 'flex-start' : 'flex-end',

          position: props.position !== undefined ? props.position : (index === 0 && position === 'body') ? 'head' : position,

          noWeight: (index === 0 && position === 'body')
        })
      ) : item)}
    </Surface>
  );
});

TableRow.displayName = 'onesy-TableRow';

export default TableRow;
