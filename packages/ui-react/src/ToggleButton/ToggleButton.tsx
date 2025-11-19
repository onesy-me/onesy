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

export type IToggleButton = IChip & {

};

const ToggleButton: React.FC<IToggleButton> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyToggleButton?.props?.default, ...props_ };

  const Chip = theme?.elements?.Chip || ChipElement;

  const {
    size,

    icon = true,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Chip
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
};

ToggleButton.displayName = 'onesy-ToggleButton';

export default ToggleButton;
