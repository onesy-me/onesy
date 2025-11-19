import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import ChipElement from '../Chip/Chip';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    padding: '1px',

    '&:not($wrap)': {
      overflowX: 'auto',

      '&$small': {
        paddingRight: theme.methods.space.value(0.75, 'px')
      },

      '&$regular': {
        paddingRight: theme.methods.space.value(1, 'px')
      },

      '&$large': {
        paddingRight: theme.methods.space.value(1.25, 'px')
      },
    }
  },

  size_small: {
    // columnGap: '6px'
  },

  size_regular: {
    // columnGap: '8px'
  },

  size_large: {
    // columnGap: '10px'
  },

  wrap: {
    flexWrap: 'wrap'
  },

  wrap_small: {
    // rowGap: '12px'
  },

  wrap_regular: {
    // rowGap: '16px'
  },

  wrap_large: {
    // rowGap: '20px'
  }
}), { name: 'onesy-Chips' });

export type IChips = ILine & {
  total?: number;

  showAllDefault?: boolean;
  max?: number;
  moreShowAll?: boolean;

  AdditionalChip?: IElement;

  AdditionalChipProps?: IPropsAny;
};

const Chips: React.FC<IChips> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyChips?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Chip = theme?.elements?.Chip || ChipElement;

  const {
    size = 'regular',

    gap = 1,
    align = 'flex-start',
    justify = 'flex-start',
    direction = 'row',
    wrap,

    total,
    max,

    showAllDefault,

    moreShowAll = true,

    AdditionalChip,

    AdditionalChipProps = {},

    Component = 'div',

    className,

    style,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [showAll, setShowAll] = React.useState(showAllDefault !== undefined ? showAllDefault : false);

  const onClickMore = () => {
    setShowAll(true);
  };

  let children = React.Children.toArray(children_);

  if (!showAll) {
    children = children.slice(0, max || (children as any).length);

    if ((total !== undefined && total - (children as any).length >= 1) || max < (children as any).length) {
      let value: any;

      if ((total !== undefined && total - (children as any).length >= 1)) value = `+${total - (children as any).length}`;
      else value = `+${Math.abs((children as any).length - max)}`;

      if (!AdditionalChipProps.TypeProps) AdditionalChipProps.TypeProps = {};

      AdditionalChipProps.TypeProps.size = '0.44em';

      children.push(
        (AdditionalChip as any) ||

        <Chip
          color='default'

          {...other as any}

          {...AdditionalChipProps}

          onClick={moreShowAll ? onClickMore : undefined}
        >
          {value}
        </Chip>
      );
    }
  }

  return (
    <Line
      ref={ref}

      gap={gap}

      justify={justify}

      align={align}

      direction={direction}

      wrap={wrap}

      Component={Component}

      className={classNames([
        staticClassName('Chips', theme) && [
          'onesy-Chips-root',
          `onesy-Chips-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        wrap === 'wrap' && [
          classes.wrap,
          classes[`wrap_${size}`]
        ]
      ])}

      style={style}
    >
      {React.Children.toArray(children).map((item: any, index: number) => React.cloneElement(item, {
        key: index,

        size,

        ...other,

        ...item.props
      }))}
    </Line>
  );
});

Chips.displayName = 'onesy-Chips';

export default Chips;
