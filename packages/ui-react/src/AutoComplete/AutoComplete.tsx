import React from 'react';

import { getObjectValue, is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';
import IconMaterialArrowDropDown from '@onesy/icons-material-rounded-react/IconMaterialArrowDropDownW100';

import MenuElement from '../Menu';
import ChipElement from '../Chip';
import TypeElement from '../Type';
import ListElement from '../List';
import ListItemElement from '../ListItem';
import TextFieldElement from '../TextField';
import IconButtonElement from '../IconButton';
import RoundProgressElement from '../RoundProgress';
import ListSubheaderElement from '../ListSubheader';
import LineElement from '../Line';
import { ITextField } from '../TextField/TextField';
import { iconFontSize, staticClassName } from '../utils';
import { IElement, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    flex: 'unset'
  },

  wrapper: {
    position: 'relative'
  },

  input_: {
    alignSelf: 'center'
  },

  input: {
    display: 'inline-flex',
    margin: '0px',
    border: '0px',
    color: theme.palette.text.default.primary,
    background: 'transparent',
    '-webkit-tap-highlight-color': 'transparent',
    textAlign: 'start',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    minHeight: 20,

    // overflow
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'pre',
    textOverflow: 'ellipsis'
  },

  input_size_small: {
    ...theme.typography.values.b2
  },

  input_size_regular: {
    ...theme.typography.values.b2
  },

  input_size_large: {
    ...theme.typography.values.b1
  },

  inputWrapper_multiple_size_small: {
    minHeight: '48px',
    columnGap: '6px',
    rowGap: '12px'
  },

  inputWrapper_multiple_size_regular: {
    minHeight: '56px',
    columnGap: '8px',
    rowGap: '16px'
  },

  inputWrapper_multiple_size_large: {
    minHeight: '64px',
    columnGap: '10px',
    rowGap: '20px'
  },

  multiple: {
    '&.onesy-TextField-input-wrapper': {
      height: 'unset'
    }
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

  open: {},

  readOnly: {
    '&.onesy-TextField-input-wrapper': {
      cursor: 'default'
    }
  },

  list: {
    maxHeight: '250px',
    overflow: 'auto'
  },

  limitText: {
    alignSelf: 'center'
  },

  roundProgress: {
    padding: `0 ${theme.methods.space.value(1, 'px')}`
  },

  disabled: {
    '&.onesy-TextField-input-wrapper': {
      cursor: 'default'
    }
  }
}), { name: 'onesy-AutoComplete' });

export type TAutoCompleteValue = string | Array<string>;

export type TAutoCompleteOption = {
  label?: string;

  version?: 'text' | 'subheader';

  noOptions?: boolean;
};

export type IAutoComplete = Omit<ITextField, 'onChange'> & {
  value?: any;
  valueDefault?: any;
  onChange?: (value: any) => any;

  valueInput?: string;
  valueInputDefault?: string;
  onChangeInput?: (value: string) => any;

  multiple?: boolean;
  autoWidth?: boolean;
  getLabel?: (item: any, props?: any) => any;
  equal?: (value1: any, value2: any) => boolean;
  equalInput?: (input: string, value: any) => boolean;
  renderValues?: (value: TAutoCompleteValue, onUnselect: (value: string) => any) => IElement;
  renderChip?: (item: any, value: any, props: IPropsAny) => IElement;
  renderOption?: (item: TAutoCompleteOption, index: number, props: IPropsAny) => IElement;
  chip?: boolean;
  filter?: (value: string, options: Array<TAutoCompleteOption>) => Array<TAutoCompleteOption>;
  options?: Array<TAutoCompleteOption>;
  clear?: boolean;
  loading?: boolean;
  autoSelectOnBlur?: boolean;
  blurOnSelect?: boolean;
  noOptions?: boolean;
  noOptionsObject?: any;
  startOptionsObject?: any;
  endOptionsObject?: any;
  noOptionsElement?: any;
  startOptionsElement?: any;
  endOptionsElement?: any;
  openOnFocus?: boolean;
  closeOnSelect?: boolean;
  clearInputOnSelect?: boolean;
  clearOnEscape?: boolean;
  groupBy?: (value: TAutoCompleteOption) => string;
  limit?: number;
  openOnInputUpdate?: boolean;
  filterOutSelectedOptions?: boolean;
  selectOnFocus?: boolean;
  clearOnBlur?: boolean;
  noInputValue?: boolean;

  IconClear?: IElementReference;
  IconDropdown?: IElementReference;

  WrapperProps?: IPropsAny;
  ChipProps?: IPropsAny;
  ListProps?: IPropsAny;
  MenuProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  InputProps?: IPropsAny;
  IconProps?: IPropsAny;
};

