import React from 'react';

import { is, wait, random, clamp } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import FadeElement from '../Fade';
import LinearProgressElement from '../LinearProgress';
import MainProgressMaterialContext from './Context';
import { ILinearProress } from '../LinearProgress/LinearProgress';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

export type IMainProgressMaterialStartArgument = {
  tonal?: boolean;
  color?: string;
};

export type IMainProgressMaterialValue = {
  start: (value?: IMainProgressMaterialStartArgument) => void;
  increment: () => void;
  update: (value: number) => void;
  done: () => void;
};

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.tooltip - 14,

    '&.onesy-LinearProgress-root': {
      height: '2px'
    },

    '& .onesy-LinearProgress-buffer': {
      background: 'transparent'
    }
  },

  fixed: {
    insetInline: '0',

    '&.onesy-LinearProgress-root': {
      position: 'fixed'
    }
  },

  position_top: {
    top: '0'
  },

  position_bottom: {
    bottom: '0'
  }
}), { name: 'onesy-MainProgressMaterial' });

export type IMainProgressMaterial = ILinearProress & {
  min?: number;
  max?: number;

  firstIncrement?: boolean;

  incrementMin?: number;
  incrementMax?: number;

  stepMin?: number;
  stepMax?: number;
  stepInterval?: number;

  onStart?: () => any;
  onIncrement?: (value: number) => any;
  onUpdate?: (value: number) => any;
  onDone?: () => any;

  fixed?: boolean;
  position?: 'top' | 'bottom';

  TransitionComponent?: IElementReference;

  TransitionComponentProps?: IPropsAny;
};

const MainProgressMaterial: React.FC<IMainProgressMaterial> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMainProgressMaterial?.props?.default, ...props_ };

  const Fade = theme?.elements?.Fade || FadeElement;

  const LinearProgress = theme?.elements?.LinearProgress || LinearProgressElement;

  const {
    min = 0,
    max = 99,

    firstIncrement = true,

    incrementMin = 4,
    incrementMax = 14,

    stepMin = 1,
    stepMax = 4,
    stepInterval = 700,

    onStart,
    onIncrement,
    onUpdate,
    onDone,

    fixed = true,
    position = 'top',

    TransitionComponent = Fade,

    TransitionComponentProps = {},

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [inProp, setInProp] = React.useState(false);
  const [value, setValue] = React.useState(min);

  const refs = {
    value_: React.useRef<IMainProgressMaterialValue>({} as any),
    value: React.useRef<number>(null),
    min: React.useRef<number>(null),
    max: React.useRef<number>(null),
    firstIncrement: React.useRef<boolean>(null),
    incrementMin: React.useRef<number>(null),
    incrementMax: React.useRef<number>(null),
    stepInterval: React.useRef<number>(null),
    stepMin: React.useRef<number>(null),
    stepMax: React.useRef<number>(null),
    TransitionComponentProps: React.useRef<any>(null),
    linearProgress: React.useRef<any>(null),
    interval: React.useRef<any>(null),
    props: React.useRef<any>(null)
  };

  refs.value.current = value;

  refs.props.current = props;

  refs.min.current = min;

  refs.max.current = max;

  refs.firstIncrement.current = firstIncrement;

  refs.incrementMin.current = incrementMin;

  refs.incrementMax.current = incrementMax;

  refs.stepInterval.current = stepInterval;

  refs.stepMin.current = stepMin;

  refs.stepMax.current = stepMax;

  refs.TransitionComponentProps.current = TransitionComponentProps;

  const clear = () => {
    if (refs.interval.current) {
      clearInterval(refs.interval.current);

      refs.interval.current = undefined;
    }
  };

  const start = (value_?: IMainProgressMaterialStartArgument) => {
    // Reset
    clear();

    // Update
    refs.linearProgress.current = value_;

    // Open
    setInProp(true);

    // Set initial value to min
    const min_ = refs.min.current !== undefined ? refs.min.current : 0;

    const max_ = refs.max.current !== undefined ? refs.max.current : 0;

    setValue(min_);

    // start inc interval for steps
    // in refs.interval

    // in interval, remove interval if value is >= max
    if (min_ < max_) {
      const stepInterval_ = refs.stepInterval.current !== undefined ? refs.stepInterval.current : 700;

      refs.interval.current = setInterval(() => {
        if (refs.value.current >= max_) clearInterval(refs.interval.current);

        setValue(previousValue => clamp(previousValue + random(refs.stepMin.current, refs.stepMax.current), refs.min.current, refs.max.current));
      }, stepInterval_);
    }

    if (is('function', onStart)) onStart();
  };

  const increment = () => {
    // Inc value random between incrementMin, incrementMax, with clam to min, max
    let valueNew = refs.value.current;

    valueNew += clamp(random(refs.incrementMin.current, refs.incrementMax.current), refs.min.current, refs.max.current);

    setValue(valueNew);

    if (is('function', onIncrement)) onIncrement(valueNew);
  };

  const update = (value_: number) => {
    const valueNew = value_;

    setValue(valueNew);

    if (is('function', onUpdate)) onUpdate(valueNew);
  };

  const done = async () => {
    clear();

    // Update value to 100
    setValue(100);

    // Update inProp to false with the timeout value
    const timeout = theme.transitions.duration.rg + 44;

    await wait(timeout);

    setInProp(false);

    if (is('function', onDone)) onDone();
  };

  const onExited = () => {
    // Reset
    setValue(0);
  };

  React.useEffect(() => {
    if (inProp) {
      if (refs.firstIncrement.current) increment();
    }
  }, [inProp]);

  TransitionComponentProps.in = inProp;

  refs.value_.current.start = start;

  refs.value_.current.increment = increment;

  refs.value_.current.update = update;

  refs.value_.current.done = done;

  return (
    <MainProgressMaterialContext.Provider value={refs.value_.current}>
      <TransitionComponent
        in={inProp}

        onExited={onExited}

        {...TransitionComponentProps}
      >
        <LinearProgress
          value={value}

          version='determinate'

          className={classNames([
            staticClassName('MainProgressMaterial', theme) && [
              `onesy-MainProgressMaterial-root`
            ],

            className,
            classes.root,
            classes[`position_${position}`],
            fixed && classes.fixed
          ])}

          {...other}

          {...refs.linearProgress.current}
        />
      </TransitionComponent>

      {children}
    </MainProgressMaterialContext.Provider>
  );
};

MainProgressMaterial.displayName = 'onesy-MainProgressMaterial';

export default MainProgressMaterial;
