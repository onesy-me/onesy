import React from 'react';

import { is, unique, clamp, debounce, equalDeep, TMethod, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';
import OnesySubscription from '@onesy/subscription';

import IconMaterialNavigateBefore from '@onesy/icons-material-rounded-react/IconMaterialNavigateBeforeW100';
import IconMaterialNavigateNext from '@onesy/icons-material-rounded-react/IconMaterialNavigateNextW100';

import IconElement from '../Icon';
import LineElement from '../Line';
import FadeElement from '../Fade';
import IconButtonElement from '../IconButton';
import TransitionsElement from '../Transitions';
import SurfaceElement from '../Surface';
import useMediaQuery from '../useMediaQuery';
import { ISurface } from '../Surface/Surface';
import { valueBreakpoints, staticClassName } from '../utils';
import { IElement, IValueBreakpoints, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '540px',
    overflow: 'hidden'
  },

  autoHeight: {
    transition: theme.methods.transitions.make('height')
  },

  item: {
    width: '100%',
    height: '100%',
    flex: '0 0 auto',

    '& img': {
      width: 'auto',
      maxHeight: '100%'
    }
  },

  item_transition: {
    position: 'absolute',
    width: '100%',
    height: '100%',

    '& img': {
      width: 'auto',
      maxHeight: '100%'
    }
  },

  item_version_regular_autoHeight: {
    width: '100%',
    height: 'unset'
  },

  item_version_transition_autoHeight: {
    width: '100%',
    height: 'unset'
  },

  item_itemSize_auto: {
    width: 'auto',
    height: 'auto'
  },

  background: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },

  carousel: {
    position: 'relative',
    width: '100%',
    height: '100%',
    touchAction: 'none'
  },

  carousel_version_regular: {
    transition: theme.methods.transitions.make('transform')
  },

  progress: {
    position: 'absolute'
  },

  progress_orientation_horizontal: {
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '24px'
  },

  progress_orientation_vertical: {
    height: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '24px'
  },

  progress_item: {
    width: '5px',
    height: '5px',
    backgroundColor: 'currentColor',
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    cursor: 'pointer',
    transition: theme.methods.transitions.make('transform'),

    '&:hover': {
      transform: 'scale(1.4)'
    }
  },

  progress_item_active: {
    transform: 'scale(1.7)'
  },

  arrow: {
    position: 'absolute !important'
  },

  arrow_previous: {},

  arrow_previous_orientation_horizontal: {
    top: '50%',
    transform: 'translateY(-50%)',
    left: '24px'
  },

  arrow_previous_orientation_vertical: {
    left: '50%',
    transform: 'translateX(-50%)',
    top: '24px'
  },

  arrow_next: {},

  arrow_next_orientation_horizontal: {
    top: '50%',
    transform: 'translateY(-50%)',
    right: '24px'
  },

  arrow_next_orientation_vertical: {
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '24px'
  },

  icon_previous_orientation_vertical: {
    transform: 'rotate(90deg)'
  },

  icon_next_orientation_vertical: {
    transform: 'rotate(90deg)'
  }
}), { name: 'onesy-Carousel' });

export type ICarouselValue = {
  index?: number;
  x?: number;
  y?: number;
};

export type TCarouselItem = string | null | IElement | { element: IElement; };

export type TCarouseOnUpdate = (to: string | number, values: TCarouselItem[]) => any;

export type ICarousel = Omit<ISurface, 'version' | 'onChange'> & {
  version?: 'regular' | 'transition' | Partial<Record<IValueBreakpoints, 'regular' | 'transition'>>;

  valueDefault?: ICarouselValue;
  value?: ICarouselValue;

  onChange?: (value: ICarouselValue) => any;

  // id if it updates
  // update items
  id?: any;

  // Array of string or object
  // object having element as a string or element
  // and a transition element
  items?: Array<TCarouselItem>;

  orientation?: 'vertical' | 'horizontal' | Partial<Record<IValueBreakpoints, 'vertical' | 'horizontal'>>;

  itemSize?: 'auto' | Partial<Record<IValueBreakpoints, 'auto' | false>>;

  gap?: number | Partial<Record<IValueBreakpoints, number>>;

  move?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  // How much in value to move on move
  moveValue?: number | Partial<Record<IValueBreakpoints, number>>;

  // How many items to move on move
  moveItems?: number | Partial<Record<IValueBreakpoints, number>>;

  moveBeyondEdge?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  free?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  swipe?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  background?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  index?: number;

  autoPlay?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  autoHeight?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  autoHeightDelay?: number;

  autoPlayInterval?: number;

  pauseOnHover?: boolean;

  round?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  arrows?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  mouseScroll?: boolean;

  momentum?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  // OnesySubscription methods
  previousSub?: OnesySubscription;
  nextSub?: OnesySubscription;
  updateSub?: OnesySubscription;

  // on mobile visible
  arrowsVisibility?: 'hover' | 'visible' | Partial<Record<IValueBreakpoints, 'hover' | 'visible'>>;

  arrowHideOnStartEnd?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  renderProgress?: (update: TCarouseOnUpdate) => IElement;

  renderArrowPrevious?: (update: () => any) => IElement;
  renderArrowNext?: (update: () => any) => IElement;

  progress?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  // on mobile visible
  progressVisibility?: 'hover' | 'visible' | Partial<Record<IValueBreakpoints, 'hover' | 'visible'>>;

  start?: any;

  end?: any;

  noTransition?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  onUpdatePosition?: (value: ICarouselValue) => any;

  onInit?: TMethod;

  onUpdateItems?: TMethod;

  onBlur?: (event: React.FocusEvent<any>) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;
  onMouseEnte?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;

  TransitionComponent?: IElementReference;

  ProgressTransitionComponent?: IElementReference;

  ArrowTransitionComponent?: IElementReference;
  ArrowPreviousTransitionComponent?: IElementReference;
  ArrowNextTransitionComponent?: IElementReference;

  IconButtonPrevious?: IElement;
  IconButtonNext?: IElement;

  IconPrevious?: IElementReference;
  IconNext?: IElementReference;

  ArrowProps?: IPropsAny;
  ArrowPreviousProps?: IPropsAny;
  ArrowNextProps?: IPropsAny;
  CarouselProps?: IPropsAny;
  TransitionsProps?: IPropsAny;
  TransitionComponentProps?: IPropsAny;
  ArrowTransitionComponentProps?: IPropsAny;
  ArrowPreviousTransitionComponentProps?: IPropsAny;
  ArrowNextTransitionComponentProps?: IPropsAny;
  ProgressTransitionComponentProps?: IPropsAny;
  ItemWrapperProps?: IPropsAny;
};

