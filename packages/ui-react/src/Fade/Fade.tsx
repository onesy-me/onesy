import React from 'react';

import { is } from '@onesy/utils';
import { classNames, useOnesyTheme } from '@onesy/style-react';

import { ITransition, Transition, TTransitionStatus } from '..';

export type IFade = ITransition & {

};

const Fade: React.FC<IFade> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyFade?.props?.default, ...props_ }), [props_]);

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

  const refs = {
    root: React.useRef<HTMLElement>(undefined)
  };

  const styles = (status: TTransitionStatus) => {
    const { opacity = 1 } = (refs.root.current && window.getComputedStyle(refs.root?.current)) || {};

    const allStyles = {
      appended: {
        visibility: 'hidden'
      },

      add: {
        transition: 'none',

        opacity: 0
      },
      adding: {
        opacity: 1
      },
      added: {
        opacity: 1
      },

      enter: {
        transition: 'none',

        opacity: 0
      },
      entering: {
        opacity: 1
      },
      // With no opacity
      // as if there's inline opacity value
      // it ie. overrides button disabled class
      // opacity value
      entered: {

      },

      exit: {
        opacity
      },
      exiting: {
        opacity: 0
      },
      exited: {
        opacity: 0
      }
    };

    return allStyles[status];
  };

  const duration = (status: TTransitionStatus, property = 'opacity') => {
    const properties = {
      opacity: theme.transitions.duration.sm
    };

    return `${(is('simple', duration) ? duration : duration[status]) || properties[property]}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}

      name='fade'
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

            transition: `opacity ${duration(status)} ${timingFunction(status)} ${addTransition ? `, ${addTransition}` : ''}`,

            ...styles(status),

            ...(children as any)?.props?.style,

            ...style
          }
        });
      }}
    </Transition>
  );
});

Fade.displayName = 'onesy-Fade';

export default Fade;
