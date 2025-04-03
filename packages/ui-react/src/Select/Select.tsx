import React from 'react';

import { getObjectValue, is, isEnvironment, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';
import IconMaterialArrowDropDown from '@onesy/icons-material-rounded-react/IconMaterialArrowDropDownW100';

import ListItemElement from '../ListItem';
import TypeElement from '../Type';
import MenuElement from '../Menu';
import ChipElement from '../Chip';
import ChipsElement from '../Chips';
import TextFieldElement from '../TextField';
import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import { ITextField } from '../TextField/TextField';
import { iconFontSize, staticClassName } from '../utils';
import { IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => {
  const overflow = {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'pre',
    textOverflow: 'ellipsis'
  };

  return {
    root: {
      flex: 'unset',
      minWidth: '184px',

      '& .onesy-TextField-input': {
        position: 'absolute',
        left: '0',
        bottom: '0',
        pointerEvents: 'none',
        opacity: '0'
      },

      '& .onesy-TextField-input-wrapper': {
        cursor: 'pointer'
      }
    },

    wrapper: {
      position: 'relative'
    },

    inputWrapper: {
      cursor: 'pointer',

      '&.onesy-TextField-input-wrapper': {
        cursor: 'pointer'
      }
    },

    inputWrapper_chip_size_small: {
      minHeight: '48px'
    },

    inputWrapper_chip_size_regular: {
      minHeight: '56px'
    },

    inputWrapper_chip_size_large: {
      minHeight: '64px'
    },

    input: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      minHeight: 20,
      margin: '0',
      border: '0',
      color: theme.palette.text.default.primary,
      background: 'transparent',
      '-webkit-tap-highlight-color': 'transparent',
      textAlign: 'start',
      borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
      cursor: 'pointer',
      pointerEvents: 'none',

      ...theme.typography.values.b2,

      ...overflow
    },

    chip: {
      '&.onesy-TextField-input-wrapper': {
        height: 'unset'
      }
    },

    chipGroup: {
      pointerEvents: 'auto'
    },

    chipGroup_padding: {
      paddingTop: theme.methods.space.value(0.5, 'px')
    },

    arrow: {
      transition: theme.methods.transitions.make('transform')
    },

    arrow_open: {
      transform: 'rotate(-180deg)'
    },

    open: {
      '&.onesy-TextField-root': {
        cursor: 'default'
      }
    },

    fullWidth: {
      width: '100%'
    },

    readOnly: {
      '&.onesy-TextField-root': {
        cursor: 'default'
      }
    },

    disabled: {
      '&.onesy-TextField-root': {
        cursor: 'default'
      }
    }
  };
}, { name: 'onesy-Select' });

export type ISelect = ITextField & {
  options?: Array<{
    name: any;
    value: any;
    props?: any;
  }>;

  multiple?: boolean;
  autoWidth?: boolean;
  getLabel?: (item: any, props: any) => any;
  chip?: boolean;
  clear?: boolean;
  noSelectText?: any;

  renderValues?: (value: string | string[]) => IElement;
  renderChip?: (item: any, value: any, props: IPropsAny) => IElement;

  IconClear?: any;
  IconDropdown?: any;

  WrapperProps?: IPropsAny;
  ChipProps?: IPropsAny;
  ChiProps?: IPropsAny;
  ListProps?: IPropsAny;
  MenuProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
};

const getValue = (value: any) => value?.value !== undefined ? value.value : value;

