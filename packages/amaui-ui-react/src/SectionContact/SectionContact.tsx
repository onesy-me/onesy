import React from 'react';

import { is, textToInnerHTML } from '@amaui/utils';
import { TPaletteVersion, classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialMap from '@amaui/icons-material-rounded-react/IconMaterialMapW100';
import IconMaterialCall from '@amaui/icons-material-rounded-react/IconMaterialCallW100';
import IconMaterialMail from '@amaui/icons-material-rounded-react/IconMaterialMailW100';

import LineElement from '../Line';
import PropertiesElement from '../Properties';
import SectionElement, { ISection } from '../Section/Section';
import TypeElement from '../Type';
import useMediaQuery from '../useMediaQuery';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  text: {
    wordBreak: 'break-word'
  },

  map: {
    position: 'relative',
    height: '400px',
    borderRadius: theme.methods.shape.radius.value(3),
    overflow: 'hidden'
  },

  backgroundOverlay: {
    position: 'absolute',
    inset: '0',
    zIndex: '4'
  }
}), { name: 'amaui-SectionContact' });

export interface ISectionContact extends ISection {
  map?: {
    latitude: number;
    longitude: number;

    overlay?: TPaletteVersion;

    apiKey?: string;
  };

  mapPosition?: 'top' | 'left' | 'right' | 'bottom';

  heading?: any;
  summary?: any;

  address?: any;
  phone?: any;
  email?: any;

  IconAddress?: any;
  IconPhone?: any;
  IconEmail?: any;

  MapProps?: IPropsAny;
  HeadingProps?: IPropsAny;
  SummaryProps?: IPropsAny;
  PropertiesProps?: IPropsAny;
}

const Element: React.FC<ISectionContact> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionContact?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Properties = React.useMemo(() => theme?.elements?.Properties || PropertiesElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    map,

    mapPosition: mapPosition_ = 'bottom',

    heading,
    summary,

    address,
    phone,
    email,

    IconAddress = IconMaterialMap,
    IconPhone = IconMaterialCall,
    IconEmail = IconMaterialMail,

    MapProps,
    HeadingProps,
    SummaryProps,
    PropertiesProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>()
  };

  const mobile = useMediaQuery('(max-width: 768px)', { element: refs.root.current });

  let mapPosition = mapPosition_;

  if (mobile) {
    if (mapPosition === 'left') mapPosition = 'top';
    else if (mapPosition === 'right') mapPosition = 'bottom';
  }

  let styleOverlay: any = {};

  if (map?.overlay) {
    const palette = theme.palette.color[map?.overlay] || theme.methods.color(map?.overlay);

    styleOverlay = {
      ...styleOverlay,

      backgroundColor: theme.methods.palette.color.alpha(theme.methods.palette.color.value(undefined as any, 95, true, palette), 0.54)
    };
  }

  const mapElement = map?.apiKey && map?.latitude && map?.longitude && (
    <Line
      fullWidth

      className={classNames([
        staticClassName('SectionContact', theme) && [
          'amaui-SectionContact-map'
        ],

        classes.map
      ])}
    >
      {map.overlay && (
        <div
          className={classNames([
            classes.backgroundOverlay
          ])}

          style={{
            ...styleOverlay
          }}
        />
      )}

      <iframe
        title='amaui-google-map'

        src={`https://www.google.com/maps/embed/v1/place?q=${map?.latitude},${map?.longitude}${map?.apiKey ? `&key=${map?.apiKey}` : ''}`}

        width='100%'
        height='100%'
        loading='lazy'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Line>
  );

  const properties: any = [];

  if (address) properties.push({ name: <IconAddress />, value: address });

  if (phone) properties.push({ name: <IconPhone />, value: phone });

  if (email) properties.push({ name: <IconEmail />, value: email });

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      MainProps={{
        gap: 4
      }}

      className={classNames([
        staticClassName('SectionContact', theme) && [
          'amaui-SectionContact-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {mapPosition === 'top' && mapElement}

      <Line
        gap={4}

        direction='row'

        fullWidth
      >
        {mapPosition === 'left' && mapElement}

        <Line
          gap={5}

          flex

          fullWidth

          style={{
            paddingTop: ['left', 'right'].includes(mapPosition) ? 24 : 0
          }}
        >
          {(heading || summary) && (
            <Line
              gap={0.5}
            >
              {heading && (
                <Type
                  version='t1'

                  dangerouslySetInnerHTML={{
                    __html: textToInnerHTML(heading)
                  }}

                  {...HeadingProps}

                  className={classNames([
                    staticClassName('SectionContact', theme) && [
                      'amaui-SectionContact-heading'
                    ],

                    HeadingProps?.className,
                    classes.text
                  ])}
                />
              )}

              {summary && (
                <Type
                  version='b3'

                  dangerouslySetInnerHTML={{
                    __html: textToInnerHTML(summary)
                  }}

                  {...SummaryProps}

                  className={classNames([
                    staticClassName('SectionContact', theme) && [
                      'amaui-SectionContact-summary'
                    ],

                    SummaryProps?.className,
                    classes.text
                  ])}
                />
              )}
            </Line>
          )}

          {!!properties.length && (
            <Properties
              version='row'

              gap={1}

              values={properties}

              {...PropertiesProps}

              PropertyProps={{
                responsive: false,

                ...PropertiesProps?.PropertyProps
              }}
            />
          )}
        </Line>

        {mapPosition === 'right' && mapElement}
      </Line>

      {mapPosition === 'bottom' && mapElement}
    </Section>
  );
});

Element.displayName = 'amaui-SectionContact';

export default Element;
