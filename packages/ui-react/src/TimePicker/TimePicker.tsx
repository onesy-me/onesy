import React from 'react';

import { is, unique } from '@onesy/utils';
import { OnesyDate, format as formatDate, set, is as isOnesyDate } from '@onesy/date';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialSchedule from '@onesy/icons-material-rounded-react/IconMaterialScheduleW100';
import IconMaterialKeyboardAlt from '@onesy/icons-material-rounded-react/IconMaterialKeyboardAltW100';

import IconElement from '../Icon';
import IconButtonElement from '../IconButton';
import AdvancedTextFieldElement from '../AdvancedTextField';
import ModalElement from '../Modal';
import ClickListenerElement from '../ClickListener';
import TooltipElement from '../Tooltip';
import SurfaceElement from '../Surface';
import LineElement from '../Line';
import TypeElement from '../Type';
import ToggleButtonsElement from '../ToggleButtons';
import ToggleButtonElement from '../ToggleButton';
import ButtonElement from '../Button';
import SlideElement from '../Slide';
import ClockElement from '../Clock';
import TabsElement from '../Tabs';
import TabElement from '../Tab';
import useMediaQuery from '../useMediaQuery';
import { SEPARATOR, SEPARATOR_SYMBOL } from '../DatePicker/DatePicker';
import { TClockUnit } from '../Clock/Clock';
import { IAdvancedTextField } from '../AdvancedTextField/AdvancedTextField';
import { valueBreakpoints, staticClassName } from '../utils';
import { ISize, IValueBreakpoints, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  main: {},

  main_size_small: {
    borderRadius: theme.methods.shape.radius.value(2.5, 'px'),
  },

  main_size_regular: {
    borderRadius: theme.methods.shape.radius.value(3.5, 'px')
  },

  main_size_large: {
    borderRadius: theme.methods.shape.radius.value(4.5, 'px')
  },

  heading: {
    width: '100%'
  },

  heading_size_small: {
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(2, 'px')} 0`
  },

  heading_size_regular: {
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(3, 'px')} 0`
  },

  heading_size_large: {
    padding: `${theme.methods.space.value(4, 'px')} ${theme.methods.space.value(4, 'px')} 0`
  },

  inputs: {
    width: '100%'
  },

  middle: {
    width: '100%'
  },

  middle_size_small: {
    padding: `0 ${theme.methods.space.value(2, 'px')}`,
    marginTop: '16px'
  },

  middle_size_regular: {
    padding: `0 ${theme.methods.space.value(3, 'px')}`,
    marginTop: '24px'
  },

  middle_size_large: {
    padding: `0 ${theme.methods.space.value(4, 'px')}`,
    marginTop: '32px'
  },

  input: {
    flex: '1 1 auto',

    '& .onesy-TextField-helper-text': {
      color: theme.palette.text.default.primary
    }
  },

  input_size_small: {
    maxWidth: '72px',

    '& .onesy-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(0.5, 'px')}`,
      height: '64px'
    },

    '& .onesy-TextField-input': {
      ...theme.typography.values.d3,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .onesy-TextField-footer': {
      marginTop: '4px',
      padding: '0px'
    }
  },

  input_size_regular: {
    maxWidth: '96px',

    '& .onesy-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1, 'px')}`,
      height: '72px'
    },

    '& .onesy-TextField-input': {
      ...theme.typography.values.d2,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .onesy-TextField-footer': {
      marginTop: '8px',
      padding: '0px'
    }
  },

  input_size_large: {
    maxWidth: '120px',

    '& .onesy-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(1.5, 'px')}`,
      height: '80px'
    },

    '& .onesy-TextField-input': {
      ...theme.typography.values.d1,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .onesy-TextField-footer': {
      marginTop: '12px',
      padding: '0px'
    }
  },

  button: {
    padding: '0',
    paddingTop: theme.methods.space.value(0.5, 'px'),
    borderRadius: theme.methods.shape.radius.value('sm', 'px'),
    cursor: 'pointer',
    userSelect: 'none',
    flex: '1 1'
  },

  button_size_small: {
    height: '64px',
    width: '82px',

    '& .onesy-Button-label': {
      ...theme.typography.values.d3,

      lineHeight: '1',
    }
  },

  button_size_regular: {
    height: '72px',
    width: '96px',

    '& .onesy-Button-label': {
      ...theme.typography.values.d2,

      lineHeight: '1',
    }
  },

  button_size_large: {
    height: '96px',
    width: '110px',

    '& .onesy-Button-label': {
      ...theme.typography.values.d1,

      lineHeight: '1',
    }
  },

  inputSeparator: {
    paddingInline: theme.methods.space.value(0.75, 'px'),
    userSelect: 'none'
  },

  toggleButtons: {
    '& > *': {
      flex: '1 1 auto'
    }
  },

  toggleButtons_orientation_vertical_size_small: {
    minWidth: '48px',
    height: '64px'
  },

  toggleButtons_orientation_vertical_size_regular: {
    minWidth: '56px',
    height: '72px'
  },

  toggleButtons_orientation_vertical_size_large: {
    minWidth: '68px',
    height: '80px'
  },

  toggleButtons_orientation_horizontal_size_small: {
    height: '30px'
  },

  toggleButtons_orientation_horizontal_size_regular: {
    height: '38px'
  },

  toggleButtons_orientation_horizontal_size_large: {
    height: '46px'
  },

  toggleButton: {

  },

  tabs: {

  },

  tabs_padding: {
    marginTop: 12
  },

  footer: {},

  footer_size_small: {
    padding: `0px ${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1, 'px')}`,
    marginTop: '16px'
  },

  footer_size_regular: {
    padding: `0px ${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(2, 'px')}`,
    marginTop: '24px'
  },

  footer_size_large: {
    padding: `0px ${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(3, 'px')}`,
    marginTop: '32px'
  }
}), { name: 'onesy-TimePicker' });

