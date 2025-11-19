import React from 'react';

import { is, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import useMediaQuery from '../useMediaQuery';
import { valueBreakpoints, staticClassName } from '../utils';
import { IBaseElement, IValueBreakpoints } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    listStyleType: 'none'
  },

  version_standard: {
    display: 'grid'
  },

  version_quilted: {
    display: 'grid'
  },

  version_vowen: {
    display: 'grid',

    '& > *:nth-of-type(2n)': {
      height: '70%',
      overflow: 'hidden',
      alignSelf: 'center'
    }
  },

  version_masonry: {
    display: 'block'
  }
}), { name: 'onesy-ImageList' });

export type IImageList = IBaseElement & {
  version?: 'standard' | 'vowen' | 'masonry';

  gap?: number | Partial<Record<IValueBreakpoints, number>>;
  rowGap?: number | Partial<Record<IValueBreakpoints, number>>;
  columnGap?: number | Partial<Record<IValueBreakpoints, number>>;
  columns?: number | Partial<Record<IValueBreakpoints, number>>;
};

const ImageList: React.FC<IImageList> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyImageList?.props?.default, ...props_ };

  const { classes } = useStyle();

  const {
    ref,

    version = 'standard',

    gap: gap_,
    rowGap: rowGap_,
    columnGap: columnGap_,
    columns: columns_,

    Component = 'ul',

    className,
    style,

    children,

    ...otherProps
  } = props;

  const other: any = otherProps;

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [gap_, rowGap_, columnGap_, columns_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [gap_, rowGap_, columnGap_, columns_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const gap = valueBreakpoints(gap_, 0.5, breakpoints, theme);
  const rowGap = valueBreakpoints(rowGap_, undefined, breakpoints, theme);
  const columnGap = valueBreakpoints(columnGap_, undefined, breakpoints, theme);
  const columns = valueBreakpoints(columns_, { 400: 1, 500: 2, 700: 3, 1100: 4, 1400: 5, 1700: 6, 2000: 7, default: 4 }, breakpoints, theme);

  const styles: any = {
    root: {

    },
    item: {}
  };

  if (['standard', 'quilted', 'vowen'].includes(version)) {
    styles.root.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  if (version === 'masonry') styles.root.columnCount = columns;

  if (rowGap !== undefined || columnGap !== undefined) {
    if (rowGap !== undefined) {
      styles.root.rowGap = `${rowGap}px`;

      if (version === 'masonry') styles.item.marginBottom = `${rowGap * theme.space.unit}px`;
    }

    if (columnGap !== undefined) styles.root.columnGap = `${columnGap * theme.space.unit}px`;
  }
  else {
    styles.root.gap = `${gap * theme.space.unit}px`;

    if (version === 'masonry') styles.item.marginBottom = `${gap * theme.space.unit}px`;
  }

  const Wrapper = version !== 'masonry' ? React.Fragment : 'div';

  const WrapperProps: any = {};

  if (version === 'masonry') {
    WrapperProps.ref = item => {
      if (ref) {
        if (is('function', ref)) ref(item);
        else ref.current = item;
      }

      refs.root.current = item;
    };

    WrapperProps.style = {
      ...style
    };

    other.style = {
      ...styles.root
    };
  }
  else {
    other.ref = item => {
      if (ref) {
        if (is('function', ref)) ref(item);
        else ref.current = item;
      }

      refs.root.current = item;
    };

    other.style = {
      ...styles.root,

      ...style
    };
  }

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Component
        className={classNames([
          staticClassName('ImageList', theme) && [
            `onesy-ImageList-root`
          ],

          className,
          classes.root,
          classes[`version_${version}`]
        ])}

        {...other}
      >
        {React.Children.toArray(children).map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index,

            version,

            style: {
              ...styles.item,

              ...item.props.style
            }
          })
        ))}
      </Component>
    </Wrapper>
  );
};

ImageList.displayName = 'onesy-ImageList';

export default ImageList;
