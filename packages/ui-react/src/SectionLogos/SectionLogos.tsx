import React from 'react';

import { cleanValue, is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import SectionElement, { ISection } from '../Section/Section';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  name: {
    wordBreak: 'break-word'
  },

  items: {
    overflow: 'auto hidden',
    padding: `${theme.methods.space.value(2, 'px')} 0`,
    maxWidth: '100%'
  },

  wrapper: {
    flex: '0 0 auto'
  },

  wrapper_size_small: {
    width: '154px'
  },

  wrapper_size_regular: {
    width: '214px'
  },

  wrapper_size_large: {
    width: '274px'
  },

  item: {
    aspectRatio: '16 / 9',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  gray: {
    filter: 'grayscale(1)'
  }
}), { name: 'onesy-SectionLogos' });

export interface ISectionLogos extends ISection {
  values?: IMediaObject[];

  version?: 'regular';

  size?: 'small' | 'regular' | 'large';

  gray?: boolean;

  name?: boolean;

  ItemProps?: IPropsAny;
  WrapperProps?: IPropsAny;
}

const Element: React.FC<ISectionLogos> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionLogos?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    values = [],

    size = 'regular',

    name,

    gray,

    ItemProps,
    WrapperProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      align='center'

      MainProps={{
        justify: 'center',
        align: 'center'
      }}

      className={classNames([
        staticClassName('SectionLogos', theme) && [
          'onesy-SectionLogos-root',
          `onesy-SectionLogos-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={size === 'large' ? 10 : size === 'regular' ? 8 : 6}

        direction='row'

        justify='flex-start'

        align='center'

        className={classNames([
          staticClassName('SectionLogos', theme) && [
            'onesy-SectionLogos-items'
          ],

          classes.items,
          gray && classes.gray
        ])}
      >
        {values?.map((item, index) => (
          <Line
            key={index}

            {...WrapperProps}

            fullWidth

            className={classNames([
              staticClassName('SectionLogos', theme) && [
                'onesy-SectionLogos-wrapper'
              ],

              WrapperProps?.className,
              classes.wrapper,
              classes[`wrapper_size_${size}`]
            ])}
          >
            <Line
              {...ItemProps}

              fullWidth

              className={classNames([
                staticClassName('SectionLogos', theme) && [
                  'onesy-SectionLogos-item'
                ],

                ItemProps?.className,
                classes.item
              ])}

              style={{
                backgroundImage: `url(${item?.url || item?.urlSmall})`
              }}
            />

            {name && (
              <Type
                version={size === 'large' ? 't1' : size === 'regular' ? 't2' : 't3'}

                align='center'

                fullWidth

                className={classNames([
                  staticClassName('SectionLogos', theme) && [
                    'onesy-SectionLogos-name'
                  ],

                  classes.name
                ])}
              >
                {cleanValue(item?.name || 'No name', { capitalize: true })}
              </Type>
            )}
          </Line>
        ))}
      </Line>
    </Section>
  );
});

Element.displayName = 'onesy-SectionLogos';

export default Element;