export type TTimePickerValue = OnesyDate | [OnesyDate, OnesyDate];

export type TTimePickerSelecting = TClockUnit | [TClockUnit, TClockUnit];

export interface ITimePicker extends Omit<IAdvancedTextField, 'version'> {
  version?: 'auto' | 'mobile' | 'desktop';

  value?: TTimePickerValue;
  valueDefault?: TTimePickerValue;
  onChange?: (value: TTimePickerValue) => any;

  selecting?: TTimePickerSelecting;
  selectingDefault?: TTimePickerSelecting;
  onChangeSelecting?: (value: TTimePickerSelecting) => any;

  size?: ISize;

  now?: boolean;
  range?: boolean;
  static?: boolean;
  valid?: (value: OnesyDate, version: TClockUnit) => boolean;
  validate?: (value: OnesyDate) => boolean;
  min?: OnesyDate;
  max?: OnesyDate;
  autoNext?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  autoCloseOnLast?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  openMobile?: 'input' | 'select';
  openDesktop?: 'input' | 'select';
  selectModalSubHeadingText?: string;
  selectModalSubHeadingTextRange?: string;
  inputModalSubHeadingText?: string;
  inputModalSubHeadingTextRange?: string;
  orientation?: 'vertical' | 'horizontal' | Partial<Record<IValueBreakpoints, 'vertical' | 'horizontal'>>;
  format?: '12' | '24';
  hour?: boolean;
  minute?: boolean;
  second?: boolean;
  switch?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  today?: boolean;
  clear?: boolean;
  placeholder?: string;
  heading?: boolean;
  actions?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;
  onClose?: (event: React.MouseEvent<any>) => any;
  onCancel?: (event: React.MouseEvent<any>) => any;
  onNow?: (event: React.MouseEvent<any>) => any;
  onOk?: (event: React.MouseEvent<any>) => any;

  renderValue?: (value: OnesyDate, version: TClockUnit, x: number, y: number, valueNumber: number, otherProps: any) => React.ReactNode;

  Icon?: IElementReference;
  IconEnter?: IElementReference;

  WrapperProps?: IPropsAny;
  MainProps?: IPropsAny;
  ModalProps?: IPropsAny;
  MiddleProps?: IPropsAny;
  ButtonProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  ToggleButtonsProps?: IPropsAny;
  ToggleButtonProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  InputProps?: IPropsAny;
  ClockProps?: IPropsAny;
  TabsProps?: IPropsAny;
  TabFromProps?: IPropsAny;
  TabToProps?: IPropsAny;
  AdvancedTextFieldProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const TimePicker: React.FC<ITimePicker> = React.forwardRef((props__, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTimePicker?.props?.default, ...props__ }), [props__]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const AdvancedTextField = React.useMemo(() => theme?.elements?.AdvancedTextField || AdvancedTextFieldElement, [theme]);

