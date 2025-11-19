import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ButtonsElement from '../Buttons';
import { IButtons } from '../Buttons/Buttons';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'onesy-ToggleButtons' });

export type IToggleButtons = IButtons & {

};

const ToggleButtons: React.FC<IToggleButtons> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyToggleButtons?.props?.default, ...props_ };

  const Buttons = theme?.elements?.Buttons || ButtonsElement;

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Buttons
      ref={ref}

      className={classNames([
        staticClassName('ToggleButtons', theme) && [
          'onesy-ToggleButtons-root'
        ],

        className,
        classes.root
      ])}

      color='default'

      chip

      noCheckIcon

      {...other}
    />
  );
});

ToggleButtons.displayName = 'onesy-ToggleButtons';

export default ToggleButtons;
