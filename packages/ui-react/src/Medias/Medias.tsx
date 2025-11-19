import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialDraft from '@onesy/icons-material-rounded-react/IconMaterialDraftW100';

import LinkElement from '../Link';
import TypeElement from '../Type';
import InteractionElement from '../Interaction';
import LineElement, { ILine } from '../Line/Line';
import AudioPlayerElement from '../AudioPlayer';
import VideoPlayerElement from '../VideoPlayer';
import PortalElement from '../Portal';
import ImageGalleryElement from '../ImageGallery';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  items: {
    maxWidth: '100%',
    padding: theme.methods.space.value(0.5, 'px'),
    overflow: 'auto hidden'
  },

  item: {

  },

  wrapper: {
    position: 'relative',
    flex: '0 0 auto'
  },

  wrapper_image: {
    transition: theme.methods.transitions.make('transform'),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  wrapper_other: {
    transition: theme.methods.transitions.make('transform'),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  name: {
    wordBreak: 'break-word'
  },

  image: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    aspectRatio: '16 / 9'
  },

  imageWrapper_size_small: {
    width: '174px'
  },

  imageWrapper_size_regular: {
    width: '214px'
  },

  imageWrapper_size_large: {
    width: '254px'
  },

  image_size_small: {
    borderRadius: theme.methods.shape.radius.value(1)
  },

  image_size_regular: {
    borderRadius: theme.methods.shape.radius.value(2)
  },

  image_size_large: {
    borderRadius: theme.methods.shape.radius.value(3)
  },

  audioWrapper_size_small: {
    width: '324px'
  },

  audioWrapper_size_regular: {
    width: '340px'
  },

  audioWrapper_size_large: {
    width: '440px'
  },

  videoWrapper_size_small: {
    width: '324px'
  },

  videoWrapper_size_regular: {
    width: '340px'
  },

  videoWrapper_size_large: {
    width: '440px'
  },

  other: {
    position: 'relative',
    aspectRatio: '3 / 4',
    cursor: 'pointer',
    userSelect: 'none',
    background: theme.palette.background.secondary.tertiary,
    boxShadow: theme.shadows.values.default[1]
  },

  otherWrapper_size_small: {
    width: '74px'
  },

  otherWrapper_size_regular: {
    width: '94px'
  },

  otherWrapper_size_large: {
    width: '114px'
  },

  other_size_small: {
    borderRadius: theme.methods.shape.radius.value(1)
  },

  other_size_regular: {
    borderRadius: theme.methods.shape.radius.value(2)
  },

  other_size_large: {
    borderRadius: theme.methods.shape.radius.value(3)
  },

  externalLinks: {
    overflow: 'auto hidden'
  },

  aspectRatioYoutube: {
    aspectRatio: '16 / 9',
    width: '100%',
    maxWidth: '750px'
  },

  aspectRatioVimeo: {
    aspectRatio: '16 / 9',
    width: '440px'
  },

  aspectRatioInstagram: {
    aspectRatio: '3 / 5.6',
    width: '340px'
  },

  aspectRatioTiktok: {
    aspectRatio: '3 / 6.84',
    width: '324px'
  },

  customEmbed: {
    maxWidth: '750px'
  }
}), { name: 'onesy-Medias' });

export type IMediasItem = {
  value: IMediaObject;
  props?: any;
};

export type IMediasMediaVersion = 'embed' | 'image' | 'audio' | 'video' | 'other';

export type IMedias = ILine & {
  size?: 'small' | 'regular' | 'large';

  values?: IMediasItem | IMediasItem[];

  imageGallery?: boolean;

  show?: IMediasMediaVersion[];

  noName?: boolean;

  IconDocument?: any;

  NameProps?: IPropsAny;
  WrapperProps?: IPropsAny;
  EmbedProps?: IPropsAny;
  ImageProps?: IPropsAny;
  AudioProps?: IPropsAny;
  VideoProps?: IPropsAny;
  OtherProps?: IPropsAny;
  ItemsProps?: IPropsAny;
  EmbedItemsProps?: IPropsAny;
  ImageItemsProps?: IPropsAny;
  AudioItemsProps?: IPropsAny;
  VideoItemsProps?: IPropsAny;
  OtherItemsProps?: IPropsAny;
};

