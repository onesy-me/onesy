import React from 'react';

import { stringToColor } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ButtonElement from '../Button';
import TypeElement from '../Type';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';
import { IElevation, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    '&.onesy-Button-root': {
      cursor: 'default',
      overflow: 'hidden',
      borderRadius: theme.methods.shape.radius.value(40, 'px'),

      '& .onesy-Button-icon-root': {
        width: '100%',
        height: '100%'
      }
    }
  },

  square: {
    borderRadius: '0px'
  },

  image: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}), { name: 'onesy-Avatar' });

export type IAvatar = Omit<IButton, 'elevation'> & {
  image?: string;
  alt?: string;
  square?: boolean;
  elevation?: IElevation;

  TypeProps?: IPropsAny;
  InteractionProps?: IPropsAny;
};

const Avatar: React.FC<IAvatar> = React.forwardRef((props_, ref) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAvatar?.props?.default, ...props_ }), [props_]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = false,
    version = 'filled',
    size = 'regular',
    color: color_ = 'auto',

    image,
    alt,
    square,
    elevation = 0,
    disabled,

    TypeProps,
    InteractionProps,

    Component = 'button',

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  let children = children_;

  if (image) {
    const imageProps: any = {
      style: {}
    };

    if (['text', 'outlined'].includes(version) && disabled) {
      imageProps.style.opacity = theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'disabled' : 'active'];
    }

    children = (
      <span
        {...imageProps}

        className={classNames([
          imageProps?.className,
          classes.image
        ])}

        style={{
          backgroundImage: `url(${image})`,

          ...imageProps?.style
        }}
      />
    );
  }
  else if (!React.isValidElement(children)) {
    const typeProps: any = { version: 't1' };

    if (size === 'small') typeProps.size = '0.75rem';
    else if (size === 'regular') typeProps.size = '1rem';
    else if (size === 'large') typeProps.size = '1.25rem';
    else if (!['small', 'regular', 'large'].includes(size as any)) typeProps.size = `${(size * 0.4) / 16}rem`;

    children = (
      <Type
        {...typeProps}

        {...TypeProps}
      >
        {children}
      </Type>
    );
  }

  const color = color_ === 'auto' ? stringToColor(children_ || '') : color_;

  return (
    <Button
      ref={ref}

      tonal={tonal}

      color={color}

      elevation={elevation as any}

      version={version}

      size={size}

      disabled={disabled}

      icon

      InteractionProps={{
        background: false,
        wave: false,

        ...InteractionProps
      }}

      Component={Component}

      className={classNames([
        staticClassName('Avatar', theme) && [
          'onesy-Avatar-root',
          `onesy-Avatar-version-${version}`,
          `onesy-Avatar-size-${size}`
        ],

        className,
        classes.root,
        square && classes.square
      ])}

      {...other}
    >
      {children}
    </Button>
  );
});

Avatar.displayName = 'onesy-Avatar';

export default Avatar;
