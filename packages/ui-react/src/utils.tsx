import { is, canvasFilterBrightness, canvasFilterContrast, canvasFilterSaturation, canvasFilterFade, canvasFilterInvert, canvasFilterOldPhoto, download, clamp, isEnvironment } from '@onesy/utils';

import { IPoint } from './types';

export { default as currencies } from './currencies';

export function reflow(element: HTMLElement) {
  return element?.offsetHeight;
}

export const staticClassName = (name: string, theme: any) => {
  return theme?.ui?.elements?.[`onesy-${name}`]?.className?.static !== undefined ? theme?.ui?.elements?.[`onesy-${name}`]?.className?.static : theme?.ui?.className.static;
};

export const iconSizeToFontSize = (value: string | number) => {
  let fontSize: any = '1.5rem';

  if (value === 'very small') fontSize = '0.75rem';
  else if (value === 'small') fontSize = '1.125rem';
  else if (value === 'regular') fontSize = '1.5rem';
  else if (value === 'medium') fontSize = '1.875rem';
  else if (value === 'large') fontSize = '2.25rem';
  else if (value === 'very large') fontSize = '2.625rem';
  else if (value !== undefined) fontSize = value;

  return fontSize;
};

// Media query value or value
export const valueBreakpoints = (item: any, value: any, breakpoints: any, theme: any) => {
  // Simple
  if (!is('object', item) && item !== undefined) return item;

  const breakpointsKeysTheme = Object.keys(theme.breakpoints.media);
  const breakpointsKeys = Object.keys(breakpoints || {});

  // No breakpoints object
  if (is('object', item) && !Object.keys(item).every(prop => ['default', ...breakpointsKeysTheme].includes(prop))) return item;

  // Item
  if (is('object', item)) {
    for (const breakpoint of breakpointsKeys) {
      if (breakpoints[breakpoint] && item?.[breakpoint] !== undefined) return item[breakpoint];
    }

    if (item?.default !== undefined) return item?.default;
  }

  // Value
  if (is('object', value)) {
    for (const breakpoint of breakpointsKeys) {
      if (breakpoints[breakpoint] && value?.[breakpoint] !== undefined) return value[breakpoint];
    }

    if (value?.default !== undefined) return value?.default;
  }

  return value;
};

export const image = (uri: string): Promise<HTMLImageElement> => new Promise((resolve, reject) => {
  const img = document.createElement('img');

  const method = () => resolve(img);

  img.onload = method;

  img.onerror = () => resolve('' as any);

  img.src = uri;
});

