import React from 'react';

import { cleanValue, is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialDraft from '@onesy/icons-material-rounded-react/IconMaterialDraftW100';

import AudioPlayerElement from '../AudioPlayer';
import ImageElement from '../Image';
import InteractionElement from '../Interaction';
import LineElement from '../Line';
import SectionElement, { ISection } from '../Section/Section';
import TypeElement from '../Type';
import VideoPlayerElement from '../VideoPlayer';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  name: {
    wordBreak: 'break-word'
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
    maxWidth: '74px',
    width: '90vw'
  },

  otherWrapper_size_regular: {
    maxWidth: '94px',
    width: '90vw'
  },

  otherWrapper_size_large: {
    maxWidth: '114px',
    width: '90vw'
  },

  other_size_small: {
    borderRadius: theme.methods.shape.radius.value(1)
  },

  other_size_regular: {
    borderRadius: theme.methods.shape.radius.value(2)
  },

  other_size_large: {
    borderRadius: theme.methods.shape.radius.value(3)
  }
}), { name: 'onesy-SectionMedia' });

export type ISectionMedia = ISection & {
  value?: IMediaObject;

  size?: 'small' | 'regular' | 'large';

  name?: boolean;

  IconDocument?: any;

  MediaProps?: IPropsAny;
  ImageProps?: IPropsAny;
  AudioProps?: IPropsAny;
  VideoProps?: IPropsAny;
  OtherProps?: IPropsAny;
};

const Element: React.FC<ISectionMedia> = props_ => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionMedia?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Section = theme?.elements?.Section || SectionElement;

  const Image = theme?.elements?.Image || ImageElement;

  const AudioPlayer = theme?.elements?.AudioPlayer || AudioPlayerElement;

  const VideoPlayer = theme?.elements?.VideoPlayer || VideoPlayerElement;

  const Interaction = theme?.elements?.Interaction || InteractionElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    ref,

    value,

    size = 'regular',

    name,

    IconDocument = IconMaterialDraft,

    MediaProps,
    ImageProps,
    AudioProps,
    VideoProps,
    OtherProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const onOpenMedia = (media: IMediaObject) => {
    window.open(media.url || media.urlSmall, 'blank_');
  };

  let element: any;

  if (value) {
    const mime = value.mime;

    if (mime?.includes('image')) element = (
      <Image
        src={value?.url || value?.urlSmall || (is('string', value) ? value as any : '')}

        maxWidth='rg'

        fullWidth

        {...MediaProps}

        {...ImageProps}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'onesy-SectionMedia-item',
            'onesy-SectionMedia-item-image'
          ],

          MediaProps?.className,
          ImageProps?.className
        ])}
      />
    );
    else if (mime?.includes('audio')) element = (
      <AudioPlayer
        size={size}

        {...value}

        {...MediaProps}

        {...AudioProps}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'onesy-SectionMedia-item',
            'onesy-SectionMedia-item-audio'
          ],

          MediaProps?.className,
          AudioProps?.className
        ])}
      />
    );
    else if (mime?.includes('video')) element = (
      <VideoPlayer
        size={size}

        {...value}

        {...MediaProps}

        {...VideoProps}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'onesy-SectionMedia-item',
            'onesy-SectionMedia-item-video'
          ],

          MediaProps?.className,
          VideoProps?.className
        ])}
      />
    );
    else element = (
      <Line
        gap={1}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'onesy-SectionMedia-wrapper',
            'onesy-SectionMedia-wrapper-other'
          ],

          classes.wrapper,
          classes[`otherWrapper_size_${size}`]
        ])}
      >
        <Line
          align='center'

          justify='center'

          onClick={() => onOpenMedia(value as any)}

          fullWidth

          {...MediaProps}

          {...OtherProps}

          className={classNames([
            staticClassName('SectionMedia', theme) && [
              'onesy-SectionMedia-item',
              'onesy-SectionMedia-item-other'
            ],

            MediaProps?.className,
            OtherProps?.className,
            classes.other,
            classes[`other_size_${size}`]
          ])}
        >
          <Interaction />

          <IconDocument
            size={size === 'large' ? 44 : size === 'regular' ? 34 : 24}
          />
        </Line>
      </Line>
    );
  }

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      maxWidth='small'

      align='center'

      className={classNames([
        staticClassName('SectionMedia', theme) && [
          'onesy-SectionMedia-root',
          `onesy-SectionMedia-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        align='center'

        fullWidth
      >
        {element}

        {name && (
          <Type
            version={size === 'large' ? 't1' : size === 'regular' ? 't2' : 't3'}

            align='center'

            fullWidth

            className={classNames([
              staticClassName('SectionMedia', theme) && [
                'onesy-SectionMedia-name'
              ],

              classes.name
            ])}
          >
            {cleanValue(value?.name || l('No name'), { capitalize: true })}
          </Type>
        )}
      </Line>
    </Section>
  );
};

Element.displayName = 'onesy-SectionMedia';

export default Element;
