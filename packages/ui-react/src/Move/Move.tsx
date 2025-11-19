import React from 'react';

import { element, is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import { staticClassName } from '../utils';
import { IBaseElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    pointerEvents: 'auto',
    touchAction: 'none'
  }
}), { name: 'onesy-Move' });

export type IMove = IBaseElement & {
  version?: 'regular' | 'fixed';
  manage?: boolean;

  manageLevel?: number;

  onMouseDown?: (event: React.MouseEvent<any>) => any;
  onTouchStart?: (event: React.TouchEvent<any>) => any;
};

const Move: React.FC<IMove> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMove?.props?.default, ...props_ };

  const { classes } = useStyle();

  const {
    version = 'regular',
    manage = false,
    manageLevel = 0,

    disabled,

    onMouseDown: onMouseDown_,
    onTouchStart: onTouchStart_,
    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(undefined),
    values: React.useRef<any>(undefined),
    version: React.useRef<any>(undefined),
    mouseDown: React.useRef<any>(undefined),
    onMouseDown: React.useRef<any>(undefined),
    onTouchStart: React.useRef<any>(undefined),
    previousMouseEvent: React.useRef<any>(undefined),
    disabled: React.useRef<any>(undefined)
  };

  const [mouseDown, setMouseDown] = React.useState(false);
  const [values, setValues] = React.useState<any>({});

  refs.version.current = version;

  refs.values.current = values;

  refs.mouseDown.current = mouseDown;

  refs.onMouseDown.current = onMouseDown_;

  refs.onTouchStart.current = onTouchStart_;

  refs.disabled.current = disabled;

  const styles: any = {
    root: {}
  };

  const onMouseDown = (event: React.MouseEvent<any>) => {
    setMouseDown(true);

    if (is('function', refs.onMouseDown.current)) refs.onMouseDown.current(event);
  };

  const onTouchStart = (event: React.TouchEvent<any>) => {
    setMouseDown(true);

    if (is('function', refs.onTouchStart.current)) refs.onTouchStart.current(event);
  };

  const onMouseUp = (event: any) => {
    setMouseDown(false);

    refs.previousMouseEvent.current = undefined;

    if (is('function', refs.onMouseDown.current)) refs.onMouseDown.current(event);
  };

  React.useEffect(() => {
    const onMove = (x_: number, y_: number) => {
      if (refs.mouseDown.current && refs.previousMouseEvent.current && !refs.disabled.current) {
        const { clientX: xPrevious, clientY: yPrevious } = refs.previousMouseEvent.current;

        const x = x_ - xPrevious;
        const y = y_ - yPrevious;

        const transform = (refs.root.current as HTMLElement).style.transform;

        const { left: left_, top: top_ } = (refs.root.current as HTMLElement).style;
        const [xTransform, yTransform] = (transform?.match(/[-+]?\d+\.?\d*/g) || [0, 0]).map((item: any) => Number(item));

        const left = +(left_ || '').replace('px', '');
        const top = +(top_ || '').replace('px', '');

        const valuesNew = {
          ...refs.values.current,

          x: x + (left || xTransform || 0),
          y: y + (top || yTransform || 0)
        };

        if (refs.version.current === 'regular') refs.root.current.style.transform = `translate(${valuesNew.x}px, ${valuesNew.y}px)`;
        else {
          refs.root.current.style.position = 'fixed';

          refs.root.current.style.left = `${valuesNew.x}px`;
          refs.root.current.style.top = `${valuesNew.y}px`;
        }

        setValues(valuesNew);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (refs.mouseDown.current && !refs.disabled.current) {
        const { clientY, clientX } = event;

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current && !refs.disabled.current) {
        const { clientY, clientX } = event.touches[0];

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;

        // Normalize for use as a mouseDown value
        refs.previousMouseEvent.current.clientY = clientY;

        refs.previousMouseEvent.current.clientX = clientX;
      }
    };

    if (manage && refs.root.current) {
      const parents = element(refs.root.current).parents();

      const parent = parents[manageLevel || 0] as HTMLElement;

      if (parent && !['HTML', 'html', 'BODY', 'body', 'HEAD', 'head'].includes((parent as HTMLElement).tagName)) {
        parent.style.pointerEvents = 'none';

        styles.root.pointerEvents = 'auto';
      }
    }

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);

    rootDocument.addEventListener('mousemove', onMouseMove);

    rootDocument.addEventListener('touchend', onMouseUp);

    rootDocument.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);

      rootDocument.removeEventListener('mousemove', onMouseMove);

      rootDocument.removeEventListener('touchend', onMouseUp);

      rootDocument.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      onMouseDown={onMouseDown}

      onTouchStart={onTouchStart}

      className={classNames([
        staticClassName('Move', theme) && [
          'onesy-Move-root'
        ],

        className,
        classes.root
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

Move.displayName = 'onesy-Move';

export default Move;