export const canvasBrightness = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterBrightness(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasContrast = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterContrast(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasSaturation = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterSaturation(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasFade = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterFade(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasInvert = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterInvert(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasOldPhoto = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterOldPhoto(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const print = (element: HTMLElement) => {
  const rootDocument = element?.ownerDocument || window.document;

  const clone = rootDocument.cloneNode(true) as any;

  clone.body.innerHTML = '';

  const elementClone = element.cloneNode(true);

  clone.body.append(elementClone);

  const windowNew = window.open('', 'print');

  windowNew.document.head.innerHTML = clone.head.innerHTML;

  windowNew.document.body.innerHTML = clone.body.innerHTML;

  windowNew.document.close();

  windowNew.focus();

  windowNew.print();

  windowNew.close();
};

export const save = (element: HTMLElement) => {
  const rootDocument = element?.ownerDocument || window.document;

  const clone = rootDocument.cloneNode(true) as any;

  clone.body.innerHTML = '';

  const elementClone = element.cloneNode(true);

  (elementClone as HTMLElement).contentEditable = 'false';

  clone.body.append(elementClone);

  download(`${rootDocument.title}.html`, clone.documentElement.innerHTML, 'text/html');
};

export const matches = (value: any) => {
  const method = is('element', value) && (value.matches || value['webkitMatchesSelector'] || value['mozMatchesSelector'] || value['oMatchesSelector'] || value['msMatchesSelector']);

  if (!method) return () => false;

  return method.bind(value);
};

export const angleToCoordinates = (degrees: number, centerX: number, centerY: number, radius: number) => {
  const radians = (degrees * Math.PI) / 180;

  return {
    x: centerX + (radius * Math.cos(radians)),
    y: centerY + (radius * Math.sin(radians))
  };
};

export const line = (pointA: IPoint, pointB: IPoint) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];

  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
};

export const controlPoint = (current: IPoint, previous_: IPoint, next_: IPoint, reverse = false, smoothRatio = 0.14) => {
  const previous = previous_ || current;
  const next = next_ || current;

  const opposed = line(previous, next);

  const angle = opposed.angle + (reverse ? Math.PI : 0);

  const length = opposed.length * smoothRatio;

  // Bug fix, prevent ties if x are the same
  // for previous, and current value
  const x = clamp(current[0] + Math.cos(angle) * length, previous[0], next[0]);

  const y = current[1] + Math.sin(angle) * length;

  return [x, y];
};

export const minMaxBetweenNumbers = (value = 10, min = 0, max = 100) => {
  const part = (max - min) / (value - 1);

  const values = [min];

  for (let i = 0; i < (value - 2); i++) values.push(values[values.length - 1] + part);

  values.push(max);

  return values;
};

export const sanitize = (value: string) => {
  if (value) {
    const map: any = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
      "\\": '&#x5c;',
      '*': '&#x2a',
    };

    const reg = /[&<>"'/\\*]/ig;

    return value.replace(reg, (match) => (map[match]));
  }
};

export const replace = (value: string, split: string, join: string) => {
  return value.split(split).join(join);
};

export const importIframeStyles = (iframeDocument: Document) => {
  const styleSheets = window.document.styleSheets;

  for (const styleSheet of Array.from(styleSheets)) {
    if (!(styleSheet.ownerNode as any).onesy) {
      iframeDocument.head.append((styleSheet.ownerNode as any)?.cloneNode(true));

      continue;
    }

    let css = '';

    const rules = styleSheet?.cssRules;

    for (const rule of Array.from(rules)) css += rule.cssText;

    const style = window.document.createElement('style');

    style.innerHTML = css;

    iframeDocument.head.append(style);
  }
};

export const getOverflowParent = (element: HTMLElement, vertical = true) => {
  if (!element) return;

  // height
  if (vertical && element.scrollHeight > element.clientHeight) return element;

  // width
  if (!vertical && element.scrollWidth > element.clientWidth) return element;

  return getOverflowParent(element.parentElement, vertical);
};

export const keyboardStandardCommands = ['a', 'c', 'v', 'y', 'z'];

export const keyboardStyleCommands = ['b', 'i', 'u'];

export const caret: any = {};

if (isEnvironment('browser')) {
  if (window.getSelection && document.createRange) {
    // Saves caret position(s)
    caret.save = function (container: any) {
      const selection = window.getSelection();

      if (!(selection && selection.rangeCount > 0)) return;

      const range = window.getSelection()?.getRangeAt(0);

      if (!range) return;

      const preSelectionRange = range.cloneRange();

      preSelectionRange.selectNodeContents(container);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);

      const start = preSelectionRange.toString().length;

      return {
        start: start,
        end: start + range.toString().length
      };
    };

    // Restores caret position(s)
    caret.restore = function (container: any, savedElement: any) {
      let charIndex = 0;
      const range = document.createRange();

      range.setStart(container, 0);
      range.collapse(true);

      const nodeStack = [container];
      let node;
      let foundStart = false;
      let stop = false;

      // tslint:disable-next-line
      while (!stop && (node = nodeStack.pop())) {
        if (node.nodeType === 3) {
          const nextCharIndex = charIndex + node.length;

          if (!foundStart && savedElement.start >= charIndex && savedElement.start <= nextCharIndex) {
            range.setStart(node, savedElement.start - charIndex);
            foundStart = true;
          }

          if (foundStart && savedElement.end >= charIndex && savedElement.end <= nextCharIndex) {
            range.setEnd(node, savedElement.end - charIndex);
            stop = true;
          }

          charIndex = nextCharIndex;
        } else {
          let i = node.childNodes.length;

          while (i--) {
            nodeStack.push(node.childNodes[i]);
          }
        }
      }

      const selection = window.getSelection();

      selection?.removeAllRanges();
      selection?.addRange(range);
    };
  }
  else if ((process as any).window && (window.document as any).selection && (window.document.body as any).createTextRange) {
    // Saves caret position(s)
    caret.save = function (container: any) {
      const selectedTextRange = (window.document as any).selection.createRange();
      const preSelectionTextRange = (window.document.body as any).createTextRange();

      preSelectionTextRange.moveToElementText(container);
      preSelectionTextRange.setEndPoint("EndToStart", selectedTextRange);

      const start = preSelectionTextRange.text.length;

      return {
        start: start,
        end: start + selectedTextRange.text.length
      };
    };

    // Restores caret position(s)
    caret.restore = function (container: any, savedElement: any) {
      const textRange = (window.document.body as any).createTextRange();

      textRange.moveToElementText(container);
      textRange.collapse(true);
      textRange.moveEnd("character", savedElement.end);
      textRange.moveStart("character", savedElement.start);
      textRange.select();
    };
  }
}

export const toNumber = (item: any, valueDefault = 0) => (is('number', item) ? item : +String(item).match(/\d+.?\d+/)?.[0]) || valueDefault;

export const formats = {
  entire: 'DD MMM, YYYY [at] h:mm a',
  date: 'DD MMM, YYYY',
  time: 'h:mm a'
};

export const iconFontSize = 20;

export const decodeHTMLEntities = (html: string): string => {
  const document = new DOMParser().parseFromString(html, 'text/html');

  return document.documentElement.textContent || '';
};

export const scrollToMiddleOfParent = (element: HTMLElement) => {
  const parent = element.parentElement;

  if (!parent) return;

  const rects = {
    element: element.getBoundingClientRect(),
    parent: parent.getBoundingClientRect()
  };

  const offsetTop = rects.element.top - rects.parent.top + parent.scrollTop;

  const top = offsetTop - (parent.clientHeight / 2) + (element.offsetHeight / 2);

  parent.scrollTo({
    top,
    behavior: 'smooth'
  });
};
