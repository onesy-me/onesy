import React from 'react';

import { arrayToParts, clamp, copy, getID, is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';
import { OnesyDate } from '@onesy/date';

import LineElement from '../Line';
import { staticClassName } from '../utils';
import { IBaseElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  canvas: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    imageRendering: 'pixelated',
    background: '#fff',
    appearance: 'none',
    border: 'none',
    userSelect: 'none',
    transition: theme.methods.transitions.make('opacity'),

    '&[disabled]': {
      opacity: 0.7,
      pointerEvents: 'none'
    }
  },

  ui: {
    zIndex: 0
  },

  object: {
    cursor: 'crosshair'
  },

  pen: {
    cursor: 'crosshair'
  },

  pan: {
    cursor: 'grab'
  },

  panning: {
    cursor: 'grabbing'
  },

  zoom: {
    cursor: 'zoom-in'
  },

  eraser: {
    cursor: 'not-allowed'
  },

  image: {
    cursor: 'copy'
  },

  text: {
    cursor: 'text'
  }
}), { name: 'onesy-Whiteboard' });

export type IWhiteboardAction = {
  v: 'a' | 'r';
  i: IWhiteboardItem | IWhiteboardItem[];
};

export type IWhiteboardTool = 'pen' | 'eraser' | 'pan' | 'zoom' | 'select' | 'circle' | 'rectangle' | 'triangle' | 'line' | 'line-arrow' | 'text' | 'image';

export type IWhiteboardValue = IWhiteboardItem[];

export type IWhiteboard = Omit<IBaseElement, 'onChange'> & {
  valueDefault?: IWhiteboardValue;

  onChange?: (value: IWhiteboardValue) => any;

  minZoom?: number;

  maxZoom?: number;

  grid?: boolean;

  settings?: any;
};

export type IWhiteboardItem = {
  // id,
  i: string;
  // version: draw line, draw point, object (circle, ellipse, rectangle, square, triangle, line, arrow), image, text
  v?: 'dl' | 'dp' | 'oc' | 'oe' | 'or' | 'os' | 'ot' | 'ote' | 'ol' | 'oa' | 'i' | 't';
  // points
  // make smooth path, using Bézier curves or Catmull-Rom splines to interpolate between points
  p: number[];
  // coordinates on canvas x1, y1, width, height
  c?: number[];
  // args
  // ie. arc radius, startAngle
  ar?: number[];
  // settings
  s?: {
    lineCap?: string;
    lineJoin?: string;
    lineWidth?: number;
    strokeStyle?: string;
    globalAlpha?: number;

    [p: string]: any;
  };
  // selected
  se?: boolean;
  // added at
  // in order to do real time replay of what the board had in it at specific timestamp
  a: number;
};

const colorSelect = 'hsl(244deg 64% 64%)';
const colorSelectBackground = 'hsla(244deg 64% 64% / 4%)';

