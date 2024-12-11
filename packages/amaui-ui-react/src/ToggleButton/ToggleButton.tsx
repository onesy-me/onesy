import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ChipElement from '../Chip';
import { IChip } from '../Chip/Chip';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.onesy-Chip-root': {
      width: 'unset'
    }
  },

  size_small: {
    '&.onesy-Button-root': {
      padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(0.75, 'px')}`
    }
  },

  size_regular: {
    '&.onesy-Button-root': {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1, 'px')}`
    }
  },

  size_large: {
    '&.onesy-Button-root': {
      padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1.25, 'px')}`
    }
  },
}), { name: 'onesy-ToggleButton' });

export interface IToggleButton extends IChip {

}

const ToggleButton: React.FC<IToggleButton> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyToggleButton?.props?.default, ...props_ }), [props_]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const {
    size,

    icon = true,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Chip
      ref={ref}

      size={size}

      icon={icon}

      noCheckIcon

      className={classNames([
        staticClassName('ToggleButton', theme) && [
          'onesy-ToggleButton-root',
          `onesy-ToggleButton-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    />
  );
});

ToggleButton.displayName = 'onesy-ToggleButton';

export default ToggleButton;
