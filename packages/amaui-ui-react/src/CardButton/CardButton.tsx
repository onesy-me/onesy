import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Interaction from '../Interaction';

import { IBaseElement, staticClassName, TPropsAny } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  }
}), { name: 'AmauiCardButton' });

export interface ICardButton extends IBaseElement {
  focus?: boolean;
  selected?: boolean;
  href?: boolean;
  disabled?: boolean;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;

  InteractionProps?: TPropsAny;
}

const CardButton = React.forwardRef((props_: ICardButton, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardButton?.props?.default }), [props_]);

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

  const [focus, setFocus] = React.useState(focus_ !== undefined ? focus_ : false);

  const { classes } = useStyle(props);

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
          `AmauiCardButton-root`,
          href && `AmauiCardButton-href`,
          focus && `AmauiCardButton-focus`,
          disabled && `AmauiCardButton-disabled`
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

CardButton.displayName = 'AmauiCardButton';

export default CardButton;
