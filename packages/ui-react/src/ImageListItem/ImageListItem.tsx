import React from 'react';

import { is, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import useMediaQuery from '../useMediaQuery';
import { ILine } from '../Line/Line';
import { valueBreakpoints, staticClassName } from '../utils';
import { IValueBreakpoints } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',

    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      flex: '1 1 auto'
    }
  },

  version_masonry: {
    display: 'block',
    height: 'auto'
  }
}), { name: 'onesy-ImageListItem' });

export type IImageListItem = ILine & {
  rows?: number | Partial<Record<IValueBreakpoints, number>>;
  columns?: number | Partial<Record<IValueBreakpoints, number>>;
  version?: 'standard' | 'vowen' | 'masonry';
};

const ImageListItem: React.FC<IImageListItem> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyImageListItem?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const {
    ref,

    rows: rows_,
    columns: columns_,
    version = 'standard',

    Component = 'li',

    className,
    style,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [rows_, columns_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [rows_, columns_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const rows = valueBreakpoints(rows_, 1, breakpoints, theme);
  const columns = valueBreakpoints(columns_, 1, breakpoints, theme);

  const styles: any = {
    root: {

    }
  };

  if (version !== 'masonry') {
    styles.root.gridRowEnd = `span ${rows}`;
    styles.root.gridColumnEnd = `span ${columns}`;
  }

  const children = React.Children.toArray(children_);

  if (children.length > 1) other.justify = 'flex-end';

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={0}

      direction='column'

      align='center'

      justify='center'

      Component={Component as string}

      className={classNames([
        staticClassName('ImageListItem', theme) && [
          'onesy-ImageListItem-root'
        ],

        className,
        classes.root,
        classes[`version_${version}`]
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {children}
    </Line>
  );
};

ImageListItem.displayName = 'onesy-ImageListItem';

export default ImageListItem;
