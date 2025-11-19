import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import FadeElement from '../Fade';
import { IFade } from '../Fade/Fade';
import useVisible, { IUseVisible } from '../useVisible/useVisible';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'onesy-Reveal' });

export type IReveal = Omit<IFade, 'onChange'> & {
  inDefault?: boolean;

  offset?: number;
  offsetReveal?: number;
  offsetUnreveal?: number;

  unreveal?: boolean;

  classes?: {
    in?: string;
  };

  styles?: {
    in?: any;
    out?: any;
  };

  onChange?: (value: boolean) => any;

  noTransition?: boolean;

  UseVisibleProps?: IUseVisible;
};

const Reveal: React.FC<IReveal> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyReveal?.props?.default, ...props_ };

  const Fade = theme?.elements?.Fade || FadeElement;

  const {
    inDefault,

    offset,
    offsetReveal,
    offsetUnreveal,

    unreveal,

    classes: classesProps,

    styles,

    onChange,

    noTransition,

    Component: Component_ = Fade,

    UseVisibleProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [root, setRoot] = React.useState<HTMLElement>();
  const [loaded, setLoaded] = React.useState(inDefault !== undefined ? inDefault : false);
  const [inProp, setInProp] = React.useState(inDefault !== undefined ? inDefault : false);

  const visiblity = useVisible({
    element: root,

    ...UseVisibleProps,

    options: {
      rootMargin: `${(is('number', offsetReveal) ? offsetReveal : offset) || 0}px ${(is('number', offsetReveal) ? offsetReveal : offset) || 0}px ${(is('number', offsetUnreveal) ? offsetUnreveal : offset) || 0}px ${(is('number', offsetUnreveal) ? offsetUnreveal : offset) || 0}px`,

      ...UseVisibleProps?.options
    }
  });

  const refs = {
    root: React.useRef<HTMLElement>(undefined),
    props: React.useRef(props),
    in: React.useRef(inProp),
    unreveal: React.useRef(unreveal),
    loaded: React.useRef(loaded)
  };

  refs.props.current = props;

  refs.in.current = inProp;

  refs.unreveal.current = unreveal;

  refs.loaded.current = loaded;

  const onUpdate = (value: boolean) => {
    setInProp(value);

    if (value && !refs.loaded.current) setLoaded(true);

    if (is('function', onChange)) onChange(value);
  };

  React.useEffect(() => {
    const value = visiblity.visible;

    if (refs.loaded.current && !value && !refs.unreveal.current) return;

    onUpdate(value);
  }, [visiblity.visible]);

  const Component = !noTransition ? Component_ : React.Fragment;

  if (!noTransition) other.in = inProp;

  const ComponentProps = !noTransition && {
    ...other
  };

  return (
    <Component
      {...ComponentProps}
    >
      {React.cloneElement(children as any, {
        ref: (item: any) => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          setRoot(item);

          refs.root.current = item;
        },

        className: classNames([
          staticClassName('Reveal', theme) && [
            'onesy-Reveal-root',
            unreveal && `onesy-Reveal-unreveal`,
            inProp ? `onesy-Reveal-revealed` : `onesy-Reveal-unrevealed`
          ],

          className,
          (children as any).props.className,
          classes.root,
          inProp && classesProps?.in
        ]),

        style: {
          ...(inProp ? styles?.in : styles?.out),
          ...(children as any).props?.style
        }
      })}
    </Component>
  );
});

Reveal.displayName = 'onesy-Reveal';

export default Reveal;
