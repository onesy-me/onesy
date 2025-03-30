import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SurfaceElement from '../Surface';
import LineElement from '../Line';
import { ISurface } from '../Surface/Surface';
import { IElement, IPropsAny, IElementReference } from '../types';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    borderRadius: `${theme.shape.radius.unit * 2}px`,
    overflow: 'hidden',

    ...theme.typography.values.b2
  },

  table: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0px',
    background: 'inherit'
  },

  wrapper: {
    overflowX: 'auto',
    background: 'inherit'
  }
}), { name: 'onesy-Table' });

export type ITable = ISurface & {
  header?: IElement;
  footer?: IElement;

  WrapperComponentProps?: IPropsAny;

  TableComponent?: IElementReference;
  WrapperComponent?: IElementReference;
};

const Table: React.FC<ITable> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTable?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',
    elevation = 1,

    header,
    footer,

    WrapperComponentProps,

    TableComponent = 'table',
    WrapperComponent = 'div',

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Line
      ref={ref}

      gap={0}

      direction='column'

      align='unset'

      justify='unset'

      fullWidth

      tonal={tonal}

      color={color}

      elevation={elevation}

      Component={Surface as any}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('Table', theme) && [
          `onesy-Table-root`,
          `onesy-Table-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {header && React.cloneElement(header as any, {
        tonal: (header as any).props.tonal !== undefined ? (header as any).props.tonal : tonal,

        color: (header as any).props.color !== undefined ? (header as any).props.color : color,

        size: (header as any).props.size !== undefined ? (header as any).props.size : size
      })}

      <WrapperComponent
        {...WrapperComponentProps}

        className={classNames([
          staticClassName('Table', theme) && [
            `onesy-Table-wrapper`
          ],

          WrapperComponentProps?.className,
          classes.wrapper
        ])}
      >
        <TableComponent
          className={classNames([
            staticClassName('Table', theme) && [
              `onesy-Table-table`,
              header && `onesy-Table-header`,
              footer && `onesy-Table-footer`
            ],

            classes.table
          ])}
        >
          {React.Children.toArray(children).map((item: any) => (
            React.cloneElement(item, {
              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

              color: item.props.color !== undefined ? item.props.color : color,

              size: item.props.size !== undefined ? item.props.size : size
            })
          ))}
        </TableComponent>
      </WrapperComponent>

      {footer && React.cloneElement(footer as any, {
        tonal: (footer as any).props.tonal !== undefined ? (footer as any).props.tonal : tonal,

        color: (footer as any).props.color !== undefined ? (footer as any).props.color : color,

        size: (footer as any).props.size !== undefined ? (footer as any).props.size : size
      })}
    </Line>
  );
});

Table.displayName = 'onesy-Table';

export default Table;
