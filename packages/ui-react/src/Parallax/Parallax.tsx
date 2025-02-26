import React from 'react';

import { is, clamp, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import useMediaQuery from '../useMediaQuery';
import { valueBreakpoints, staticClassName } from '../utils';
import { IBaseElement, IPropsAny, IStyle, IValueBreakpoints } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-Parallax' });

export type TParallaxDirection = 'vertical' | 'horizontal';

export interface IParallax extends IBaseElement {
  value?: number;

  // element
  root?: Element | DocumentFragment;

  render?: (value: number, root: Element | DocumentFragment, rate: number, scrollDirection: TParallaxDirection, transformDirection: TParallaxDirection, transition: string, props: IPropsAny) => IStyle;

  // value or a method
  rate?: number | ((value: number) => number);

  scrollDirection?: TParallaxDirection;
  transformDirection?: TParallaxDirection;

  transition?: string;

  disabled?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
}

const Parallax: React.FC<IParallax> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyParallax?.props?.default, ...props_ }), [props_]);

  const {
    value: value_,

    // element
    root = window.document,

    render,

    // value or a method
    rate = -1,

    scrollDirection = 'vertical',
    transformDirection = 'vertical',

    transition = `transform ${theme.transitions.duration.xxs}`,

    disabled: disabled_,

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    scrollDirection: React.useRef<any>(undefined),
    transformDirection: React.useRef<any>(undefined),
    rate: React.useRef<any>(undefined),
    disabled: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [disabled_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [disabled_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const disabled = valueBreakpoints(disabled_, false, breakpoints, theme);

  const [value, setValue] = React.useState(0);

  refs.value.current = value;

  refs.scrollDirection.current = scrollDirection;

  refs.transformDirection.current = transformDirection;

  refs.rate.current = rate;

  refs.disabled.current = disabled;

  const update = () => {
    let valueNew: number;

    if (refs.disabled.current) return;

    // Element rect
    const rect = refs.root.current.getBoundingClientRect();

    // Viewport
    if (
      // Vertically
      (
        // Element in view
        (rect.y >= 0 && rect.bottom <= window.innerHeight) ||
        // Element y out of view, but bottom in view
        (rect.y < 0 && rect.bottom >= 0) ||
        // Element bottom out of view, but y in view
        (rect.bottom > window.innerHeight && rect.y <= window.innerHeight)
      ) &&
      // Horizontally
      (
        // Element in view
        (rect.x >= 0 && rect.right <= window.innerWidth) ||
        // Element x out of view, but right in view
        (rect.x < 0 && rect.right >= 0) ||
        // Element right out of view, but x in view
        (rect.right > window.innerWidth && rect.y <= window.innerWidth)
      )
    ) {
      const padding = Math.abs((window.innerHeight - rect.height) / 2);

      const max = rect.height + padding;

      valueNew = (((window.innerHeight - rect.y) / max) - 1) * 100;
    }

    if (valueNew !== undefined && valueNew !== refs.value.current) setValue(clamp(valueNew, -100, 100));
  };

  React.useEffect(() => {
    // Update on init
    if (!props.hasOwnProperty('value')) update();
  }, []);

  React.useEffect(() => {
    if (!props.hasOwnProperty('value') && root?.addEventListener) root.addEventListener('scroll', update);

    return () => {
      if (!props.hasOwnProperty('value') && root?.addEventListener) root.removeEventListener('scroll', update);
    };
  }, [root]);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  let styles: any = {};

  if (is('function', render)) styles = { ...render(value, root, rate as any, scrollDirection, transformDirection, transition, props) };
  else {
    let valueUpdate = 0;

    if (is('function', rate)) valueUpdate = (rate as any)(value);
    else valueUpdate = value * (rate as any);

    if (transformDirection === 'vertical') styles.transform = `translate3d(0, ${valueUpdate}%, 0)`;
    else styles.transform = `translate3d(${valueUpdate}%, 0, 0)`;

    styles.transition = transition;
  }

  return (
    is('function', children) ?
      (children as any)(value, styles, other) :

      React.cloneElement(children as any, {
        className: classNames([
          staticClassName('Parallax', theme) && [
            `onesy-Parallax-root`
          ],

          className,
          classes.root
        ]),

        ref: (item: any) => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;

          if ((children as any).ref) {
            if (is('function', (children as any).ref)) (children as any).ref(item);
            else (children as any).ref.current = item;
          }
        },

        style: {
          ...(children as any).props.style,

          ...styles
        },

        ...other
      })
  );
});

Parallax.displayName = 'onesy-Parallax';

export default Parallax;
