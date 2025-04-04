import React from 'react';

import { is, unique } from '@onesy/utils';
import { OnesyDate, endOf, format, is as isOnesyDate, startOf } from '@onesy/date';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialCalendarToday from '@onesy/icons-material-rounded-react/IconMaterialCalendarTodayW100Filled';
import IconMaterialEdit from '@onesy/icons-material-rounded-react/IconMaterialEditW100';
import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';

import IconButtonElement from '../IconButton';
import ButtonElement from '../Button';
import AdvancedTextFieldElement from '../AdvancedTextField';
import ModalElement from '../Modal';
import TooltipElement from '../Tooltip';
import SurfaceElement from '../Surface';
import LineElement from '../Line';
import TypeElement from '../Type';
import CalendarElement from '../Calendar';
import DividerElement from '../Divider';
import SlideElement from '../Slide';
import ClickListenerElement from '../ClickListener';
import useMediaQuery from '../useMediaQuery';
import { ILine } from '../Line/Line';
import { TCalendarUnit } from '../Calendar/Calendar';
import { TCalendarMonthCalendar, TCalendarMonthValue } from '../CalendarMonth/CalendarMonth';
import { valueBreakpoints, staticClassName } from '../utils';
import { IValueBreakpoints, IElement, IElementReference, IPropsAny } from '../types';
import { ITextField } from '../TextField/TextField';

const useStyle = styleMethod(theme => ({
  root: {

  },

  header: {
    width: '100%',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(3, 'px')} 0px`,
    flex: '0 0 auto'
  },

  header_fullScreen: {
    padding: `${theme.methods.space.value(2, 'px')} 0px 0px`
  },

  actions: {
    width: '100%',
    padding: `0px ${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`,
    flex: '0 0 auto',
    overflowX: 'auto'
  },

  mode: {
    overflow: 'hidden'
  },

  calendar_mobile: {
    '&.onesy-Calendar-root': {
      width: '100%'
    },

    '& .onesy-Calendar-header + .onesy-Divider-root': {
      display: 'none'
    }
  },

  input_mobile: {
    '&.onesy-TextField-root': {
      width: '100%'
    }
  },

  mobile: {
    width: 'calc(100vw - 48px)',
    maxWidth: '330px',
    margin: '0 auto',
    borderRadius: theme.methods.shape.radius.value(3.5, 'px'),
    overflow: 'hidden',

    '& .onesy-Calendar-root': {
      borderRadius: '0'
    }
  },

  mobile_fullScreen: {
    height: '100vh',
    width: '100vw',
    margin: '0',
    maxWidth: 'unset',
    borderRadius: '0'
  },

  modal_input: {
    width: '100%',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(2, 'px')}`,
    marginBottom: '12px',
    flex: '1 1 auto'
  },

  dayNames: {
    width: '100%',
    padding: `0 ${theme.methods.space.value(1, 'px')}`
  },

  dayName: {
    width: '40px',
    height: '40px',
    flex: '1 1 auto',
    userSelect: 'none'
  },

  heading: {
    width: '100%',
    marginBottom: '12px'
  },

  heading_fullScreen: {
    paddingInline: `${theme.methods.space.value(7.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`
  },

  subheading: {
    width: '100%',
    marginBottom: '36px'
  },

  subheading_fullScreen: {
    margin: '8px 0',
    marginInlineStart: '60px'
  },

  divider: {
    '&.onesy-Divider-root': {
      margin: '0'
    }
  }
}), { name: 'onesy-DatePicker' });

export const SEPARATOR_SYMBOL = `–`;

export const SEPARATOR = ` ${SEPARATOR_SYMBOL} `;

