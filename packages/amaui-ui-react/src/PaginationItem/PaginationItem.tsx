import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import ButtonElement from '../Button';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  size_small: {
    '&.onesy-Button-root': {
      width: 'unset',
      minWidth: '30px',
      paddingInline: theme.methods.space.value(0.5, 'px')
    }
  },

  size_regular: {
    '&.onesy-Button-root': {
      width: 'unset',
      minWidth: '40px',
      paddingInline: theme.methods.space.value(1, 'px')
    }
  },

  size_large: {
    '&.onesy-Button-root': {
      width: 'unset',
      minWidth: '50px',
      paddingInline: theme.methods.space.value(1.25, 'px')
    }
  }
}), { name: 'onesy-PaginationItem' });

export interface IPaginationItem extends IButton {
  TypeProps?: IPropsAny;
}

const PaginationItem: React.FC<IPaginationItem> = React.forwardRef((props_, ref) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyPaginationItem?.props?.default, ...props_ }), [props_]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = false,
    color = 'default',
    version = 'text',
    elevation = false,
    size = 'regular',

    TypeProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Button
      ref={ref}

      tonal={tonal}

      color={color}

      version={version}

      elevation={elevation}

      size={size}

      icon

      noFontSize

      className={classNames([
        staticClassName('PaginationItem', theme) && [
          'onesy-PaginationItem-root',
          `onesy-PaginationItem-version-${version}`,
          `onesy-PaginationItem-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      {is('simple', children) ?
        (
          <Type
            version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

            {...TypeProps}
          >
            {children}
          </Type>
        ) :
        children
      }
    </Button>
  );
});

PaginationItem.displayName = 'onesy-PaginationItem';

export default PaginationItem;
