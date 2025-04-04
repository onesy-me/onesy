import React from 'react';

import { clamp, is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialNavigateNext from '@onesy/icons-material-rounded-react/IconMaterialNavigateNextW100';
import IconMaterialNavigateBefore from '@onesy/icons-material-rounded-react/IconMaterialNavigateBeforeW100';
import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';

import ImageElement from '../Image';
import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import InteractionElement from '../Interaction';
import BackdropElement from '../Backdrop';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IMediaObject } from '../types';
import useMediaQuery from '../useMediaQuery';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',

    '&.onesy-Backdrop-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      zIndex: '14000'
    },

    '& .onesy-Backdrop-backdrop-root': {
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    }
  },

  version_regular: {
    minHeight: 'clamp(240px, 100%, 100vh)'
  },

  pointerEventsAuto: {
    pointerEvents: 'auto'
  },

  wrapper: {
    height: '100%'
  },

  header: {
    padding: theme.methods.space.value(3, 'px'),
    zIndex: '1'
  },

  main: {
    position: 'relative',
    zIndex: '14'
  },

  main_version_modal: {
    height: '0',
    padding: theme.methods.space.value(5, 'px'),

    '& .onesy-Image-root': {
      maxHeight: '100%',
      // pointerEvents: 'none'
    }
  },

  main_version_regular_size_small: {
    height: '340px'
  },

  main_version_regular_size_regular: {
    height: '540px'
  },

  main_version_regular_size_large: {
    height: '740px'
  },

  noOverflow: {
    overflow: 'hidden'
  },

  footer: {
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(1.5, 'px')}`,
    zIndex: '1'
  },

  imageWrapper: {
    position: 'relative',
    height: '0px',
    pointerEvents: 'none',
    // zIndex: 1,
    transition: theme.methods.transitions.make(['transform'], { duration: 100, timing_function: 'ease' as any })
  },

  image: {
    objectFit: 'contain',
    width: 'auto',
    height: 'auto',
    maxHeight: '100%',
    maxWidth: '100%'
  },

  itemsWrapper: {
    position: 'relative',
    pointerEvents: 'auto',
    maxWidth: '100%',
    userSelect: 'none'
  },

  items: {
    maxWidth: '1024px',
    overflow: 'auto hidden',

    '&::-webkit-scrollbar': {
      width: '16px',
      height: '16px'
    },

    '&::-webkit-scrollbar-track, &::-webkit-scrollbar-corner': {
      background: 'transparent'
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: theme.methods.shape.radius.value(1, 'px'),
      border: '4px solid transparent',
      backgroundClip: 'content-box',
      backgroundColor: 'rgba(221, 221, 221, 0.4)',

      '&:hover': {
        backgroundColor: 'rgba(221, 221, 221, 0.7)'
      }
    }
  },

  item: {
    width: '140px',
    height: '140px',
    position: 'relative',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    flex: '0 0 auto',
    border: '2px solid transparent',
    cursor: 'pointer',
    userSelect: 'none',
    transition: theme.methods.transitions.make(['border', 'transform']),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  itemSelected: {
    border: '2px solid !important',
    borderColor: `${theme.methods.palette.color.value('secondary', 30)} !important`
  },

  arrow: {
    flex: '0 0 auto',
    alignSelf: 'center',
    justifySelf: 'center',
    transition: theme.methods.transitions.make(['opacity'], { duration: 'xxs' }),

    '&[disabled]': {
      opacity: '0'
    }
  }
}), { name: 'onesy-ImageGallery' });

export type IImageGallery = ILine & {
  version?: 'regular' | 'modal';

  open?: boolean;

  size?: 'small' | 'regular' | 'large';

  onClose?: () => any;

  value?: number;

  items?: IMediaObject[];

  incrementZoom?: number;

  minZoom?: number;

  maxZoom?: number;

  overflow?: boolean;

  arrows?: boolean;

  startMain?: any;
  endMain?: any;
  startImage?: any;
  endImage?: any;
  startThumbnails?: any;
  endThumbnails?: any;

  ImageProps?: any;
  ImageWrapperProps?: any;
  IconButtonProps?: any;

  IconStart?: IElementReference;
  IconEnd?: IElementReference;
  IconClose?: IElementReference;
};

const ImageGallery: React.FC<IImageGallery> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyImageGallery?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Image = React.useMemo(() => theme?.elements?.Image || ImageElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const Backdrop = React.useMemo(() => theme?.elements?.Backdrop || BackdropElement, [theme]);

  const {
    version = 'modal',

    size = 'regular',

    open: open_,

    onClose: onClose_,

    value: value_,

    items,

    minZoom: minZoom_ = 1,

    maxZoom: maxZoom_ = 2,

    incrementZoom = 0.07,

    overflow = true,

    arrows = true,

    startMain,
    endMain,
    startImage,
    endImage,
    startThumbnails,
    endThumbnails,

    ImageProps,
    ImageWrapperProps,
    IconButtonProps,

    IconStart = IconMaterialNavigateBefore,
    IconEnd = IconMaterialNavigateNext,
    IconClose = IconMaterialClose,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [loaded, setLoaded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<any>(0);
  const [moveValue, setMoveValue] = React.useState<any>();
  const [imageRef, setImageRef] = React.useState<HTMLImageElement>();
  const [keyDown, setKeyDown] = React.useState<any>();

  const refs = {
    root: React.useRef<HTMLElement>(null),
    version: React.useRef(version),
    more: React.useRef<any>(null),
    image: React.useRef<HTMLImageElement>(null),
    imageWrapper: React.useRef<HTMLDivElement>(null),
    media: React.useRef<any>(null),
    zoom: React.useRef<any>(null),
    incrementZoom: React.useRef<any>(null),
    minZoom: React.useRef<any>(null),
    maxZoom: React.useRef<any>(null),
    mouseDown: React.useRef<any>(null),
    mouseMovePrevious: React.useRef<any>(null),
    keyDown: React.useRef(keyDown),
    useZoom: React.useRef(false)
  };

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  const minZoom = clamp(minZoom_, 0.1, 1);

  const maxZoom = clamp(maxZoom_, 1, 100);

  const length = clamp((items?.length || 0) - 1, 0);

  const media = items?.[value];

  refs.version.current = version;

  refs.media.current = !!media;

  refs.keyDown.current = keyDown;

  refs.useZoom.current = version === 'modal' || keyDown;

  refs.incrementZoom.current = incrementZoom;

  refs.minZoom.current = minZoom;

  refs.maxZoom.current = maxZoom;

  const init = React.useCallback(() => {
    setTimeout(() => {
      setMoveValue({
        left: refs.more.current?.scrollLeft,
        top: refs.more.current?.scrollTop
      });

      setLoaded(true);
    }, 14);
  }, []);

  const cleanUp = React.useCallback(() => {
    refs.mouseDown.current = false;
  }, []);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      setKeyDown(event.metaKey || event.ctrlKey);
    };

    const onKeyUp = (event: KeyboardEvent) => {
      setKeyDown(null);
    };

    window.document.addEventListener('keydown', onKeyDown);

    window.document.addEventListener('keyup', onKeyUp);

    return () => {
      window.document.removeEventListener('keydown', onKeyDown);

      window.document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  React.useEffect(() => {
    // init
    if (open) init();
    else cleanUp();
  }, [open]);

  React.useEffect(() => {
    if (open_ !== undefined && open !== open_) setOpen(open_);
  }, [open_]);

  React.useEffect(() => {
    if (value_ !== undefined && value !== value_) setValue(clamp(value_, 0, length));
  }, [value_]);

  const onResetZoom = React.useCallback(() => {
    refs.zoom.current = null;

    if (refs.imageWrapper.current) {
      refs.imageWrapper.current.style.transition = 'none';

      refs.imageWrapper.current.style.removeProperty('transform');
      refs.imageWrapper.current.style.removeProperty('left');
      refs.imageWrapper.current.style.removeProperty('top');

      setTimeout(() => {
        refs.imageWrapper.current!.style.removeProperty('transition');
      }, 14);
    }
  }, []);

  const onValue = React.useCallback((index: number) => {
    onResetZoom();

    setValue(index);
  }, [onResetZoom]);

  const onOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(false);

    setTimeout(() => {
      setLoaded(false);
    }, 140);

    if (is('function', onClose_)) onClose_!();
  }, [onClose_]);

  const move = (forward_ = true) => {
    const forward = forward_;

    const rect = refs.more.current.getBoundingClientRect();

    const moveValue_ = {
      left: refs.more.current.scrollLeft + (forward ? 1 : -1) * rect.width,
      behavior: 'smooth'
    };

    refs.more.current.scrollTo(moveValue_);
  };

  const onMouseDown = React.useCallback((event: MouseEvent) => {
    refs.mouseDown.current = true;

    refs.mouseMovePrevious.current = {
      x: event.clientX,
      y: event.clientY
    };
  }, []);

  const onMouseUp = React.useCallback(() => {
    refs.mouseDown.current = false;
    refs.mouseMovePrevious.current = null;
  }, []);

  const onWheel = React.useCallback((event: WheelEvent) => {
    if (!refs.useZoom.current) return;

    event.preventDefault();
    event.stopPropagation();

    let scale = refs.zoom.current?.scale !== undefined ? refs.zoom.current.scale : 1;

    const part = refs.incrementZoom.current;

    const up = (event as any).wheelDelta > 0 || event.deltaY < 0;

    scale = clamp(up ? scale + part : scale - part, refs.minZoom.current, refs.maxZoom.current);

    // Only allow in 100's decimal places, ie. 1.01
    scale = Math.round(scale * 100) / 100;

    const imageBoundingRect = (refs.image.current as HTMLImageElement)?.getBoundingClientRect();

    if (imageBoundingRect.width <= window.innerWidth) {
      refs.imageWrapper.current!.style.removeProperty('left');
    }

    if (imageBoundingRect.height <= window.innerHeight) {
      refs.imageWrapper.current!.style.removeProperty('top');
    }

    if (scale !== refs.zoom.current?.scale) {
      refs.zoom.current = {
        scale
      };

      refs.imageWrapper.current!.style.transform = `scale(${scale})`;
    }
  }, []);

  const onMouseMove = React.useCallback((event: MouseEvent) => {
    if (!refs.useZoom.current) return;

    if (!(refs.mouseDown.current && refs.image.current)) return;

    const x = event.x - (refs.mouseMovePrevious.current?.x || 0);

    const y = event.y - (refs.mouseMovePrevious.current?.y || 0);

    refs.mouseMovePrevious.current = {
      x: event.clientX,
      y: event.clientY
    };

    let left = Number(refs.imageWrapper.current?.style?.left?.replace('px', '')) || 0;

    let top = Number(refs.imageWrapper.current?.style?.top?.replace('px', '')) || 0;

    const imageBoundingRect = refs.image.current!.getBoundingClientRect();

    if (
      (imageBoundingRect.left <= 0 &&
        (
          (imageBoundingRect.left + x <= 0) &&
          (imageBoundingRect.width + imageBoundingRect.left + x >= window.innerWidth)
        )
      )
    ) {
      left += x;

      refs.imageWrapper.current!.style.left = `${left}px`;
    }

    if (
      (imageBoundingRect.top <= 0 &&
        (
          (imageBoundingRect.top + y <= 0) &&
          (imageBoundingRect.height + imageBoundingRect.top + y >= window.innerHeight)
        )
      )
    ) {
      top += y;

      refs.imageWrapper.current!.style.top = `${top}px`;
    }
  }, []);

  React.useEffect(() => {
    if (refs.useZoom.current) {
      if (imageRef) imageRef.addEventListener('wheel', onWheel, { passive: false });

      window.addEventListener('mousemove', onMouseMove);

      window.addEventListener('mouseup', onMouseUp);

      window.addEventListener('touchend', onMouseUp);
    }

    return () => {
      if (imageRef) imageRef.removeEventListener('wheel', onWheel);

      window.removeEventListener('mousemove', onMouseMove);

      window.removeEventListener('mouseup', onMouseUp);

      window.removeEventListener('touchend', onMouseUp);
    };
  }, [imageRef, refs.useZoom.current]);

  const onScroll = React.useCallback((event: WheelEvent) => {
    if (!refs.useZoom.current) return;

    if (arrows) {
      setMoveValue({
        left: refs.more.current.scrollLeft,
        top: refs.more.current.scrollTop
      });
    }
  }, [arrows]);

  const iconButtonProps = {
    version: 'filled',
    color: 'default',
    tonal: true,
    size: 'small',

    ...IconButtonProps
  };

  const arrowPre = moveValue && (
    <IconButton
      onClick={() => move(false)}

      disabled={!moveValue || refs.more.current?.scrollLeft === 0}

      {...iconButtonProps}

      className={classNames([
        staticClassName('ImageGallery', theme) && [
          'onesy-ImageGallery-arrow',
          'onesy-ImageGallery-arrow-start'
        ],

        iconButtonProps?.className,
        classes.arrow
      ])}
    >
      <IconStart />
    </IconButton>
  );

  const arrowPost = moveValue && (
    <IconButton
      onClick={() => move()}

      disabled={Math.ceil(refs.more.current?.clientWidth + refs.more.current?.scrollLeft) === refs.more.current?.scrollWidth}

      {...iconButtonProps}

      className={classNames([
        staticClassName('ImageGallery', theme) && [
          'onesy-ImageGallery-arrow',
          'onesy-ImageGallery-arrow-end'
        ],

        iconButtonProps?.className,
        classes.arrow
      ])}
    >
      <IconEnd />
    </IconButton>
  );

  const more = !!items?.length;

  const onDragStartImage = React.useCallback((event: DragEvent) => {
    event.preventDefault();
  }, []);

  const url = media?.url || media?.urlSmall || (is('string', media) ? media : '');

  const main = <>
    <Line
      justify='center'

      align='center'

      flex

      fullWidth

      className={classNames([
        staticClassName('ImageGallery', theme) && [
          'onesy-ImageGallery-main'
        ],

        classes.main,
        classes[`main_version_${version}`],
        classes[`main_version_${version}_size_${size}`],
        !overflow && classes.noOverflow
      ])}
    >
      {startMain}

      <Line
        ref={refs.imageWrapper}

        justify='center'

        align='center'

        fullWidth

        flex

        {...ImageWrapperProps}

        className={classNames([
          staticClassName('ImageGallery', theme) && [
            'onesy-ImageGallery-image-wrapper'
          ],

          ImageWrapperProps?.className,
          classes.imageWrapper
        ])}

        style={{
          ...ImageWrapperProps?.style
        }}
      >
        {startImage}

        {url && (
          <Image
            ref={(item: any) => {
              refs.image.current = item;

              setImageRef(item);
            }}

            src={url}

            alt={media?.name}

            onMouseDown={onMouseDown}

            onMouseUp={onMouseUp}

            onTouchStart={onMouseDown}

            onTouchEnd={onMouseUp}

            onDragStart={onDragStartImage}

            lazyLoad={version === 'regular'}

            {...ImageProps}

            className={classNames([
              staticClassName('ImageGallery', theme) && [
                'onesy-ImageGallery-image'
              ],

              ImageProps?.className,
              classes.image,
              classes.pointerEventsAuto
            ])}
          />
        )}

        {endImage}
      </Line>

      {endMain}
    </Line>

    {more && (
      <Line
        align='center'

        fullWidth

        className={classNames([
          staticClassName('ImageGallery', theme) && [
            'onesy-ImageGallery-footer'
          ],

          classes.footer
        ])}
      >
        <Line
          gap={1.5}

          direction='row'

          justify='center'

          align='center'

          className={classNames([
            classes.itemsWrapper
          ])}
        >
          {startThumbnails}

          {arrows && arrowPre}

          <Line
            ref={refs.more}

            gap={1}

            direction='row'

            align='center'

            justify='flex-start'

            fullWidth

            onScroll={onScroll}

            className={classNames([
              classes.items
            ])}
          >
            {items.map((item: any, index: number) => (
              <Line
                onClick={() => onValue(index)}

                className={classNames([
                  staticClassName('ImageGallery', theme) && [
                    'onesy-ImageGallery-item',
                    value === index && 'onesy-ImageGallery-item-selected'
                  ],

                  classes.item,
                  value === index && classes.itemSelected
                ])}

                style={{
                  backgroundImage: `url('${item?.urlSmall || item?.url || item}')`
                }}
              >
                <Interaction />
              </Line>
            ))}
          </Line>

          {arrows && arrowPost}

          {endThumbnails}
        </Line>
      </Line>
    )}
  </>;

  if (version === 'regular') {
    return (
      <Line
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        fullWidth

        className={classNames([
          staticClassName('ImageGallery', theme) && [
            'onesy-ImageGallery-root',
            `onesy-ImageGallery-version-${version}`,
            `onesy-ImageGallery-size-${size}`
          ],

          className,
          classes.root,
          classes[`version_${version}`]
        ])}

        {...other}
      >
        {main}
      </Line>
    );
  }

  return (
    <Backdrop
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      open={open}

      onClose={onClose}

      className={classNames([
        staticClassName('ImageGallery', theme) && [
          'onesy-ImageGallery-root',
          `onesy-ImageGallery-version-${version}`
        ],

        className,
        classes.root,
        classes[`version_${version}`]
      ])}

      {...other}
    >
      <Line
        gap={0}

        fullWidth

        className={classes.wrapper}
      >
        <Line
          direction='row'

          justify='flex-end'

          fullWidth

          className={classNames([
            staticClassName('ImageGallery', theme) && [
              'onesy-ImageGallery-header'
            ],

            classes.header
          ])}
        >
          <IconButton
            version='filled'

            color={theme.palette.light ? 'default' : 'inverted'}

            onClick={onClose}

            className={classNames([
              classes.pointerEventsAuto
            ])}
          >
            <IconClose />
          </IconButton>
        </Line>

        {main}
      </Line>
    </Backdrop>
  );
});

ImageGallery.displayName = 'onesy-ImageGallery';

export default ImageGallery;
