import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';

import ButtonElement from '../Button';
import { IconDoneAnimated } from '../Buttons/Buttons';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.onesy-Button-root': {
      maxWidth: '100%'
    },

    '& .onesy-Icon-root': {
      pointerEvents: 'unset !important'
    }
  },
}), { name: 'onesy-Chip' });

export type IChip = IButton & {
  input?: boolean;
  filter?: boolean;

  noCheckIcon?: boolean;

  onClick?: (event: MouseEvent) => any;
  onRemove?: (event: MouseEvent) => any;
  onSelected?: () => any;
  onUnselected?: () => any;
};

const Chip: React.FC<IChip> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyChip?.props?.default, ...props_ };

  const Button = theme?.elements?.Button || ButtonElement;

  const {
    tonal = false,
    color = props.version === 'filled' ? 'inverted' : 'default',
    version = 'outlined',

    input,
    filter,
    selected: selected_,
    start,
    focus,

    noCheckIcon,

    onClick,
    onRemove,
    onSelected,
    onUnselected,

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [preSelected, setPreSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(selected_);

  const children = children_;

  React.useEffect(() => {
    if (selected !== selected_) setSelected(selected_);
  }, [selected_]);

  const OtherProps: any = {};

  if (input) {
    OtherProps.end = <IconMaterialClose
      onClick={(event: MouseEvent) => {
        if (is('function', onRemove)) onRemove(event);
      }}
    />;
  }

  const onSelect = () => {
    if (filter) {
      if (start) {
        if (selected) {
          setSelected(false);

          if (is('function', onUnselected)) onUnselected();
        }
        else {
          setSelected(true);

          if (is('function', onSelected)) onSelected();
        }
      }
      else {
        // Unselect
        if (selected) {
          setPreSelected(false);

          if (is('function', onUnselected)) onUnselected();
        }
        else {
          setPreSelected(true);

          setSelected(true);

          if (is('function', onSelected)) onSelected();
        }
      }
    }
  };

  const updateSelected = () => {
    if (filter) {
      setSelected(false);
    }
  };

  return (
    <Button
      tonal={tonal}

      version={version}

      color={color || (tonal ? 'neutral' : 'default')}

      onClick={(event: MouseEvent) => {
        onSelect();

        // Invoke items on click method
        if (is('function', onClick)) onClick(event);
      }}

      start={start}

      {...(!noCheckIcon && start && selected ? {
        start: (
          <IconDoneAnimated simple in add />
        )
      } : {})}

      {...(!noCheckIcon && !start && (selected || preSelected) ? {
        start: (
          <IconDoneAnimated
            in={(start ? selected : preSelected)}

            onExited={() => updateSelected()}

            add
          />
        )
      } : {})}

      focus={focus}

      selected={selected}

      chip

      className={classNames([
        staticClassName('Chip', theme) && [
          'onesy-Chip-root',
          selected && `onesy-Chip-selected`
        ],

        className,
        classes.root
      ])}

      {...other}

      {...OtherProps}
    >
      {children}
    </Button>
  );
};

Chip.displayName = 'onesy-Chip';

export default Chip;
