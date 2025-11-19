import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SurfaceElement from '../Surface';
import DividerElement from '../Divider';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement, IPropsAny, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    maxWidth: '100%',

    '&:last-of-type': {
      '& $divider': {
        display: 'none'
      }
    }
  },

  orientation_vertical: {
    minHeight: '77px'
  },

  orientation_horizontal: {
    minWidth: '114px'
  },

  icon: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: theme.methods.shape.radius.value(40, 'px')
  },

  end: {
    overflow: 'auto hidden'
  },

  aside_orientation_vertical: {
    padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  aside_orientation_horizontal: {
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(0.5, 'px')}`
  },

  iconWrapper: {
    lineHeight: '0'
  },

  iconWrapper_orientation_vertical: {
    marginBlock: '8px'
  },

  iconWrapper_orientation_horizontal: {
    marginInline: '8px'
  },

  divider: {
    '&.onesy-Divider-root': {
      margin: '0px'
    }
  },

  divider_orientation_vertical: {
    '&.onesy-Divider-root': {
      width: '2px'
    }
  },

  divider_orientation_horizontal: {
    '&.onesy-Divider-root': {
      height: '2px'
    }
  }
}), { name: 'onesy-TimelineItem' });

export type ITimelineItem = ILine & {
  orientation?: 'vertical' | 'horizontal';

  start?: IElement;
  end?: IElement;

  icon?: any;

  DividerProps?: IPropsAny;
  iconProps?: IPropsAny;

  Divider?: any;
};

const TimelineItem: React.FC<ITimelineItem> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTimelineItem?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Divider = theme?.elements?.Divider || DividerElement;

  const {
    orientation = 'vertical',

    start,
    end,

    DividerProps: DividerProps_ = !props.Divider ? {
      tonal: 'secondary',
      color: 'neutral'
    } : undefined,
    iconProps = !props.icon ? {
      tonal: 'secondary',
      color: 'neutral',
      version: 'filled'
    } : undefined,

    icon,
    Divider: Divider_,

    Component = 'li',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const direction = orientation === 'vertical' ? 'row' : 'column';

  const lineDirection = orientation === 'vertical' ? 'column' : 'row';

  const DividerProps = {
    ...DividerProps_
  };

  if (!Divider_) {
    DividerProps.orientation = orientation;
  }

  return (
    <Line
      ref={ref}

      gap={0}

      align='unset'

      justify='unset'

      direction={direction}

      Component={Component}

      className={classNames([
        staticClassName('TimelineItem', theme) && [
          'onesy-TimelineItem-root'
        ],

        className,
        classes.root,
        classes[`orientation_${orientation}`]
      ])}

      {...other}
    >
      {start && (
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'onesy-TimelineItem-aside',
              'onesy-TimelineItem-item',
              'onesy-TimelineItem-start'
            ],

            classes.aside,
            classes.item,
            classes.start,
            classes[`aside_orientation_${orientation}`]
          ])}
        >
          {start}
        </div>
      )}

      <Line
        gap={0}

        direction={lineDirection}

        align='center'

        justify='flex-start'

        className={classNames([
          staticClassName('TimelineItem', theme) && [
            'onesy-TimelineItem-item',
            'onesy-TimelineItem-middle'
          ],

          classes.item,
          classes.middle
        ])}
      >
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'onesy-TimelineItem-icon-wrapper'
            ],

            classes.iconWrapper,
            classes[`iconWrapper_orientation_${orientation}`]
          ])}
        >
          {icon ? icon as any : (
            <Surface
              {...iconProps}

              tonal

              className={classNames([
                staticClassName('TimelineItem', theme) && [
                  'onesy-TimelineItem-icon'
                ],

                iconProps?.className,
                classes.icon
              ])}
            />
          )}
        </div>

        {Divider_ ? Divider_ : (
          <Divider
            {...DividerProps}

            className={classNames([
              staticClassName('TimelineItem', theme) && [
                'onesy-TimelineItem-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes[`divider_orientation_${orientation}`]
            ])}

            flex
          />
        )}
      </Line>

      {(end || children) && (
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'onesy-TimelineItem-aside',
              'onesy-TimelineItem-item',
              'onesy-TimelineItem-end'
            ],

            classes.aside,
            classes.item,
            classes.end,
            classes[`aside_orientation_${orientation}`]
          ])}
        >
          {end || children}
        </div>
      )}
    </Line>
  );
});

TimelineItem.displayName = 'onesy-TimelineItem';

export default TimelineItem;
