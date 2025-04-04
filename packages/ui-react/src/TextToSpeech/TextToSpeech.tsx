import React from 'react';

import { is, isEnvironment, wait } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialPause from '@onesy/icons-material-rounded-react/IconMaterialPauseW100';
import IconMaterialTextToSpeech from '@onesy/icons-material-rounded-react/IconMaterialTextToSpeechW100';

import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

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
}), { name: 'onesy-TextToSpeech' });

export type ITextToSpeech = ILine & {
  read?: string;

  speechSynthesisUtterance?: any;

  language?: string;
  pitch?: number;
  rate?: number;
  text?: string;
  voice?: any;
  volume?: number;

  loading?: any;

  Icon?: IElementReference;
  IconPause?: IElementReference;

  onStart?: (event?: SpeechSynthesisEvent) => any;
  onPause?: (event?: SpeechSynthesisEvent) => any;
  onResume?: (event?: SpeechSynthesisEvent) => any;
  onEnd?: (event?: SpeechSynthesisEvent) => any;
  onError?: (event?: SpeechSynthesisEvent) => any;

  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
};

const TextToSpeech: React.FC<ITextToSpeech> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTextToSpeech?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    size = 'regular',

    read,

    speechSynthesisUtterance,

    language,
    pitch,
    rate,
    text,
    voice,
    volume,

    loading,
    disabled,

    Icon: Icon_ = IconMaterialTextToSpeech,
    IconPause = IconMaterialPause,

    onStart: onStart_,
    onPause: onPause_,
    onResume: onResume_,
    onEnd: onEnd_,
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
    status: React.useRef(status)
  };

  refs.status.current = status;

  const supported = isEnvironment('browser') && ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window);

  const onPause = React.useCallback(async (event?: SpeechSynthesisEvent) => {
    setStatus('paused');

    if (is('function', onPause_)) onPause_!(event);
  }, [onPause_]);

  const onResume = React.useCallback(async (event?: SpeechSynthesisEvent) => {
    setStatus('resumed');

    if (is('function', onResume_)) onResume_!(event);
  }, [onResume_]);

  const onEnd = React.useCallback((event?: SpeechSynthesisEvent) => {
    setStatus('initial');

    if (is('function', onEnd_)) onEnd_!(event);
  }, [onEnd_]);

  const onError = React.useCallback((event?: SpeechSynthesisEvent) => {
    setStatus('initial');

    if (is('function', onError_)) onError_!(event);
  }, [onError_]);

  React.useEffect(() => {
    // Clean up previous utterance
    // if there was any
    if (supported) {
      window.speechSynthesis.cancel();

      setStatus('initial');
    }
  }, [read, speechSynthesisUtterance, supported, language, pitch, rate, text, voice, volume]);

  const onStart = React.useCallback(async (event?: SpeechSynthesisEvent) => {
    if (supported && is('string', read)) {
      setStatus('started');

      window.speechSynthesis.cancel();

      await wait(140);

      const utterance = speechSynthesisUtterance || new SpeechSynthesisUtterance(read);

      // properties
      if (language !== undefined) utterance.lang = language;

      if (pitch !== undefined) utterance.pitch = pitch;

      if (rate !== undefined) utterance.rate = rate;

      if (text !== undefined) utterance.text = text;

      if (voice !== undefined) utterance.voice = voice;

      if (volume !== undefined) utterance.volume = volume;

      // events
      utterance.addEventListener('pause', onPause);

      utterance.addEventListener('resume', onResume);

      utterance.addEventListener('end', onEnd);

      utterance.addEventListener('error', onError);

      window.speechSynthesis.speak(utterance);

      if (is('function', onStart_)) onStart_!(event);
    }
  }, [read, speechSynthesisUtterance, supported, onStart_, onPause, onResume, onEnd, language, pitch, rate, text, voice, volume]);

  const onClick = React.useCallback(async () => {
    const status_ = refs.status.current;

    if (['started', 'resumed'].includes(status_)) window.speechSynthesis.pause();
    else if (status_ === 'paused') window.speechSynthesis.resume();
    else if (status_ === 'initial') onStart();
  }, [onStart]);

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
  let name = l('Text to speech');

  if (['started', 'resumed'].includes(status)) {
    IconToUse = IconPause;
    name = l('Pause');
  }

  if (status === 'paused') name = l('Resume');

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
        staticClassName('TextToSpeech', theme) && [
          `onesy-TextToSpeech-root`,
          `onesy-TextToSpeech-size-${size}`
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
          onClick={onClick}

          {...iconButtonProps}

          selected={status === 'started'}

          disabled={disabled !== undefined ? disabled : !supported}

          className={classNames([
            staticClassName('TextToSpeech', theme) && [
              `onesy-TextToSpeech-iconButton`
            ],

            classes.iconButton
          ])}
        >
          <IconToUse {...iconProps} />
        </IconButton>
      </Tooltip>
    </Line>
  );
});

TextToSpeech.displayName = 'onesy-TextToSpeech';

export default TextToSpeech;
