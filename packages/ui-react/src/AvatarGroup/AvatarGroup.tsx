import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import AvatarElement from '../Avatar';
import { IAvatar } from '../Avatar/Avatar';
import { staticClassName } from '../utils';
import { IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  disabled: {
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    filter: 'grayscale(1)'
  },

  item: {
    outline: `2px solid ${theme.palette.background.default.primary}`,

    '&:not(:last-child)': {
      marginInlineStart: `-0.24em`
    }
  }
}), { name: 'onesy-AvatarGroup' });

export type IAvatarGroup = IAvatar & {
  total?: number;
  max?: number;

  AdditionalAvatar?: IElement;

  AdditionalAvatarProps?: IPropsAny;
};

const AvatarGroup: React.FC<IAvatarGroup> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAvatarGroup?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Avatar = React.useMemo(() => theme?.elements?.Avatar || AvatarElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',

    total,
    max,
    disabled,

    AdditionalAvatar,

    AdditionalAvatarProps = {},

    Component = 'div',

    className,
    style,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const styles: any = {
    root: {

    },
    item: {}
  };

  const children = React.Children.toArray(children_).slice(0, max || (children_ as any).length).reverse();

  if (size !== undefined) {
    if (size === 'small') styles.item.outlineWidth = 2;
    else if (size === 'regular') styles.item.outlineWidth = 3;
    else if (size === 'large') styles.item.outlineWidth = 4;
    else styles.item.outlineWidth = Math.ceil(size / 20);
  }

  (other as any).style = styles.item;

  if ((total !== undefined && total - (children_ as any).length >= 1) || max < (children_ as any).length) {
    let value: any;

    if ((total !== undefined && total - (children_ as any).length >= 1)) value = `+${total - (children_ as any).length}`;
    else value = `+${Math.abs((children_ as any).length - max)}`;

    if (!AdditionalAvatarProps.TypeProps) AdditionalAvatarProps.TypeProps = {};

    AdditionalAvatarProps.TypeProps.size = '0.44em';

    children.unshift(
      (AdditionalAvatar as any) ||

      <Avatar
        tonal={tonal}

        color='neutral'

        {...other}

        {...AdditionalAvatarProps}

        noIconRootFontSize
      >
        {value}
      </Avatar>
    );
  }

  if (AdditionalAvatarProps?.size !== undefined) styles.root.fontSize = AdditionalAvatarProps.size;

  return (
    <Line
      ref={ref}

      gap={0}

      direction='row-reverse'

      Component={Component}

      className={classNames([
        staticClassName('AvatarGroup', theme) && [
          'onesy-AvatarGroup-root',
          `onesy-AvatarGroup-size-${size}`,
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      style={{
        ...style,

        ...styles.root
      }}
    >
      {children.map((item: any, index: number) => React.cloneElement(item, {
        key: index,

        className: classNames([
          item?.props?.className,
          classes.item
        ]),

        tonal: item.props.tonal || tonal,

        color: item.props.color || color,

        size: item.props.size || size,

        ...other,

        ...item.props
      }))}
    </Line>
  );
});

AvatarGroup.displayName = 'onesy-AvatarGroup';

export default AvatarGroup;
