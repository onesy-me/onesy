import React from 'react';

import { is, getID, debounce, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';
import OnesySubscription from '@onesy/subscription/OnesySubscription';

import { staticClassName, Transition, Transitions, TTransitionStatus, useMediaQuery } from '..';
import { IBaseElement } from '../types';

const other = {
  pointerEvents: 'none',
  borderRadius: 'inherit',
  position: 'absolute',
  inset: '0',
  width: '100%',
  height: '100%'
};

const useStyle = styleMethod(theme => ({
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.77)'
    },
    '50%': {
      transform: 'scale(0.7)'
    },
    '100%': {
      transform: 'scale(0.77)'
    }
  },

  root: {
    ...other,
    overflow: 'hidden',
    // Bug fix for overflow in mobile Safari
    zIndex: '0'
  },

  background: {
    ...other,
    opacity: theme.palette.visual_contrast.default.opacity.hover,
    transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 'rg', timing_function: 'standard' })
  },

  hovered: {
    background: 'currentColor'
  },

  selected: {
    opacity: theme.palette.visual_contrast.default.opacity.selected,
    background: 'currentColor'
  },

  dragged: {
    opacity: theme.palette.visual_contrast.default.opacity.drag,
    background: 'currentColor'
  },

  border: {
    ...other,
    opacity: '0',
    boxShadow: 'inset 0 0 0 2px currentColor'
  },

  wave: {
    ...other,
    inset: 'unset',
    opacity: '0.1',
    transform: 'scale(0)',
    backgroundColor: 'currentColor',
    transition: theme.methods.transitions.make(['opacity', 'transform'], { duration: 'complex', timing_function: 'standard' }),
    borderRadius: theme.methods.shape.radius.value(4e4, 'px'),

    '&.entering': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(1)',
    },

    '&.entered': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(1)',
    },

    '&.exit': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(1)',
    },

    '&.exiting': {
      opacity: '0',
      transform: 'scale(1)',
    },

    '&.exited': {
      opacity: '0',
      transform: 'scale(1)',
    }
  },

  pulse: {
    '&.entering': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(0.77)',
    },

    '&.entered': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(0.77)',
      animation: `$pulse 2400ms ${theme.transitions.timing_function.emphasized} 240ms infinite`,
    },

    '&.exit': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(0.7)'
    },

    '&.exiting': {
      opacity: '0',
      transform: 'scale(0.7)'
    },

    '&.exited': {
      opacity: '0',
      transform: 'scale(0.7)'
    }
  },

  waveSimple: {
    ...other,
    opacity: '0.1',
    backgroundColor: 'currentcolor',
    transition: theme.methods.transitions.make(['opacity'], { duration: 'complex', timing_function: 'standard' }),

    '&.entering': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
    },

    '&.entered': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
    },

    '&.exit': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary
    },

    '&.exiting': {
      opacity: '0',
    },

    '&.exited': {
      opacity: '0',
    }
  }
}), { name: 'onesy-Interaction' });

export type TMethodsVersion = 'add' | 'pulse' | 'remove';

export type IInteraction = IBaseElement & {
  wave?: boolean;
  background?: boolean;
  border?: boolean;
  pulse?: boolean;

  origin?: 'center';
  preselected?: boolean;
  selected?: boolean;
  dragged?: boolean;
  pulseOnMouseDown?: boolean;
  wave_version?: 'simple';
  subscription?: OnesySubscription;
  clear?: any;
};

