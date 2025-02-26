import React from 'react';

import { is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialStop from '@onesy/icons-material-rounded-react/IconMaterialStopW100';
import IconMaterialSpeechToText from '@onesy/icons-material-rounded-react/IconMaterialSpeechToTextW100';

import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny, ISize } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  iconButton: {
    '&.onesy-IconButton-root': {
      transition: theme.methods.transitions.make('transform'),

      '&:active': {
        transform: 'scale(0.94)'
      }
    }
  }
}), { name: 'onesy-SpeechToText' });

export interface ISpeechToText extends ILine {
  size?: ISize;

  SpeechRecognition?: any;

  continuous?: boolean;
  grammars?: any;
  interimResults?: boolean;
  language?: string;
  maxAlternatives?: number;
  join?: string;

  loading?: any;
  disabled?: any;

  Icon?: IElementReference;
  IconStop?: IElementReference;

  onListen?: (event: React.MouseEvent<any>) => any;
  onListenStop?: (event: React.MouseEvent<any>) => any;
  onChange?: (value: string) => any;
  onData?: (value: string) => any;
  onStart?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onError?: (error: Error) => any;

  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const SpeechToText: React.FC<ISpeechToText> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySpeechToText?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    size = 'regular',

    SpeechRecognition: SpeechRecognition_,

    continuous = true,
    interimResults = true,
    grammars,
    language = 'en-US',
    maxAlternatives = 1,
    join = '. ',

    loading,
    disabled,

    Icon: Icon_ = IconMaterialSpeechToText,
    IconStop = IconMaterialStop,

    onChange,
    onData: onData_,
    onListen: onListen_,
    onListenStop: onListenStop_,
    onStart: onStart_,
    onStop: onStop_,
    onError: onError_,

    TooltipProps,
    IconButtonProps,
    IconProps,

    className,

    ...other
  } = props;

  const [status, setStatus] = React.useState('initial');

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    recognition: React.useRef<any>(undefined),
    value: React.useRef(''),
    result: React.useRef<string[]>([]),
    status: React.useRef(status)
  };

  refs.status.current = status;

  const supported = isEnvironment('browser') && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  const onData = React.useCallback((event: any) => {
    const value = Array.from(event.results || []).map((item: any) => item[0]?.transcript || '').join('');

    refs.value.current = value;

    if (!value) {
      refs.result.current.push(value);
    }

    if (is('function', onData_)) onData_!(value);
  }, [onData_]);

  const onStart = React.useCallback(async (event: React.MouseEvent<any>) => {
    setStatus('started');

    if (is('function', onStart_)) onStart_!(event);
  }, [onStart_]);

  const onEnd = React.useCallback((event: any) => {
    setStatus('initial');

    // result
    refs.result.current.push(refs.value.current);

    const response = refs.result.current.join(join);

    if (is('function', onChange)) onChange!(response);
  }, [onChange, join]);

  const onError = React.useCallback((event: any) => {
    if (is('function', onError_)) onError_!(event);
  }, [onError_]);

  React.useEffect(() => {
    // previous clean up
    if (refs.recognition.current) {
      refs.recognition.current.abort();
    }

    // make a new instance
    if (supported) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const SpeechRecognitionClass = SpeechRecognition_ || (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognitionClass) {
        refs.recognition.current = new SpeechRecognitionClass();

        // options
        if (continuous !== undefined) refs.recognition.current.continuous = continuous;

        if (interimResults !== undefined) refs.recognition.current.interimResults = interimResults;

        if (grammars !== undefined) refs.recognition.current.grammars = grammars;

        if (language !== undefined) refs.recognition.current.lang = language;

        if (maxAlternatives !== undefined) refs.recognition.current.maxAlternatives = maxAlternatives;

        // events
        // result
        refs.recognition.current.addEventListener('start', onStart);
        refs.recognition.current.addEventListener('end', onEnd);
        refs.recognition.current.addEventListener('result', onData);
        refs.recognition.current.addEventListener('error', onError);
      }
    }

    return () => {
      // Clean up
      if (refs.recognition.current) {
        refs.recognition.current.removeEventListener('start', onStart);
        refs.recognition.current.removeEventListener('end', onEnd);
        refs.recognition.current.removeEventListener('result', onData);
        refs.recognition.current.removeEventListener('error', onError);
      }
    };
  }, [SpeechRecognition_, supported, continuous, interimResults, grammars, language, maxAlternatives]);

  const onCleanUp = React.useCallback(() => {
    refs.result.current = [];
    refs.value.current = '';
  }, []);

  const onListen = React.useCallback(async (event: React.MouseEvent<any>) => {
    if (refs.recognition.current) {
      // Clean up
      onCleanUp();

      refs.recognition.current.start();

      if (is('function', onListen_)) onListen_!(event);
    }
  }, [onListen_]);

  const onListenStop = React.useCallback(async (event: React.MouseEvent<any>) => {
    if (refs.recognition.current) {
      refs.recognition.current.stop();

      if (is('function', onListenStop_)) onListenStop_!(event);
    }
  }, [onListenStop_]);

  const iconProps = {
    size,

    ...IconProps
  };

  const iconButtonProps = {
    size,
    loading,
    disabled,

    ...IconButtonProps
  };

  if (!supported) return null;

  let IconToUse = Icon_;
  let name = 'Speech to text';

  if (status === 'started') {
    IconToUse = IconStop;
    name = 'Stop';
  }

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={1}

      direction='row'

      align='center'

      className={classNames([
        staticClassName('SpeechToText', theme) && [
          `onesy-SpeechToText-root`,
          `onesy-SpeechToText-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Tooltip
        name={name}

        {...TooltipProps}
      >
        <IconButton
          onClick={status === 'started' ? onListenStop : onListen}

          {...iconButtonProps}

          selected={status === 'started'}

          disabled={disabled !== undefined ? disabled : !supported}

          className={classNames([
            staticClassName('SpeechToText', theme) && [
              `onesy-SpeechToText-iconButton`
            ],

            classes.iconButton
          ])}
        >
          <IconToUse
            {...iconProps}
          />
        </IconButton>
      </Tooltip>
    </Line>
  );
});

SpeechToText.displayName = 'onesy-SpeechToText';

export default SpeechToText;