const Select: React.FC<ISelect> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySelect?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const Chips = React.useMemo(() => theme?.elements?.Chips || ChipsElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',
    version = 'filled',

    value: value_,
    valueDefault,
    onChange: onChange_,

    options,

    name,
    multiple,
    prefix,
    sufix,
    start,
    end,
    autoWidth = true,
    getLabel: getLabel_,
    fullWidth,
    chip,
    clear,
    readOnly,
    noSelectText,
    disabled,

    renderValues: renderValues_,
    renderChip,

    IconClear = IconMaterialClose,
    IconDropdown = IconMaterialArrowDropDown,

    inputProps,
    InputWrapperProps,
    WrapperProps,
    ChipProps,
    ChiProps,
    ListProps = {
      style: {
        maxHeight: 250,
        overflowY: 'auto',
        overflowX: 'hidden'
      }
    },
    MenuProps = {
      portal: true
    },
    IconButtonProps,
    IconProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const children = React.Children.toArray(children_);

  const [value, setValue] = React.useState(() => {
    const values = valueDefault !== undefined ? valueDefault : value_;

    return multiple ? ((is('array', values) ? values : [values]) as any).filter(Boolean) : values;
  });
  const [open, setOpen] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    wrapper: React.useRef<any>(undefined),
    menu: React.useRef<any>(undefined),
    input: React.useRef<any>(undefined),
    ids: {
      list: React.useId()
    }
  };

  const styles: any = {
    root: {

    },

    menu: {

    }
  };

  if (MenuProps?.portal && autoWidth) {
    styles.menu.width = refs.wrapper.current?.clientWidth;
  }

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', method);

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue(value_);
  }, [value_]);

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(true);
  }, []);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(false);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(true);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(false);
  }, []);

  const onClick = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => {
      if (open_) setFocus(false);

      return !open_;
    });
  }, []);

  const onClickArrowDown = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => !open_);
  }, []);

  const onEnterKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !disabled && !readOnly) setOpen(open_ => {
      if (open_) refs.input.current.focus();

      return !open_;
    });
  }, []);

  const onClose = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      setOpen(open_ => {
        if (open_ && refocus) refs.input.current.focus();

        return false;
      });
    }
  }, []);

  const onChange = (valueNew: any) => {
    // Inner controlled value
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onSelect = (newValue: any) => {
    let values = multiple ? is('array', value) ? value : [value] : value;

    values = multiple ? unique([...values, newValue]) : newValue;

    onChange(values);
  };

  const onUnselect = (itemValue: any) => {
    if (multiple) {
      let values = is('array', value) ? value : [value];

      values = values.filter(item => item !== itemValue);

      onChange(values);
    }
  };

  const onClear = React.useCallback((refocus = false) => {
    if (!disabled && !readOnly) {
      onChange(multiple ? [] : null);

      if (refocus) refs.input.current.focus();
    }
  }, [multiple, readOnly, disabled]);

  const items = React.useMemo(() => {
    return (options || []).map((item: any) => ({
      ...item,

      name: String(item?.name !== undefined ? item?.name : item?.value !== undefined ? item.value : item),
      value: item?.value !== undefined ? item?.value : item
    }));
  }, [options]);

  const getLabel = (item: any, propsOther?: any) => {
    if (is('function', getLabel_)) return getLabel_(item, propsOther);

    const properties = ['name', 'label', 'primary', 'secondary', 'tertiary', 'value', 'children'];

    const objects = [item, item?.props].filter(Boolean);

    for (const itemObject of objects) {
      if (is('simple', itemObject)) return itemObject;

      const valueItem = getObjectValue(itemObject, ...properties);

      if (valueItem !== undefined) return valueItem;
    }

    return noSelectText || 'Select an option';
  };

  const renderValue = (itemValue: any = value) => {
    const item: any = !!items?.length ? items.find((item_) => getValue(item_) === getValue(itemValue)) : children.find((item_: any) => getValue(item_.props?.value) === getValue(itemValue));

    return item ? getLabel(item, props) : getLabel(itemValue, props) || '';
  };

  const renderValues = renderValues_ || ((value__ = value) => {
    if (multiple) {
      if (chip) {
        return (
          <Chips
            wrap='wrap'

            size={size}

            className={classNames([
              classes.chipGroup,
              version !== 'outlined' && classes.chipGroup_padding
            ])}

            {...ChiProps}
          >
            {(value__ as any).map(item => {
              const other_ = {
                onClick: (event: MouseEvent) => {
                  event.preventDefault();
                  event.stopPropagation();
                },

                onRemove: (event: MouseEvent) => {
                  event.preventDefault();
                  event.stopPropagation();

                  onUnselect(item);
                },

                input: true
              };

              if (is('function', renderChip)) return renderChip(item, renderValue(item), other_);

              return (
                <Chip
                  key={item}

                  size='small'

                  {...other_}

                  {...ChipProps}
                >
                  {renderValue(item)}
                </Chip>
              );
            })}
          </Chips>
        );
      }

      const valuesAll = value.map(item => renderValue(item));

      if (valuesAll.every(item => is('simple', item))) return valuesAll.join(', ');

      return value?.length ? valuesAll : noSelectText || name;
    }

    return renderValue(value);
  });

  const endIcons = [
    end,

    clear && !!(multiple ? value.length : ![undefined, null].includes(value)) && (
      <IconButton
        onClick={onClear}

        size='small'

        aria-label='Input clear'

        {...IconButtonProps}
      >
        <IconClear {...IconProps} />
      </IconButton>
    ),

    ...(!readOnly ? [
      <IconButton
        key={1}

        size='regular'

        onClick={onClickArrowDown}

        aria-expanded={open}

        aria-controls={refs.ids.list}

        {...IconButtonProps}
      >
        <IconDropdown
          size='large'

          {...IconProps}

          className={classNames([
            IconProps?.className,

            classes.arrow,
            open && classes.arrow_open
          ])}
        />
      </IconButton>
    ] : [])
  ];

  const sizeListItem = MenuProps?.size || size;

  return (
    <Line
      gap={0}

      direction='column'

      fullWidth={fullWidth}

      {...WrapperProps}

      ref={item => {
        if (WrapperProps?.ref) {
          if (is('function', WrapperProps.ref)) WrapperProps.ref(item);
          else WrapperProps.ref.current = item;
        }

        refs.wrapper.current = item;
      }}

      className={classNames([
        staticClassName('Select', theme) && [
          'onesy-Select-wrapper',
          fullWidth && 'onesy-full-width'
        ],
        WrapperProps?.className,
        classes.wrapper
      ])}
    >
      <TextField
        ref={refs.input}

        rootRef={(item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }) as any}

        onBlur={onBlur}

        onFocus={onFocus}

        enabled={open || focus || mouseDown || !!(is('array', value) ? value.length : ![undefined, null].includes(value))}

        focus={open || focus || mouseDown}

        className={classNames([
          staticClassName('Select', theme) && [
            'onesy-Select-root',
            `onesy-Select-version-${version}`,
            `onesy-Select-size-${size}`,
            open && `onesy-Select-open`,
            mouseDown && `onesy-Select-mouse-down`,
            focus && `onesy-Select-focus`
          ],

          className,
          classes.root,
          open && classes.open,
          disabled && classes.disabled
        ])}

        tonal={tonal}

        color={color}

        size={size}

        version={version}

        name={name}

        prefix={prefix}

        sufix={sufix}

        start={start}

        end={endIcons}

        readOnly={readOnly}

        endVerticalAlign='center'

        role='combobox'

        aria-multiselectable={multiple}

        aria-controls={refs.ids.list}

        aria-expanded={open}

        aria-haspopup='listbox'

        aria-labelledby={name}

        aria-disabled={disabled}

        fullWidth={fullWidth}

        disabled={disabled}

        InputWrapperProps={{
          onMouseDown,
          onMouseUp,

          onClick,
          onKeyDown: onEnterKeyDown,

          ...InputWrapperProps,

          className: classNames([
            staticClassName('Select', theme) && [
              'onesy-Select-input-wrapper'
            ],

            InputWrapperProps?.className,
            classes.inputWrapper,
            chip && [
              classes.chip,
              classes[`inputWrapper_chip_size_${size}`]
            ],
            open && classes.open,
            readOnly && classes.readOnly
          ])
        }}

        inputProps={{
          disabled: true,
          readOnly: true,

          ...inputProps
        }}

        style={{
          ...style,

          ...styles.root
        }}

        {...other}
      >
        <Line
          gap={0}

          direction='row'

          className={classNames([
            staticClassName('Select', theme) && [
              'onesy-Select-input'
            ],

            classes.input,
            chip && classes.chip,
            open && classes.open,
            readOnly && classes.readOnly
          ])}

          justify={other.align}
        >
          {renderValues(value)}
        </Line>
      </TextField>

      {(!!items.length || children) && (
        <Menu
          ref={refs.menu}

          open={open}

          portal={false}

          onClose={() => onClose(false)}

          anchorElement={refs.root.current}

          transformOrigin='center top'

          transformOriginSwitch='center bottom'

          maxWidth='unset'

          size={size}

          menuItems={!!items.length ? (
            items.map((item: any, index: number) => (
              <ListItem
                key={index}

                role={'option'}

                selected={item.selected !== undefined ? item.selected : multiple ? value.includes(item?.value) : value === item?.value}

                preselected={item.preselected !== undefined ? item.preselected : !(multiple ? value.includes(item?.value) : value === item?.value)}

                onMouseUp={onMouseUp}

                onMouseDown={onMouseDown}

                primary={(
                  <Type
                    version={sizeListItem === 'large' ? 'b1' : sizeListItem === 'regular' ? 'b2' : 'b3'}
                  >
                    {item.name}
                  </Type>
                )}

                value={item.value}

                size={MenuProps?.size || size}

                button

                {...item.props}

                onClick={(event: React.MouseEvent) => {
                  if (multiple && value.includes(item?.value)) onUnselect(item?.value);
                  else onSelect(item?.value);

                  if (is('function', item.props?.onClick)) item.props?.onClick(event);

                  if (!multiple) setOpen(false);
                }}
              />
            ))
          ) : children.map((item: any, index: number) => (
            React.cloneElement(item, {
              key: index,

              role: 'option',

              selected: item.props.selected !== undefined ? item.props.selected : multiple ? value.includes(item.props?.value) : value === item.props?.value,

              preselected: item.props.preselected !== undefined ? item.props.preselected : !(multiple ? value.includes(item.props?.value) : value === item.props?.value),

              onMouseUp,

              onMouseDown,

              onClick: (event: React.MouseEvent) => {
                if (multiple && value.includes(item.props?.value)) onUnselect(item.props?.value);
                else onSelect(item.props?.value);

                if (is('function', item.props?.onClick)) item.props?.onClick(event);

                if (!multiple) setOpen(false);
              }
            })
          ))}

          AppendProps={{
            alignment: 'start'
          }}

          ModalProps={{
            // focus: !MenuProps.portal
          }}

          ListProps={{
            menu: true,

            size: ListProps?.size || MenuProps?.size || size,

            role: 'listbox',

            id: refs.ids.list,

            'aria-label': name,

            ...ListProps
          }}

          {...MenuProps}

          style={{
            ...styles.menu,

            ...MenuProps?.style
          }}

          className={classNames([
            MenuProps?.className
          ])}
        />
      )}
    </Line>
  );
});

Select.displayName = 'onesy-Select';

export default Select;
