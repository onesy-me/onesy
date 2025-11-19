import React from 'react';

import { is, textToInnerHTML } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SectionElement, { ISection } from '../Section/Section';
import ListItemElement from '../ListItem';
import TimelineElement from '../Timeline';
import TimelineItemElement from '../TimelineItem';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  timeline: {

  },

  timelineItem: {
    '&.onesy-TimelineItem-root': {
      width: '100%'
    },

    '& .onesy-TimelineItem-aside': {
      width: 'calc(50% - 6px)'
    }
  }
}), { name: 'onesy-SectionTimeline' });

export type ISectionTimelineItem = {
  title?: string;
  heading?: string;
  description?: string;
};

export type ISectionTimeline = ISection & {
  size?: 'small' | 'regular' | 'large';

  values?: ISectionTimelineItem[];

  TimelineProps?: IPropsAny;
  TimelineItemProps?: IPropsAny;
  TitleProps?: IPropsAny;
  HeadingProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  ItemStartProps?: IPropsAny;
  ItemEndProps?: IPropsAny;
};

const SectionTimeline: React.FC<ISectionTimeline> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionTimeline?.props?.default, ...props_ };

  const Section = theme?.elements?.Section || SectionElement;

  const ListItem = theme?.elements?.ListItem || ListItemElement;

  const Timeline = theme?.elements?.Timeline || TimelineElement;

  const TimelineItem = theme?.elements?.TimelineItem || TimelineItemElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    size = 'regular',

    values = [],

    TimelineProps,
    TimelineItemProps,
    TitleProps,
    HeadingProps,
    DescriptionProps,
    ItemStartProps,
    ItemEndProps,

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

      className={classNames([
        staticClassName('SectionTimeline', theme) && [
          'onesy-SectionTimeline-root',
          `onesy-SectionTimeline-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Timeline
        fullWidth

        {...TimelineProps}

        className={classNames([
          staticClassName('SectionTimeline', theme) && [
            'onesy-SectionTimeline-timeline'
          ],

          TimelineProps?.className,
          classes.timeline
        ])}
      >
        {values?.map((item, index: number) => (
          <TimelineItem
            key={index}

            start={is('string', item.title) ? (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                align='right'

                {...ItemStartProps}

                className={classNames([
                  staticClassName('SectionTimeline', theme) && [
                    'onesy-SectionTimeline-item-start'
                  ],

                  ItemStartProps?.className,
                  classes.start
                ])}

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(item.title)
                }}
              />
            ) : item.title}

            end={(
              <ListItem
                Component='div'

                primary={is('string', item.heading) ? (
                  <Type
                    version={size === 'large' ? 't1' : size === 'regular' ? 't2' : 't3'}

                    {...HeadingProps}

                    dangerouslySetInnerHTML={{
                      __html: textToInnerHTML(item.heading)
                    }}
                  />
                ) : item.heading}

                secondary={is('string', item.description) ? (
                  <Type
                    version={size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'}

                    {...DescriptionProps}

                    dangerouslySetInnerHTML={{
                      __html: textToInnerHTML(item.description)
                    }}
                  />
                ) : item.description}

                noBackground

                {...ItemEndProps}

                className={classNames([
                  staticClassName('SectionTimeline', theme) && [
                    'onesy-SectionTimeline-item-end'
                  ],

                  ItemEndProps?.className,
                  classes.end
                ])}

                noPadding
              />
            )}

            {...TimelineItemProps}

            className={classNames([
              staticClassName('SectionTimeline', theme) && [
                'onesy-SectionTimeline-timeline-item'
              ],

              TimelineItemProps?.className,
              classes.timelineItem
            ])}
          />
        ))}
      </Timeline>
    </Section>
  );
});

SectionTimeline.displayName = 'onesy-SectionTimeline';

export default SectionTimeline;