  const Modal = React.useMemo(() => theme?.elements?.Modal || ModalElement, [theme]);

  const ClickListener = React.useMemo(() => theme?.elements?.ClickListener || ClickListenerElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const ToggleButton = React.useMemo(() => theme?.elements?.ToggleButton || ToggleButtonElement, [theme]);

  const ToggleButtons = React.useMemo(() => theme?.elements?.ToggleButtons || ToggleButtonsElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Slide = React.useMemo(() => theme?.elements?.Slide || SlideElement, [theme]);

  const Clock = React.useMemo(() => theme?.elements?.Clock || ClockElement, [theme]);

  const Tab = React.useMemo(() => theme?.elements?.Tab || TabElement, [theme]);

  const Tabs = React.useMemo(() => theme?.elements?.Tabs || TabsElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    version: version_ = 'auto',

    value: value_,
    valueDefault,
    onChange,

    selecting: selecting_,
    selectingDefault,
    onChangeSelecting,

    size = 'regular',

    range,
    now,
    label,
    min,
    max,
    validate,
    autoNext: autoNext_,
    autoCloseOnLast: autoCloseOnLast_,
    openMobile = 'select',
    openDesktop = 'select',
    selectModalSubHeadingText = 'Select time',
    selectModalSubHeadingTextRange = `Select from${SEPARATOR}to time`,
    inputModalSubHeadingText = 'Enter time',
    inputModalSubHeadingTextRange = `Enter from${SEPARATOR}to time`,
    orientation: orientation_,
    format = '12',
    hour = true,
    minute = true,
    second = false,
    switch: switch__,
    static: static_,
    today,
    clear = true,
    placeholder: placeholder_,
    heading: heading_ = true,
    actions: actions_ = true,
    fullWidth,
    readOnly,
    disabled,

    valid: valid_,

    onClick: onClick_,
    onClose: onClose_,
    onCancel: onCancel_,
    onNow: onNow_,
    onToday: onToday_,
    onClear: onClear_,
    onOk: onOk_,

    renderValue,

    Icon: Icon_ = IconMaterialSchedule,
    IconEnter = IconMaterialKeyboardAlt,

    WrapperProps,
    MainProps,
    ModalProps,
    MiddleProps,
    ButtonProps,
    TooltipProps,
    ToggleButtonsProps,
    ToggleButtonProps,
    IconButtonProps,
    InputProps,
    ClockProps,
    TabsProps,
    TabFromProps,
    TabToProps,
    AdvancedTextFieldProps,
    IconProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    mode: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    dayTime: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [switch__, orientation_, autoNext_, autoCloseOnLast_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [switch__, orientation_, autoNext_, autoCloseOnLast_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const orientation = valueBreakpoints(orientation_, 'vertical', breakpoints, theme);
  const autoNext = valueBreakpoints(autoNext_, undefined, breakpoints, theme);
  const autoCloseOnLast = valueBreakpoints(autoCloseOnLast_, undefined, breakpoints, theme);

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  const [value, setValue] = React.useState(() => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new OnesyDate(), new OnesyDate()] : [new OnesyDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<OnesyDate>).filter(Boolean);
  });
  const [selecting, setSelecting] = React.useState(() => {
    const valueResult = (selectingDefault !== undefined ? selectingDefault : selecting_) || ['hour', 'hour'];

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<TClockUnit>).filter(Boolean);
  });
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : openDesktop) || 'select');
  const [error, setError] = React.useState(false);
  const [dayTime, setDayTime] = React.useState<Array<'am' | 'pm'>>(Array.from({ length: 2 }).map(item => formatDate(new OnesyDate(), 'a') as any));
  const [tab, setTab] = React.useState(0);

  refs.value.current = value;

  refs.mode.current = mode;

  refs.dayTime.current = dayTime;

  const valueToInput = React.useCallback((valueNew: any = refs.value.current) => {
    let result = '';

    const [from, to] = is('array', valueNew) ? valueNew : [valueNew];

    if (!(from || to)) return '';

    const method = (item: OnesyDate) => {
      let formatValue = '';

      if (format === '12') formatValue += `hh`;
      else formatValue += `HH`;

      if (minute) formatValue += `:mm`;

      if (second) formatValue += `:ss`;

      if (format === '12') formatValue += ` a`;

      return formatDate(item, formatValue);
    };

    result += `${method(from)}`;

    if (range && to) result += `${SEPARATOR}${method(to)}`;

    return result;
  }, [value, format, hour, minute, second, range]);

