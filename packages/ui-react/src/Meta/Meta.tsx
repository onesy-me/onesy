import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    overflow: 'auto hidden',

    '& > *': {
      flex: '0 0 auto'
    }
  }
}), { name: 'onesy-Meta' });

export type IMeta = ILine & {
  values?: any[];

  separator?: any;

  ItemProps?: IPropsAny;
  SeparatorProps?: IPropsAny;
};

const Meta: React.FC<IMeta> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMeta?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    values: values_ = [],

    separator: separator_ = '•',

    ItemProps,
    SeparatorProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const separator = is('string', separator_) ? (
    <Type
      version='b3'

      priority='secondary'

      {...SeparatorProps}
    >
      {separator_}
    </Type>
  ) : separator_;

  const getItem = (item: any, index: number) => {
    if (is('simple', item)) return (
      <Type
        key={index}

        version='b3'

        priority='secondary'
      >
        {item}
      </Type>
    );

    return (
      React.cloneElement(item, {
        key: index
      })
    );
  };

  const values = values_?.filter(Boolean)?.flatMap((item, index) => !index ? getItem(item, index) : [separator, getItem(item, index)]);

  return (
    <Line
      ref={ref}

      gap={1}

      direction='row'

      align='center'

      justify='flex-start'

      className={classNames([
        staticClassName('Meta', theme) && [
          'onesy-Meta-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {values}
    </Line>
  );
});

Meta.displayName = 'onesy-Meta';

export default Meta;
