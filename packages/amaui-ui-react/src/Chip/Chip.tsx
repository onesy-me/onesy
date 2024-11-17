import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialClose from '@amaui/icons-material-rounded-react/IconMaterialCloseW100';

import ButtonElement from '../Button';
import { IconDoneAnimated } from '../Buttons/Buttons';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.amaui-Button-root': {
      maxWidth: '100%'
    },

    '& .amaui-Icon-root': {
      pointerEvents: 'unset !important'
    }
  },
}), { name: 'amaui-Chip' });

export interface IChip extends IButton {
  input?: boolean;
  filter?: boolean;

  noCheckIcon?: boolean;

  onClick?: (event: MouseEvent) => any;
  onRemove?: (event: MouseEvent) => any;
  onSelected?: () => any;
  onUnselected?: () => any;
}

const Chip: React.FC<IChip> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiChip?.props?.default, ...props_ }), [props_]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

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
      ref={ref}

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
          'amaui-Chip-root',
          selected && `amaui-Chip-selected`
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
});

Chip.displayName = 'amaui-Chip';

export default Chip;