const Carousel: React.FC<ICarousel> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCarousel?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Transitions = React.useMemo(() => theme?.elements?.Transitions || TransitionsElement, [theme]);

  const {
    tonal = true,
    color = 'default',

    version: version_,

    valueDefault,
    value: value_,

    onChange,

    // id if it updates
    // update items
    id,

    // Array of string or object
    // object having element as a string or element
    // and a transition element
    items: items_,

    orientation: orientation_,

    itemSize: itemSize_,

    gap: gap_,

    move: move_,

    moveValue: moveValue_,

    moveItems: moveItems_,

    moveBeyondEdge: moveBeyondEdge_,

    free: free_,

    swipe: swipe_,

    background: background_,

    index: index_,

    autoPlay: autoPlay_,

    autoHeight: autoHeight_,

    autoHeightDelay = theme.transitions.duration.rg + 14,

    autoPlayInterval = 4000,

    pauseOnHover = true,

    round: round_,

    arrows: arrows_,

    mouseScroll,

    momentum: momentum_,

    // OnesySubscription methods
    previousSub,
    nextSub,
    updateSub,

    // on mobile visible
    arrowsVisibility: arrowsVisibility_,

    arrowHideOnStartEnd: arrowHideOnStartEnd_,

    renderProgress,

    renderArrowPrevious,
    renderArrowNext,

    progress: progress_,

    // on mobile visible
    progressVisibility: progressVisibility_,

    start: start_,

    end: end_,

    noTransition: noTransition_,

    onUpdatePosition: onUpdatePosition_,

    onInit,

    onUpdateItems,

    onBlur: onBlur_,
    onFocus: onFocus_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,

    TransitionComponent: TransitionComponent_ = Fade,

    ProgressTransitionComponent = Fade,

    ArrowTransitionComponent = Fade,
    ArrowPreviousTransitionComponent,
    ArrowNextTransitionComponent,

    IconButtonPrevious,
    IconButtonNext,

    IconPrevious = IconMaterialNavigateBefore,
    IconNext = IconMaterialNavigateNext,

    ArrowProps,
    ArrowPreviousProps: ArrowPreviousProps_,
    ArrowNextProps: ArrowNextProps_,
    CarouselProps,
    TransitionsProps,
    TransitionComponentProps,
    ArrowTransitionComponentProps,
    ArrowPreviousTransitionComponentProps,
    ArrowNextTransitionComponentProps,
    ProgressTransitionComponentProps,
    ItemWrapperProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    item: React.useRef<any>(undefined),
    items: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    autoPlayTimeout: React.useRef<any>(undefined),
    autoPlay: React.useRef<any>(undefined),
    carousel: React.useRef<any>(undefined),
    mouseDown: React.useRef<any>(undefined),
    focus: React.useRef<any>(undefined),
    gap: React.useRef<any>(undefined),
    previousMouseEvent: React.useRef<any>(undefined),
    move: React.useRef<any>(undefined),
    moveValue: React.useRef<any>(undefined),
    moveItems: React.useRef<any>(undefined),
    moveBeyondEdge: React.useRef<any>(undefined),
    free: React.useRef<any>(undefined),
    swipe: React.useRef<any>(undefined),
    mouseDownPosition: React.useRef<any>(undefined),
    mouseDownStart: React.useRef<any>(undefined),
    mouseDownDuration: React.useRef<any>(undefined),
    orientation: React.useRef<any>(undefined),
    version: React.useRef<any>(undefined),
    itemSize: React.useRef<any>(undefined),
    itemsLength: React.useRef<any>(undefined),
    momentum: React.useRef<any>(undefined),
    round: React.useRef<any>(undefined),
    velocity: React.useRef<any>(undefined),
    momentumID: React.useRef<any>(undefined),
    width: React.useRef<any>(undefined),
    onInit: React.useRef<any>(undefined),
    ids: {
      items: React.useId()
    }
  };

  const keys = React.useMemo(() => {
    const result = [];
    const properties = [version_, orientation_, itemSize_, gap_, move_, moveValue_, moveItems_, moveBeyondEdge_, swipe_, background_, autoPlay_, autoHeight_, round_, arrows_, arrowsVisibility_, arrowHideOnStartEnd_, progress_, progressVisibility_, noTransition_];

    properties.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [version_, orientation_, itemSize_, gap_, move_, moveValue_, moveItems_, moveBeyondEdge_, swipe_, background_, autoPlay_, autoHeight_, round_, arrows_, arrowsVisibility_, arrowHideOnStartEnd_, progress_, progressVisibility_, noTransition_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const version = valueBreakpoints(version_, 'regular', breakpoints, theme);
  const orientation = valueBreakpoints(orientation_, 'horizontal', breakpoints, theme);
  const itemSize = valueBreakpoints(itemSize_, undefined, breakpoints, theme);
  const gap = valueBreakpoints(gap_, 4, breakpoints, theme);
  const move = valueBreakpoints(move_, true, breakpoints, theme);
  const moveValue = valueBreakpoints(moveValue_, undefined, breakpoints, theme);
  const moveItems = valueBreakpoints(moveItems_, undefined, breakpoints, theme);
  const moveBeyondEdge = valueBreakpoints(moveBeyondEdge_, true, breakpoints, theme);
  const swipe = valueBreakpoints(swipe_, true, breakpoints, theme);
  const background = valueBreakpoints(background_, true, breakpoints, theme);
  const autoPlay = valueBreakpoints(autoPlay_, undefined, breakpoints, theme);
  const autoHeight = valueBreakpoints(autoHeight_, undefined, breakpoints, theme);
  const round = valueBreakpoints(round_, true, breakpoints, theme);
  const arrows = valueBreakpoints(arrows_, true, breakpoints, theme);
  const arrowsVisibility = valueBreakpoints(arrowsVisibility_, 'hover', breakpoints, theme);
  const arrowHideOnStartEnd = valueBreakpoints(arrowHideOnStartEnd_, undefined, breakpoints, theme);
  const progress = valueBreakpoints(progress_, true, breakpoints, theme);
  const progressVisibility = valueBreakpoints(progressVisibility_, 'hover', breakpoints, theme);
  const noTransition = valueBreakpoints(noTransition_, undefined, breakpoints, theme);

  let free = valueBreakpoints(free_, undefined, breakpoints, theme);

  let momentum = valueBreakpoints(momentum_, undefined, breakpoints, theme);

  if (momentum && version !== 'regular') momentum = false;

  if (momentum) free = true;

  if (free && momentum === undefined) momentum = true;

  const [init, setInit] = React.useState<any>();
  const [items, setItems] = React.useState(items_ || []);
  const [value, setValue] = React.useState<any>(valueDefault !== undefined ? valueDefault : value_);
  const [hover, setHover] = React.useState<any>();
  const [mouseDown, setMouseDown] = React.useState<any>();
  const [focus, setFocus] = React.useState<any>();

  const styles: any = {
    carousel: {}
  };

  refs.items.current = items;

  refs.value.current = value;

  refs.gap.current = gap;

  refs.mouseDown.current = mouseDown;

  refs.focus.current = focus;

  refs.move.current = move;

  refs.moveValue.current = moveValue;

  refs.moveItems.current = moveItems;

  refs.moveBeyondEdge.current = moveBeyondEdge;

  refs.free.current = free;

  refs.swipe.current = swipe;

  refs.orientation.current = orientation;

  refs.version.current = version;

  refs.itemSize.current = itemSize;

  refs.momentum.current = momentum;

  refs.round.current = round;

  refs.onInit.current = onInit;

  const { scrollWidth, scrollHeight } = (refs.carousel.current || {});

  const { width, height } = (refs.carousel.current?.getBoundingClientRect() || {});

  refs.width.current = width;

  refs.itemsLength.current = items.length;

  if (itemSize === 'auto') {
    if (moveValue) refs.itemsLength.current = orientation === 'horizontal' ? Math.ceil(scrollWidth / moveValue) : Math.ceil(scrollHeight / moveValue);

    if (moveItems) refs.itemsLength.current = Math.ceil(items.length / clamp(moveItems, 1, items.length));
  }

  const updateValue = (valueNew: any) => {
    setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const momentumClear = () => {
    cancelAnimationFrame(refs.momentumID.current);
  };

  const momentumMethod = () => {
    const valueNew = refs.orientation.current === 'horizontal' ? (refs.value.current?.x || 0) + refs.velocity.current : (refs.value.current?.y || 0) + refs.velocity.current;

    const { width: width_, height: height_ } = refs.carousel.current.getBoundingClientRect();

    const { scrollWidth: scrollWidth_, scrollHeight: scrollHeight_ } = refs.carousel.current;

    if (refs.orientation.current === 'horizontal') {
      const min = 0;
      let max = ((width_ + (gap * theme.space.unit)) * (refs.itemsLength.current - 1));

      if (refs.itemSize.current === 'auto') {
        max = (scrollWidth_ - (scrollWidth_ / refs.itemsLength.current)) + ((gap * theme.space.unit) * (refs.itemsLength.current - 1));
      }

      refs.value.current = {
        ...refs.value.current,

        index: Math.floor(valueNew / (max / (refs.itemsLength.current - 1))),

        x: valueNew
      };

      if (valueNew <= min || valueNew >= max) {
        // Done
        return (refs.carousel.current as HTMLElement)?.style.removeProperty('transition');
      }
      else {
        refs.value.current = {
          ...refs.value.current,

          index: Math.floor(valueNew / (max / (refs.itemsLength.current - 1))),

          x: valueNew
        };

        onUpdatePosition(refs.value.current);
      }
    }

    if (refs.orientation.current === 'vertical') {
      const min = 0;
      let max = ((height_ + (gap * theme.space.unit)) * (refs.itemsLength.current - 1));

      if (refs.itemSize.current === 'auto') {
        max = (scrollHeight_ - (scrollHeight_ / refs.itemsLength.current)) + ((gap * theme.space.unit) * (refs.itemsLength.current - 1));
      }

      if (valueNew <= min || valueNew >= max) {
        // Done
        return (refs.carousel.current as HTMLElement)?.style.removeProperty('transition');
      }
      else {
        refs.value.current = {
          ...refs.value.current,

          index: Math.floor(valueNew / (max / (refs.itemsLength.current - 1))),

          y: valueNew
        };

        onUpdatePosition(refs.value.current);
      }
    }

    refs.velocity.current *= 0.95;

    if (Math.abs(refs.velocity.current) > 0.5) refs.momentumID.current = requestAnimationFrame(momentumMethod);
    else {
      // Done
      (refs.carousel.current as HTMLElement)?.style.removeProperty('transition');
    }
  };

  const momentumStart = () => {
    refs.momentumID.current = requestAnimationFrame(momentumMethod);
  };

  const onUpdatePosition = (valuePosition_: any) => {
    // Momentum
    momentumClear();

    const valueNew = {
      ...valuePosition_,

      additional: 0
    };

    if (valuePosition_.additional === undefined && refs.version.current === 'regular' && refs.itemSize.current !== 'auto') {
      const max = refs.width.current / 2;
      const valuePosition = valueNew[refs.orientation.current === 'horizontal' ? 'x' : 'y'];
      const part = valuePosition - (refs.mouseDownPosition.current?.[refs.orientation.current === 'horizontal' ? 'x' : 'y'] || 0);

      const additional = (part / max) * 100;

      valueNew.additional = additional;
    }

    updateValue(valueNew);

    if (is('function', onUpdatePosition_)) onUpdatePosition_(valueNew);
  };

  const onUpdate = React.useCallback((to: string | number = 'next', values: any[] = refs.items.current) => {
    // Momentum
    momentumClear();

    // Momentum clean up
    (refs.carousel.current as HTMLElement)?.style.removeProperty('transition');

    let index = refs.value.current?.index;

    if (index === undefined) index = 0;
    else if (is('number', to)) index = clamp(to as number, 0, refs.itemsLength.current - 1);
    else {
      index = to === 'next' ? index + 1 : index - 1;

      if (index < 0) index = refs.round.current ? refs.itemsLength.current - 1 : 0;

      if (index > refs.itemsLength.current - 1) index = refs.round.current ? 0 : refs.itemsLength.current - 1;
    }

    // Regular
    if (version === 'regular' && refs.carousel.current) {
      if (refs.orientation.current === 'horizontal') {
        if (refs.itemSize.current === 'auto' && refs.moveValue.current !== undefined) {
          const x = index * refs.moveValue.current;

          onUpdatePosition({
            index,
            x,
            additional: 0
          });
        }
        else if (refs.itemSize.current === 'auto' && refs.moveItems.current !== undefined) {
          let item: any = index * clamp(moveItems, 1, refs.items.current.length);

          item = refs.carousel.current.children[item];

          if (item) {
            const x = item.offsetLeft;

            onUpdatePosition({
              index,
              x,
              additional: 0
            });
          }
        }
        else {
          const width_ = refs.carousel.current.getBoundingClientRect().width;
          const scrollWidth_ = refs.carousel.current.scrollWidth;

          const part = refs.itemSize.current === 'auto' ? scrollWidth_ / refs.itemsLength.current : width_;

          const x = (index * part) + (index * (gap * theme.space.unit));

          onUpdatePosition({
            index,
            x,
            additional: 0
          });
        }
      }

      if (refs.orientation.current === 'vertical') {
        if (refs.itemSize.current === 'auto' && refs.moveValue.current !== undefined) {
          const y = index * refs.moveValue.current;

          onUpdatePosition({
            index,
            y,
            additional: 0
          });
        }
        else if (refs.itemSize.current === 'auto' && refs.moveItems.current !== undefined) {
          let item: any = index * clamp(moveItems, 1, refs.items.current.length);

          item = refs.carousel.current.children[item];

          if (item) {
            const y = item.offsetTop;

            onUpdatePosition({
              index,
              y,
              additional: 0
            });
          }
        }
        else {
          const height_ = refs.carousel.current.getBoundingClientRect().height;
          const scrollHeight_ = refs.carousel.current.scrollHeight;

          const part = refs.itemSize.current === 'auto' ? scrollHeight_ / refs.itemsLength.current : height_;

          const y = (index * part) + (index * (gap * theme.space.unit));

          onUpdatePosition({
            index,
            y,
            additional: 0
          });
        }
      }
    }

    // Transition
    const itemNew = values[index];

    if (itemNew) {
      if (version === 'transition') updateValue({ index, element: itemNew });

      if (autoHeight) {
        if (version === 'regular') {
          setTimeout(() => {
            const height_ = refs.carousel.current.children[refs.value.current?.index]?.children[0]?.getBoundingClientRect().height;

            if (height_ > 0) refs.root.current.style.height = `${height_}px`;
          }, 1);
        }

        if (version === 'transition') {
          setTimeout(() => {
            const height_ = refs.carousel.current.children[0]?.children[0]?.getBoundingClientRect().height;

            if (height_ > 0) refs.root.current.style.height = `${height_}px`;
          }, autoHeightDelay);
        }
      }
    }
  }, [gap, version, autoHeight, autoHeightDelay]);

  const onMouseUp = React.useCallback((event: any) => {
    if (refs.mouseDown.current) {
      if (refs.mouseDown.current && !refs.momentum.current) (refs.carousel.current as HTMLElement)?.style.removeProperty('transition');

      refs.mouseDownDuration.current = new Date().getTime() - refs.mouseDownStart.current;

      if (refs.free.current) {
        setMouseDown(false);

        if (refs.momentum.current) momentumStart();

        refs.previousMouseEvent.current = undefined;

        return;
      }

      // Swipe
      // less than 140 ms
      if (refs.swipe.current && refs.mouseDownDuration.current <= 140) {
        const { clientX: previousClientX, clientY: previousClientY } = refs.mouseDown.current.touches?.[0] || refs.mouseDown.current;
        const { clientX, clientY } = refs.previousMouseEvent.current || event;

        refs.previousMouseEvent.current = undefined;

        setMouseDown(false);

        if (refs.orientation.current === 'horizontal') {
          // As move already updates the index
          // so move to that index
          if (previousClientX < clientX) return onUpdate(refs.value.current?.index);

          if (previousClientX > clientX) return onUpdate('next');
        }

        if (refs.orientation.current === 'vertical') {
          if (previousClientY < clientY) return onUpdate(refs.value.current?.index);

          if (previousClientY > clientY) return onUpdate('next');
        }
      }

      // Move
      if (refs.version.current === 'regular' && refs.value.current) {
        if (refs.orientation.current === 'horizontal') {
          const { x } = refs.value.current;

          let index = refs.value.current.index;

          if (refs.mouseDownPosition.current?.x > x) index++;

          const width_ = refs.carousel.current.getBoundingClientRect().width;

          const original = index * width_ + index * (gap * theme.space.unit);

          const threshold = width_ / 4;

          const moved = Math.abs(original - x);

          if (x > 0 && x < original && moved >= threshold) onUpdate(index - 1);
          else if (x > original && moved >= threshold) onUpdate(index + 1);
          else onUpdate(index);
        }

        if (refs.orientation.current === 'vertical') {
          const { y } = refs.value.current;

          let index = refs.value.current.index;

          if (refs.mouseDownPosition.current?.y > y) index++;

          const height_ = refs.carousel.current.getBoundingClientRect().height;

          const original = index * height_ + index * (gap * theme.space.unit);

          const threshold = height_ / 4;

          const moved = Math.abs(original - y);

          if (y > 0 && y < original && moved >= threshold) onUpdate(index - 1);
          else if (y > original && moved >= threshold) onUpdate(index + 1);
          else onUpdate(index);
        }
      }

      setMouseDown(false);

      refs.previousMouseEvent.current = undefined;
    }
  }, []);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (refs.focus.current) {
        switch (event.key) {
          case 'ArrowLeft':
            return onUpdate('previous');

          case 'ArrowRight':
            return onUpdate('next');

          default:
            break;
        }
      }
    };

    const onMove = (x_: number, y_: number) => {
      if (refs.version.current === 'regular' && refs.move.current && refs.mouseDown.current && refs.previousMouseEvent.current) {
        const incX = x_ - refs.previousMouseEvent.current.clientX;
        const incY = y_ - refs.previousMouseEvent.current.clientY;

        const { width: width_, height: height_ } = refs.carousel.current.getBoundingClientRect();

        const { scrollWidth: scrollWidth_, scrollHeight: scrollHeight_ } = refs.carousel.current;

        if (refs.orientation.current === 'horizontal' && incX !== 0) {
          const min = 0;
          let max = ((width_ + (gap * theme.space.unit)) * (refs.itemsLength.current - 1));

          if (refs.itemSize.current === 'auto') {
            max = (scrollWidth_ - (scrollWidth_ / refs.itemsLength.current)) + ((gap * theme.space.unit) * (refs.itemsLength.current - 1));
          }

          let x = (refs.value.current?.x || 0) - incX;

          if (refs.free.current || !refs.moveBeyondEdge.current) x = clamp(x, min, max);

          // Move beyond min, max
          if (x < min || x > max) x = (refs.value.current?.x || 0) - (incX / 1.7);

          refs.velocity.current = x - (refs.value.current?.x || 0);

          onUpdatePosition({
            index: Math.floor(x / (max / (refs.itemsLength.current - 1))),

            x
          });
        }

        if (refs.orientation.current === 'vertical' && incY !== 0) {
          const min = 0;
          let max = ((height_ + (gap * theme.space.unit)) * (refs.itemsLength.current - 1));

          if (refs.itemSize.current === 'auto') {
            max = (scrollHeight_ - (scrollHeight_ / refs.itemsLength.current)) + ((gap * theme.space.unit) * (refs.itemsLength.current - 1));
          }

          let y = (refs.value.current?.y || 0) - incY;

          if (refs.free.current || !refs.moveBeyondEdge.current) y = clamp(y, min, max);

          // Move beyond min, max
          if (y < min || y > max) y = (refs.value.current?.y || 0) - (incY / 1.7);

          refs.velocity.current = y - (refs.value.current?.y || 0);

          onUpdatePosition({
            index: Math.floor(y / (max / (refs.itemsLength.current - 1))),

            y
          });
        }
      }
    };

    // Mouse move
    const onMouseMove = (event: MouseEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event;

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;
      }
    };

    // Touch move
    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event.touches[0];

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;

        // Normalize for use as a mouseDown value
        refs.previousMouseEvent.current.clientY = clientY;

        refs.previousMouseEvent.current.clientX = clientX;
      }
    };

    const method = () => onUpdate(refs.value.current?.index);

    const observer = new ResizeObserver(method);

    method();

    observer.observe(refs.root.current);

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', onKeyDown);

    rootDocument.addEventListener('mouseup', onMouseUp);

    rootDocument.addEventListener('mousemove', onMouseMove);

    rootDocument.addEventListener('touchend', onMouseUp);

    rootDocument.addEventListener('touchmove', onTouchMove, { passive: true });

    setInit(true);

    if (is('function', refs.onInit.current)) refs.onInit.current();

    return () => {
      observer.disconnect();

      rootDocument.removeEventListener('keydown', onKeyDown);

      rootDocument.removeEventListener('mousemove', onMouseMove);

      rootDocument.removeEventListener('mouseup', onMouseUp);

      rootDocument.removeEventListener('touchmove', onTouchMove);

      rootDocument.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined && !equalDeep(value_, refs.value.current)) setValue((valuePrevious: any) => ({ ...valuePrevious, ...value_ }));
  }, [value_]);

  React.useEffect(() => {
    if (init) {
      if (index_ >= 0 && index_ <= refs.itemsLength.current && index_ !== refs.value.current?.index) onUpdate(index_);
    }
  }, [index_]);

  React.useEffect(() => {
    if (is('function', onUpdateItems)) onUpdateItems();
  }, [items, onUpdateItems, theme.palette.light]);

  React.useEffect(() => {
    setItems(items_);
  }, [id, items_]);

  const onPrevious = () => onUpdate('previous');

  const onNext = () => onUpdate('next');

  const clear = () => {
    clearTimeout(refs.autoPlayTimeout.current);

    refs.autoPlay.current = false;
  };

  const start = () => {
    clear();

    if (!autoPlay || mouseDown || focus) return;

    if (pauseOnHover && hover) return;

    refs.autoPlayTimeout.current = setTimeout(onUpdate, autoPlayInterval);

    refs.autoPlay.current = true;
  };

  // autoPlay
  React.useEffect(() => {
    start();
  }, [items, value, autoPlay, autoPlayInterval]);

  // OnesySubscription methods
  React.useEffect(() => {
    const method = (...args: any[]) => onUpdate(...args);

    if (is('function', updateSub?.subscribe)) (updateSub as OnesySubscription)?.subscribe(method);

    return () => {
      if (is('function', updateSub?.unsubscribe)) (updateSub as OnesySubscription)?.unsubscribe(method);
    };
  }, [updateSub]);

  React.useEffect(() => {
    const method = (...args: any[]) => onUpdate(...args);

    if (is('function', previousSub?.subscribe)) (previousSub as OnesySubscription)?.subscribe(method);

    return () => {
      if (is('function', previousSub?.unsubscribe)) (previousSub as OnesySubscription)?.unsubscribe(method);
    };
  }, [previousSub]);

  React.useEffect(() => {
    const method = (...args: any[]) => onUpdate(...args);

    if (is('function', nextSub?.subscribe)) (nextSub as OnesySubscription)?.subscribe(method);

    return () => {
      if (is('function', nextSub?.unsubscribe)) (nextSub as OnesySubscription)?.unsubscribe(method);
    };
  }, [nextSub]);

  React.useEffect(() => {
    const values = unique([
      ...items_,

      ...React.Children.toArray(children)
    ])
      .filter(Boolean);

    const previous = refs.items.current.reduce((result, item) => result += is('string', item) ? item : item?.key, '');

    const updated = values.reduce((result, item) => result += is('string', item) ? item : item?.key, '');

    if (updated !== previous) {
      onUpdate('next', values);

      setItems(values);
    }
  }, [items_, background, children]);

  const onWheel = React.useCallback(debounce((event: React.WheelEvent<any>) => {
    if (
      (refs.orientation.current === 'horizontal' && event.deltaX < 0) ||
      (refs.orientation.current === 'vertical' && event.deltaY < 0)
    ) {
      event.preventDefault();
      event.stopPropagation();

      return onUpdate('previous');
    }

    if (
      (refs.orientation.current === 'horizontal' && event.deltaX > 0) ||
      (refs.orientation.current === 'vertical' && event.deltaY > 0)
    ) {
      event.preventDefault();
      event.stopPropagation();

      return onUpdate('next');
    }
  }, 40), []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    // Momentum
    momentumClear();

    setMouseDown(event);

    refs.mouseDownPosition.current = { ...refs.value.current };

    refs.mouseDownStart.current = new Date().getTime();

    refs.carousel.current.style.transition = 'none';
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(true);

    if (refs.autoPlay.current) clear();

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    setFocus(false);
    setHover(false);

    if (!refs.autoPlay.current) start();

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, []);

  const onArrowMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(true);

    if (refs.autoPlay.current) clear();
  }, []);

  const ArrowPreviousTransitionComponent_ = ArrowPreviousTransitionComponent || ArrowTransitionComponent;

  const ArrowNextTransitionComponent_ = ArrowNextTransitionComponent || ArrowTransitionComponent;

  let TransitionComponent = TransitionComponent_;

  if (noTransition) TransitionComponent = React.Fragment;

  if (version === 'regular') {
    styles.carousel.transform = `translate3d(${orientation === 'horizontal' ? `${-(value?.x || 0)}px, 0` : `0, ${-(value?.y || 0)}px`}, 0)`;
  }

  const indexActive = value?.index;

  let arrowPreviousIn = focus || (arrowsVisibility === 'hover' && hover) || arrowsVisibility === 'visible';

  let arrowNextIn = focus || (arrowsVisibility === 'hover' && hover) || arrowsVisibility === 'visible';

  if (arrowHideOnStartEnd) {
    const min = 0;
    let maxX = ((width + (gap * theme.space.unit)) * (refs.itemsLength.current - 1));
    let maxY = ((height + (gap * theme.space.unit)) * (refs.itemsLength.current - 1));

    if (refs.itemSize.current === 'auto') {
      maxX = (scrollWidth - (scrollWidth / refs.itemsLength.current)) + ((gap * theme.space.unit) * (refs.itemsLength.current - 1));
      maxY = (scrollHeight - (scrollHeight / refs.itemsLength.current)) + ((gap * theme.space.unit) * (refs.itemsLength.current - 1));
    }

    if (value?.x === min || value?.y === min) arrowPreviousIn = false;

    if (itemSize === 'auto') {
      if ((value?.x !== undefined && value?.x + 1 >= maxX) || (value?.y !== undefined && value?.y + 1 >= maxY)) arrowNextIn = false;
    }
    else {
      if ((value?.x !== undefined && value?.x + 1 >= maxX) || (value?.y + 1 !== undefined && value?.y >= maxY)) arrowNextIn = false;
    }
  }

  const ArrowPreviousProps: any = {
    ...ArrowPreviousProps_,

    'aria-label': 'Arrow previous',

    'aria-controls': refs.ids.items
  };

  const ArrowNextProps: any = {
    ...ArrowNextProps_,

    'aria-label': 'Arrow next',

    'aria-controls': refs.ids.items
  };

  const resolveItem = (Item: any) => {
    if (!Item) return null;

    if (is('string', Item)) {
      if (background) return (
        <div
          className={classNames([
            staticClassName('Carousel', theme) && [
              'onesy-Carousel-background'
            ],

            classes.background
          ])}

          style={{
            backgroundImage: `url(${Item})`
          }}
        />
      );

      return (
        <img
          src={Item}

          alt=''
        />
      );
    }

    if (is('function', Item)) return Item(refs.value.current);

    if (Item?.element) return React.cloneElement(Item.element);

    return React.cloneElement(Item);
  };

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tabIndex='0'

      role='region'

      aria-roledescription='carousel'

      tonal={tonal}

      color={color}

      onFocus={onFocus}

      onBlur={onBlur}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      Component={Component}

      className={classNames([
        staticClassName('Carousel', theme) && [
          'onesy-Carousel-root'
        ],

        className,
        classes.root,
        autoHeight && classes.autoHeight
      ])}

      {...other}
    >
      {start_}

      {/* Version regular */}
      {version === 'regular' && (
        <Line
          ref={refs.carousel}

          gap={gap}

          direction={orientation === 'horizontal' ? theme.direction === 'ltr' ? 'row' : 'row-reverse' : 'column'}

          align='center'

          justify='flex-start'

          onWheel={mouseScroll && onWheel}

          onMouseDown={onMouseDown}

          onTouchStart={onMouseDown}

          onMouseUp={onMouseUp}

          onTouchEnd={onMouseUp}

          id={refs.ids.items}

          aria-live='polite'

          {...CarouselProps}

          className={classNames([
            staticClassName('Carousel', theme) && [
              'onesy-Carousel-carousel'
            ],

            CarouselProps?.className,
            classes.carousel,
            classes[`carousel_version_${version}`]
          ])}

          style={{
            ...styles.carousel,

            ...CarouselProps?.style
          }}
        >
          {items.map((item: any, index: number) => (
            <Line
              key={index}

              gap={0}

              direction='column'

              align='center'

              justify='center'

              role='group'

              aria-roledescription='slide'

              aria-label={`${index + 1} out of ${refs.itemsLength.current}`}

              {...ItemWrapperProps}

              className={classNames([
                staticClassName('Carousel', theme) && [
                  'onesy-Carousel-item'
                ],

                ItemWrapperProps?.className,
                classes.item,
                autoHeight && classes[`item_version_${version}_autoHeight`],
                itemSize && classes[`item_itemSize_${itemSize}`]
              ])}
            >
              {resolveItem(item)}
            </Line>
          ))}
        </Line>
      )}

      {/* Version transition */}
      {version === 'transition' && (
        <Line
          ref={refs.carousel}

          gap={0.5}

          direction={orientation === 'horizontal' ? theme.direction === 'ltr' ? 'row' : 'row-reverse' : 'column'}

          align='center'

          justify='center'

          onWheel={mouseScroll && onWheel}

          onMouseDown={onMouseDown}

          onTouchStart={onMouseDown}

          onMouseUp={onMouseUp}

          onTouchEnd={onMouseUp}

          id={refs.ids.items}

          aria-live='polite'

          {...CarouselProps}

          className={classNames([
            staticClassName('Carousel', theme) && [
              'onesy-Carousel-carousel'
            ],

            CarouselProps?.className,
            classes.carousel
          ])}
        >
          {value && (
            <Transitions
              mode='in-out-follow'

              switch

              {...TransitionsProps}
            >
              <TransitionComponent
                key={indexActive}

                {...TransitionComponentProps}
              >
                <Line
                  ref={refs.item}

                  gap={0}

                  direction='column'

                  align='center'

                  justify='center'

                  role='group'

                  aria-roledescription='slide'

                  aria-label={`${value.index + 1} out of ${refs.itemsLength.current}`}

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'onesy-Carousel-item-transition'
                    ],

                    classes.item_transition,
                    autoHeight && classes[`item_version_${version}_autoHeight`],
                  ])}
                >
                  {resolveItem(value.element)}
                </Line>
              </TransitionComponent>
            </Transitions>
          )}
        </Line>
      )}

      {/* Progress */}
      {progress && (
        <ProgressTransitionComponent
          in={focus || (progressVisibility === 'hover' && hover) || progressVisibility === 'visible'}

          {...ProgressTransitionComponentProps}
        >
          {is('function', renderProgress) ?
            renderProgress(onUpdate) :

            <Line
              gap={1}

              direction={orientation === 'horizontal' ? theme.direction === 'ltr' ? 'row' : 'row-reverse' : 'column'}

              align='center'

              justify='center'

              wrap='wrap'

              className={classNames([
                staticClassName('Carousel', theme) && [
                  'onesy-Carousel-progress'
                ],

                classes.progress,
                classes[`progress_orientation_${orientation}`]
              ])}
            >
              {Array.from({ length: refs.itemsLength.current }).map((item: any, index: number) => (
                <span
                  key={index}

                  onClick={() => onUpdate(index)}

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'onesy-Carousel-progress-item',
                      indexActive === index && 'onesy-Carousel-progress-item-active'
                    ],

                    classes.progress_item,
                    indexActive === index && classes.progress_item_active
                  ])}
                />
              ))}
            </Line>
          }
        </ProgressTransitionComponent>
      )}

      {/* Arrows */}
      {/* Arrow previous */}
      {arrows && (
        <ArrowPreviousTransitionComponent_
          in={arrowPreviousIn}

          {...ArrowTransitionComponentProps}

          {...ArrowPreviousTransitionComponentProps}
        >
          {(
            is('function', renderArrowPrevious) ?
              renderArrowPrevious(() => onUpdate('previous')) :

              IconButtonPrevious ?
                React.cloneElement(IconButtonPrevious as any, {
                  tonal,
                  color,

                  onClick: onPrevious,

                  onMouseEnter: onArrowMouseEnter,

                  ...ArrowProps,

                  ...ArrowPreviousProps,

                  disabled: !round && indexActive === 0,

                  className: classNames([
                    staticClassName('Carousel', theme) && [
                      'onesy-Carousel-arrow',
                      'onesy-Carousel-arrow-previous'
                    ],

                    ArrowProps?.className,
                    ArrowPreviousProps?.className,
                    classes.arrow,
                    classes.arrow_previous,
                    classes[`arrow_previous_orientation_${orientation}`]
                  ])
                }) :

                <IconButton
                  tonal={tonal}

                  color={color}

                  version='filled'

                  onClick={onPrevious}

                  onMouseEnter={onArrowMouseEnter}

                  {...ArrowProps}

                  {...ArrowPreviousProps}

                  disabled={!round && indexActive === 0}

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'onesy-Carousel-arrow',
                      'onesy-Carousel-arrow-previous'
                    ],

                    ArrowProps?.className,
                    ArrowPreviousProps?.className,
                    classes.arrow,
                    classes.arrow_previous,
                    classes[`arrow_previous_orientation_${orientation}`]
                  ])}
                >
                  <IconPrevious
                    noRtl

                    className={classNames([
                      classes[`icon_previous_orientation_${orientation}`]
                    ])}
                  />
                </IconButton>
          )}
        </ArrowPreviousTransitionComponent_>
      )}

      {/* Arrow next */}
      {arrows && (
        <ArrowNextTransitionComponent_
          in={arrowNextIn}

          {...ArrowTransitionComponentProps}

          {...ArrowNextTransitionComponentProps}
        >
          {(
            is('function', renderArrowNext) ?

              renderArrowNext(() => onUpdate('next')) : IconButtonNext ?
                React.cloneElement(IconButtonNext as any, {
                  tonal,
                  color,

                  onClick: onNext,

                  onMouseEnter: onArrowMouseEnter,

                  ...ArrowProps,

                  ...ArrowNextProps,

                  disabled: !round && indexActive === items.length - 1,

                  className: classNames([
                    staticClassName('Carousel', theme) && [
                      'onesy-Carousel-arrow',
                      'onesy-Carousel-arrow-next'
                    ],

                    ArrowProps?.className,
                    ArrowNextProps?.className,
                    classes.arrow,
                    classes.arrow_next,
                    classes[`arrow_next_orientation_${orientation}`]
                  ])
                }) :

                <IconButton
                  tonal={tonal}

                  color={color}

                  version='filled'

                  onClick={onNext}

                  onMouseEnter={onArrowMouseEnter}

                  {...ArrowProps}

                  {...ArrowNextProps}

                  disabled={!round && indexActive === items.length - 1}

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'onesy-Carousel-arrow',
                      'onesy-Carousel-arrow-next'
                    ],

                    ArrowProps?.className,
                    ArrowNextProps?.className,
                    classes.arrow,
                    classes.arrow_next,
                    classes[`arrow_next_orientation_${orientation}`]
                  ])}
                >
                  <IconNext
                    noRtl

                    className={classNames([
                      classes[`icon_next_orientation_${orientation}`]
                    ])}
                  />
                </IconButton>
          )}
        </ArrowNextTransitionComponent_>
      )}

      {end_}
    </Surface>
  );
});

Carousel.displayName = 'onesy-Carousel';

export default Carousel;
