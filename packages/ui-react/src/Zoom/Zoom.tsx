import React from 'react';

import { is } from '@onesy/utils';
import { classNames, useOnesyTheme } from '@onesy/style-react';

import { Transition, TTransitionStatus, ITransition } from '..';

export type IZoom = ITransition & {

};

const Zoom: React.FC<IZoom> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyZoom?.props?.default, ...props_ }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>(undefined)
  };

  const {
    in: inProp,
    prefix,
    run,
    append,
    add,
    enter,
    exit,
    enterOnAdd,
    exitOnAdd,
    noAbruption,
    removeOnExited,
    delay,
    duration: duration_,
    timing_function,
    addTransition,
    onTransition,
    onAppended,
    onAdd,
    onAdding,
    onAdded,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    onRemoved,

    className,
    style,

    children,

    ...other
  } = props;

  const styles = (status: TTransitionStatus) => {
    const { transform = 'scale(1)' } = (refs.root.current && window.getComputedStyle(refs.root?.current)) || {};

    const allStyles = {
      appended: {
        visibility: 'hidden'
      },

      add: {
        transition: 'none',

        transform: `scale(0)`
      },
      adding: {
        transform: `scale(1)`
      },
      added: {
        transform: `scale(1)`
      },

      enter: {
        transition: 'none',

        transform: `scale(0)`
      },
      entering: {
        transform: `scale(1)`
      },
      entered: {
        transform: `scale(1)`
      },

      exit: {
        transform
      },
      exiting: {
        transform: `scale(0.001)`
      },
      exited: {
        transform: `scale(0)`
      }
    };

    return allStyles[status];
  };

  const duration = (status: TTransitionStatus, property = 'transform') => {
    const properties = {
      transform: theme.transitions.duration.xs
    };

    return `${(is('simple', duration) ? duration : duration[status]) || properties[property]}ms`;
  };

  const timingFunction = (status: string) => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}
    >
      {(status: TTransitionStatus, ref_) => {
        return React.cloneElement(children as any, {
          ...other,

          ref: (item: any) => {
            refs.root.current = item;

            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            if (ref_) {
              if (is('function', ref_)) (ref_ as any)(item);
              else ref_.current = item;
            }

            if ((children as any).ref) {
              if (is('function', (children as any).ref)) (children as any).ref(item);
              else (children as any).ref.current = item;
            }
          },

          className: classNames([
            className,
            children?.props?.className
          ]),

          style: {
            visibility: status === 'exited' && !inProp ? 'hidden' : undefined,

            transition: `transform ${duration(status)} ${timingFunction(status)} ${addTransition ? `, ${addTransition}` : ''}`,

            ...styles(status),

            ...(children as any)?.props?.style,

            ...style
          }
        });
      }}
    </Transition>
  );
});

Zoom.displayName = 'onesy-Zoom';

export default Zoom;