  const [input, setInput] = React.useState(valueToInput());

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  const onUpdateValue = (valueNew_: any) => {
    const valueNew = is('array', valueNew_) ? valueNew_ : [valueNew_];

    // Update value
    setValue(valueNew);

    // Update input
    setInput(valueToInput(valueNew));

    // Update dayTime
    setDayTime(valueNew.map(item => formatDate(item, 'a')));
  };

  const errorCheck = React.useCallback((valueNew: any = value) => {
    // Error
    setError((valueNew || []).some((item: any, index: number) => !valid(item)));
  }, [value]);

  // Init
  React.useEffect(() => {
    // Error
    errorCheck();
  }, []);

  // Value
  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) onUpdateValue(((is('array', value_) ? value_ : [value_] as any).filter(Boolean)));
  }, [value_]);

  const onUpdate = React.useCallback((valueNew_: OnesyDate) => {
    const valueNew = resolve(valueNew_);

    // Inner update
    if (!props.hasOwnProperty('value')) setValue(valueNew as any);

    if (is('function', onChange)) onChange(!range ? valueNew[0] : valueNew);
  }, [value, range, onChange]);

  const onUpdateSelecting = React.useCallback((valueNew_: TClockUnit, index: number) => {
    const valueNew = [...selecting];

    valueNew[index] = valueNew_;

    // Inner update
    if (!props.hasOwnProperty('selecting')) setSelecting(valueNew);

    if (is('function', onChangeSelecting)) onChangeSelecting(valueNew as any);
  }, [onChangeSelecting]);

  const valid = React.useCallback((...args: [OnesyDate, any?]) => {
    if (is('function', valid_)) return valid_(...args);

    const onesyDate = args[0];

    if (min || max || validate) {
      let response = true;

      if (is('function', validate)) response = validate(onesyDate);

      if (min !== undefined) response = response && isOnesyDate(onesyDate, 'after or same', min);

      if (max !== undefined) response = response && isOnesyDate(onesyDate, 'before or same', max);

      return response;
    }

    return true;
  }, [valid_, min, max, validate]);

  const textToOnesyDate = React.useCallback((valueNew: string) => {
    const [times, dayTime_] = (valueNew || '').split(' ');
    const values = times.split(':');

    let valueTime: any;

    let onesyDate = new OnesyDate();

    if (hour) {
      valueTime = values[0];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      onesyDate = set((format === '12' && dayTime_ === 'pm') ? valueTime + 12 : valueTime, 'hour', onesyDate);
    }

    if (minute) {
      valueTime = values[!hour ? 0 : 1];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      onesyDate = set(valueTime, 'minute', onesyDate);
    }

    if (second) {
      valueTime = values[!(hour && minute) ? 0 : !hour ? 1 : 2];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      onesyDate = set(valueTime, 'second', onesyDate);
    }

    return onesyDate;
  }, [format, hour, minute, second]);

  const onInputModalChange = React.useCallback((valueNew: string, unit: TClockUnit, index: number) => {
    let valueTime: any = valueNew;

    if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

    valueTime = +valueTime;

    value[index] = set(valueTime, unit || selecting[index], value[index]);

    (!actions_ ? onUpdate : setValue)(resolve(value) as any);
  }, [value, actions_, selecting]);

  const resolve = React.useCallback((valueNew = refs.value.current, dayTimeNew = refs.dayTime.current) => {
    const values = valueNew.filter(Boolean).map((item: OnesyDate, index: number) => {
      // Resolve the range value
      const valueHour = item.hour;

      if (format === '12') {
        if (dayTimeNew[index] === 'am' && valueHour >= 12) return set(valueHour - 12, 'hour', item);

        if (dayTimeNew[index] === 'pm' && valueHour < 12) return set(valueHour + 12, 'hour', item);
      }

      return item;
    });

    return values;
  }, [value, dayTime, format]);

  const updateDayTime = React.useCallback((valueNew_: string[], index: number) => {
    const valueNew = valueNew_[0];

    // Update dayTime
    const dayTimeNew = [...dayTime];

    dayTimeNew[index] = valueNew as any;

    refs.dayTime.current = dayTimeNew;

    setDayTime(dayTimeNew);

    (!actions_ ? onUpdate : setValue)(resolve(refs.value.current) as any);
  }, [value, actions_, dayTime, format]);

  const inputToValue = React.useCallback((valueNew_: string = input) => {
    let valueNew = valueNew_;

    let [from, to] = valueNew.split(SEPARATOR) as any;

    from = textToOnesyDate(from);

    if (to) to = textToOnesyDate(to);

    valueNew = [from, to].filter(Boolean).filter((item: OnesyDate) => item?.valid) as any;

    return valueNew as unknown as TTimePickerValue;
  }, [input]);

  const onInputChange = React.useCallback((valueNew_: any) => {
    const valueNew = inputToValue(valueNew_);

    const validValues = (valueNew as [OnesyDate, OnesyDate]).every(item => item.valid);

    // Only update values if input is valid
    // format used to make the value
    if (validValues) {
      // Error
      errorCheck(valueNew);

      // Update value
      onUpdate(valueNew as any);
    }

    if (!valueNew_) {
      onUpdate([null, null] as any);
    }

    // Update input for free typing
    setInput(valueNew_);
  }, []);

  const onChangeClock = React.useCallback((valueNew_: any, index: number = 0) => {
    const valueNew = [...value];

    if (valueNew_ !== value[index]) {
      valueNew[index] = valueNew_;

      (!actions_ ? onUpdate : setValue)(resolve(valueNew) as any);

      // Error
      errorCheck(valueNew);
    }
  }, [value, actions_]);

  const onChangeSelectingClock = React.useCallback((valueNew: TClockUnit, index = 0) => {
    const selectingValue = selecting;

    selectingValue[index] = valueNew;

    if (valueNew !== selecting[0]) setSelecting([...selectingValue]);
  }, [selecting]);

  const onDoneSelecting = React.useCallback((valueNew: any, selectingNew: any) => {
    // AutoCloseOnLast
    if (autoCloseOnLast && refs.mode.current === 'select') {
      if (['hour', 'minute', 'second'].includes(selectingNew)) {
        if (
          (selectingNew === 'second') ||
          (selectingNew === 'minute' && !second) ||
          (selectingNew === 'hour' && !minute)
        ) return onOk();
      }
    }
  }, [mode, autoCloseOnLast, hour, minute, second]);

  const onMode = React.useCallback(() => {
    setMode((version === 'mobile' ? openMobile : openDesktop) || 'select');
  }, [version, openMobile, openDesktop]);

  const onModeSwitch = React.useCallback(() => {
    setMode(refs.mode.current === 'select' ? 'input' : 'select');
  }, []);

  const onOpen = React.useCallback(() => {
    onMode();

    setOpen(previous => !previous);
  }, [open, openMobile, version]);

  const onClose = React.useCallback((event: React.MouseEvent<any>) => {
    setOpen(false);

    if (is('function', onClose_)) onClose_(event);
  }, [onClose_]);

  const onReset = React.useCallback(() => {
    const valueNew = inputToValue() as any;

    // Update value
    onUpdate(valueNew);

    // Update dayTime
    setDayTime(valueNew.map(item => formatDate(item, 'a')));
  }, [input]);

  const onToday = React.useCallback((event: React.MouseEvent) => {
    const valueNew: any = [new OnesyDate()];

    if (range) valueNew.push(new OnesyDate());

    // Update value
    onUpdate(valueNew as any);

    // Update input
    setInput(valueToInput(valueNew));

    // Update dayTime
    setDayTime(valueNew.map(item => formatDate(item, 'a')));

    onClose(event);

    if (is('function', onToday_)) onToday_(event);
  }, [input, range, onToday_]);

  const onClear = React.useCallback((event: React.MouseEvent) => {
    const valueNew: any = [];

    // Update value
    onUpdate(valueNew as any);

    // Update input
    setInput(valueToInput(valueNew));

    // Update dayTime
    setDayTime(valueNew.map(item => formatDate(item, 'a')));

    onClose(event);

    if (is('function', onClear_)) onClear_(event);
  }, [onClear_]);

  const onOk = React.useCallback((event?: React.MouseEvent) => {
    // Error
    errorCheck();

    // Update value
    onUpdate(refs.value.current as any);

    // Update input
    setInput(valueToInput(refs.value.current));

    // Update dayTime
    setDayTime(refs.value.current.map(item => formatDate(item, 'a')));

    onClose(event);

    if (is('function', onOk_)) onOk_(event);
  }, [value, onOk_]);

  const onCancel = React.useCallback((event: React.MouseEvent) => {
    onReset();

    onClose(event);

    if (is('function', onCancel_)) onCancel_(event);
  }, [input, onCancel_]);

  const mask: any = [];

  let placeholder = '';

  if (hour) {
    if (format === '12') {
      mask.push(
        { pattern: '[0-1]' },

        (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
      );
    }

    if (format === '24') {
      mask.push(
        { pattern: '[0-2]' },

        (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput),
      );
    }

    placeholder += 'hh';

    if (minute || second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (minute) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'mm';

    if (second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (second) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'ss';
  }

  if (format === '12') {
    mask.push(
      ' ',

      { pattern: '[ap]' },

      'm'
    );

    placeholder += ' (a|p)m';
  }

  // range
  if (range) {
    mask.push(
      ' ',
      SEPARATOR_SYMBOL,
      ' ',

      ...mask
    );

    placeholder += `${SEPARATOR}${placeholder}`;
  }

  placeholder = placeholder_ || placeholder;

  const buttonProps = {
    color: 'inherit',
    version: 'text',
    size,

    ...ButtonProps
  };

  const iconButtonProps = {
    size,

    ...IconButtonProps
  };

  const clock = (index = 0) => (
    <Clock
      size={size}

      format={format}

      value={value[index] || new OnesyDate()}

      dayTime={dayTime[index] || formatDate(new OnesyDate(), 'a') as any}

      selecting={selecting[index]}

      onChange={valueNew => onChangeClock(valueNew, index)}

      onChangeSelecting={valueNew => onChangeSelectingClock(valueNew, index)}

      onDoneSelecting={onDoneSelecting}

      renderValue={renderValue}

      valid={valid}

      hour={hour}

      minute={minute}

      second={second}

      autoNext={autoNext}

      disabled={disabled}

      {...ClockProps}
    />
  );

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        tonal={tonal}

        color={color}

        size={size}

        version='text'

        onClick={onOpen}

        aria-label='Choose time'

        disabled={disabled || readOnly}

        {...iconButtonProps}
      >
        <Icon_
          {...IconProps}
        />
      </IconButton>
    );
  }

  const makeInputs = (index = 0) => {
    const inputProps: any = {
      tonal,
      color,
      version: 'outlined',
      size,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'onesy-TimePicker-input'
        ],

        classes.input,
        classes[`input_version_${version}`],
        classes[`input_size_${size}`]
      ]),

      HelperTextProps: {
        version: size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'
      },

      ...InputProps
    };

    const buttonProps_ = {
      tonal: 'secondary',
      color: ['themed', 'inverted', 'default', 'inherit'].includes(color) ? 'default' : color,
      version: 'filled',
      backgroundOpacity: 0.44,
      elevation: false,
      size,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'onesy-TimePicker-button'
        ],

        classes.button,
        classes[`button_size_${size}`]
      ]),

      style: {
        color: theme.palette.text.default.primary
      }
    };

    const separator = (
      <Type
        version={size === 'large' ? 'd1' : size === 'regular' ? 'd2' : 'd3'}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'onesy-TimePicker-input-separator'
          ],

          classes.inputSeparator
        ])}

        style={{
          ...(mode !== 'select' && {
            marginTop: -24
          })
        }}
      >
        :
      </Type>
    );

    const buttons = [];

    const inputs = [];

    if (hour) {
      buttons.push(
        <Button
          {...buttonProps_}

          selected={selecting[index] === 'hour'}

          onClick={() => onUpdateSelecting('hour', index)}
        >
          {formatDate(value[index], format === '12' ? 'hh' : 'HH')}
        </Button>
      );

      inputs.push(
        <AdvancedTextField
          helperText='Hour'

          value={formatDate(value[index], format === '12' ? 'hh' : 'HH')}

          onChange={(valueNew: any) => onInputModalChange(valueNew, 'hour', index)}

          placeholder='00'

          mask={[
            ...(format === '12' ? [
              { pattern: '[0-1]' },

              (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
            ] : [
              { pattern: '[0-2]' },

              (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput)
            ])
          ]}

          {...inputProps}
        />
      );
    }

    if (minute) {
      if (hour) {
        buttons.push(separator);
        inputs.push(separator);
      }

      buttons.push(
        <Button
          {...buttonProps_}

          selected={selecting[index] === 'minute'}

          onClick={() => onUpdateSelecting('minute', index)}
        >
          {formatDate(value[index], 'mm')}
        </Button>
      );

      inputs.push(
        <AdvancedTextField
          helperText='Minute'

          value={formatDate(value[index], 'mm')}

          onChange={(valueNew: any) => onInputModalChange(valueNew, 'minute', index)}

          placeholder='00'

          mask={[
            { pattern: '[0-5]' },

            { pattern: '[0-9]' }
          ]}

          {...inputProps}
        />
      );
    }

    if (second) {
      if (hour || minute) {
        buttons.push(separator);
        inputs.push(separator);
      }

      buttons.push(
        <Button
          {...buttonProps_}

          selected={selecting[index] === 'second'}

          onClick={() => onUpdateSelecting('second', index)}
        >
          {formatDate(value[index], 'ss')}
        </Button>
      );

      inputs.push(
        <AdvancedTextField
          helperText='Second'

          value={formatDate(value[index], 'ss')}

          onChange={(valueNew: any) => onInputModalChange(valueNew, 'second', index)}

          placeholder='00'

          mask={[
            { pattern: '[0-5]' },

            { pattern: '[0-9]' }
          ]}

          {...inputProps}
        />
      );
    }

    return mode === 'select' ? buttons : inputs;
  };

  const toggleButtonProps = {
    size,
    icon: false,

    ...ToggleButtonProps,

    className: classNames([
      staticClassName('TimePicker', theme) && [
        'onesy-TimePicker-toggle-button'
      ],

      ToggleButtonProps?.className,
      classes.toggleButton
    ])
  };

  const orientationValue = mode === 'select' ? orientation : 'vertical';

  const timeValue = range ? [0, 1] : [0];

  const elementValues = (
    timeValue.map((item, index: number) => (
      <Line
        key={index}

        gap={4.5}

        direction={orientationValue === 'vertical' ? 'column' : 'row'}

        align='center'

        justify='unset'

        style={{
          width: '100%'
        }}
      >
        {/* Inputs, am, pm */}
        <Line
          gap={orientationValue === 'vertical' ? 1.5 : 2}

          direction={orientationValue === 'vertical' ? 'row' : 'column'}

          justify='center'

          align='unset'

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'onesy-TimePicker-inputs'
            ],

            classes.inputs
          ])}
        >
          <Line
            gap={0}

            direction='row'

            align='center'

            justify='center'
          >
            {makeInputs(index)}
          </Line>

          {format === '12' && (
            <ToggleButtons
              version='outlined'

              size={size}

              orientation={orientationValue}

              value={dayTime[index] || formatDate(new OnesyDate(), 'a') as any}

              onChange={valueNew => updateDayTime(valueNew, index)}

              select='single'

              unselect={false}

              {...ToggleButtonsProps}

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'onesy-TimePicker-toggle-buttons'
                ],

                ToggleButtonsProps?.className,
                classes.toggleButtons,
                classes[`toggleButtons_orientation_${orientationValue}_size_${size}`]
              ])}
            >
              <ToggleButton
                value='am'

                {...toggleButtonProps}
              >
                AM
              </ToggleButton>

              <ToggleButton
                value='pm'

                {...toggleButtonProps}
              >
                PM
              </ToggleButton>
            </ToggleButtons>
          )}
        </Line>

        {/* Watch */}
        {mode === 'select' && clock(index)}
      </Line>
    ))
  );

  const heading = mode === 'select' ? !range ? selectModalSubHeadingText : selectModalSubHeadingTextRange : !range ? inputModalSubHeadingText : inputModalSubHeadingTextRange;

  const actions = (
    <Line
      direction='row'

      align='center'

      justify='space-between'

      fullWidth

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'onesy-TimePicker-footer'
        ],

        classes.footer,
        classes[`footer_size_${size}`]
      ])}
    >
      <Line
        gap={0}

        direction='row'

        align='center'
      >
        {switch_ && (
          <Tooltip
            label={mode === 'select' ? 'Enter time' : 'Select time'}
          >
            <IconButton
              tonal={tonal}

              color='inherit'

              size={size}

              onClick={onModeSwitch}

              aria-label={mode === 'select' ? 'Enter time' : 'Select time'}

              {...iconButtonProps}
            >
              {mode === 'select' ? <IconEnter {...IconProps} /> : <Icon_  {...IconProps} />}
            </IconButton>
          </Tooltip>
        )}

        {today && (
          <Button
            onClick={onToday}

            version='text'

            size={size}

            {...buttonProps}
          >
            Now
          </Button>
        )}

        {clear && (
          <Button
            onClick={onClear}

            version='text'

            size={size}

            {...buttonProps}
          >
            Clear
          </Button>
        )}
      </Line>

      <Line
        gap={0}

        direction='row'

        align='center'
      >
        <Button
          tonal={tonal}

          color={color}

          version='text'

          size={size}

          onClick={onCancel}

          {...buttonProps}
        >
          Cancel
        </Button>

        <Button
          tonal={tonal}

          color={color}

          version='text'

          size={size}

          onClick={onOk}

          {...buttonProps}
        >
          Ok
        </Button>
      </Line>
    </Line>
  );

  const element = (
    <Surface
      gap={0}

      direction='column'

      align='center'

      Component={Line as any}

      {...MainProps}

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'onesy-TimePicker-main'
        ],

        MainProps?.className,
        classes.main,
        classes[`main_size_${size}`]
      ])}
    >
      {/* Heading */}
      {heading_ && (
        <Type
          version={size === 'large' ? 'l1' : size === 'regular' ? 'l2' : 'l3'}

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'onesy-TimePicker-heading'
            ],

            classes.heading,
            classes[`heading_size_${size}`]
          ])}
        >
          {heading}
        </Type>
      )}

      {/* Tabs */}
      {range && (
        <Tabs
          justify='center'

          initialLineUpdateTimeout={340}

          value={tab}

          valueDefault={tab}

          onChange={setTab}

          {...TabsProps}

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'onesy-TimePicker-tabs'
            ],

            TabsProps?.className,
            classes.tabs,
            heading_ && classes.tabs_padding
          ])}
        >
          <Tab
            value={0}

            label='From'

            {...TabFromProps}
          />

          <Tab
            value={1}

            label='To'

            {...TabToProps}
          />
        </Tabs>
      )}

      {/* Middle */}
      <Line
        gap={0}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'onesy-TimePicker-middle'
          ],

          MiddleProps?.className,
          classes.middle,
          classes[`middle_size_${size}`]
        ])}
      >
        {elementValues[tab]}
      </Line>

      {/* Actions */}
      {actions_ && actions}
    </Surface>
  );

  if (version === 'mobile') {
    if (!(readOnly || disabled)) moreProps.onClick = onOpen;
  }

  if (static_) return element;

  return (
    <Line
      gap={0}

      direction='column'

      fullWidth={fullWidth}

      {...WrapperProps}

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'onesy-TimePicker-root',
          `onesy-TimePicker-version-${version}`,
          `onesy-TimePicker-size-${size}`,
          WrapperProps?.className,
          readOnly && `onesy-TimePicker-read-only`,
          disabled && `onesy-TimePicker-disabled`,
          fullWidth && 'onesy-full-width'
        ],

        className,
        classes.root
      ])}
    >
      <AdvancedTextField
        rootRef={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        tonal={tonal}

        color={color}

        version='outlined'

        size={size}

        label={label}

        mask={mask}

        placeholder={placeholder}

        value={input}

        onChange={onInputChange}

        endVerticalAlign='center'

        error={error}

        fullWidth={fullWidth}

        readOnly={readOnly}

        disabled={disabled}

        {...moreProps}

        {...other}

        {...AdvancedTextFieldProps}
      />

      {/* Mobile */}
      {version === 'mobile' && (
        <Modal
          open={open}

          modalWrapperSurface={false}

          TransitionComponent={Slide}

          onClose={onClose}

          {...ModalProps}
        >
          {element}
        </Modal>
      )}

      {/* Desktop */}
      {version === 'desktop' && (
        <Tooltip
          open={open}

          portal

          anchorElement={refs.root.current}

          alignment='center'

          position='bottom'

          hover={false}

          focus={false}

          longPress={false}

          maxWidth='unset'

          noMargin

          label={(
            <ClickListener
              onClickOutside={onCancel as any}

              includeParentQueries={['.onesy-TimePicker-main']}
            >
              {element}
            </ClickListener>
          )}

          {...TooltipProps}
        />
      )}
    </Line>
  );
});

TimePicker.displayName = 'onesy-TimePicker';

export default TimePicker;
