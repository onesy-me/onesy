import React from 'react';

import { is, textToInnerHTML } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import SectionElement, { ISection } from '../Section/Section';
import TypeElement from '../Type';
import AvatarElement from '../Avatar';
import RatingElement from '../Rating';
import { IMediaObject, IPropsAny } from '../types';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    overflow: 'auto hidden',
    padding: '0px 16px 24px',
  },

  reviews: {
    maxWidth: '100%'
  },

  review: {
    background: theme.palette.background.primary.secondary,
    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.024)'
  },

  review_size_small: {
    width: '240px',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(2.5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value(2)
  },

  review_size_regular: {
    width: '340px',
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(3.5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value(3)
  },

  review_size_large: {
    width: '440px',
    padding: `${theme.methods.space.value(4, 'px')} ${theme.methods.space.value(4.5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value(4)
  }
}), { name: 'onesy-SectionReviews' });

export type ISectionReviewsItem = {
  name: string;
  meta?: string;
  description: string;
  rating?: number;
  image?: string | IMediaObject;
};

export type ISectionReviews = ISection & {
  values?: ISectionReviewsItem[];

  size?: 'small' | 'regular' | 'large';

  AvatarProps?: IPropsAny;
  TypeProps?: IPropsAny;
  NameProps?: IPropsAny;
  MetaProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  RatingProps?: IPropsAny;
  ReviewProps?: IPropsAny;
  ReviewsProps?: IPropsAny;
};

const Element: React.FC<ISectionReviews> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionReviews?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Section = theme?.elements?.Section || SectionElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Avatar = theme?.elements?.Avatar || AvatarElement;

  const Rating = theme?.elements?.Rating || RatingElement;

  const {
    ref,

    values = [],

    size = 'regular',

    AvatarProps,
    TypeProps,
    NameProps,
    MetaProps,
    DescriptionProps,
    RatingProps,
    ReviewProps,
    ReviewsProps,

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

      fullWidth

      className={classNames([
        staticClassName('SectionReviews', theme) && [
          'onesy-SectionReviews-root',
          `onesy-SectionReviews-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={2}

        direction='row'

        justify='flex-start'

        align='flex-start'

        {...ReviewsProps}

        className={classNames([
          staticClassName('SectionReviews', theme) && [
            'onesy-SectionReviews-reviews'
          ],

          ReviewsProps?.className,
          classes.reviews
        ])}
      >
        {values.filter(Boolean).map((item, index) => (
          <Line
            key={index}

            gap={1.4}

            direction='column'

            flexNo

            {...ReviewProps}

            className={classNames([
              staticClassName('SectionReviews', theme) && [
                'onesy-SectionReviews-review'
              ],

              ReviewProps?.className,
              classes.review,
              classes[`review_size_${size}`]
            ])}
          >
            <Line
              gap={1.7}

              direction='row'

              align='center'
            >
              <Avatar
                size={size}

                image={(is('string', item.image) ? item.image : (item.image as IMediaObject)?.url || (item.image as IMediaObject)?.urlSmall) as any}

                {...AvatarProps}

                className={classNames([
                  staticClassName('SectionReviews', theme) && [
                    'onesy-SectionReviews-avatar'
                  ],

                  AvatarProps?.className
                ])}
              >
                {item.name?.split(' ').map(item_ => item_[0]).join('')}
              </Avatar>

              <Line
                gap={0.5}

                direction='column'
              >
                <Rating
                  value={item.rating}

                  size={['regular', 'small'].includes(size) ? 'small' : 'regular'}

                  readOnly

                  {...RatingProps}

                  className={classNames([
                    staticClassName('SectionReviews', theme) && [
                      'onesy-SectionReviews-rating'
                    ],

                    RatingProps?.className
                  ])}
                />

                <Line
                  gap={0.14}

                  direction='column'
                >
                  <Type
                    version={size === 'large' ? 't2' : size === 'regular' ? 't3' : 'l1'}

                    dangerouslySetInnerHTML={{
                      __html: textToInnerHTML(item.name)
                    }}

                    {...NameProps}

                    className={classNames([
                      staticClassName('SectionReviews', theme) && [
                        'onesy-SectionReviews-name'
                      ],

                      NameProps?.className
                    ])}
                  />

                  {item.meta && (
                    <Type
                      version={size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'}

                      dangerouslySetInnerHTML={{
                        __html: textToInnerHTML(item.meta)
                      }}

                      {...MetaProps}

                      className={classNames([
                        staticClassName('SectionReviews', theme) && [
                          'onesy-SectionReviews-meta'
                        ],

                        MetaProps?.className
                      ])}
                    />
                  )}
                </Line>
              </Line>
            </Line>

            <Line
              gap={1}

              direction='column'
            >
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(item.description)
                }}

                {...DescriptionProps}

                className={classNames([
                  staticClassName('SectionReviews', theme) && [
                    'onesy-SectionReviews-description'
                  ],

                  DescriptionProps?.className
                ])}
              />
            </Line>
          </Line>
        ))}
      </Line>
    </Section>
  );
};

Element.displayName = 'onesy-SectionReviews';

export default Element;