export type IDatePicker = Omit<ILine, 'onChange'> & ITextField & {
  version?: 'auto' | 'mobile' | 'desktop';

  value?: TCalendarMonthValue;
  valueDefault?: TCalendarMonthValue;
  onChange?: (value: TCalendarMonthValue) => any;

  calendar?: TCalendarMonthCalendar;
  calendarDefault?: TCalendarMonthCalendar;
  onChangeCalendar?: (value: TCalendarMonthCalendar) => any;

  now?: boolean;
  range?: boolean;
  static?: boolean;
  valid?: (value: OnesyDate, version: TCalendarUnit) => boolean;
  validate?: (value: OnesyDate) => boolean;
  min?: OnesyDate;
  max?: OnesyDate;
  calendars?: number;
  placeholder?: string;
  openMobile?: 'input' | 'select';
  weekStartDay?: string;
  modeModalSubHeadingText?: string;
  modeModalSubHeadingTextRange?: string;
  selectModeHeadingText?: string;
  inputModeHeadingText?: string;
  switch?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  useHelperText?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  name?: IElement;
  nameFrom?: string;
  nameTo?: string;
  label?: IElement;
  labelFrom?: string;
  labelTo?: string;
  today?: boolean;
  clear?: boolean;
  fullScreen?: boolean;
  heading?: boolean;
  actions?: boolean;
  fullWidth?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;
  onClose?: (event: React.MouseEvent<any>) => any;
  onCancel?: (event: React.MouseEvent<any>) => any;
  onToday?: (event: React.MouseEvent<any>) => any;
  onClear?: (event: React.MouseEvent<any>) => any;
  onOk?: (event: React.MouseEvent<any>) => any;

  Icon?: IElementReference;
  IconCheck?: IElementReference;
  IconEnter?: IElementReference;
  IconClose?: IElementReference;

  WrapperProps?: IPropsAny;
  CalendarProps?: IPropsAny;
  CalendarPropsDesktop?: IPropsAny;
  CalendarPropsMobile?: IPropsAny;
  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  AdvancedTextFieldProps?: IPropsAny;
  ButtonProps?: IPropsAny;
  ModalProps?: IPropsAny;
  IconProps?: IPropsAny;
  MobileSurfaceProps?: IPropsAny;
};

