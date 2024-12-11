import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import InteractionElement from '../Interaction';
import { staticClassName } from '../utils';
import { IBaseElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  }
}), { name: 'onesy-CardButton' });

export interface ICardButton extends IBaseElement {
  focus?: boolean;
  selected?: boolean;
  href?: boolean;
  disabled?: boolean;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;

  InteractionProps?: IPropsAny;
}

const CardButton: React.FC<ICardButton> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCardButton?.props?.default, ...props_ }), [props_]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const {
    focus: focus_,
    selected,
    href,
    disabled,

    onFocus: onFocus_,
    onBlur: onBlur_,

    InteractionProps,

    Component: Component_ = props.href ? 'a' : 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [focus, setFocus] = React.useState(focus_ !== undefined ? focus_ : false);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && !disabled) {
      setFocus(true);

      if (is('function', onFocus_)) onFocus_(event);
    }
  }, [focus_, disabled, onFocus_]);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && !disabled) {
      setFocus(false);

      if (is('function', onBlur_)) onBlur_(event);
    }
  }, [focus_, disabled, onBlur_]);

  const Component: any = Component_;

  return (
    <Component
      ref={ref}

      tabIndex={!disabled ? 0 : -1}

      Component={Component}

      onFocus={onFocus}

      onBlur={onBlur}

      href={href}

      className={classNames([
        staticClassName('CardButton', theme) && [
          `onesy-CardButton-root`,
          focus && `onesy-CardButton-focus`,
          disabled && `onesy-CardButton-disabled`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Interaction
        border={false}

        pulse={focus}

        selected={selected}

        {...InteractionProps}
      />

      {children}
    </Component>
  );
});

CardButton.displayName = 'onesy-CardButton';

export default CardButton;
