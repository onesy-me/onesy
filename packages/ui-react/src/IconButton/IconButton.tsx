import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ButtonElement from '../Button';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-IconButton' });

export type IIconButton = IButton & {

};

const IconButton: React.FC<IIconButton> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyIconButton?.props?.default, ...props_ }), [props_]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const {
    version = 'text',

    size = 'regular',

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Button
      ref={ref}

      size={size}

      {...other}

      className={classNames([
        staticClassName('IconButton', theme) && [
          'onesy-IconButton-root'
        ],

        className,
        classes.root
      ])}

      version={version}

      icon
    />
  );
});

IconButton.displayName = 'onesy-IconButton';

export default IconButton;