const DatePicker: React.FC<IDatePicker> = React.forwardRef((props__, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyDatePicker?.props?.default, ...props__ }), [props__]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const AdvancedTextField = React.useMemo(() => theme?.elements?.AdvancedTextField || AdvancedTextFieldElement, [theme]);

  const Modal = React.useMemo(() => theme?.elements?.Modal || ModalElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Calendar = React.useMemo(() => theme?.elements?.Calendar || CalendarElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const Slide = React.useMemo(() => theme?.elements?.Slide || SlideElement, [theme]);

  const ClickListener = React.useMemo(() => theme?.elements?.ClickListener || ClickListenerElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    version: version_ = 'auto',

    size = 'regular',

    value: value_,
    valueDefault,
    onChange,

    calendar: calendar_,
    calendarDefault,
    onChangeCalendar,

    range,
    now,
    static: static_,
    openMobile = 'select',
    placeholder: placeholder_,
    calendars = props.range ? 2 : 1,
    min,
    max,
    validate,
    name,
    nameFrom,
    nameTo,
    label: label_,
    labelFrom: labelFrom_ = l('Date from'),
    labelTo: labelTo_ = l('Date to'),
    modeModalSubHeadingText = l('Select date'),
    modeModalSubHeadingTextRange = `${l('Date from')}${SEPARATOR}${l('Date to')}`,
    selectModeHeadingText = l('Select date'),
    inputModeHeadingText = l('Enter date'),
    useHelperText: useHelperText_,
    weekStartDay = 'Monday',
    switch: switch__,
    fullScreen,
    today,
    clear = true,
    heading: heading_ = true,
    actions: actions_ = true,
    fullWidth,
    readOnly,
    disabled,

    valid: valid_,

    onClick: onClick_,
    onClose: onClose_,
    onToday: onToday_,
    onClear: onClear_,
    onCancel: onCancel_,
    onOk: onOk_,

    Icon: Icon_ = IconMaterialCalendarToday,
    IconEnter = IconMaterialEdit,
    IconClose = IconMaterialClose,

    WrapperProps,
    CalendarProps,
    CalendarPropsDesktop,
    CalendarPropsMobile,
    IconButtonProps,
    AdvancedTextFieldProps,
    TooltipProps,
    ButtonProps,
    ModalProps,
    IconProps,
    MobileSurfaceProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [switch__, useHelperText_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [switch__, useHelperText_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const label = name !== undefined ? name : label_;

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const useHelperText = valueBreakpoints(useHelperText_, undefined, breakpoints, theme);

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  const [value, setValue] = React.useState<[OnesyDate, OnesyDate]>((): [OnesyDate, OnesyDate] => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new OnesyDate(), new OnesyDate()] : [new OnesyDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<OnesyDate>).filter(Boolean) as any;
  });
  const [calendar, setCalendar] = React.useState((calendarDefault !== undefined ? calendarDefault : calendar_) || new OnesyDate());
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : 'select') || 'select');
  const [error, setError] = React.useState(false);

  const valueToInput = React.useCallback((valueNew: any = value) => {
    let result = '';

    const [from, to] = is('array', valueNew) ? valueNew : [valueNew];

    if (!(from || to)) return '';

    const method = (item: OnesyDate) => `${format(item, 'DD')}/${format(item, 'MM')}/${format(item, 'YYYY')}`;

    result += `${method(from)}`;

    if (range && to) result += `${SEPARATOR}${method(to)}`;

    return result;
  }, [value, range]);

  const [input, setInput] = React.useState(valueToInput());
  const [inputModal, setInputModal] = React.useState(valueToInput());

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  const onUpdateValue = (valueNew_: any) => {
    const valueNew = is('array', valueNew_) ? valueNew_ : [valueNew_];

    const dateNow = new OnesyDate();

    // Update value
    setValue(valueNew as any);

    // Update calendar
    onUpdateCalendar(valueNew[0] || dateNow);

    // Update input
    setInput(valueToInput(valueNew));

    // Update input modal
    setInputModal(valueToInput(valueNew));
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

  // Calendar
  React.useEffect(() => {
    if (calendar_ !== undefined && calendar_ !== calendar) setCalendar(calendar_);
  }, [calendar_]);

  const onUpdate = React.useCallback((valueNew: OnesyDate) => {
    // Inner update
    if (!props.hasOwnProperty('value')) setValue(valueNew as any);

    if (is('function', onChange)) onChange(!range ? valueNew[0] : valueNew);
  }, [onChange, range]);

  const onUpdateCalendar = React.useCallback((valueNew: OnesyDate) => {
    // Inner update
    if (!props.hasOwnProperty('calendar')) setCalendar(valueNew);

    if (is('function', onChangeCalendar)) onChangeCalendar(valueNew);
  }, [onChangeCalendar]);

  // Update only internally, without using onChange
  // since it might be canceled
  // only use onChange on
  // input change, or ok
  const onCalendarChange = React.useCallback((valueNew_: TCalendarMonthValue) => {
    const valueNew = is('array', valueNew_) ? valueNew_ : [valueNew_];

    if (valueNew !== value) {
      (!actions_ ? onUpdate : setValue)(valueNew as any);

      // Update input modal
      setInputModal(valueToInput(valueNew));
    }
  }, [value, actions_]);

  const onCalendarChangeCalendar = React.useCallback((valueNew: TCalendarMonthCalendar) => {
    if (valueNew !== calendar) onUpdateCalendar(valueNew as any);
  }, [calendar]);

  const inputToValue = React.useCallback((valueNew_: string = input) => {
    let valueNew = valueNew_;

    let [from, to] = valueNew.split(SEPARATOR) as any;

    from = textToOnesyDate(from);

    if (to) to = textToOnesyDate(to, false);

    valueNew = [from, to].filter(Boolean) as any;

    return valueNew as unknown as TCalendarMonthValue;
  }, [input]);

  const onOpen = React.useCallback(() => {
    onMode();

    setOpen(!open);
  }, [open, openMobile, version]);

  const onClose = React.useCallback((event: React.MouseEvent<any>) => {
    setOpen(false);

    if (is('function', onClose_)) onClose_(event);
  }, [onClose_]);

  const onReset = React.useCallback(() => {
    let valueNew: any = inputToValue();

    const isValid = valueNew && (valueNew?.[0] as OnesyDate)?.valid;

    if (isValid) {
      // Update value
      onUpdate(valueNew);

      // Update calendar
      onUpdateCalendar(valueNew[0]);

      // Update input modal
      setInputModal(input);
    }
    else {
      const dateNow = new OnesyDate();

      valueNew = [];

      // Update value
      onUpdate(valueNew as any);

      // Update calendar
      onUpdateCalendar(dateNow);

      // Update input
      setInput(valueToInput(valueNew));

      // Update input modal
      setInputModal(valueToInput(valueNew));
    }
  }, [input]);

  const onToday = React.useCallback((event: React.MouseEvent) => {
    const valueNew = [startOf(new OnesyDate(), 'day')];

    if (range) valueNew.push(endOf(new OnesyDate(), 'day'));

    // Update value
    onUpdate(valueNew as any);

    // Update calendar
    onUpdateCalendar(valueNew[0]);

    // Update input
    setInput(valueToInput(valueNew));

    // Update input modal
    setInputModal(valueToInput(valueNew));

    onClose(event);

    if (is('function', onToday_)) onToday_(event);
  }, [input, range, onToday_]);

  const onClear = React.useCallback((event: React.MouseEvent) => {
    const dateNow = new OnesyDate();

    const valueNew = [];

    // Update value
    onUpdate(valueNew as any);

    // Update calendar
    onUpdateCalendar(dateNow);

    // Update input
    setInput(valueToInput(valueNew));

    // Update input modal
    setInputModal(valueToInput(valueNew));

    onClose(event);

    if (is('function', onClear_)) onClear_(event);
  }, [onClear_]);

  const onOk = React.useCallback((event: React.MouseEvent) => {
    // Error
    errorCheck();

    // Update value
    onUpdate(value as any);

    // Update input
    setInput(valueToInput(value));

    // Update input modal
    setInputModal(valueToInput(value));

    onClose(event);

    if (is('function', onOk_)) onOk_(event);
  }, [value, onOk_]);

  const onCancel = React.useCallback((event: React.MouseEvent) => {
    onReset();

    onClose(event);

    if (is('function', onCancel_)) onCancel_(event);
  }, [input, onCancel_]);

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

  const textToOnesyDate = React.useCallback((valueNew: string, start = true) => {
    const [valueDay, valueMonth, valueYear] = (valueNew || '').split('/');

    const onesyDate = new OnesyDate(new Date(`${valueMonth}/${valueDay}/${valueYear}`));

    return start ? startOf(onesyDate, 'day') : endOf(onesyDate, 'day');
  }, []);

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

      // Update calendar
      onUpdateCalendar(valueNew[0]);
    }

    if (!valueNew_) {
      onUpdate([null, null] as any);
    }

    // Update input for free typing
    setInput(valueNew_);
  }, []);

  const onInputChangeModal = React.useCallback((valueNew_: any) => {
    const valueNew = inputToValue(valueNew_);

    const validValues = (valueNew as [OnesyDate, OnesyDate]).every(item => item.valid);

    // Only update values if input is valid
    // format used to make the value
    if (validValues) {
      // Error
      errorCheck(valueNew);

      // Update value
      onUpdate(valueNew as any);

      // Update calendar
      onUpdateCalendar(valueNew[0]);
    }

    // Update input for free typing
    setInputModal(valueNew_);
  }, []);

  const onMode = React.useCallback((mode_: 'input' | 'select' = openMobile) => {
    setMode(() => mode_);
  }, []);

  const mask = [
    { pattern: '[0-3]' },

    (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1]).*/.test(valueInput),

    '/',

    { pattern: '[0-1]' },

    (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2])/.test(valueInput),

    '/',

    { pattern: '[1-2]' },

    { pattern: '[0-9]' },

    { pattern: '[0-9]' },

    { pattern: '[0-9]' }
  ];

  let placeholder = `DD/MM/YYYY`;

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

  const actions = (
    <Line
      direction='row'

      align='center'

      justify='space-between'

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'onesy-DatePicker-actions'
        ],

        classes.actions
      ])}
    >
      {(today || clear) && (
        <Line
          gap={0}

          direction='row'

          align='center'
        >
          {today && (
            <Button
              onClick={onToday}

              {...buttonProps}
            >
              {l('Today')}
            </Button>
          )}

          {clear && (
            <Button
              onClick={onClear}

              {...buttonProps}
            >
              {l('Clear')}
            </Button>
          )}
        </Line>
      )}

      <Line
        gap={0}

        direction='row'

        align='center'
      >
        <Button
          onClick={onCancel}

          {...buttonProps}
        >
          {l('Cancel')}
        </Button>

        <Button
          onClick={onOk}

          {...buttonProps}
        >
          {l('Ok')}
        </Button>
      </Line>
    </Line>
  );

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        tonal={tonal}

        color={color}

        version='text'

        onClick={onOpen}

        aria-label={`${l('Choose date')}${range ? ' range' : ''}`}

        disabled={disabled || readOnly}

        {...iconButtonProps}
      >
        <Icon_
          {...IconProps}
        />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    if (!(readOnly || disabled)) moreProps.onClick = onOpen;
  }

  let textHeading = `${format(value[0], 'd')}, ${format(value[0], 'MMM')} ${format(value[0], 'DD')}`;

  if (range) {
    textHeading = `${format(value[0], 'MMM')} ${format(value[0], 'DD')}${SEPARATOR}${format(value[1], 'MMM')} ${format(value[1], 'DD')}`;
  }

  const dayNames = [l('Mo'), l('Tu'), l('We'), l('Th'), l('Fr'), l('Sa'), l('Su')];

  const mobile = (
    <Surface
      color='default'

      tonal={tonal}

      gap={0}

      direction='column'

      Component={Line}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'onesy-DatePicker-mobile'
        ],

        classes.mobile,
        fullScreen && classes.mobile_fullScreen
      ])}

      {...MobileSurfaceProps}
    >
      {/* Header */}
      <Line
        gap={0}

        direction='column'

        className={classNames([
          staticClassName('DatePicker', theme) && [
            'onesy-DatePicker-header'
          ],

          classes.header,
          fullScreen && classes.header_fullScreen
        ])}
      >
        {/* Upper actions */}
        {actions_ && fullScreen && (
          <Line
            gap={0}

            direction='row'

            align='center'

            justify='space-between'

            style={{
              width: '100%',
              marginBottom: 8,
              padding: `0px ${theme.methods.space.value(1, 'px')} 0px ${theme.methods.space.value(1.5, 'px')}`
            }}
          >
            <IconButton
              color='inherit'

              version='text'

              onClick={onClose}

              aria-label={l('Close')}

              {...iconButtonProps}
            >
              <IconClose
                {...IconProps}
              />
            </IconButton>

            <Button
              onClick={onOk}

              {...buttonProps}
            >
              {l('Save')}
            </Button>
          </Line>
        )}

        {/* Heading */}
        {heading_ && (
          <Type
            version='l2'

            className={classNames([
              staticClassName('DatePicker', theme) && [
                'onesy-DatePicker-subheading'
              ],

              classes.subheading,
              fullScreen && classes.subheading_fullScreen
            ])}
          >
            {!range ? modeModalSubHeadingText : modeModalSubHeadingTextRange}
          </Type>
        )}

        {/* Select */}
        {mode === 'select' && (
          <Line
            direction='row'

            align='center'

            justify='space-between'

            className={classNames([
              staticClassName('DatePicker', theme) && [
                'onesy-DatePicker-heading'
              ],

              classes.heading,
              fullScreen && classes.heading_fullScreen
            ])}
          >
            <Type
              version='h1'
            >
              {textHeading}
            </Type>

            {switch_ && (
              <Tooltip
                name={l('Enter date')}
              >
                <IconButton
                  tonal={tonal}

                  color='inherit'

                  onClick={() => onMode('input')}

                  aria-label={l('Enter date')}

                  {...iconButtonProps}
                >
                  <IconEnter
                    {...IconProps}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Line>
        )}

        {/* Input */}
        {mode === 'input' && (
          <Line
            direction='row'

            align='flex-start'

            justify='space-between'

            className={classNames([
              staticClassName('DatePicker', theme) && [
                'onesy-DatePicker-heading'
              ],

              classes.heading,
              fullScreen && classes.heading_fullScreen
            ])}
          >
            <Type
              version='h1'
            >
              {inputModeHeadingText}
            </Type>

            {switch_ && (
              <Tooltip
                name={l('Select date')}
              >
                <IconButton
                  tonal={tonal}

                  color='inherit'

                  onClick={() => onMode('select')}

                  aria-label={l('Select date')}

                  {...iconButtonProps}
                >
                  <Icon_
                    {...IconProps}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Line>
        )}
      </Line>

      {/* Day names */}
      {mode === 'select' && fullScreen && (
        <Line
          gap={0}

          direction='row'

          align='center'

          justify='space-between'

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'onesy-DatePicker-day-names'
            ],

            classes.dayNames
          ])}
        >
          {dayNames.map((day: string, index: number) => (
            <Line
              key={index}

              version='b3'

              direction='row'

              align='center'

              justify='center'

              Component={Type}

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'onesy-DatePicker-day-name'
                ],

                classes.dayName
              ])}
            >
              {day}
            </Line>
          ))}
        </Line>
      )}

      {/* Divider */}
      <Divider
        tonal={false}

        className={classNames([
          staticClassName('DatePicker', theme) && [
            'onesy-DatePicker-divider'
          ],

          classes.divider
        ])}
      />

      {/* Calendar */}
      {mode === 'select' && (
        <Calendar
          version={!fullScreen ? 'regular' : 'year'}

          tonal={tonal}

          color={color}

          value={value}

          menu='month'

          menu_month_previous_unit={fullScreen ? 'year' : 'month'}

          menu_month_next_unit={fullScreen ? 'year' : 'month'}

          calendar={calendar}

          onChange={onCalendarChange}

          onChangeCalendar={onCalendarChangeCalendar}

          now={now}

          size={size}

          range={range}

          calendars={1}

          valid={valid}

          min={min}

          max={max}

          validate={validate}

          {...CalendarProps}

          {...CalendarPropsMobile}

          CalendarMonthProps={{
            outside: false,
            labels: !fullScreen,

            ...CalendarProps?.CalendarMonthProps,
            ...CalendarPropsMobile?.CalendarMonthProps
          }}

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'onesy-DatePicker-calendar',
              'onesy-DatePicker-version-mobile'
            ],

            CalendarProps?.className,
            CalendarPropsMobile?.className,
            classes.calendar,
            classes.calendar_mobile
          ])}
        />
      )}

      {/* Input */}
      {mode === 'input' && (
        <Line
          gap={1.5}

          direction='row'

          align='flex-start'

          className={classNames([
            classes.modal_input
          ])}
        >
          <AdvancedTextField
            tonal={tonal}

            color={color}

            version='outlined'

            size={size}

            name={label}

            mask={mask}

            placeholder={placeholder}

            value={inputModal}

            onChange={onInputChangeModal}

            helperText={useHelperText ? placeholder : undefined}

            error={error}

            readOnly={readOnly}

            disabled={disabled}

            {...AdvancedTextFieldProps}

            className={classNames([
              AdvancedTextFieldProps?.className,
              classes.input_mobile
            ])}
          />
        </Line>
      )}

      {fullScreen && (
        <Divider
          tonal={false}

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'onesy-DatePicker-divider'
            ],

            classes.divider
          ])}
        />
      )}

      {actions_ && React.cloneElement(actions, {
        style: {
          paddingTop: theme.methods.space.value(1, 'px')
        }
      })}
    </Surface>
  );

  const desktop = (
    <Calendar
      value={value}

      calendar={calendar}

      onChange={onCalendarChange}

      onChangeCalendar={onCalendarChangeCalendar}

      now={now}

      size={size}

      range={range}

      calendars={calendars}

      valid={valid}

      min={min}

      max={max}

      validate={validate}

      belowCalendars={actions_ ? actions : undefined}

      {...CalendarProps}

      {...CalendarPropsDesktop}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'onesy-DatePicker-calendar',
          'onesy-DatePicker-version-desktop'
        ],

        CalendarProps?.className,
        CalendarPropsDesktop?.className,
        classes.calendar,
        classes.calendar_desktop
      ])}
    />
  );

  if (static_) {
    if (version === 'mobile') return mobile;

    if (version === 'desktop') return desktop;
  }

  return (
    <Line
      gap={0}

      direction='column'

      fullWidth={fullWidth}

      {...WrapperProps}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'onesy-DatePicker-root',
          `onesy-DatePicker-version-${version}`,
          `onesy-DatePicker-size-${size}`,
          WrapperProps?.className,
          range && `onesy-DatePicker-range`,
          readOnly && `onesy-DatePicker-read-only`,
          disabled && `onesy-DatePicker-disabled`,
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

        name={label}

        mask={mask}

        placeholder={placeholder}

        value={input}

        onChange={onInputChange}

        helperText={useHelperText ? placeholder : undefined}

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

          fullScreen={fullScreen}

          onClose={onClose}

          {...ModalProps}
        >
          {mobile}
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

          name={(
            <ClickListener
              onClickOutside={onCancel as any}

              includeParentQueries={['.onesy-Calendar-list']}
            >
              {desktop}
            </ClickListener>
          )}

          {...TooltipProps}
        />
      )}
    </Line>
  );
});

DatePicker.displayName = 'onesy-DatePicker';

export default DatePicker;
