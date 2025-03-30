import React from 'react';

import { is, isEnvironment, textToInnerHTML, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import LineElement from '../Line';
import useMediaQuery from '../useMediaQuery';
import { valueBreakpoints, staticClassName } from '../utils';
import { IBaseElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  type: {
    columnGap: '40px'
  },

  divider: {
    columnRule: `1px solid ${theme.palette.text.divider}`
  },

  column_1: {
    columnCount: '1'
  },

  column_2: {
    columnCount: '2'
  },

  column_3: {
    columnCount: '3'
  },

  column_4: {
    columnCount: '4'
  }
}), { name: 'onesy-Text' });

export type IText = IBaseElement & {
  value?: any;

  columns?: number;

  responsive?: boolean;

  divider?: boolean;

  top?: any;
  bottom?: any;
  start?: any;
  end?: any;

  TypeProps?: IPropsAny;
  HorizontalProps?: IPropsAny;
};

const Text: React.FC<IText> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyText?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    value: value_,

    columns: columns_,

    responsive = true,

    divider,

    top,
    bottom,
    start,
    end,

    TypeProps,
    HorizontalProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [columns_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [columns_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  let columns = valueBreakpoints(columns_, 1, breakpoints, theme);

  if (isEnvironment('browser') && responsive) {
    const width = window.innerWidth;

    // 0 - 479px
    if (width < 480) columns = Math.min(columns, 1);

    // 480px - 1023px
    if (width >= 480 && width < 1024) columns = Math.min(columns, 2);

    // 1024px - 1439px
    if (width >= 1024) columns = Math.min(columns, 3);
  }

  let value = value_ !== undefined ? value_ : children;

  value = is('string', value) ? textToInnerHTML(value) : '';

  const main = (
    <Type
      version='b2'

      {...TypeProps}

      className={classNames([
        staticClassName('Text', theme) && [
          'onesy-Text-type'
        ],

        TypeProps?.className,
        classes.type,
        divider && classes.divider,
        classes[`column_${columns}`]
      ])}

      dangerouslySetInnerHTML={{
        __html: value
      }}
    />
  );

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      direction='column'

      justify='unset'

      align='unset'

      className={classNames([
        staticClassName('Text', theme) && [
          'onesy-Text-root'
        ],

        className,
        classes.root
      ])}

      fullWidth

      {...other}
    >
      {top}

      <Line
        direction='row'

        fullWidth

        {...HorizontalProps}

        className={classNames([
          staticClassName('Text', theme) && [
            'onesy-Text-main'
          ],

          HorizontalProps?.className,
          classes.main
        ])}
      >
        {main}
      </Line>

      {bottom}
    </Line>
  );
});

Text.displayName = 'onesy-Text';

export default Text;
