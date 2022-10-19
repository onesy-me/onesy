import React from 'react';

import { is, unique, clamp } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Line from '../Line';
import Fade from '../Fade';
import IconButton from '../IconButton';
import Transitions from '../Transitions';
import useMediaQuery from '../useMediaQuery';
import Surface from '../Surface';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
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
    flex: '0 0 auto'
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

  item_transition_autoHeight: {
    width: 'unset',
    height: 'unset'
  },

  background: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  },

  itemRects: {
    position: 'absolute',
    visibility: 'hidden'
  },

  carousel: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },

  carousel_version_regular: {
    transition: theme.methods.transitions.make('transform')
  },

  progress: {
    position: 'absolute',
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '24px'
  },

  progress_item: {
    width: '5px',
    height: '5px',
    backgroundColor: 'currentColor',
    borderRadius: '50%',
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
    position: 'absolute'
  },

  arrow_previous: {
    top: '50%',
    transform: 'translateY(-50%)',
    left: '24px'
  },

  arrow_next: {
    top: '50%',
    transform: 'translateY(-50%)',
    right: '24px'
  }
}), { name: 'AmauiCarousel' });

const IconMaterialNavigateBeforeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeRounded'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z" />
    </Icon>
  );
});

const IconMaterialNavigateNextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextRounded'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
    </Icon>
  );
});

// To do

// orientation vertical

// amount of items in view per breakpoint, or auto
// based on width and gap, add += on 1 item with gap (without gap for last)
// and if enough space use those items
// and per breakpoint other options

// free update

// example for tabs

