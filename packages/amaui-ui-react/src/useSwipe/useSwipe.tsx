import React from 'react';

export interface IOptionsUseSwipe {
  min?: string | number;
  max?: string | number;
}

export interface IResponseUseSwipe {
  value?: string;
  style?: Record<string, any>;
  open?: boolean;
}

// swipe

// vertical
// horizontal

// and for both have min, max and checkpoints to move between
// - touch move goes through checkpoints, within min, max (width, height)
// - swipe, or touchEnd move from checkpoint to checkpoint only if >50% of checkpoints difference previous, otherwise go to next

// transition duration is 300 regular, or less depending on swiper acceleration

// response value is how much % it's moved

// make backgroud more transparent as well value y

const useSwipe = (element: HTMLElement, options: IOptionsUseSwipe = {}) => {
  const [response, setResponse] = React.useState<IResponseUseSwipe>();
  const [touch, setTouch] = React.useState<TouchEvent | Boolean>(false);

  const refs = {
    rect: React.useRef<any>()
  };

  const onTouchStart = React.useCallback((event: TouchEvent) => setTouch(event), []);

  const onTouchEnd = React.useCallback(() => {
    // Make new response value
    // + open is value false, if new value forward to min mark

    setTouch(false);
  }, []);

  const onTouchMove = React.useCallback((event: TouchEvent) => {
    let value: any;

    console.log('move', event.touches[0]);

    setResponse(value);
  }, []);

  // Watch
  React.useEffect(() => {
    const onTouchMoveMethod = (event: any) => {
      // Workaround for proper element for touchmove
      if (document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY) === element) onTouchMove(event);
    };

    if (element) {
      refs.rect.current = element.getBoundingClientRect();

      element.addEventListener('touchstart', onTouchStart);
      element.addEventListener('touchend', onTouchEnd);

      window.document.addEventListener('touchmove', onTouchMoveMethod);
    }

    return () => {
      // Remove previous event listeners
      if (element) {
        element.addEventListener('touchstart', onTouchStart);
        element.addEventListener('touchend', onTouchEnd);

        window.document.addEventListener('touchmove', onTouchMoveMethod);
      }
    };
  }, [element]);

  console.log(1, refs.rect.current, touch);
  return response;
};

useSwipe.displayName = 'AmauiUseSwipe';

export default useSwipe;
