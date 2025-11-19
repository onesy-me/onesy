import React from 'react';

import { clamp, is, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialNavigateNext from '@onesy/icons-material-rounded-react/IconMaterialNavigateNextW100';
import IconMaterialMoreHoriz from '@onesy/icons-material-rounded-react/IconMaterialMoreHorizW100';

import LineElement from '../Line';
import TypeElement from '../Type';
import IconButtonElement from '../IconButton';
import useMediaQuery from '../useMediaQuery';
import { ILine } from '../Line/Line';

import { staticClassName, valueBreakpoints } from '../utils';
import { IElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    margin: 0,
    padding: 0
  },

  expandMore: {
    '&.onesy-IconButton-root': {
      padding: '0',
      width: 'unset',
      height: '100%',
      borderRadius: theme.methods.shape.radius.value(0.25, 'px')
    }
  }
}), { name: 'onesy-Breadcrumbs' });

export type IBreadcrumbs = ILine & {
  separator?: IElement | string;

  max?: number;

  renderMore?: (onExpandMore: () => void) => IElement;

  IconMore?: any;

  MoreProps?: any;
};

const Breadcrumbs: React.FC<IBreadcrumbs> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyBreadcrumbs?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const {
    max: max_,

    separator = (
      <IconMaterialNavigateNext
        size='small'
      />
    ),

    renderMore,

    IconMore = IconMaterialMoreHoriz,

    Component = 'nav',

    MoreProps,

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [max_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [max_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  let max = valueBreakpoints(max_, undefined, breakpoints, theme);

  max = clamp(max, 2);

  const onExpandMore = () => {
    setChildren(resolve(children_, false));
  };

  const resolve = (items_: any = children_, maxValue = max) => {
    let items = React.Children.toArray(items_).filter(Boolean);

    if (maxValue !== undefined && maxValue >= 2 && maxValue < items.length) {
      const start = [];
      const end = [];

      for (let i = 1; i <= maxValue; i++) {
        // start
        if (i % 2 > 0) start.push(items[Math.floor(i / 2)]);
        // end
        else end.unshift(items[items.length - (i / 2)]);
      }

      items = [
        ...start,

        is('function', renderMore) ? renderMore(onExpandMore) : <IconButton
          color='default'

          size='small'

          onClick={onExpandMore}

          aria-label={l('Expand more path')}

          {...MoreProps}

          className={classNames([
            staticClassName('Breadcrumbs', theme) && [
              'onesy-Breadcrumbs-expand-more'
            ],

            MoreProps?.className,
            classes.expandMore
          ])}
        >
          <IconMore
            size='small'
          />
        </IconButton>,

        ...end
      ];
    }

    return items;
  };

  const [init, setInit] = React.useState(false);
  const [children, setChildren] = React.useState<any[]>(resolve);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) setChildren(resolve(children_));
  }, [children_, max]);

  const Separator = is('simple', separator) ? (
    <Type
      version='b2'

      aria-hidden

      Component='span'
    >
      {separator}
    </Type>
  ) : React.cloneElement(separator as any, {
    'aria-hidden': true
  });

  const childrenToUse = children.flatMap((item: any, index: number) => [item, index !== children.length - 1 && Separator].filter(Boolean));

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={1}

      direction='row'

      align='center'

      wrap='wrap'

      aria-label={l('Breadcrumb')}

      Component={Component}

      {...other}

      className={classNames([
        staticClassName('Breadcrumbs', theme) && [
          'onesy-Breadcrumbs-root'
        ],

        className,
        classes.root
      ])}
    >
      {childrenToUse.map((item: any, index: number) => {
        const itemProps = {};

        if (index === childrenToUse.length - 1) {
          itemProps['aria-current'] = 'page';
        }

        if (is('simple', item)) {
          return (
            <Type
              key={index}

              version='b2'

              Component='span'

              {...itemProps}

              className={classNames([
                staticClassName('Breadcrumbs', theme) && [
                  'onesy-Breadcrumbs-item'
                ],

                classes.item
              ])}
            >
              {item}
            </Type>
          );
        }

        return (
          React.cloneElement(item, {
            key: index,

            className: classNames([
              staticClassName('Breadcrumbs', theme) && [
                'onesy-Breadcrumbs-item'
              ],

              item?.props?.className,
              classes.item
            ]),

            ...itemProps
          })
        );
      })}
    </Line>
  );
});

Breadcrumbs.displayName = 'onesy-Breadcrumbs';

export default Breadcrumbs;