const Carousel = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCarousel?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',

    version: version_,

    // Array of string or object
    // object having element as a string or element
    // and a transition element
    items: items_,

    gap: gap_,

    move: move_,

    swipe: swipe_,

    background: background_,

    autoPlay: autoPlay_,

    autoHeight: autoHeight_,

    autoHeightDelay = theme.transitions.duration.rg + 14,

    autoPlayInterval = 4000,

    pauseOnHover = true,

    round: round_,

    arrows: arrows_,

    // on mobile visible
    arrowsVisibility: arrowsVisibility_,

    renderProgress,

    renderArrowPrevious,
    renderArrowNext,

    progress: progress_,

    // on mobile visible
    progressVisibility: progressVisibility_,

    noTransition: noTransition_,

    onUpdatePosition: onUpdatePosition_,

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

    IconPrevious = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,

    ArrowProps,
    ArrowPreviousProps,
    ArrowNextProps,
    CarouselProps,
    TransitionsProps,
    TransitionComponentProps,
    ArrowTransitionComponentProps,
    ArrowPreviousTransitionComponentProps,
    ArrowNextTransitionComponentProps,
    ProgressTransitionComponentProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const version = valueBreakpoints(version_, 'regular', breakpoints, theme);
  const gap = valueBreakpoints(gap_, 4, breakpoints, theme);
  const move = valueBreakpoints(move_, true, breakpoints, theme);
  const swipe = valueBreakpoints(swipe_, true, breakpoints, theme);
  const background = valueBreakpoints(background_, true, breakpoints, theme);
  const autoPlay = valueBreakpoints(autoPlay_, true, breakpoints, theme);
  const autoHeight = valueBreakpoints(autoHeight_, undefined, breakpoints, theme);
  const round = valueBreakpoints(round_, true, breakpoints, theme);
  const arrows = valueBreakpoints(arrows_, true, breakpoints, theme);
  const arrowsVisibility = valueBreakpoints(arrowsVisibility_, 'hover', breakpoints, theme);
  const progress = valueBreakpoints(progress_, true, breakpoints, theme);
  const progressVisibility = valueBreakpoints(progressVisibility_, 'hover', breakpoints, theme);
  const noTransition = valueBreakpoints(noTransition_, undefined, breakpoints, theme);

  const [items, setItems] = React.useState([]);
  const [itemActive, setItemActive] = React.useState<any>();
  const [position, setPosition] = React.useState<any>();
  const [hover, setHover] = React.useState<any>();
  const [mouseDown, setMouseDown] = React.useState<any>();
  const [focus, setFocus] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(),
    item: React.useRef<any>(),
    items: React.useRef<any>(),
    itemActive: React.useRef<any>(),
    autoPlayTimeout: React.useRef<any>(),
    autoPlay: React.useRef<any>(),
    carousel: React.useRef<any>(),
    position: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    focus: React.useRef<any>(),
    gap: React.useRef<any>(),
    previousMouseEvent: React.useRef<any>(),
    move: React.useRef<any>(),
    swipe: React.useRef<any>(),
    mouseDownStart: React.useRef<any>(),
    mouseDownDuration: React.useRef<any>(),
    version: React.useRef<any>()
  };

  const styles: any = {
    carousel: {}
  };

  refs.items.current = items;

  refs.itemActive.current = itemActive;

  refs.gap.current = gap;

  refs.position.current = position;

  refs.mouseDown.current = mouseDown;

  refs.focus.current = focus;

  refs.move.current = move;

  refs.swipe.current = swipe;

  refs.version.current = version;

  const onUpdatePosition = (value: any) => {
    setPosition(value);

    if (is('function', onUpdatePosition_)) onUpdatePosition_(value);
  };

  const onUpdate = React.useCallback((to: string | number = 'next', values: any[] = refs.items.current) => {
    let index = version === 'regular' ? refs.position.current?.index : refs.itemActive.current?.index;

    if (index === undefined) index = 0;
    else if (is('number', to)) index = clamp(to as number, 0, refs.items.current.length - 1);
    else {
      index = to === 'next' ? index + 1 : index - 1;

      if (index < 0) index = refs.items.current.length - 1;

      if (index > refs.items.current.length - 1) index = 0;
    }

    // Regular
    if (version === 'regular' && refs.carousel.current) {
      const width = refs.carousel.current.getBoundingClientRect().width;

      const x = (index * width) + (index * (gap * theme.space.unit));

      onUpdatePosition({
        index,

        x
      });
    };

    // Transition
    if (version === 'transition') {
      const itemNew = values[index];

      if (itemNew) {
        setItemActive({ index, element: itemNew });

        if (autoHeight) {
          setTimeout(() => {
            const height = refs.carousel.current.children[0]?.children[0]?.getBoundingClientRect().height;

            if (height > 0) refs.root.current.style.height = `${height}px`;
          }, autoHeightDelay);
        }
      }
    }
  }, [gap, version, autoHeight, autoHeightDelay]);

  const onMouseUp = React.useCallback((event: any) => {
    if (refs.mouseDown.current) {
      refs.previousMouseEvent.current = undefined;

      if (refs.mouseDown.current) (refs.carousel.current as HTMLElement).style.removeProperty('transition');

      refs.mouseDownDuration.current = new Date().getTime() - refs.mouseDownStart.current;

      // Swipe
      // less than 140 ms
      if (refs.swipe.current && refs.mouseDownDuration.current <= 140) {
        const { clientX: previousClientX } = refs.mouseDown.current.touches?.[0] || refs.mouseDown.current;
        const { clientX } = event.touches?.[0] || event;

        setMouseDown(false);

        if (previousClientX < clientX) return onUpdate('previous');

        if (previousClientX > clientX) return onUpdate('next');
      }

      // Move
      if (refs.version.current === 'regular' && refs.position.current) {
        const { index, x } = refs.position.current;

        const width = refs.carousel.current.getBoundingClientRect().width;

        const original = (index * width) + (index * (gap * theme.space.unit));

        if (x <= original && original - x >= width / 4) onUpdate('previous');
        else if (x >= original && x - original >= width / 4) onUpdate('next');
        else onUpdate(index);
      }

      setMouseDown(false);
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

    const onMove = (x: number, y: number) => {
      if (refs.move.current && refs.mouseDown.current && refs.previousMouseEvent.current) {
        const inc = x - refs.previousMouseEvent.current.clientX;

        if (inc !== 0) {
          onUpdatePosition({
            ...refs.position.current,

            x: (refs.position.current?.x || 0) - inc
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

    const method = () => onUpdate(refs.version.current === 'regular' ? refs.position.current?.index : refs.itemActive.current?.index);

    const observer = new ResizeObserver(method);

    method();

    observer.observe(refs.root.current);

    window.addEventListener('keydown', onKeyDown);

    window.addEventListener('mouseup', onMouseUp);

    window.addEventListener('mousemove', onMouseMove);

    window.addEventListener('touchend', onMouseUp);

    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      observer.disconnect();

      window.removeEventListener('keydown', onKeyDown);

      window.removeEventListener('mousemove', onMouseMove);

      window.removeEventListener('mouseup', onMouseUp);

      window.removeEventListener('touchmove', onTouchMove);

      window.removeEventListener('touchend', onMouseUp);
    };
  }, []);

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
  }, [items, itemActive, autoPlay, autoPlayInterval]);

  React.useEffect(() => {
    const values = unique([
      ...items_,

      ...React.Children.toArray(children)
    ])
      .filter(Boolean)
      .map((Item: any, index: number) => {
        if (is('string', Item)) {
          if (background) return (
            <div
              className={classNames([
                staticClassName('Carousel', theme) && [
                  'AmauiCarousel-background'
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
              key={index}

              src={Item}

              alt=''
            />
          );
        }

        if (Item?.element) return React.cloneElement(Item.element, { key: index });

        return (
          <Item
            key={index}
          />
        );
      });

    onUpdate('next', values);

    setItems(values);
  }, [items_, background, children]);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    setMouseDown(event);

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
    styles.carousel.transform = `translate3d(${-(position?.x || 0)}px, 0, 0)`;
  }

  const indexActive = version === 'regular' ? position?.index : itemActive?.index;

  return (
    <Surface
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      tabIndex='0'

      tonal={tonal}

      color={color}

      Component={Component}

      onFocus={onFocus}

      onBlur={onBlur}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      className={classNames([
        staticClassName('Carousel', theme) && [
          'AmauiCarousel-root',
          `AmauiCarousel-version-${version}`,
          autoPlay && `AmauiCarousel-autoPlay`,
          autoHeight && `AmauiCarousel-autoHeight`
        ],

        className,
        classes.root,
        autoHeight && classes.autoHeight
      ])}

      {...other}
    >
      {/* Version regular */}
      {version === 'regular' && (
        <Line
          ref={refs.carousel}

          gap={gap}

          direction='row'

          align='center'

          justify='flex-start'

          onMouseDown={onMouseDown}

          onTouchStart={onMouseDown}

          onMouseUp={onMouseUp}

          onTouchEnd={onMouseUp}

          {...CarouselProps}

          className={classNames([
            staticClassName('Carousel', theme) && [
              'AmauiCarousel-carousel'
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

              className={classNames([
                staticClassName('Carousel', theme) && [
                  'AmauiCarousel-item'
                ],

                classes.item
              ])}
            >
              {item}
            </Line>
          ))}
        </Line>
      )}

      {/* Version transition */}
      {version === 'transition' && (
        <Line
          ref={refs.carousel}

          gap={0.5}

          direction='row'

          align='center'

          justify='center'

          onMouseDown={onMouseDown}

          onTouchStart={onMouseDown}

          onMouseUp={onMouseUp}

          onTouchEnd={onMouseUp}

          {...CarouselProps}

          className={classNames([
            staticClassName('Carousel', theme) && [
              'AmauiCarousel-carousel'
            ],

            CarouselProps?.className,
            classes.carousel
          ])}
        >
          {itemActive && (
            <Transitions
              mode='in-out-follow'

              switch

              {...TransitionsProps}
            >
              <TransitionComponent
                key={itemActive?.index}

                {...TransitionComponentProps}
              >
                <Line
                  ref={refs.item}

                  gap={0}

                  direction='column'

                  align='center'

                  justify='center'

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'AmauiCarousel-item-transition'
                    ],

                    classes.item_transition,
                    autoHeight && classes.item_transition_autoHeight
                  ])}
                >
                  {itemActive?.element}
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

              direction='row'

              align='center'

              justify='center'

              wrap='wrap'

              className={classNames([
                staticClassName('Carousel', theme) && [
                  'AmauiCarousel-progress'
                ],

                classes.progress
              ])}
            >
              {Array.from({ length: items.length }).map((item: any, index: number) => (
                <span
                  key={index}

                  onClick={() => onUpdate(index)}

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'AmauiCarousel-progress-item'
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
          in={focus || (arrowsVisibility === 'hover' && hover) || arrowsVisibility === 'visible'}

          {...ArrowTransitionComponentProps}

          {...ArrowPreviousTransitionComponentProps}
        >
          {(
            is('function', renderArrowPrevious) ?
              renderArrowPrevious(() => onUpdate('previous')) :

              IconButtonPrevious ?
                React.cloneElement(IconButtonPrevious, {
                  tonal,
                  color,

                  onClick: onPrevious,

                  onMouseEnter: onArrowMouseEnter,

                  className: classNames([
                    staticClassName('Carousel', theme) && [
                      'AmauiCarousel-arrow',
                      'AmauiCarousel-arrow-previous'
                    ],

                    classes.arrow,
                    classes.arrow_previous
                  ]),

                  disabled: !round && itemActive?.index === 0,

                  ...ArrowProps,

                  ...ArrowPreviousProps
                }) :

                <IconButton
                  tonal={tonal}

                  color={color}

                  version='filled'

                  onClick={onPrevious}

                  onMouseEnter={onArrowMouseEnter}

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'AmauiCarousel-arrow',
                      'AmauiCarousel-arrow-previous'
                    ],

                    classes.arrow,
                    classes.arrow_previous
                  ])}

                  disabled={!round && itemActive?.index === 0}

                  {...ArrowProps}

                  {...ArrowPreviousProps}
                >
                  <IconPrevious />
                </IconButton>
          )}
        </ArrowPreviousTransitionComponent_>
      )}

      {/* Arrow next */}
      {arrows && (
        <ArrowNextTransitionComponent_
          in={focus || (arrowsVisibility === 'hover' && hover) || arrowsVisibility === 'visible'}

          {...ArrowTransitionComponentProps}

          {...ArrowNextTransitionComponentProps}
        >
          {(
            is('function', renderArrowNext) ?

              renderArrowNext(() => onUpdate('next')) : IconButtonNext ?
                React.cloneElement(IconButtonNext, {
                  tonal,
                  color,

                  onClick: onNext,

                  onMouseEnter: onArrowMouseEnter,

                  className: classNames([
                    staticClassName('Carousel', theme) && [
                      'AmauiCarousel-arrow',
                      'AmauiCarousel-arrow-next'
                    ],

                    classes.arrow,
                    classes.arrow_next
                  ]),

                  disabled: !round && itemActive?.index === items.length - 1,

                  ...ArrowProps,

                  ...ArrowNextProps
                }) :

                <IconButton
                  tonal={tonal}

                  color={color}

                  version='filled'

                  onClick={onNext}

                  onMouseEnter={onArrowMouseEnter}

                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'AmauiCarousel-arrow',
                      'AmauiCarousel-arrow-next'
                    ],

                    classes.arrow,
                    classes.arrow_next
                  ])}

                  disabled={!round && itemActive?.index === items.length - 1}

                  {...ArrowProps}

                  {...ArrowNextProps}
                >
                  <IconNext />
                </IconButton>
          )}
        </ArrowNextTransitionComponent_>
      )}
    </Surface>
  );
});

Carousel.displayName = 'AmauiCarousel';

export default Carousel;
