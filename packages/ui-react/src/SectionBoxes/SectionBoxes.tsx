import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment, textToInnerHTML } from '@onesy/utils';
import { TPaletteVersion, classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SectionElement, { ISection } from '../Section/Section';
import LineElement from '../Line';
import TypeElement from '../Type';
import ButtonElement from '../Button';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  item: {
    position: 'relative',
    maxWidth: '768px',
    zIndex: '14',
    flex: '1 1'
  },

  item_size_small: {
    padding: `${theme.methods.space.value(4.25, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  item_size_regular: {
    padding: `${theme.methods.space.value(6.75, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  item_size_large: {
    padding: `${theme.methods.space.value(9.25, 'px')} ${theme.methods.space.value(4, 'px')}`
  },

  actions: {
    marginTop: 12
  },

  text: {
    '&.onesy-Type-root': {
      color: 'white',
      mixBlendMode: 'difference'
    }
  },

  button: {
    transition: theme.methods.transitions.make('transform'),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  backgroundImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  backgroundVideo: {
    position: 'absolute',
    inset: '0',
    minHeight: '100%',
    minWidth: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1'
  },

  backgroundOverlay: {
    position: 'absolute',
    inset: '0'
  },

  backgroundOverlayBlur: {
    backdropFilter: 'blur(12px)'
  }
}), { name: 'onesy-SectionBoxes' });

export type ISectionBoxesItem = {
  name?: any;
  description?: any;

  buttonText?: any;

  to?: string;
  link?: string;

  backgroundColor?: TPaletteVersion;
  backgroundGradient?: TPaletteVersion[];

  backgroundImage?: IMediaObject;
  backgroundVideo?: IMediaObject;

  overlay?: TPaletteVersion;
  overlayBlur?: number | boolean;

  themed?: boolean;

  propsMain?: any;
  propsName?: any;
  propsDescription?: any;
  propsButton?: any;
  propsWrapperText?: any;
  propsActions?: any;
};

export type ISectionBoxes = ISection & {
  size?: 'small' | 'regular' | 'large';

  values?: ISectionBoxesItem[];

  responsive?: boolean;

  ItemProps?: IPropsAny;
  ItemsProps?: IPropsAny;
};

const Element: React.FC<ISectionBoxes> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionBoxes?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const {
    size = 'regular',

    values: values_ = [],

    responsive = true,

    ItemProps,
    ItemsProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const navigate = isEnvironment('browser') && useNavigate();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  // Max 4
  const values = values_?.slice(0, 4);

  const getItem = React.useCallback((item: ISectionBoxesItem, index: number) => {
    let styleBackground: any = {};

    const themed = [undefined, true].includes(item.themed);

    if (item.backgroundColor) {
      const palette = theme.palette.color[item.backgroundColor] || theme.methods.color(item.backgroundColor);

      styleBackground = {
        ...styleBackground,

        backgroundColor: themed ? theme.methods.palette.color.value(undefined as any, 95, true, palette) : palette?.main
      };
    }

    if (is('array', item.backgroundGradient) && item.backgroundGradient!.length >= 2) {
      const palette1 = theme.palette.color[item.backgroundGradient![0]] || theme.methods.color(item.backgroundGradient![0]);
      const palette2 = theme.palette.color[item.backgroundGradient![1]] || theme.methods.color(item.backgroundGradient![1]);
      const palette3 = theme.palette.color[item.backgroundGradient![2]] || theme.methods.color(item.backgroundGradient![2]);

      let backgroundImageStyle = '';

      if (item.backgroundGradient?.length === 2) {
        backgroundImageStyle = themed ? `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(palette1.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(palette2.main, 0.14)} 100%)` : `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${palette1.main} 0%, ${palette2.main} 100%)`;
      }

      if (item.backgroundGradient?.length === 3) {
        backgroundImageStyle = themed ? `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(palette1.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(palette2.main, 0.14)} 40%, ${theme.methods.palette.color.colorToRgb(palette3.main, 0.14)} 100%)` : `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${palette1.main} 0%, ${palette2.main} 40%, ${palette3.main} 100%)`;
      }

      styleBackground = {
        ...styleBackground,

        backgroundImage: backgroundImageStyle
      };
    }

    if (item.backgroundImage) {
      const url = item.backgroundImage?.url || item.backgroundImage?.urlSmall || (is('string', item.backgroundImage) ? item.backgroundImage as any : '');

      if (url) {
        styleBackground = {
          ...styleBackground,

          backgroundImage: `url('${url}')`
        };
      }
    }

    let styleOverlay: any = {};

    if (item.overlay) {
      const palette = theme.palette.color[item.overlay] || theme.methods.color(item.overlay);

      styleOverlay = {
        ...styleOverlay,

        backgroundColor: themed ? theme.methods.palette.color.alpha(theme.methods.palette.color.value(undefined as any, 95, true, palette), 0.74) : palette?.main
      };
    }

    const urlVideo = item.backgroundVideo?.url || item.backgroundVideo?.urlSmall || (is('string', item.backgroundVideo) ? item.backgroundVideo as any : '');

    return (
      <Line
        key={index}

        gap={1}

        align='flex-start'

        justify='center'

        fullWidth

        {...ItemProps}

        className={classNames([
          staticClassName('SectionBoxes', theme) && [
            'onesy-SectionBoxes-item'
          ],

          ItemProps?.className,
          classes.item,
          classes[`item_size_${size}`],
          item.backgroundImage && styleBackground.backgroundImage && classes.backgroundImage
        ])}

        style={{
          ...styleBackground
        }}
      >
        {urlVideo && (
          <video
            autoPlay
            muted
            loop

            className={classNames([
              staticClassName('SectionBoxes', theme) && [
                'onesy-SectionBoxes-item-background-video'
              ],

              classes.backgroundVideo
            ])}
          >
            <source
              src={urlVideo}
            />
          </video>
        )}

        {item.overlay && (
          <div
            className={classNames([
              staticClassName('SectionBoxes', theme) && [
                'onesy-SectionBoxes-item-background-overlay'
              ],

              classes.backgroundOverlay,
              item.overlayBlur && classes.backgroundOverlayBlur
            ])}

            style={{
              ...styleOverlay
            }}
          />
        )}

        {(item.name || item.description) && (
          <Line
            gap={1}

            align='center'

            fullWidth

            {...item.propsWrapperText}

            className={classNames([
              staticClassName('SectionBoxes', theme) && [
                'onesy-SectionBoxes-item-wrapper-text'
              ],

              item.propsWrapperText?.className,
              classes.wrapperText
            ])}
          >
            {item.name && (
              <Type
                version={size === 'large' ? 'h2' : size === 'regular' ? 'h3' : 't1'}

                align='center'

                fullWidth

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(item.name)
                }}

                {...item.propsName}

                className={classNames([
                  staticClassName('SectionBoxes', theme) && [
                    'onesy-SectionBoxes-item-name'
                  ],

                  item.propsName?.className,
                  classes.text
                ])}
              />
            )}

            {item.description && (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                align='center'

                fullWidth

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(item.description)
                }}

                {...item.propsDescription}

                className={classNames([
                  staticClassName('SectionBoxes', theme) && [
                    'onesy-SectionBoxes-item-description'
                  ],

                  item.propsDescription?.className,
                  classes.text
                ])}
              />
            )}
          </Line>
        )}

        {item.buttonText && (
          <Line
            align='center'

            fullWidth

            {...item.propsActions}

            className={classNames([
              staticClassName('SectionBoxes', theme) && [
                'onesy-SectionBoxes-item-actions'
              ],

              item.propsActions?.className,
              classes.actions
            ])}
          >
            <Button
              version='filled'

              color='primary'

              size={size}

              onClick={() => item.to ? navigate(item.to) : window.open(item.link, 'blank')}

              {...item.propsButton}

              className={classNames([
                staticClassName('SectionBoxes', theme) && [
                  'onesy-SectionBoxes-item-button'
                ],

                item.propsButton?.className,
                classes.button
              ])}
            >
              {item.buttonText || l('Click here')}
            </Button>
          </Line>
        )}
      </Line>
    );
  }, [theme, size]);

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      maxWidth={false}

      padding={!values?.length}

      className={classNames([
        staticClassName('SectionBoxes', theme) && [
          'onesy-SectionBoxes-root',
          `onesy-SectionBoxes-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={0}

        align='unset'

        fullWidth

        direction={responsive ? {
          default: 'row',
          1100: 'column'
        } : 'row'}

        {...ItemsProps}

        className={classNames([
          staticClassName('SectionBoxes', theme) && [
            'onesy-SectionBoxes-items'
          ],

          ItemsProps?.className,
          classes.items
        ])}
      >
        {values?.map((item, index) => getItem(item, index))}
      </Line>
    </Section>
  );
});

Element.displayName = 'onesy-SectionBoxes';

export default Element;
