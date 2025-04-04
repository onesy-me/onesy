import React from 'react';

import { is } from '@onesy/utils';
import { useOnesyTheme } from '@onesy/style-react';

import { IBaseElement } from '../types';

const KEYCODES = {
  tab: 'Tab'
};

export const matches = (value: Element) => {
  const method = is('element', value) && (value.matches || value['webkitMatchesSelector'] || value['mozMatchesSelector'] || value['oMatchesSelector'] || value['msMatchesSelector']);

  if (!method) return () => false;

  return method.bind(value);
};

export const queryMatchFocusable = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)';

export type IFocus = IBaseElement & {

};

const Focus: React.FC<IFocus> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyFocus?.props?.default, ...props_ }), [props_]);

  const refs = {
    focusStart: React.useRef<HTMLDivElement>(undefined),
    focusEnd: React.useRef<HTMLDivElement>(undefined)
  };

  const {
    children,

    ...other
  } = props;

  const getElements = (value: Element = refs.focusStart.current): any[] => {
    // Setup siblings array and get the first sibling
    const allElements = [];
    let element = value.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (element) {
      if (element.nodeType === 1 && element !== value) allElements.push(element);

      element = element.nextSibling;
    }

    const focusEndIndex = allElements.findIndex(item => item === refs.focusEnd.current);

    return allElements.slice(0, focusEndIndex).flatMap(item => [matches(item)(queryMatchFocusable) ? item : undefined, ...Array.from(item.querySelectorAll(queryMatchFocusable))].filter(Boolean));
  };

  const onKeyDownUp = (event: any): any => {
    const isTabPressed = event.key === 'Tab' || event.code === KEYCODES.tab;

    if (!isTabPressed) return;

    if (event.shiftKey) {
      if (document.activeElement === refs.focusStart.current) {
        const elements = getElements();

        if (elements.length) elements[elements.length - 1].focus();

        event.preventDefault();
      }
    }
    else {
      if (document.activeElement === refs.focusEnd.current || document.activeElement === refs.focusStart.current) {
        const elements = getElements();

        if (elements.length) elements[0].focus();

        event.preventDefault();
      }
    }
  };

  React.useEffect(() => {
    const rootDocument = refs.focusStart.current?.ownerDocument || window.document;

    rootDocument.addEventListener('keydown', onKeyDownUp);
    rootDocument.addEventListener('keyup', onKeyDownUp);

    return () => {
      rootDocument.removeEventListener('keydown', onKeyDownUp);
      rootDocument.removeEventListener('keyup', onKeyDownUp);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.focusStart.current = item;
        }}

        tabIndex={0}

        {...other}
      />

      {children}

      <div
        ref={refs.focusEnd}

        tabIndex={0}
      />
    </React.Fragment>
  );
});

Focus.displayName = 'onesy-Focus';

export default Focus;
