import React from 'react';

import { clamp, merge, percentageFromValueWithinRange } from '@onesy/utils';

export type IOptionsUseSwipe = {
  open?: boolean;
  min?: number;
  direction?: 'top' | 'left' | 'right' | 'bottom';
  touchAnywhere?: boolean;
  flick?: boolean;
  flickTreshold?: number;
};

export type IResponseUseSwipe = {
  value?: number;
  valuePercentage?: number;
  position?: string;
};

const optionsDefault: IOptionsUseSwipe = {
  flick: true,
  flickTreshold: 140
};

const useSwipe = (element: HTMLElement, options_: IOptionsUseSwipe = {}) => {
  const [response, setResponse] = React.useState<IResponseUseSwipe>();
  const [touch, setTouch] = React.useState<TouchEvent | boolean>(false);

  const options = merge(options_, optionsDefault);

  const refs = {
    rect: React.useRef<any>(undefined),
    element: React.useRef<any>(undefined),
    options: React.useRef(options),
    response: React.useRef<any>(undefined),
    touch: React.useRef<any>(undefined),
    previous: React.useRef<any>(undefined),
    previousMouseMove: React.useRef<any>(undefined)
  };

  refs.options.current = options;
  refs.response.current = response;
  refs.touch.current = touch;

  const onTouchStart = React.useCallback((event: TouchEvent) => setTouch(event), []);

  const getMinMax = React.useCallback(() => {
    let min: number;
    let max: number;

    const optionsMin = refs.options.current.min || 0;

    if (refs.options.current.direction === 'top') {
      min = refs.rect.current.top;
      max = refs.rect.current.bottom - optionsMin;
    }

    if (refs.options.current.direction === 'left') {
      min = refs.rect.current.left;
      max = refs.rect.current.right - optionsMin;
    }

    if (refs.options.current.direction === 'right') {
      min = window.innerWidth - refs.rect.current.left - optionsMin;
      max = min + refs.rect.current.width - optionsMin;
    }

    if (refs.options.current.direction === 'bottom') {
      min = window.innerHeight - refs.rect.current.top - optionsMin;
      max = min + refs.rect.current.height - optionsMin;
    }

    return {
      min,
      max
    };
  }, []);

  const onTouchEnd = React.useCallback(() => {
    const newResponse = { ...refs.response.current };

    const { min, max } = getMinMax();

    let isFlick = false;

    if (refs.options.current.flick) {
      const now = new Date().getTime();

      const flick = (now - refs.previousMouseMove.current <= refs.options.current.flickTreshold) && (newResponse.valuePercentage < 100);

      if (flick) isFlick = true;
    }

    newResponse.value = (
      (['left', 'top'].includes(refs.options.current.direction) && (newResponse.valuePercentage < 50 || isFlick)) ||
      (['right', 'bottom'].includes(refs.options.current.direction) && (newResponse.valuePercentage > 50 && !isFlick))
    ) ? min : max;

    newResponse.position = (newResponse.valuePercentage < 50 || isFlick) ? 'min' : 'max';

    newResponse.min = min;

    newResponse.max = max;

    newResponse.flick = isFlick;

    refs.previous.current = undefined;

    setTouch(false);
    setResponse(newResponse);
  }, [response]);

  const onTouchMove = React.useCallback((event: TouchEvent) => {
    const newResponse = { ...refs.response.current };

    const { clientX: x_, clientY: y_ } = event.touches[0];
    const { clientX: pX, clientY: pY } = refs.previous.current.touches[0];

    const x = pX - x_;
    const y = pY - y_;

    const { top = 0, left = 0, width = 0, height = 0 } = element?.getBoundingClientRect() || {};

    // value
    let value_: number;

    const { min, max } = getMinMax();

    if (refs.options.current.direction === 'top') {
      value_ = top - y;
    }

    if (refs.options.current.direction === 'left') {
      value_ = left - x;
    }

    if (refs.options.current.direction === 'right') {
      value_ = width - (window.innerWidth - left) - x;
    }

    if (refs.options.current.direction === 'bottom') {
      value_ = height - (window.innerHeight - top) - y;
    }

    newResponse.min = min;

    newResponse.max = max;

    newResponse.value = clamp(value_, min, max);

    newResponse.valuePercentage = percentageFromValueWithinRange(newResponse.value, min, max);

    if (['bottom', 'right'].includes(refs.options.current.direction)) newResponse.valuePercentage = 100 - newResponse.valuePercentage;

    // Only value move at touchmove
    newResponse.position = undefined;

    // previous mouse move
    refs.previousMouseMove.current = new Date().getTime();

    setResponse(newResponse);
  }, [element, response]);

  React.useEffect(() => {
    const onTouchMoveMethod = (event: any) => {
      // Workaround for proper element for touchmove
      if (refs.options.current.open && refs.previous.current && ((refs.options.current.touchAnywhere || refs.touch.current) || element.contains(document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY)))) {
        if (!refs.touch.current) setTouch(true);

        onTouchMove(event);
      }

      refs.previous.current = event;
    };

    if (element) {
      refs.element.current = element;

      refs.rect.current = element.getBoundingClientRect();

      element.addEventListener('touchstart', onTouchStart, { passive: true });

      const rootDocument = element?.ownerDocument || window.document;

      rootDocument.addEventListener('touchend', onTouchEnd, { passive: true });
      rootDocument.addEventListener('touchmove', onTouchMoveMethod, { passive: true });
    }

    return () => {
      // Remove previous event listeners
      if (element) element.removeEventListener('touchstart', onTouchStart);

      const rootDocument = element?.ownerDocument || window.document;

      rootDocument.removeEventListener('touchend', onTouchEnd);
      rootDocument.removeEventListener('touchmove', onTouchMoveMethod);
    };
  }, [element]);

  return response;
};

useSwipe.displayName = 'onesy-UseSwipe';

export default useSwipe;