const Interaction: React.FC<IInteraction> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyInteraction?.props?.default, ...props_ };

  const {
    ref,

    wave = true,
    background = true,
    border: hasBorder,
    pulse,

    origin: originProps,
    preselected,
    selected,
    dragged,
    wave_version,
    subscription,
    clear,
    disabled,

    className
  } = props;

  const { classes } = useStyle();

  const [interactions, setInteractions] = React.useState([]);
  const [border, setBorder] = React.useState(false);
  const [waves, setWaves] = React.useState([]);

  const refs = {
    root: React.useRef<HTMLElement>(undefined),
    mouse: React.useRef({ down: 0, up: 0, press: 0 }),
    wave: React.useRef<any>(undefined),
    pulse: React.useRef<any>(undefined),
    touch: React.useRef<any>(undefined),
    interactions: React.useRef<any>(undefined),
    border: React.useRef(border),
    props: React.useRef<any>(undefined),
    init: React.useRef(false),
    waves: React.useRef(waves),
    origin: React.useRef(originProps),
    hasBorder: React.useRef(hasBorder)
  };

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  refs.props.current = props;

  refs.wave.current = wave;

  refs.pulse.current = pulse;

  refs.touch.current = touch;

  refs.interactions.current = interactions;

  refs.border.current = border;

  refs.waves.current = waves;

  refs.origin.current = originProps;

  refs.hasBorder.current = hasBorder;

  React.useEffect(() => {
    const parent = refs.root.current.parentNode;

    const onMouseIn = () => {
      if (refs.touch.current) return;

      add('mouse-in');

      removeWaves();
    };

    const onMouseOut = () => {
      if (refs.touch.current) return;

      refs.mouse.current.up = new Date().getTime();
      refs.mouse.current.press = refs.mouse.current.down ? Math.round(refs.mouse.current.up - refs.mouse.current.down) : 0;

      remove('mouse-in');

      removeWaves();
    };

    const onMouseDown = (event: MouseEvent) => {
      refs.mouse.current.down = new Date().getTime();
      refs.mouse.current.up = 0;
      refs.mouse.current.press = 0;

      add('mouse-down');

      addWave(event);
    };

    const updateBorder = debounce(() => {
      if (refs.border.current) setBorder(false);
    }, theme.transitions.duration.sm);

    const onMouseUp = () => {
      if (!(has('mouse-down') || refs.waves.current.length)) return;

      refs.mouse.current.up = new Date().getTime();
      refs.mouse.current.press = refs.mouse.current.down ? Math.round(refs.mouse.current.up - refs.mouse.current.down) : 0;

      if (refs.hasBorder.current && has('mouse-down')) {
        setBorder(true);

        updateBorder();
      }

      remove('mouse-down');

      removeWaves();
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    if (parent) {
      if (touch) {
        parent.addEventListener('touchstart', onMouseDown, { passive: true });
        parent.addEventListener('touchend', onMouseUp, { passive: true });
        rootDocument.addEventListener('touchend', onMouseUp, { passive: true });
        parent.addEventListener('touchstart', onMouseIn, { passive: true });
        parent.addEventListener('touchend', onMouseOut, { passive: true });
      } else {
        parent.addEventListener('mousedown', onMouseDown);
        parent.addEventListener('mouseup', onMouseUp);
        rootDocument.addEventListener('mouseup', onMouseUp);
        parent.addEventListener('mouseenter', onMouseIn);
        parent.addEventListener('mouseleave', onMouseOut);
      }
    }

    refs.init.current = true;

    return () => {
      if (parent) {
        parent.removeEventListener('touchstart', onMouseDown);
        parent.removeEventListener('touchend', onMouseUp);
        rootDocument.removeEventListener('touchend', onMouseUp);
        parent.removeEventListener('touchstart', onMouseIn);
        parent.removeEventListener('touchend', onMouseOut);

        parent.removeEventListener('mousedown', onMouseDown);
        parent.removeEventListener('mouseup', onMouseUp);
        rootDocument.removeEventListener('mouseup', onMouseUp);
        parent.removeEventListener('mouseenter', onMouseIn);
        parent.removeEventListener('mouseleave', onMouseOut);
      }
    };
  }, [touch]);

  React.useEffect(() => {
    if (refs.init.current) {
      if (refs.interactions.current.length) setInteractions([]);

      removeWaves();
    }
  }, [clear]);

  React.useEffect(() => {
    if (pulse) {
      if (!refs.props.current.pulseOnMouseDown && has('mouse-down')) return;

      addWavePulse();
    }
    else removeWaves();
  }, [pulse]);

  const methods = (version: TMethodsVersion) => {
    if (version === 'add') addWave(undefined, { origin: 'center' });
    else if (version === 'pulse') addWavePulse();
    else if (version === 'remove') removeWaves();
  };

  React.useEffect(() => {
    let subscribed: any;

    if (subscription?.subscribe) subscribed = subscription.subscribe(methods);

    // Clean up
    return () => {
      if (subscribed?.unsubscribe) subscribed.unsubscribe();
    };
  }, [subscription]);

  React.useEffect(() => {
    if (disabled && refs.interactions.current.length) setInteractions([]);
  }, [disabled]);

  const addWave = (event?: MouseEvent | TouchEvent, overrides: IInteraction = {}) => {
    const origin = overrides.origin !== undefined ? overrides.origin : refs.origin.current;

    if (refs.wave.current && !refs.props.current.disabled) {
      let top = 0;
      let left = 0;
      let width: any = '100%';

      if (wave_version !== 'simple') {
        const rect = (event?.currentTarget as any)?.getBoundingClientRect();
        const root = ((event?.currentTarget || refs.root.current.parentNode) as any)?.getBoundingClientRect() as DOMRect;

        // Mouse or touch event
        const valuesEvent = (!(event as TouchEvent)?.touches ? event : (event as TouchEvent).touches[0]) as MouseEvent;
        const values: {
          x: number;
          y: number;
          offsetX: number;
          offsetY: number;
        } = {
          x: valuesEvent.x !== undefined ? valuesEvent.x : valuesEvent.clientX,
          y: valuesEvent.y !== undefined ? valuesEvent.y : valuesEvent.clientY
        } as any;

        values.offsetX = valuesEvent.offsetX !== undefined ? valuesEvent.offsetX : values.x - rect.x;

        values.offsetY = valuesEvent.offsetY !== undefined ? valuesEvent.offsetY : values.y - rect.y;

        const w = root.width;
        const h = root.height;
        const x = (origin === 'center' || !event) ? w / 2 : rect ? values.x - rect.left : values.offsetX;
        const y = (origin === 'center' || !event) ? h / 2 : rect ? values.y - rect.top : values.offsetY;

        width = Math.round(
          Math.sqrt(
            // Largest sub rectangle in value
            Math.max(
              x ** 2 + y ** 2,
              Math.abs(w - x) ** 2 + y ** 2,
              x ** 2 + Math.abs(h - y) ** 2,
              Math.abs(w - x) ** 2 + Math.abs(h - y) ** 2
            )
          )
          * 2
        );

        top = y - width / 2;
        left = x - width / 2;
      }

      setWaves(items => [
        ...items,
        (
          <Transition
            key={getID()}

            duration='complex'

            enterOnAdd

            className
          >
            <span
              className={wave_version === 'simple' ? classes.waveSimple : classes.wave}

              style={{
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${width}px`
              }}
            />
          </Transition>
        )
      ]
      );
    }
  };

  const addWavePulse = () => {
    if (refs.pulse.current && !refs.props.current.disabled) {
      // Remove previous wave
      // if there is one
      if (refs.waves.current.length) removeWaves();

      const root = (refs.root.current.parentNode as any).getBoundingClientRect() as DOMRect;
      const w = root.width;
      const h = root.height;
      const x = w / 2;
      const y = h / 2;

      const width = Math.round(
        Math.sqrt(
          x ** 2 + y ** 2
        )
        * 2
      );

      const top = y - width / 2;
      const left = x - width / 2;

      setWaves(items => [
        ...items,
        (
          <Transition
            key={getID()}

            duration='complex'

            enterOnAdd

            className
          >
            <span
              className={classNames([classes.wave, classes.pulse])}

              style={{
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${width}px`
              }}
            />
          </Transition>
        )
      ]);
    }
  };

  const removeWaves = () => {
    if (refs.waves.current.length) setWaves([]);
  };

  const add = (value: string) => {
    if (!refs.props.current.disabled && !has(value)) setInteractions(items => [...items, value]);
  };

  const has = (value: string) => refs.interactions.current.includes(value);

  const remove = (value: string) => {
    if (has(value)) setInteractions(items => [...items].filter(item => item !== value));
  };

  return (
    <span
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('Interaction', theme) && [
          'onesy-Interaction-root',
          disabled && `onesy-Interaction-disabled`
        ],

        className,
        classes.root
      ])}
    >
      {/* Background */}
      {background && (
        <span
          className={classNames([
            staticClassName('Interaction', theme) && [
              'onesy-Interaction-background'
            ],

            classes.background,
            (preselected || has('mouse-in')) && classes.hovered,
            selected && classes.selected,
            dragged && classes.dragged
          ])}
        />
      )}

      {/* Waves */}
      <Transitions
        TransitionProps={{
          noAbruption: true,

          duration: {
            enter: 'complex',
            exit: refs.mouse.current.press < 500 ? 350 : 500
          },

          style: {
            transitionDuration: refs.mouse.current.press < 500 ? 340 : 500
          }
        }}
      >
        {waves}
      </Transitions>

      {/* Border */}
      {hasBorder && (
        <Transition in={border}>
          {(status: TTransitionStatus) => (
            <span
              className={classNames([
                staticClassName('Interaction', theme) && [
                  'onesy-Interaction-border'
                ],

                classes.border
              ])}

              style={{
                opacity: status?.indexOf('enter') > -1 ? theme.palette.visual_contrast.default.opacity.quaternary : 0,

                transition: status?.indexOf('exit') > -1 ? theme.methods.transitions.make('opacity', { duration: 'complex', timing_function: 'standard' }) : undefined
              }}
            />
          )}
        </Transition>
      )}
    </span>
  );
};

Interaction.displayName = 'onesy-Interaction';

export default Interaction;