const Whiteboard: React.FC<IWhiteboard> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyWhiteboard?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const {
    ref,

    valueDefault,

    onChange: onChangeProps,

    // 10%
    minZoom = 10,

    // 400%
    maxZoom = 4000,

    grid: gridProps = true,

    settings = {
      lineCap: 'round',
      lineJoin: 'round',
      lineWidth: 10,
      fillStyle: 'lightgreen',
      strokeStyle: 'lightgreen',
      globalAlpha: 0.44
    },

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [size, setSize] = React.useState<any>({});
  const [tool, setTool] = React.useState<IWhiteboardTool>('select');
  const [mouseDown, setMouseDown] = React.useState(false);
  const [grid, setGrid] = React.useState(gridProps);
  const [loaded, setLoaded] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>(null),
    ui: React.useRef<HTMLCanvasElement>(null),
    interactive: React.useRef<HTMLCanvasElement>(null),
    on: React.useRef(false),
    items: React.useRef<IWhiteboardItem[]>(valueDefault || []),
    previous: React.useRef({ x: 0, y: 0 }),
    previousMouse: React.useRef({ x: 0, y: 0 }),
    moveStarted: React.useRef(false),
    undo: React.useRef<IWhiteboardItem[][]>([]),
    redo: React.useRef<IWhiteboardItem[][]>([]),
    move: React.useRef({ x: 0, y: 0 }),
    offset: React.useRef({ x: 0, y: 0 }),
    start: React.useRef({ x: 0, y: 0 }),
    end: React.useRef({ x: 0, y: 0 }),
    scale: React.useRef(1),
    mouseDown: React.useRef(mouseDown),
    mouseMove: React.useRef({
      current: { x: 0, y: 0 },
      previous: undefined,
      delta: { x: 0, y: 0 }
    }),
    tool: React.useRef(tool),
    previousTool: React.useRef(tool),
    toolUpdateAuto: React.useRef(false),
    remove: React.useRef<IWhiteboardItem[]>([]),
    grid: React.useRef(grid),
    typing: React.useRef(false),
    image: React.useRef<HTMLImageElement>(isEnvironment('browser') && new Image()),
    aspectRatio: React.useRef(1),
    select: React.useRef<any>(null),
    textActive: React.useRef<IWhiteboardItem>(null),
    textSettings: React.useRef({
      lineHeight: 20,
      padding: 5,
      fillStyle: 'black'
    })
  };

  refs.mouseDown.current = mouseDown;

  refs.tool.current = tool;

  refs.grid.current = grid;

  const init = () => {
    // Todo
    // items
    // load all of the images in memory and attach theme to items as image elements
    // once it's all done, setLoaded(true), render

    setTimeout(() => {
      render();

      setLoaded(true);
    }, 40);
  };

  React.useEffect(() => {
    if (!['zoom'].includes(tool)) refs.previousTool.current = tool;
  }, [tool]);

  const onChange = () => {
    if (is('function', onChangeProps)) onChangeProps(refs.items.current);
  };

  const getItems = (selected = undefined) => refs.items.current.filter(item => selected === undefined || item.se === selected);

  const getItem = () => refs.items.current[refs.items.current.length - 1];

  const filterItems = () => {
    const toRemove = refs.items.current.filter(item => {
      if (refs.tool.current === 'text' && item !== refs.textActive.current) item.se = false;

      const lines = item.s?.lines || [];

      return !(item.v !== 't' || (item === refs.textActive.current || (lines.length > 1 || lines[0].length)));
    });

    if (toRemove.length) remove(toRemove);
  };

  const add = (toAdd: IWhiteboardItem | IWhiteboardItem[]) => {
    const itemsAdd = (Array.isArray(toAdd) ? toAdd : [toAdd]).filter(Boolean);

    const items = getItems();

    // add to undo stack snapshot of current state
    refs.undo.current.push([...items]);

    // clear redo stack
    refs.redo.current = [];

    refs.items.current.push(...itemsAdd);
  };

  const remove = (toRemove: IWhiteboardItem | IWhiteboardItem[]) => {
    const itemsRemove = (Array.isArray(toRemove) ? toRemove : [toRemove]).filter(Boolean);

    const items = getItems();

    const IDs = itemsRemove?.map(item => item.i);

    const toRemoveIDs = items.filter(item => IDs.includes(item.i)).map(item => item.i);

    if (!toRemoveIDs) return;

    // add to undo stack snapshot of current state
    refs.undo.current.push([...items]);

    // clear redo stack
    refs.redo.current = [];

    refs.items.current = refs.items.current.filter(item => !toRemoveIDs.includes(item.i));
  };

  const reset = () => {
    refs.on.current = false;

    refs.moveStarted.current = false;

    refs.image.current = null;

    // new move start
    refs.offset.current.x = refs.move.current.x;

    refs.offset.current.y = refs.move.current.y;
  };

  const transform = (coordinate: number) => coordinate / refs.scale.current;

  const selectAll = () => {
    return [...refs.items.current].filter(Boolean).map(item => {
      item.se = true;

      return item;
    });
  };

  const unselectAll = (eventReact?: React.MouseEvent | React.TouchEvent) => {
    const event = eventReact?.nativeEvent || eventReact;
    const shift = event?.shiftKey;

    return [...refs.items.current].filter(Boolean).map(item => {
      if (shift) return item;

      item.se = false;

      return item;
    });
  };

  const onInteractionDown = (body: any, eventReact: React.MouseEvent | React.TouchEvent) => {
    const event = eventReact?.nativeEvent || eventReact;

    const { offsetX: x, offsetY: y, clientX, clientY } = body;

    refs.on.current = true;

    refs.previous.current = { x, y };

    refs.mouseMove.current = {
      current: { x: 0, y: 0 },
      previous: undefined,
      delta: { x: 0, y: 0 }
    };

    const shift = event?.shiftKey;

    const ui = refs.ui.current.getContext('2d');

    const rect = refs.ui.current.getBoundingClientRect();

    refs.start.current.x = clientX - rect.left;

    refs.start.current.y = clientY - rect.top;

    refs.textActive.current = null;

    const start = refs.start.current;

    const startTransformed = {
      x: transform(start.x - refs.move.current.x),
      y: transform(start.y - refs.move.current.y)
    };

    Object.keys(settings).forEach(item_ => ui[item_] = settings[item_]);

    let item: IWhiteboardItem;

    const items = getItems();

    const t = refs.tool.current;

    refs.select.current = null;

    if (t === 'select') {
      // z-index top to bottom order
      const itemsReversed = [...items].reverse();

      const itemsClicked = itemsReversed.filter(item_ => {
        return item_.c && startTransformed.x >= item_.c[0] && startTransformed.x <= item_.c[0] + item_.c[2] && startTransformed.y >= item_.c[1] && startTransformed.y <= item_.c[1] + item_.c[3];
      });

      const itemsSelected = getItems(true);

      const clicked = itemsClicked[0];

      if (!clicked) {
        unselectAll();

        refs.select.current = { p: [], ar: [] };
      }

      if (!shift && !(clicked?.se && itemsSelected.length > 1)) unselectAll();

      if (clicked) {
        clicked.se = shift ? !clicked.se : true;
      }
    }
    else if (t === 'text') {
      const {
        lineHeight,
        padding
      } = refs.textSettings.current;

      const selectedText = items.find(item_ => item_.c && startTransformed.x >= item_.c[0] && startTransformed.x <= item_.c[0] + item_.c[2] && startTransformed.y >= item_.c[1] && startTransformed.y <= item_.c[1] + item_.c[3]);

      if (selectedText) {
        refs.textActive.current = selectedText;

        selectedText.se = true;

        const relativeY = startTransformed.y - selectedText.c[1] - padding;
        const lineIndex = Math.floor(relativeY / lineHeight);
        const clickedLine = selectedText.s?.lines?.[lineIndex] || '';
        const relativeX = startTransformed.x - selectedText.c[0] - padding;

        let charIndex = clickedLine.length;

        for (let i = 0; i < clickedLine.length; i++) {
          if (relativeX < ui.measureText(clickedLine.slice(0, i + 1)).width) {
            charIndex = i;

            break;
          }
        }

        selectedText.s.cursor = { line: lineIndex, char: charIndex };
      }
      else {
        item = {
          i: getID(),
          v: 't',
          p: [startTransformed.x, startTransformed.y],
          ar: [15, lineHeight + (padding * 2)],
          s: {
            ...refs.textSettings.current,

            lines: [''],
            cursor: { line: 0, char: 0 }
          },
          se: true,
          a: OnesyDate.milliseconds
        };

        refs.textActive.current = item;
      }
    }
    else {
      // pen
      if (t === 'pen') {
        // point
        item = {
          i: getID(),
          v: 'dp',
          p: [transform(x - refs.move.current.x), transform(y - refs.move.current.y)],
          ar: [ui.lineWidth / 2, 0, Math.PI * 2],
          s: copy(settings),
          a: OnesyDate.milliseconds
        };
      }
      // circle, rectangle, line, line-arrow
      if (['circle', 'rectangle', 'triangle', 'line', 'line-arrow'].includes(t)) {
        item = {
          i: getID(),
          p: [],
          ar: [],
          s: copy(settings),
          a: OnesyDate.milliseconds
        };
      }
      // pan
      if (t === 'pan') {
        // new move start
        refs.offset.current.x = refs.move.current.x;
        refs.offset.current.y = refs.move.current.y;
      }
      // image
      else if (t === 'image' && refs.image.current.complete && refs.image.current.src) {
        refs.aspectRatio.current = refs.image.current.width / refs.image.current.height;

        // Todo
        // add url of the image
        // instead of embeding the image
        item = {
          i: getID(),
          v: 'i',
          p: [],
          ar: [],
          s: {
            // Todo
            // remove in the future
            image: refs.image.current,
            aspectRatio: refs.aspectRatio.current
          },
          a: OnesyDate.milliseconds
        };
      }
    }

    if (item) add(item);

    filterItems();

    // render
    render();

    setMouseDown(true);
  };

  const onMouseDown = (event: React.MouseEvent) => {
    const { offsetX, offsetY, clientX, clientY } = event.nativeEvent;

    onInteractionDown({ offsetX, offsetY, clientX, clientY }, event);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    // Get the first touch point
    const touch = event.touches[0];

    const { clientX, clientY } = touch as any;
    let { offsetX, offsetY } = touch as any;

    const targetElement = touch.target;

    if (targetElement instanceof HTMLElement) {
      // Get the bounding rectangle of the target element
      const rect = targetElement.getBoundingClientRect();

      // Calculate the offsetX and offsetY
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;
    }

    onInteractionDown({ offsetX, offsetY, clientX, clientY }, event);
  };

  const removeItems = () => {
    // remove
    if (refs.remove.current.length) {
      const toRemove = [];

      for (const item of refs.remove.current) {
        const index = refs.items.current.findIndex(itemItems => itemItems === item);

        if (index > -1) toRemove.push(item);
      }

      if (toRemove.length) remove(toRemove);

      refs.remove.current = [];
    }
  };

  const onUpdateCoordinates = () => {
    const items = getItems();

    items.forEach(item => {
      const p = item?.p || [];
      const ar = item?.ar || [];
      const s = item?.s || {};

      if (p.length) {
        // cache
        // x1, y1, width. height for position on the screen
        const v = item.v;

        // draw point
        if (v === 'dp') {
          const lineWidth = s.lineWidth || 10;

          item.c = [
            p[0] - (lineWidth / 2),
            p[1] - (lineWidth / 2),

            lineWidth,
            lineWidth
          ];
        }
        // draw line
        else if (v === 'dl') {
          const x = [];
          const y = [];

          for (let i = 0; i < p.length; i += 2) {
            x.push(p[i]);
            y.push(p[i + 1]);
          }

          const xMin = Math.min(...x);
          const yMin = Math.min(...y);
          const xMax = Math.max(...x);
          const yMax = Math.max(...y);

          item.c = [
            xMin,
            yMin,
            xMax - xMin,
            yMax - yMin
          ];
        }
        // object line, object arrow
        else if (['ol', 'oa'].includes(v)) {
          const x = [p[0], ar[0]];
          const y = [p[1], ar[1]];

          const xMin = Math.min(...x);
          const yMin = Math.min(...y);
          const xMax = Math.max(...x);
          const yMax = Math.max(...y);

          item.c = [
            xMin,
            yMin,
            xMax - xMin,
            yMax - yMin
          ];
        }
        // object rectangle, object square
        else if (['or', 'os'].includes(v)) {
          item.c = [
            ...p,
            ...ar
          ];
        }
        //  object circle, object ellipse
        else if (['oc', 'oe'].includes(v)) {
          if (v === 'oc') {
            item.c = [
              p[0] - ar[0],
              p[1] - ar[0],
              ar[0] * 2,
              ar[0] * 2
            ];
          }
          else {
            item.c = [
              p[0] - ar[0],
              p[1] - ar[1],
              ar[0] * 2,
              ar[1] * 2
            ];
          }
        }
        // object triangle, object triangle equilateral
        else if (['ot', 'ote'].includes(v)) {
          const [x1, y1, x2] = p;
          const { height } = s;

          item.c = [
            x1,
            y1 - height,
            x2 - x1,
            height
          ];
        }
        // image
        else if (['i', 't'].includes(v)) {
          item.c = [
            ...p,
            ...ar
          ];
        }
      }
    });
  };

  const onSelect = () => {
    const select = refs.select.current;

    if (!select) return;

    const px1 = select.p[0];
    const px2 = px1 + select.ar[0];
    const py1 = select.p[1];
    const py2 = py1 + select.ar[1];

    const min = {
      x: Math.min(px1, px2),
      y: Math.min(py1, py2)
    };

    const max = {
      x: Math.max(px1, px2),
      y: Math.max(py1, py2)
    };

    const items = getItems();

    items.forEach(item => {
      const { c } = item;

      const [x1, y1] = c;
      let [x2, y2] = c;

      x2 = x1 + x2;
      y2 = y1 + y2;

      const minItem = {
        x: Math.min(x1, x2),
        y: Math.min(y1, y2)
      };

      const maxItem = {
        x: Math.max(x1, x2),
        y: Math.max(y1, y2)
      };

      const selected = (minItem.x >= min.x && maxItem.x <= max.x) && (minItem.y >= min.y && maxItem.y <= max.y);

      if (selected) item.se = true;
    });
  };

  const onMouseUp = (event: MouseEvent) => {
    if (refs.mouseDown.current) {
      refs.select.current = null;

      // update coordinates
      onUpdateCoordinates();

      // reset
      reset();

      // remove
      removeItems();

      console.log('items', refs.items.current);

      // onChange
      onChange();

      setMouseDown(false);

      if (['circle', 'rectangle', 'triangle', 'line', 'line-arrow', 'image'].includes(refs.previousTool.current)) {
        setTool('select');
      }

      render();
    }
  };

  const updateTextBoxDimensions = (item: IWhiteboardItem) => {
    const ui = refs.ui.current.getContext('2d');

    const {
      lineHeight,
      padding
    } = refs.textSettings.current;

    ui.font = '16px Arial';

    const maxWidth = Math.max(...item.s.lines.map(line => ui.measureText(line).width));

    item.ar[0] = maxWidth + padding * 2.5;
    item.ar[1] = item.s.lines.length * lineHeight + padding * 2;
  };

  const getPath = (item: IWhiteboardItem) => {
    const path = new Path2D();

    const { v, p, ar } = item;

    // draw line
    if (v === 'dl') {
      const points = arrayToParts(p, 2);

      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];

        // calculate the control point for the curve
        const midX = (current[0] + next[0]) / 2;
        const midY = (current[1] + next[1]) / 2;

        if (i === 0) {
          // start from the first point
          path.moveTo(current[0], current[1]);
        }

        path.quadraticCurveTo(current[0], current[1], midX, midY);
      }
    }
    // draw point, object circle
    else if (['dp', 'oc'].includes(v) && ar.length === 3) {
      path.arc(p[0], p[1], ...ar as [number, number, number]);
    }
    // object ellipse
    else if (v === 'oe' && ar.length === 5) {
      path.ellipse(p[0], p[1], ...ar as [number, number, number, number, number]);
    }
    // object rectangle
    else if (['or', 'os'].includes(v)) {
      (path as any).roundRect(p[0], p[1], ...ar as [number, number, number]);
    }
    // object line
    else if (['ol', 'oa'].includes(v) && ar.length === 2) {
      path.moveTo(p[0], p[1]);
      path.lineTo(...ar as [number, number]);

      // draw an arrow
      if (v === 'oa') {
        // Length of the arrowhead
        const headLength = 40;
        const angle = Math.atan2(ar[1] - p[1], ar[0] - p[0]);

        path.moveTo(ar[0], ar[1]);
        path.lineTo(ar[0] - headLength * Math.cos(angle - Math.PI / 6), ar[1] - headLength * Math.sin(angle - Math.PI / 6));
        path.moveTo(ar[0], ar[1]);
        path.lineTo(ar[0] - headLength * Math.cos(angle + Math.PI / 6), ar[1] - headLength * Math.sin(angle + Math.PI / 6));
      }
    }
    // object triangle
    else if (['ot', 'ote'].includes(v)) {
      path.moveTo(p[0], p[1]);
      path.lineTo(p[2], p[3]);
      path.lineTo(p[4], p[5]);

      path.closePath();
    }

    return path;
  };

  const draw = (item: IWhiteboardItem) => {
    const ui = refs.ui.current.getContext('2d');

    // settings
    Object.keys(item.s || {}).forEach(key => ui[key] = item.s?.[key]);

    ui.globalAlpha = refs.remove.current.includes(item) ? 0.25 : item.s?.globalAlpha !== undefined ? item.s?.globalAlpha : 1;

    ui.beginPath();

    const path = getPath(item);

    const v = item.v;

    if (['dp'].includes(v)) ui.fill(path);
    else if (['dl', 'oc', 'oe', 'or', 'os', 'ol', 'oa', 'ot', 'ote'].includes(v)) ui.stroke(path);
  };

  const drawGrid = () => {
    const uiCanvas = refs.ui.current;

    const ui = refs.ui.current.getContext('2d');

    const zoom = refs.scale.current;

    const gridSize = 70;

    const offsetX = refs.move.current.x / zoom;
    const offsetY = refs.move.current.y / zoom;

    // Calculate start positions based on offsets
    const startX = Math.floor(-offsetX / gridSize) * gridSize;
    const startY = Math.floor(-offsetY / gridSize) * gridSize;

    const width = (uiCanvas.clientWidth * 1.5) / (zoom < 1 ? zoom : 1);
    const height = (uiCanvas.clientHeight * 1.5) / (zoom < 1 ? zoom : 1);

    if (gridSize < 30) return;

    // Draw main grid lines
    ui.globalAlpha = 1;
    ui.lineWidth = (zoom < 0.5 ? 0.3 : zoom <= 1 ? 0.5 : 0.7) / zoom;

    ui.strokeStyle = '#ccc';

    // grid
    for (let x = startX; x < width + Math.abs(startX); x += gridSize) {
      ui.beginPath();
      ui.moveTo(x, startY);
      ui.lineTo(x, height + startY);
      ui.stroke();
    }

    for (let y = startY; y < height + Math.abs(startY); y += gridSize) {
      ui.beginPath();
      ui.moveTo(startX, y);
      ui.lineTo(width + startX, y);
      ui.stroke();
    }

    // subgrid
    if (gridSize * zoom > 100) {
      // Draw subgrid lines if zoomed in
      const subGridSize = gridSize / 5;

      ui.lineWidth = (zoom <= 5 ? 0.6 : zoom <= 10 ? 0.8 : 1) / zoom;
      ui.strokeStyle = '#ddd';

      const dash = zoom < 1 ? 3 * zoom : 3 / zoom;

      ui.setLineDash([dash, dash]);

      for (let x = startX; x < width + Math.abs(startX); x += subGridSize) {
        // without overlap
        if (!(x % gridSize)) continue;

        ui.beginPath();
        ui.moveTo(x, startY);
        ui.lineTo(x, height + startY);
        ui.stroke();
      }

      for (let y = startY; y < height + Math.abs(startY); y += subGridSize) {
        // without overlap
        if (!(y % gridSize)) continue;

        ui.beginPath();
        ui.moveTo(startX, y);
        ui.lineTo(width + startX, y);
        ui.stroke();
      }

      ui.setLineDash([]); // Reset line dash
    }
  };

  const drawImage = (item: IWhiteboardItem) => {
    const ui = refs.ui.current.getContext('2d');

    ui.globalAlpha = 1;

    ui.drawImage(item.s.image || refs.image.current, ...item.p as [number, number], ...item.ar as [number, number]);
  };

  const drawCursor = (item: IWhiteboardItem) => {
    if (!item || !item.s.cursor) return;

    const ui = refs.ui.current.getContext('2d');

    const { line, char } = item.s.cursor;
    const currentLine = item.s.lines[line] || '';

    const textWidth = ui.measureText(currentLine.slice(0, char)).width;

    const {
      padding,
      lineHeight
    } = refs.textSettings.current;

    const cursorX = item.p[0] + padding + textWidth;
    const cursorY = item.p[1] + padding + (line + 1) * lineHeight;

    ui.fillStyle = 'black';
    ui.fillRect(cursorX, cursorY - lineHeight + 3, 2, lineHeight - 5);
  };

  const drawText = (item: IWhiteboardItem) => {
    const ui = refs.ui.current.getContext('2d');

    const zoom = refs.scale.current;

    const [x, y] = item.p;
    const [width, height] = item.ar;

    const {
      lineHeight,
      padding,
      fillStyle
    } = refs.textSettings.current;

    const selected = (refs.tool.current === 'text' && item.se);

    // Draw the box
    ui.globalAlpha = 1;
    ui.fillStyle = 'transparent';
    ui.fillRect(x, y, width, height);
    ui.lineWidth = 1 / zoom;
    ui.strokeStyle = selected ? colorSelect : 'transparent';
    ui.strokeRect(x, y, width, height);

    // Draw the text
    ui.fillStyle = fillStyle || 'black';
    ui.font = '16px Arial';

    item.s.lines.forEach((line: string, index: number) => {
      ui.fillText(line, x + padding, y + padding + (index + 1) * lineHeight - 5);
    });

    if (selected) drawCursor(item);
  };

  const drawSelect = (item: IWhiteboardItem) => {
    const ui = refs.ui.current.getContext('2d');

    const [x, y, width, height] = item.c || [];

    const path = new Path2D();

    path.rect(x, y, width, height);

    ui.globalAlpha = 1;
    ui.strokeStyle = colorSelect;
    ui.lineCap = 'square';
    ui.lineJoin = 'bevel';
    ui.lineWidth = 1 / refs.scale.current;

    ui.stroke(path);
  };

  const drawSelection = () => {
    const ui = refs.ui.current.getContext('2d');

    const zoom = refs.scale.current;

    // canvas selection
    const select = refs.select.current;

    if (select) {
      ui.globalAlpha = 1;
      ui.globalCompositeOperation = 'source-over';
      ui.lineWidth = 1 / zoom;
      ui.lineCap = 'square';
      ui.lineJoin = 'bevel';
      ui.strokeStyle = colorSelect;
      ui.fillStyle = colorSelectBackground;

      const path = getPath(select);

      ui.fill(path);
      ui.stroke(path);
    }
  };

  const render = () => {
    const ui = refs.ui.current.getContext('2d');

    const items = refs.items.current.filter(Boolean);

    // methods
    ui.clearRect(0, 0, refs.ui.current.width, refs.ui.current.height);

    ui.save();

    // pan
    ui.translate(refs.move.current.x, refs.move.current.y);
    // zoom
    ui.scale(refs.scale.current, refs.scale.current);

    // grid
    if (refs.grid.current) drawGrid();

    // draw
    items.forEach(item => {
      // image
      if (item.v === 'i' && item.ar.length === 2) drawImage(item);
      // text
      else if (item.v === 't') drawText(item);
      // other
      else draw(item);

      // select
      if (item.se) drawSelect(item);
    });

    // canvas selection
    drawSelection();

    ui.restore();
  };

  // Snap angle to nearest multiple of 15 degrees
  const snapToAngle = (dx: number, dy: number) => {
    // Current angle in radians
    const angle = Math.atan2(dy, dx);
    // Snap to nearest 15 degrees
    const snappedAngle = Math.round(angle / (Math.PI / 12)) * (Math.PI / 12);
    // Length of the vector
    const length = Math.sqrt(dx * dx + dy * dy);

    return {
      x: Math.cos(snappedAngle) * length,
      y: Math.sin(snappedAngle) * length
    };
  };

  const onMoveItems = (x: number, y: number) => {
    const itemsSelected = getItems(true);

    itemsSelected.forEach(item => {
      const v = item.v;

      // draw line
      if (v === 'dl') {
        item.p = item.p.map((value, index) => {
          return index % 2 ? value + y : value + x;
        });
      }

      // rectangle, draw point, object circle, ellipse, object line, object arrow, object triangle, image, text
      if (['or', 'os', 'dp', 'oc', 'oe', 'ol', 'oa', 'ot', 'ote', 'i', 't'].includes(v)) {
        item.p[0] += x;
        item.p[1] += y;
      }

      // object line
      if (['ol', 'oa'].includes(v)) {
        item.ar[0] += x;
        item.ar[1] += y;
      }

      // object triangle
      if (['ot', 'ote'].includes(v)) {
        item.p[2] += x;
        item.p[4] += x;

        item.p[3] += y;
        item.p[5] += y;
      }
    });

    onUpdateCoordinates();
  };

  const onMove = (body: any, event: MouseEvent) => {
    if (!refs.on.current) return;

    const { offsetX: x, offsetY: y, clientX, clientY } = body;

    const xo = transform(x - refs.move.current.x);

    const yo = transform(y - refs.move.current.y);

    const ui = refs.ui.current.getContext('2d');

    const rect = refs.ui.current.getBoundingClientRect();

    const currentX = clientX - rect.left;

    const currentY = clientY - rect.top;

    const start = refs.start.current;

    const startTransformed = {
      x: transform(start.x - refs.move.current.x),
      y: transform(start.y - refs.move.current.y)
    };

    const item = getItem();

    const items = getItems();

    const t = refs.tool.current;

    const shiftKey = event.shiftKey;

    const zoom = refs.scale.current;

    refs.mouseMove.current.current = { x: clientX / zoom, y: clientY / zoom };
    refs.mouseMove.current.delta = { x: refs.mouseMove.current.previous ? refs.mouseMove.current.current.x - refs.mouseMove.current.previous.x : 0, y: refs.mouseMove.current.previous ? refs.mouseMove.current.current.y - refs.mouseMove.current.previous.y : 0 };
    refs.mouseMove.current.previous = { ...refs.mouseMove.current.current };

    const delta = refs.mouseMove.current.delta;

    // select
    if (t === 'select') {
      if (!refs.moveStarted.current) refs.moveStarted.current = true;

      if (refs.select.current) {
        unselectAll();

        const width = currentX - start.x;
        const height = currentY - start.y;
        const isSquare = shiftKey;
        const radius = 0;

        if (isSquare) {
          const side = Math.min(Math.abs(width), Math.abs(height));

          refs.select.current.v = 'os';
          refs.select.current.p = [startTransformed.x, startTransformed.y];
          refs.select.current.ar = [transform(Math.sign(width) * side), transform(Math.sign(height) * side), radius];
        } else {
          refs.select.current.v = 'or';
          refs.select.current.p = [startTransformed.x, startTransformed.y];
          refs.select.current.ar = [transform(width), transform(height), radius];
        }
      }
      else onMoveItems(delta.x, delta.y);
    }
    // pen
    else if (t === 'pen' && item) {
      // same path from draw point, to move
      if (!refs.moveStarted.current) {
        item.v = 'dl';

        refs.moveStarted.current = true;
      }

      // Add the current point to the path
      item.p.push(xo, yo);
    }
    // pan
    else if (t === 'pan') {
      refs.move.current.x = x - refs.previous.current.x + refs.offset.current.x;
      refs.move.current.y = y - refs.previous.current.y + refs.offset.current.y;
    }
    // eraser
    else if (t === 'eraser') {
      // find all items that x, y collides with, with certain radius
      for (const i of items) {
        const isPointInStroke = ui.isPointInStroke(getPath(i), xo, yo);

        if (isPointInStroke) refs.remove.current.push(i);
      }
    }
    // object line, object arrow
    else if (['line', 'line-arrow'].includes(t)) {
      const snapAt15Degrees = shiftKey;

      let endX = currentX;
      let endY = currentY;

      if (snapAt15Degrees) {
        const snapped = snapToAngle(currentX - start.x, currentY - start.y);

        endX = start.x + snapped.x;
        endY = start.y + snapped.y;
      }

      item.v = t === 'line' ? 'ol' : 'oa';
      item.p = [startTransformed.x, startTransformed.y];
      item.ar = [transform(endX - refs.move.current.x), transform(endY - refs.move.current.y)];
    }
    // object circle
    else if (t === 'circle') {
      const width = currentX - start.x;
      const height = currentY - start.y;
      const isCircle = shiftKey;

      if (isCircle) {
        const radius = Math.min(Math.abs(width), Math.abs(height)) / 2;
        const centerX = start.x + Math.sign(width) * radius;
        const centerY = start.y + Math.sign(height) * radius;

        item.v = 'oc';
        item.p = [transform(centerX - refs.move.current.x), transform(centerY - refs.move.current.y)];
        item.ar = [transform(radius), 0, Math.PI * 2];
      }
      else {
        item.v = 'oe';
        item.p = [transform((start.x + width / 2) - refs.move.current.x), transform((start.y + height / 2) - refs.move.current.y)];
        item.ar = [transform(Math.abs(width) / 2), transform(Math.abs(height) / 2), 0, 0, Math.PI * 2];
      }
    }
    // object rectangle
    else if (t === 'rectangle') {
      const width = currentX - start.x;
      const height = currentY - start.y;
      const isSquare = shiftKey;
      const radius = 0;

      if (isSquare) {
        const side = Math.min(Math.abs(width), Math.abs(height));

        item.v = 'os';
        item.p = [startTransformed.x, startTransformed.y];
        item.ar = [transform(Math.sign(width) * side), transform(Math.sign(height) * side), radius];
      } else {
        item.v = 'or';
        item.p = [startTransformed.x, startTransformed.y];
        item.ar = [transform(width), transform(height), radius];
      }
    }
    // object triangle
    else if (['triangle'].includes(t)) {
      const endX = xo;
      const endY = yo;

      const base = Math.abs(endX - startTransformed.x);
      const height = shiftKey ? base * Math.sqrt(3) / 2 : Math.abs(endY - startTransformed.y);

      const points = [startTransformed.x, startTransformed.y, endX, startTransformed.y, startTransformed.x + (endX - startTransformed.x) / 2, startTransformed.y - height];

      item.v = shiftKey ? 'ote' : 'ot';
      item.p = points;
      item.s = {
        ...item.s,

        height
      };
    }
    // image
    else if (t === 'image' && (refs.image.current.complete && refs.image.current.src)) {
      const width = transform(currentX - start.x);
      const height = transform(currentY - start.y);

      const keepAspectRatio = !shiftKey;

      let currentWidth: number;
      let currentHeight: number;

      if (keepAspectRatio) {
        if (Math.abs(width / refs.aspectRatio.current) <= Math.abs(height)) {
          currentWidth = width;
          currentHeight = width / refs.aspectRatio.current;
        } else {
          currentWidth = height * refs.aspectRatio.current;
          currentHeight = height;
        }
      } else {
        currentWidth = width;
        currentHeight = height;
      }

      if (keepAspectRatio) {
        if (
          (width < 0 && currentWidth > 0) ||
          (width > 0 && currentWidth < 0)
        ) currentWidth *= -1;

        if (
          (height < 0 && currentHeight > 0) ||
          (height > 0 && currentHeight < 0)
        ) currentHeight *= -1;
      }

      item.p = [startTransformed.x, startTransformed.y];
      item.ar = [currentWidth, currentHeight];
    }

    // select box
    onSelect();

    // render
    render();
  };

  const onMouseMove = (event: MouseEvent) => {
    const { offsetX, offsetY, clientX, clientY } = event;

    onMove({ offsetX, offsetY, clientX, clientY }, event);
  };

  const onTouchMove = (event: TouchEvent) => {
    // Get the first touch point
    const touch = event.touches[0];

    const { clientX, clientY } = touch as any;
    let { offsetX, offsetY } = touch as any;

    const targetElement = touch.target;

    if (targetElement instanceof HTMLElement) {
      // Get the bounding rectangle of the target element
      const rect = targetElement.getBoundingClientRect();

      // Calculate the offsetX and offsetY
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;
    }

    onMove({ offsetX, offsetY, clientX, clientY }, event as any);
  };

  const undo = () => {
    if (!refs.undo.current.length) return;

    // add current state to redo
    refs.redo.current.push([...getItems()]);

    // restore the undo state
    refs.items.current = refs.undo.current.pop();

    // render
    render();
  };

  const redo = () => {
    if (!refs.redo.current.length) return;

    // add current state to undo
    refs.undo.current.push([...getItems()]);

    // restore the redo state
    refs.items.current = refs.redo.current.pop();

    // render
    render();
  };

  const onWheel = (eventReact: React.WheelEvent) => {
    const event = eventReact.nativeEvent;

    // zoom
    if (event.metaKey || event.ctrlKey) {
      setTool('zoom');

      refs.toolUpdateAuto.current = true;

      const zoomFactor = 1.054;
      const mouseX = event.offsetX;
      const mouseY = event.offsetY;

      const scale = refs.scale.current;

      // Convert mouse position to canvas coordinates
      const canvasX = (mouseX - refs.move.current.x) / scale;
      const canvasY = (mouseY - refs.move.current.y) / scale;

      // Adjust scale
      const zoomIn = event.deltaY < 0;

      const newScale = zoomIn ? scale * zoomFactor : scale / zoomFactor;

      if (newScale <= (maxZoom / 100) && newScale >= (minZoom / 100)) {
        // Update origin to focus on mouse position
        refs.move.current.x -= canvasX * (newScale - scale);
        refs.move.current.y -= canvasY * (newScale - scale);

        refs.scale.current = newScale;

        render();
      }
    }
    // pan
    else if (!refs.mouseDown.current) {
      refs.move.current.x -= event.deltaX;
      refs.move.current.y -= event.deltaY;

      render();
    }
  };

  const onPaste = (event: ClipboardEvent) => {
    event.preventDefault();

    // Get clipboard data
    const items = Array.from(event.clipboardData.items);

    // Loop through clipboard items to find an image
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        // Get the image file
        const blob = item.getAsFile();

        refs.image.current = new Image();

        // Load the image and draw it on the canvas
        refs.image.current.onload = () => {
          refs.aspectRatio.current = refs.image.current.width / refs.image.current.height;

          // Todo
          // 1) Upload the image first, than read it in image src
          // 2) Add url of the image
          // instead of embeding the image
          const item_: IWhiteboardItem = {
            i: getID(),
            v: 'i',
            p: [],
            ar: [],
            s: {
              // Todo
              // remove in the future
              image: refs.image.current,
              aspectRatio: refs.aspectRatio.current
            },
            a: OnesyDate.milliseconds
          };

          add(item_);

          setTool('image');
        };

        // Create an object URL for the blob and set it as the image source
        refs.image.current.src = URL.createObjectURL(blob);

        break;
      }
    }
  };

  React.useEffect(() => {
    const method = () => {
      const width = refs.root.current.offsetWidth;
      const height = refs.root.current.offsetHeight;

      setSize({ width, height });
    };

    const onKeyUp = (event: KeyboardEvent) => {
      if (refs.toolUpdateAuto.current) setTool(refs.previousTool.current || 'pen');
    };

    const onKeyDown = async (event: KeyboardEvent) => {
      refs.toolUpdateAuto.current = false;

      const { key } = event;

      const itemsAll = [...refs.items.current].filter(Boolean);

      const t = refs.tool.current;

      const zoom = refs.scale.current;

      if (['a', 'A'].includes(key) && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();

        selectAll();

        render();
      }
      else if (t === 'select' && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Backspace'].includes(key)) {
        const value = event.shiftKey ? 10 : 1;

        if (key === 'ArrowUp') onMoveItems(0, -value / zoom);

        if (key === 'ArrowDown') onMoveItems(0, value / zoom);

        if (key === 'ArrowLeft') onMoveItems(-value / zoom, 0);

        if (key === 'ArrowRight') onMoveItems(value / zoom, 0);

        if (key === 'Backspace') {
          const toRemove = [];

          refs.items.current.forEach(item => {
            if (item.se) toRemove.push(item);
          });

          if (toRemove.length) remove(toRemove);
        }

        render();
      }
      else if (key === 'Escape') {
        setTool('select');

        refs.textActive.current = null;

        unselectAll();

        filterItems();

        render();
      }
      else if (tool === 'text') {
        const selectedTextBox = itemsAll.find(item => item.v === 't' && item.se);

        if (!selectedTextBox) return;

        const { line, char } = selectedTextBox.s.cursor;

        const lines = selectedTextBox.s.lines;
        const currentLine = lines[line];

        if (['ArrowLeft', 'ArrowRight'].includes(key)) {
          event.preventDefault();

          selectedTextBox.s.cursor.char += key === 'ArrowLeft' ? -1 : 1;

          if (selectedTextBox.s.cursor.char < 0) {
            selectedTextBox.s.cursor.line--;
            selectedTextBox.s.cursor.char = lines[selectedTextBox.s.cursor.line]?.length;
          }
          else if ((selectedTextBox.s.cursor.char > lines[line]?.length) && line !== lines.length - 1) {
            selectedTextBox.s.cursor.line++;
            selectedTextBox.s.cursor.char = 0;
          }

          selectedTextBox.s.cursor.line = clamp(selectedTextBox.s.cursor.line, 0, lines.length - 1);
          selectedTextBox.s.cursor.char = clamp(selectedTextBox.s.cursor.char, 0, lines[selectedTextBox.s.cursor.line]?.length);
        }
        if (['ArrowUp', 'ArrowDown'].includes(key)) {
          event.preventDefault();

          selectedTextBox.s.cursor.line += key === 'ArrowUp' ? -1 : 1;

          selectedTextBox.s.cursor.line = clamp(selectedTextBox.s.cursor.line, 0, lines.length - 1);
          selectedTextBox.s.cursor.char = clamp(selectedTextBox.s.cursor.char, 0, lines[selectedTextBox.s.cursor.line]?.length);
        }
        else if (key === 'Enter') {
          event.preventDefault();

          const newLine = currentLine.slice(char);

          lines[line] = currentLine.slice(0, char);
          lines.splice(line + 1, 0, newLine);
          selectedTextBox.s.cursor.line++;
          selectedTextBox.s.cursor.char = 0;
        }
        else if (key === 'Backspace') {
          event.preventDefault();

          if (char > 0) {
            lines[line] = currentLine.slice(0, char - 1) + currentLine.slice(char);
            selectedTextBox.s.cursor.char--;
          }
          else if (line > 0) {
            const prevLine = lines[line - 1];

            selectedTextBox.s.cursor.char = prevLine.length;
            lines[line - 1] += lines[line];
            lines.splice(line, 1);
            selectedTextBox.s.cursor.line--;
          }
        }
        else if (key.length === 1) {
          if ([' '].includes(key)) event.preventDefault();

          let textClipboard = '';

          const isPaste = (event.ctrlKey || event.metaKey) && ['v', 'V'].includes(key);

          if (isPaste) {
            try {
              textClipboard = await window.navigator.clipboard.readText();
            } catch (error) { }
          }

          const text = isPaste ? textClipboard : key;

          selectedTextBox.s.lines[line] = currentLine.slice(0, char) + text + currentLine.slice(char);
          selectedTextBox.s.cursor.char += text.length;
        }

        updateTextBoxDimensions(selectedTextBox);

        selectedTextBox.c = [
          ...selectedTextBox.p,
          ...selectedTextBox.ar
        ];

        render();
      }
      else {
        if (event.metaKey && key === 'z') {
          if (event.shiftKey) redo();
          else undo();
        }

        if (key === ' ') {
          refs.toolUpdateAuto.current = true;

          setTool('pan');
        }

        // tools
        if (event.shiftKey) {
          if (['E', 'D', 'P', 'S', 'C', 'R', 'I', 'L', 'A', 'T', 'G'].includes(key)) refs.toolUpdateAuto.current = false;

          if (key === 'E') setTool('eraser');

          if (key === 'D') setTool('pen');

          if (key === 'P') setTool('pan');

          if (key === 'S') setTool('select');

          if (key === 'C') setTool('circle');

          if (key === 'R') setTool('rectangle');

          if (key === 'I') setTool('triangle');

          if (key === 'L') setTool('line');

          if (key === 'A') setTool('line-arrow');

          if (key === 'T') setTool('text');

          if (key === 'G') {
            setGrid(previous => !previous);

            render();
          }
        }
      }
    };

    window.addEventListener('resize', method);

    window.document.addEventListener('mouseup', onMouseUp);

    window.document.addEventListener('touchend', onMouseUp);

    window.document.addEventListener('mousemove', onMouseMove);

    window.document.addEventListener('touchmove', onTouchMove);

    window.document.addEventListener('keyup', onKeyUp);

    window.document.addEventListener('keydown', onKeyDown);

    window.document.addEventListener('paste', onPaste);

    method();

    init();

    return () => {
      window.removeEventListener('resize', method);

      window.document.removeEventListener('mouseup', onMouseUp);

      window.document.removeEventListener('touchend', onMouseUp);

      window.document.removeEventListener('mousemove', onMouseMove);

      window.document.removeEventListener('touchmove', onTouchMove);

      window.document.removeEventListener('keyup', onKeyUp);

      window.document.removeEventListener('keydown', onKeyDown);

      window.document.removeEventListener('paste', onPaste);
    };
  }, []);

  const onChangeInputFile = (event: Event) => {
    const file = (event.target as HTMLInputElement).files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = eventReader => {
        refs.image.current = new Image();

        refs.image.current.src = eventReader.target.result as any;

        refs.toolUpdateAuto.current = true;

        (event.target as HTMLInputElement).value = '';

        setTool('image');
      };

      reader.readAsDataURL(file);
    }
  };

  const propsCanvas: any = {
    width: size.width,
    height: size.height,

    disabled: !loaded,

    style: {
      width: size.width,
      height: size.height,
    }
  };

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      flex

      fullWidth

      className={classNames([
        staticClassName('Whiteboard', theme) && [
          'onesy-Whiteboard-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <div id='controls' style={{ position: 'absolute', zIndex: 14, top: 12, left: '50%' }}>
        <input
          type='file'

          accept='image/*'

          onChange={onChangeInputFile as any}
        />
      </div>

      <canvas
        ref={refs.ui}

        onMouseDown={onMouseDown}

        onTouchStart={onTouchStart}

        onWheel={onWheel}

        className={classNames([
          classes.canvas,
          classes.interactive,
          tool === 'pan' && classes[!mouseDown ? 'pan' : 'panning'],
          tool === 'image' && classes.image,
          tool === 'text' && classes.text,
          ['pen', 'eraser', 'zoom'].includes(tool) && classes[tool],
          ['circle', 'rectangle', 'triangle', 'line', 'arrow'].includes(tool) && classes.object
        ])}

        {...propsCanvas}
      />
    </Line>
  );
};

Whiteboard.displayName = 'onesy-Whiteboard';

export default Whiteboard;
