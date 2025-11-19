import React from 'react';

import { is, textToInnerHTML } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TextElement from '../Text';
import ImageElement from '../Image';
import SectionElement, { ISection } from '../Section/Section';
import AudioPlayerElement from '../AudioPlayer';
import VideoPlayerElement from '../VideoPlayer';
import LineElement from '../Line';
import TypeElement from '../Type';
import ButtonElement from '../Button';
import { staticClassName } from '../utils';
import { IValueBreakpoints, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  main: {
    '&.onesy-Line-direction-row': {
      '& > *': {
        width: '50%'
      }
    }
  }
}), { name: 'onesy-SectionTextMedia' });

export type ISectionTextMedia = ISection & {
  title?: string | Partial<Record<IValueBreakpoints, string>>;
  description?: string | Partial<Record<IValueBreakpoints, string>>;

  button?: {
    text?: any;
    to?: string;
    link?: string;
    props?: any;
  };

  mediaPosition?: 'top' | 'left' | 'right' | 'bottom';

  media?: any;

  MainProps?: IPropsAny;
  TitleProps?: IPropsAny;
  WrapperProps?: IPropsAny;
  WrapperMainProps?: IPropsAny;
  WrapperTextProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  MediaProps?: IPropsAny;
  ImageProps?: IPropsAny;
  AudioProps?: IPropsAny;
  VideoProps?: IPropsAny;
  OtherProps?: IPropsAny;
};

const SectionTextMedia: React.FC<ISectionTextMedia> = props_ => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionTextMedia?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Text = theme?.elements?.Text || TextElement;

  const Image = theme?.elements?.Image || ImageElement;

  const Section = theme?.elements?.Section || SectionElement;

  const AudioPlayer = theme?.elements?.AudioPlayer || AudioPlayerElement;

  const VideoPlayer = theme?.elements?.VideoPlayer || VideoPlayerElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Button = theme?.elements?.Button || ButtonElement;

  const { classes } = useStyle();

  const {
    ref,

    size,

    title,

    description,

    button,

    mediaPosition = 'top',

    media,

    MainProps,
    TitleProps,
    WrapperProps,
    WrapperMainProps,
    WrapperTextProps,
    DescriptionProps,
    MediaProps,
    ImageProps,
    AudioProps,
    VideoProps,
    OtherProps,

    className,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(undefined)
  };

  let mediaElement: any;

  const mediaProps: any = {
    size,
    themed: true,
    color: 'primary',

    ...MediaProps
  };

  const mime = media?.mime || '';

  if (mime.includes('image')) {
    mediaElement = (
      <Image
        src={media?.url || media?.urlSmall || (is('string', media) ? media as any : '')}

        {...mediaProps}

        {...MediaProps}

        {...ImageProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'onesy-SectionTextMedia-item',
            'onesy-SectionTextMedia-item-image'
          ],

          MediaProps?.className,
          ImageProps?.className
        ])}
      />
    );
  }

  if (mime.includes('audio')) {
    mediaElement = (
      <AudioPlayer
        {...media}

        {...mediaProps}

        {...MediaProps}

        {...AudioProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'onesy-SectionTextMedia-item',
            'onesy-SectionTextMedia-item-audio'
          ],

          MediaProps?.className,
          AudioProps?.className
        ])}
      />
    );
  }

  if (mime.includes('video')) {
    mediaElement = (
      <VideoPlayer
        {...media}

        {...mediaProps}

        {...MediaProps}

        {...VideoProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'onesy-SectionTextMedia-item',
            'onesy-SectionTextMedia-item-video'
          ],

          MediaProps?.className,
          VideoProps?.className
        ])}
      />
    );
  }

  const main = (
    <Line
      gap={3}

      direction='column'

      align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'flex-start' : 'flex-end'}

      fullWidth

      {...WrapperMainProps}

      className={classNames([
        staticClassName('SectionTextMedia', theme) && [
          'onesy-SectionTextMedia-wrapper-main'
        ],

        WrapperMainProps?.className
      ])}
    >
      <Line
        gap={2}

        direction='column'

        align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'flex-start' : 'flex-end'}

        fullWidth

        {...WrapperTextProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'onesy-SectionTextMedia-wrapper-text'
          ],

          WrapperTextProps?.className
        ])}
      >
        {is('string', title) && (
          <Type
            version={size === 'large' ? 'h1' : size === 'regular' ? 'h2' : 'h3'}

            align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'start' : 'end'}

            dangerouslySetInnerHTML={{
              __html: textToInnerHTML(title)
            }}

            {...TitleProps}

            className={classNames([
              staticClassName('SectionTextMedia', theme) && [
                'onesy-SectionTextMedia-title'
              ],

              TitleProps?.className
            ])}
          />
        )}

        {is('string', description) && (
          <Text
            align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'start' : 'end'}

            columns={1}

            TypeProps={{
              ...DescriptionProps?.TypeProps,

              version: size === 'large' ? 'b1' : [undefined, 'regular'].includes(size as any) ? 'b2' : 'b3'
            }}

            value={description}

            {...DescriptionProps}

            className={classNames([
              staticClassName('SectionTextMedia', theme) && [
                'onesy-SectionTextMedia-description'
              ],

              DescriptionProps?.className
            ])}
          />
        )}
      </Line>

      {button && (
        <Button
          tonal

          version='filled'

          color='primary'

          size={size}

          onClick={(button.to || button.link) && window.open(button.to || button.link, 'blank')}

          {...button.props}

          className={classNames([
            staticClassName('SectionAction', theme) && [
              'onesy-SectionTextMedia-button'
            ],

            button.props?.className,
            classes.button
          ])}
        >
          {button.text || l('Click here')}
        </Button>
      )}
    </Line >
  );

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      size={size}

      className={classNames([
        staticClassName('SectionTextMedia', theme) && [
          'onesy-SectionTextMedia-root',
          `onesy-SectionTextMedia-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={5}

        direction={{
          default: ['left', 'right'].includes(mediaPosition) ? 'row' : 'column',
          1100: 'column'
        }}

        align={['left', 'right'].includes(mediaPosition) ? 'flex-start' : 'center'}

        justify={['left', 'right'].includes(mediaPosition) ? 'flex-start' : 'center'}

        fullWidth

        {...MainProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'onesy-SectionTextMedia-main'
          ],

          MainProps?.className,
          classes.main
        ])}
      >
        {['top', 'left'].includes(mediaPosition) && mediaElement}

        {main}

        {['bottom', 'right'].includes(mediaPosition) && mediaElement}
      </Line>
    </Section>
  );
};

SectionTextMedia.displayName = 'onesy-SectionTextMedia';

export default SectionTextMedia;