const getText = (value: any) => {
  const value_ = value?.name || value?.label || value?.primary || value?.secondary || value?.tertiary || value?.children || value?.value || value;

  return is('simple', value_) ? String(value_) : '';
};

const getValue = (value: any) => value?.value !== undefined ? value.value : value;

const AutoComplete: React.FC<IAutoComplete> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAutoComplete?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const RoundProgress = React.useMemo(() => theme?.elements?.RoundProgress || RoundProgressElement, [theme]);

  const ListSubheader = React.useMemo(() => theme?.elements?.ListSubheader || ListSubheaderElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',
    version = 'filled',

    valueInput: valueInput_,
    valueInputDefault,
    onChangeInput: onChangeInput_,

    value: value_,
    valueDefault,
    onChange: onChange_,

    options: options_ = [],

    label,
    multiple,
    prefix,
    sufix,
    start,
    end,
    autoWidth = true,
    readOnly,
    getLabel: getLabel_,
    renderValues: renderValues_,
    renderChip,
    renderOption,
    equal,
    equalInput,
    filter,
    clear = true,
    loading,
    autoSelectOnBlur,
    blurOnSelect = false,
    noOptions,
    noOptionsObject,
    startOptionsObject,
    noOptionsElement,
    startOptionsElement,
    endOptionsElement,
    endOptionsObject,
    openOnFocus = true,
    closeOnSelect,
    clearOnEscape,
    groupBy,
    limit,
    openOnInputUpdate,
    filterOutSelectedOptions,
    selectOnFocus,
    clearOnBlur,
    clearInputOnSelect,
    chip,
    fullWidth,
    noInputValue,

    disabled,

    IconClear = IconMaterialClose,
    IconDropdown = IconMaterialArrowDropDown,

    WrapperProps,
    ChipProps,
    ListProps,
    MenuProps,
    IconButtonProps,
    InputProps,
    IconProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const children = React.Children.toArray(children_);

  const [init, setInit] = React.useState(false);
  const [valueInput, setValueInput] = React.useState(valueInputDefault !== undefined ? valueInputDefault : valueInput_);
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || []);
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [options, setOptions] = React.useState(options_);
  const [free, setFree] = React.useState(false);

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    wrapper: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    valueInput: React.useRef<any>(undefined),
    menu: React.useRef<any>(undefined),
    input: React.useRef<HTMLInputElement>(undefined),
    optionsProps: React.useRef(options_),
    ids: {
      list: React.useId()
    }
  };

  refs.value.current = value;

  refs.valueInput.current = valueInput;

  refs.optionsProps.current = options_;

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
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const method = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (clearOnEscape) onClear();

        onClose(true);
      }
    };

    rootDocument.addEventListener('keydown', method);

    rootDocument.addEventListener('mouseup', onMouseUp as any);

    setInit(true);

    return () => {
      // Clean up
      rootDocument.removeEventListener('mouseup', onMouseUp as any);

      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    const option = (refs.optionsProps.current || []).find(item_ => isEqualToInput(refs.valueInput.current, item_));

    if (!!valueInput?.length && openOnInputUpdate && !open && !option && !disabled && !readOnly) setOpen(!free);
  }, [valueInput, openOnInputUpdate, free]);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue(value_);
  }, [value_]);

  React.useEffect(() => {
    if (valueInput_ !== undefined && valueInput_ !== valueInput) setValueInput(valueInput_);
  }, [valueInput_]);

  React.useEffect(() => {
    if (init && loading) {
      setOpen(true);

      updateOptions();
    }
  }, [loading]);

  React.useEffect(() => {
    updateOptions(undefined, options_);
  }, [options_]);

  const updateOptions = (valueInputNew: any = refs.valueInput.current, newOptions: any = undefined) => {
    let optionsValue = refs.optionsProps.current;

    // reset
    setFree(false);

    if (loading) optionsValue = [{ label: l('Loading...'), version: 'text' }];
    else if (newOptions) optionsValue = newOptions;
    else optionsValue = is('function', filter) ? filter(valueInputNew, refs.optionsProps.current) : refs.optionsProps.current.filter(option => isEqualToInput(valueInputNew, option));

    if (!optionsValue.length) {
      if (noOptions) optionsValue.push(noOptionsObject !== undefined ? noOptionsObject : { primary: l('No options'), version: 'text', noOptions: true });
      else {
        setOpen(false);

        setFree(true);

        setOptions(optionsValue);

        return;
      }
    }

    if (!loading) {
      if (startOptionsObject) optionsValue.unshift(startOptionsObject);

      if (endOptionsObject) optionsValue.push(endOptionsObject);
    }

    setOptions(optionsValue);
  };

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(true);
  }, [readOnly, disabled]);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(false);
  }, [readOnly, disabled]);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) {
      setFocus(true);

      if (selectOnFocus) setTimeout(() => refs.input.current.select());
    }
  }, [readOnly, disabled]);

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(false);
  };

  const onClick = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => {
      if (!open_) {
        if (!openOnFocus) return open_;

        refs.input.current.focus();

        // if input wrapper overflows
        (event.target as HTMLElement).scrollTo(0, 0);
      }

      return !open_;
    });
  }, [readOnly, disabled]);

  const onClickArrowDown = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => {
      if (!open_) refs.input.current.focus();

      return !open_;
    });
  }, [readOnly, disabled]);

  const onEnterKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !disabled && !readOnly) setOpen(open_ => {
      if (!open_) {
        if (!openOnFocus) return open_;

        refs.input.current.focus();
      }

      return !open_;
    });
  }, [readOnly, disabled]);

  const onClose = (refocus = true) => {
    if (!disabled && !readOnly) {
      setOpen(open_ => {
        if (open_) {
          if (refocus) refs.input.current.focus();

          if (clearOnBlur) {
            const option = options.find(item_ => isEqualToInput(refs.valueInput.current, item_));

            if (!option) onClear();
          }
        }

        return false;
      });
    }
  };

  const onExited = () => {
    if (!disabled && !readOnly) {
      if (!open) {
        const option = (refs.optionsProps.current || []).find(item_ => isEqualToInput(refs.valueInput.current, item_));

        // Update options to all values
        // if value is one of the option values
        if (option || !refs.valueInput.current || options[0]?.noOptions) updateOptions(undefined, refs.optionsProps.current);
      }
    }
  };

  const onChange = (valueNew: any) => {
    // Inner controlled value
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onChangeInput = (valueNew: any) => {
    if (!disabled && !readOnly) {
      updateOptions(valueNew);

      if (!open) setOpen(true);

      // Inner controlled value
      if (!props.hasOwnProperty('valueInput')) setValueInput(valueNew);

      if (is('function', onChangeInput_)) onChangeInput_(valueNew);
    }
  };

  const onClear = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      onChangeInput('');

      onChange(multiple ? [] : null);

      if (refocus) refs.input.current.focus();
    }
  }, [multiple, readOnly, disabled]);

  const onClearInput = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      onChangeInput('');

      if (refocus) refs.input.current.focus();
    }
  }, []);

  const isEqual = (value1: any, value2: any) => is('function', equal) ? equal(value1, value2) : getValue(value1) === getValue(value2);

  const isEqualToInput = (inputValue: string = refs.valueInput.current, item: any) => is('function', equalInput) ? equalInput(inputValue, item) : getText(item)?.toLowerCase().includes(inputValue?.toLowerCase());

  const onSelect = (valueNew: any) => {
    const values = multiple ? is('array', value) ? value : [value] : value;

    const selected = multiple ? !!values.find((item: any) => isEqual(valueNew, item)) : isEqual(valueNew, value);

    if (!selected) {
      onChange(!multiple ? valueNew : [...values, valueNew]);

      if (!multiple) clearInputOnSelect ? onClearInput() : onChangeInput(getText(valueNew));
      else if (clearInputOnSelect) onClearInput();
    }
  };

  const onUnselect = (valueNew: any) => {
    if (multiple) {
      let values = [...(is('array', value) ? value : [value])];

      values = (values as any).filter((item: any) => !isEqual(valueNew, item));

      onChange(values);
    }
  };

  const items = React.useMemo(() => {
    return (options_ || []).map((item: any) => ({
      ...item,

      name: String(item?.name !== undefined ? item?.name : item?.value !== undefined ? item.value : item),
      value: item?.value !== undefined ? item?.value : item
    }));
  }, [options_]);

  const getLabel = (item: any, propsOther?: any) => {
    if (is('function', getLabel_)) return getLabel_(item, propsOther);

    const properties = ['name', 'label', 'primary', 'secondary', 'tertiary', 'value', 'children'];

    const objects = [item, item?.props].filter(Boolean);

    for (const itemObject of objects) {
      if (is('simple', itemObject)) return itemObject;

      const valueItem = getObjectValue(itemObject, ...properties);

      if (valueItem !== undefined) return valueItem;
    }

    return 'No name';
  };

  const renderValue = (itemValue: any = value) => {
    const item: any = !!items?.length ? items.find((item_) => getValue(item_) === getValue(itemValue)) : children.find((item_: any) => getValue(item_.props?.value) === getValue(itemValue));

    return item ? getLabel(item, props) : getLabel(itemValue, props) || '';
  };

  const renderValues = renderValues_ || ((value__ = refs.value.current, onUnselectMethod = onUnselect) => {
    if (multiple) {
      if (chip) {
        let values = value__;

        if (is('number', limit) && !open) values = values.slice(0, limit);

        values = (values as any).map((item: any, index: number) => {
          const other_ = {
            key: index,

            onClick: (event: MouseEvent) => {
              event.preventDefault();
              event.stopPropagation();
            },

            onRemove: (event: MouseEvent) => {
              event.preventDefault();
              event.stopPropagation();

              onUnselectMethod(item);
            },

            input: true
          };

          if (is('function', renderChip)) return renderChip(item, renderValue(item), other_);

          return (
            <Chip
              key={index}

              size='small'

              {...ChipProps}

              {...other_}
            >
              {renderValue(item)}
            </Chip>
          );
        });

        if (is('number', limit) && !open && value.length - limit > 0) (values as any).push(
          <Type
            version={['small', 'regular'].includes(size as any) ? 'b2' : 'b1'}

            color='default'

            className={classes.limitText}
          >
            +{value.length - limit}
          </Type>
        );

        return values;
      }

      return (value__ as any).map(item => renderValue(item)).join(', ');
    }

    return renderValue(value);
  });

  let optionsToUse = options;

  if (filterOutSelectedOptions) {
    optionsToUse = optionsToUse.filter(option => {
      const selected = !!(is('array', value) ? value : [value])?.find((item: any) => isEqual(item, option));

      return !selected;
    });
  }

  const groups = {};

  if (is('function', groupBy)) {
    optionsToUse.forEach(option => {
      const valueForGroupBy = groupBy(option) || l('Other');

      if (!groups[valueForGroupBy]) groups[valueForGroupBy] = [];

      groups[valueForGroupBy].push(option);
    });

    optionsToUse = [];

    if (Object.keys(groups).length) Object.keys(groups).forEach(item => {
      const array = groups[item];

      optionsToUse.push({ label: item, version: 'subheader' }, ...array);
    });
  }

  const renderOptionValue = (values: any) => {
    const result = values.map((item: any, index: number) => {
      let other_: any = {};

      const button = item.version === undefined || item.version === 'button';

      const selected = !!(is('array', value) ? value : [value])?.find((item_: any) => isEqual(item, item_));

      if (button) {
        other_ = {
          primary: getLabel(item),

          value: item,

          button,

          selected,

          onClick: (event: React.MouseEvent) => {
            if (multiple && selected) onUnselect(item);
            else onSelect(item);

            if (is('function', item.props?.onClick)) item.props?.onClick(event);

            if (blurOnSelect) {
              if (closeOnSelect) setOpen(false);

              refs.input.current.blur();
            }
            else if (closeOnSelect) onClose();
          }
        };
      }
      else {
        other_.secondary = getLabel(item);
      }

      other_.onMouseUp = onMouseUp;

      other_.onMouseDown = onMouseDown;

      if (item.noOptions) {
        if (noOptionsElement) return React.cloneElement(noOptionsElement, {
          key: 'noOptions'
        });
      }

      return (
        is('function', renderOption) ?
          renderOption(item, index, { ...other_, ...item.props }) :

          <ListItem
            key={item.value !== undefined ? item.value : index}

            role='option'

            preselected={!open ? false : undefined}

            {...other_}

            {...item.props}
          />
      );
    });

    if (startOptionsElement) result.unshift(React.cloneElement(startOptionsElement, { key: 'startOptionsElement' }));

    if (endOptionsElement) result.push(React.cloneElement(endOptionsElement, { key: 'endOptionsElement' }));

    return result;
  };

  const renderList = () => {
    if (Object.keys(groups).length) {
      return (
        Object.keys(groups).map((item: any, index: number) => (
          <li
            key={index}

            style={{ width: '100%' }}
          >
            <ListSubheader
              Component='div'
            >
              {item}
            </ListSubheader>

            <List
              size={size}

              paddingVertical='none'

              menu
            >
              {renderOptionValue(groups[item])}
            </List>
          </li>
        ))
      );
    }
    else return renderOptionValue(optionsToUse);
  };

  const endIcons = [
    end,

    ...(!readOnly ? [
      ...(loading ? [
        <RoundProgress
          key={1}

          className={classes.roundProgress}

          size='small'
        />
      ] : []),

      ...(clear ? [!!(multiple ? value.length : valueInput) && (
        <IconButton
          onClick={onClear}

          size='small'

          fontSize={iconFontSize}

          aria-label={l('Input clear')}

          {...IconButtonProps}
        >
          <IconClear {...IconProps} />
        </IconButton>
      )] : []),

      <IconButton
        key={3}

        onClick={onClickArrowDown}

        size='small'

        fontSize={iconFontSize}

        aria-expanded={open}

        aria-controls={refs.ids.list}

        InteractionProps={{
          clear: !!(multiple ? value.length : valueInput)
        }}

        {...IconButtonProps}
      >
        <IconDropdown
          {...IconProps}

          className={classNames([
            IconProps?.className,

            classes.arrow,
            open && classes.arrow_open
          ])}
        />
      </IconButton>
    ] : [])
  ].filter(Boolean);

  if (mouseDown) refs.input.current.focus();

  const menuItems = renderList();

  return (
    <Line
      ref={refs.wrapper}

      gap={0}

      direction='column'

      fullWidth={fullWidth}

      {...WrapperProps}

      className={classNames([
        staticClassName('AutoComplete', theme) && [
          'onesy-AutoComplete-wrapper',
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

        value={valueInput}

        onChange={onChangeInput}

        enabled={open || focus || mouseDown || !!(multiple ? (!!value.length || valueInput) : valueInput)}

        focus={open || focus || mouseDown}

        className={classNames([
          staticClassName('AutoComplete', theme) && [
            'onesy-AutoComplete-root',
            `onesy-AutoComplete-version-${version}`,
            `onesy-AutoComplete-size-${size}`,
            open && `onesy-AutoComplete-open`,
            mouseDown && `onesy-AutoComplete-mouse-down`,
            focus && `onesy-AutoComplete-focus`,
            loading && `onesy-AutoComplete-loading`
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

        label={label}

        prefix={prefix}

        sufix={sufix}

        start={start}

        end={endIcons}

        readOnly={readOnly}

        endVerticalAlign='center'

        role='combobox'

        aria-autocomplete='list'

        aria-multiselectable={multiple}

        aria-controls={refs.ids.list}

        aria-expanded={open}

        aria-haspopup='listbox'

        aria-labelledby={label}

        aria-disabled={disabled}

        fullWidth={fullWidth}

        disabled={disabled}

        InputWrapperProps={{
          className: classNames([
            staticClassName('AutoComplete', theme) && [
              'onesy-AutoComplete-input-wrapper'
            ],

            classes.inputWrapper,
            multiple && [
              classes.multiple,
              classes[`inputWrapper_multiple_size_${size}`]
            ],
            chip && classes.chip,
            open && classes.open,
            readOnly && classes.readOnly
          ]),

          onMouseDown,
          onMouseUp,

          onClick,

          onKeyDown: onEnterKeyDown
        }}

        inputProps={{
          disabled: multiple,

          readOnly: multiple,

          ...InputProps,

          className: classNames([
            InputProps?.className,
            multiple && classes.input_
          ])
        }}

        style={{
          ...styles.root,

          ...style
        }}

        {...other}
      >
        {!noInputValue && multiple && !chip && !!value.length && (
          <div
            ref={refs.value}

            tabIndex={0}

            onFocus={onFocus}

            onBlur={onBlur}

            onMouseDown={onMouseDown}

            onKeyDown={onEnterKeyDown}

            className={classNames([
              staticClassName('AutoComplete', theme) && [
                'onesy-AutoComplete-input',

                multiple && [
                  chip && `onesy-AutoComplete-chip`,
                  open && `onesy-AutoComplete-open`,
                  readOnly && `onesy-Select-readOnly`
                ],
              ],

              multiple && [
                classes.input,
                classes[`input_size_${size}`],
                chip && classes.chip,
                open && classes.open,
                readOnly && classes.readOnly
              ]
            ])}
          >
            {renderValues(value, onUnselect)}
          </div>
        )}

        {!noInputValue && multiple && chip && !!value.length && renderValues(value, onUnselect)}
      </TextField>

      <Menu
        ref={refs.menu}

        open={open && !!menuItems?.length}

        autoSelectOnBlur={autoSelectOnBlur}

        portal={true}

        onClose={() => onClose(false)}

        anchorElement={refs.root.current}

        onExited={onExited}

        menuItems={menuItems}

        transformOrigin='center top'

        transformOriginSwitch='center bottom'

        maxWidth='unset'

        AppendProps={{
          alignment: 'start'
        }}

        ModalProps={{
          // focus: !MenuProps.portal

          freezeScroll: false
        }}

        ListProps={{
          menu: true,

          paddingVertical: (is('function', groupBy) && !!options.length) ? 'none' : undefined,

          size,

          role: 'listbox',

          id: refs.ids.list,

          'aria-label': label,

          ...ListProps,

          className: classNames([
            ListProps?.className,
            classes.list
          ]),
        }}

        {...MenuProps}

        style={{
          ...styles.menu,

          ...MenuProps?.menu
        }}

        className={classNames([
          MenuProps?.className
        ])}
      />
    </Line>
  );
});

AutoComplete.displayName = 'onesy-AutoComplete';

export default AutoComplete;