const Medias: React.FC<IMedias> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMedias?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Link = theme?.elements?.Link || LinkElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Interaction = theme?.elements?.Interaction || InteractionElement;

  const AudioPlayer = theme?.elements?.AudioPlayer || AudioPlayerElement;

  const VideoPlayer = theme?.elements?.VideoPlayer || VideoPlayerElement;

  const Portal = theme?.elements?.Portal || PortalElement;

  const ImageGallery = theme?.elements?.ImageGallery || ImageGalleryElement;

  const {
    size = 'regular',

    values: values_ = [],

    imageGallery = true,

    show = ['embed', 'image', 'video', 'audio', 'other'],

    noName = true,

    IconDocument = IconMaterialDraft,

    NameProps,
    WrapperProps,
    EmbedProps,
    ImageProps,
    AudioProps,
    VideoProps,
    OtherProps,
    ItemsProps,
    EmbedItemsProps = { fullWidth: true },
    ImageItemsProps,
    AudioItemsProps,
    VideoItemsProps,
    OtherItemsProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [open, setOpen] = React.useState<any>();

  const refs = {
    root: React.useRef<HTMLElement>(undefined)
  };

  const values = is('array', values_) ? values_ : [values_];

  const onOpen = (index: number) => {
    setOpen({
      index
    });
  };

  const onClose = () => {
    setOpen(null);
  };

  const onOpenMedia = (media: IMediaObject) => {
    window.open(media.url || media.urlSmall, 'blank_');
  };

  const items = React.useMemo(() => {
    const items_: Record<string, IMediasItem[]> = {
      image: [],
      audio: [],
      video: [],
      other: [],
      embed: []
    };

    (values as IMediasItem[]).filter(item => item?.value && !!Object.keys(item.value).length).forEach(item => {
      const media = item.value;

      if (media) {
        if (media.urlEmbed !== undefined) items_.embed.push(item);
        else if (media.mime?.startsWith('image')) items_.image.push(item);
        else if (media.mime?.startsWith('audio')) items_.audio.push(item);
        else if (media.mime?.startsWith('video')) items_.video.push(item);
        else items_.other.push(item);
      }
    });

    return items_;
  }, [values]);

  const getLink = (item: IMediaObject, index: number) => {
    const urlEmbed = item?.urlEmbed;

    if (!urlEmbed) return null;

    const otherProps: any = {
      key: index,

      ...EmbedProps
    };

    const urlEmbedStart = urlEmbed.replace('http://', '').replace('https://', '');

    const isPlatform = (
      urlEmbedStart.startsWith('youtu') ||
      urlEmbedStart.startsWith('www.youtu') ||
      urlEmbedStart.startsWith('instagram') ||
      urlEmbedStart.startsWith('www.instagram') ||
      urlEmbedStart.startsWith('tiktok') ||
      urlEmbedStart.startsWith('www.tiktok') ||
      urlEmbedStart.startsWith('vimeo') ||
      urlEmbedStart.startsWith('www.vimeo')
    );

    // predefined
    if (isPlatform) {
      let url: URL;

      try {
        url = new URL(item.urlEmbed);
      }
      catch (error) {
        console.log('Invalid embed URL', item);

        return null;
      }

      const id = url.pathname?.split('/').filter(Boolean).slice(-1)[0];

      if (!url?.hostname || !id) return null;

      if (item.urlEmbed.includes('youtu.be')) {
        return (
          <iframe
            {...otherProps}

            title={item.name || ''}

            src={`https://www.youtube.com/embed/${id}`}

            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

            allowFullScreen

            className={classNames([
              otherProps?.className,
              classes.aspectRatioYoutube
            ])}
          />
        );
      }

      if (item.urlEmbed.includes('instagram.com')) {
        return (
          <iframe
            {...otherProps}

            title={item.name || ''}

            src={`https://www.instagram.com/reel/${id}/embed`}

            allowFullScreen

            className={classNames([
              otherProps?.className,
              classes.aspectRatioInstagram
            ])}
          />
        );
      }

      if (item.urlEmbed.includes('tiktok.com')) {
        return (
          <iframe
            {...otherProps}

            title={item.name || ''}

            src={`https://www.tiktok.com/embed/v2/${id}`}

            allowFullScreen

            className={classNames([
              otherProps?.className,
              classes.aspectRatioTiktok
            ])}
          />
        );
      }

      if (item.urlEmbed.includes('vimeo.com')) {
        return (
          <iframe
            {...otherProps}

            title={item.name || ''}

            src={`https://player.vimeo.com/video/${id}`}

            allowFullScreen

            className={classNames([
              otherProps?.className,
              classes.aspectRatioVimeo
            ])}
          />
        );
      }

      return (
        <Link
          {...otherProps}

          href={item?.urlEmbed}

          target='blank'
        >
          {item.name || item.urlEmbed}
        </Link>
      );
    }

    // custom embed code
    return (
      <Line
        {...otherProps}

        className={classNames([
          otherProps?.className,
          classes.customEmbed
        ])}

        fullWidth

        dangerouslySetInnerHTML={{
          __html: urlEmbed
        }}
      />
    );
  };

  const getItem = (version: IMediasMediaVersion, item: IMediasItem, index: number) => {
    const media = item.value;

    const name = (item?.props?.name || !noName) && (
      <Type
        version={size === 'large' ? 'l2' : size === 'regular' ? 'l3' : 'l3'}

        {...NameProps}

        className={classNames([
          staticClassName('Medias', theme) && [
            'onesy-Medias-name'
          ],

          NameProps?.className,
          classes.name
        ])}
      >
        {media?.name || l('No name')}
      </Type>
    );

    if (version === 'embed') {
      return getLink(media, index);
    }

    if (version === 'image') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          onClick={() => imageGallery && onOpen(index)}

          className={classNames([
            staticClassName('Medias', theme) && [
              'onesy-Medias-wrapper',
              'onesy-Medias-wrapper-image'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes.wrapper_image,
            classes[`imageWrapper_size_${size}`]
          ])}
        >
          <Line
            key={index}

            {...ImageProps}

            {...item?.props}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'onesy-Medias-item',
                'onesy-Medias-item-image'
              ],

              ImageProps?.className,
              item?.props?.className,
              classes.item,
              classes.image,
              classes[`image_size_${size}`]
            ])}

            style={{
              backgroundImage: `url(${media.urlSmall || media.url})`,

              ...item?.props?.style
            }}
          >
            <Interaction />
          </Line>

          {name}
        </Line>
      );
    }

    if (version === 'audio') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          className={classNames([
            staticClassName('Medias', theme) && [
              'onesy-Medias-wrapper',
              'onesy-Medias-wrapper-audio'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes[`audioWrapper_size_${size}`]
          ])}
        >
          <AudioPlayer
            key={index}

            tonal

            color='primary'

            src={media.url || media.urlSmall}

            size={size}

            {...media}

            {...AudioProps}

            {...item?.props}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'onesy-Medias-item',
                'onesy-Medias-item-audio'
              ],

              VideoProps?.className,
              item?.props?.className,
              classes.item,
              classes.audio
            ])}
          />

          {name}
        </Line>
      );
    }

    if (version === 'video') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          className={classNames([
            staticClassName('Medias', theme) && [
              'onesy-Medias-wrapper',
              'onesy-Medias-wrapper-video'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes[`videoWrapper_size_${size}`]
          ])}
        >
          <VideoPlayer
            key={index}

            tonal

            color='primary'

            src={media.url || media.urlSmall}

            size={size}

            {...media}

            {...VideoProps}

            {...item?.props}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'onesy-Medias-item',
                'onesy-Medias-item-video'
              ],

              VideoProps?.className,
              item?.props?.className,
              classes.item,
              classes.video
            ])}
          />

          {name}
        </Line>
      );
    }

    if (version === 'other') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          className={classNames([
            staticClassName('Medias', theme) && [
              'onesy-Medias-wrapper',
              'onesy-Medias-wrapper-other'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes[`otherWrapper_size_${size}`]
          ])}
        >
          <Line
            key={index}

            {...OtherProps}

            {...item?.props}

            align='center'

            justify='center'

            onClick={() => onOpenMedia(media)}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'onesy-Medias-item',
                'onesy-Medias-item-other'
              ],

              OtherProps?.className,
              item?.props?.className,
              classes.item,
              classes.other,
              classes[`other_size_${size}`]
            ])}
          >
            <Interaction />

            <IconDocument
              size={size === 'large' ? 44 : size === 'regular' ? 34 : 24}
            />
          </Line>

          {name}
        </Line>
      );
    }

    return null;
  };

  const usable = show.filter(item => (
    !!items[item]?.length &&
    !!items[item].map((itemMedia, indexItemMedia) => getItem(item as any, itemMedia, indexItemMedia)).filter(Boolean).length
  ));

  if (!usable?.length) return null;

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={size === 'large' ? 3 : size === 'regular' ? 2 : 1.5}

      fullWidth

      className={classNames([
        staticClassName('Medias', theme) && [
          'onesy-Medias-root',
          `onesy-Medias-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {usable.map(item => (
        <Line
          key={item}

          gap={size === 'large' ? 2 : size === 'regular' ? 1.5 : 1}

          direction={item === 'embed' ? 'column' : 'row'}

          align={item === 'embed' ? 'center' : 'flex-start'}

          justify={item === 'embed' ? 'center' : 'flex-start'}

          fullWidth

          {...ItemsProps}

          {...(item === 'embed' && EmbedItemsProps)}

          {...(item === 'image' && ImageItemsProps)}

          {...(item === 'audio' && AudioItemsProps)}

          {...(item === 'video' && VideoItemsProps)}

          {...(item === 'other' && OtherItemsProps)}

          className={classNames([
            staticClassName('Medias', theme) && [
              'onesy-Medias-items',
              `onesy-Medias-items-${item}`
            ],

            ItemsProps?.className,
            item === 'embed' && EmbedItemsProps?.className,
            item === 'image' && ImageItemsProps?.className,
            item === 'audio' && AudioItemsProps?.className,
            item === 'video' && VideoItemsProps?.className,
            item === 'other' && OtherItemsProps?.className,
            classes.items
          ])}
        >
          {items[item].map((itemMedia, indexItemMedia) => getItem(item as any, itemMedia, indexItemMedia))}
        </Line>
      ))}

      {refs.root.current && imageGallery && !!items.image?.length && (
        <Portal
          element={refs.root.current?.ownerDocument?.body}
        >
          <ImageGallery
            open={!!open}

            onClose={onClose}

            value={open?.index}

            items={items.image.map(item => ({
              ...item.value,

              url: item.value.url || item.value.urlSmall,

              urlSmall: item.value.urlSmall || item.value.url
            }))}
          />
        </Portal>
      )}
    </Line>
  );
});

Medias.displayName = 'onesy-Medias';

export default Medias;
