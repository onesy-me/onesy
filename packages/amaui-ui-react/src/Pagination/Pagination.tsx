import React from 'react';

import { is, clamp, pagination } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialLastPage from '@amaui/icons-material-rounded-react/IconMaterialLastPageW100';
import IconMaterialFirstPage from '@amaui/icons-material-rounded-react/IconMaterialFirstPageW100';
import IconMaterialNavigateNext from '@amaui/icons-material-rounded-react/IconMaterialNavigateNextW100';
import IconMaterialNavigateBefore from '@amaui/icons-material-rounded-react/IconMaterialNavigateBeforeW100';

import TypeElement from '../Type';
import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import PaginationItemElement from '../PaginationItem';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IVersion, ISize, IElement, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  dots: {
    display: 'inline-block',
    textAlign: 'center'
  },

  dots_size_small: {
    width: '30px'
  },

  dots_size_regular: {
    width: '40px'
  },

  dots_size_large: {
    width: '50px'
  }
}), { name: 'amaui-Pagination' });

export interface IPagination extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  elevation?: boolean;
  size?: ISize;

  value?: number;
  valueDefault?: number;

  onChange?: (value: number) => any;

  total?: number;
  boundary?: number;
  middle?: number;
  first?: boolean;
  before?: boolean;
  next?: boolean;
  last?: boolean;

  disableSelected?: boolean;
  disabled?: boolean;

  renderItem?: (value: number, item: string | number, index: number) => IElement;

  IconFirst?: IElementReference;
  IconBefore?: IElementReference;
  IconNext?: IElementReference;
  IconLast?: IElementReference;
}

const Pagination: React.FC<IPagination> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiPagination?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const PaginationItem = React.useMemo(() => theme?.elements?.PaginationItem || PaginationItemElement, [theme]);

  const {
    tonal = false,
    color = 'default',
    version = 'text',
    elevation = false,
    size = 'regular',

    value: value_ = 1,
    valueDefault,
    onChange: onChange_,

    total = 1,
    boundary = 1,
    middle = 1,
    first = false,
    before = true,
    next = true,
    last = false,
    renderItem: renderItem_,

    disableSelected = true,
    disabled,

    IconFirst = IconMaterialFirstPage,
    IconBefore = IconMaterialNavigateBefore,
    IconNext = IconMaterialNavigateNext,
    IconLast = IconMaterialLastPage,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const { classes } = useStyle();

  React.useEffect(() => {
    if (value_ !== value) setValue(value_);
  }, [value_]);

  const onChange = (value__: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(value__);

    if (is('function', onChange_)) onChange_(value__);
  };

  const values = pagination(value, total, boundary, middle);

  const renderItem = is('function', renderItem_) ? renderItem_ : (value__: number, item: string | number) => {
    if (is('string', item)) return (
      <Type
        version={props.size === 'large' ? 'b1' : props.size === 'small' ? 'b3' : 'b2'}

        className={classNames([
          staticClassName('Pagination', theme) && [
            `amaui-Pagination-dots`
          ],

          classes.dots,
          classes[`dots_size_${size}`]
        ])}
      >
        {item}
      </Type>
    );

    return (
      <PaginationItem
        tonal={tonal}

        color={color}

        version={version}

        elevation={elevation}

        size={size}

        onClick={() => onChange(item as number)}

        selected={value__ === item}

        disabled={disabled || value__ === item && disableSelected}
      >
        {item}
      </PaginationItem>
    );
  };

  const IconButtonProps = {
    tonal,
    color,
    version,
    elevation,
    size
  };

  return (
    <Line
      ref={ref}

      gap={0.5}

      wrap='wrap'

      direction='row'

      justify='flex-start'

      align='center'

      Component={Component}

      className={classNames([
        staticClassName('Pagination', theme) && [
          `amaui-Pagination-root`,
          `amaui-Pagination-version-${version}`,
          `amaui-Pagination-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {first && (
        <IconButton
          onClick={() => onChange(1)}

          disabled={value === 1}

          {...IconButtonProps}
        >
          <IconFirst />
        </IconButton>
      )}

      {before && (
        <IconButton
          onClick={() => onChange(clamp(value - 1, 1, total))}

          disabled={value === 1}

          {...IconButtonProps}
        >
          <IconBefore />
        </IconButton>
      )}

      {values
        .map((item: number | string, index: number) => renderItem(value, item, index))
        .map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index
          })
        ))
      }

      {next && (
        <IconButton
          onClick={() => onChange(clamp(value + 1, 1, total))}

          disabled={value === total}

          {...IconButtonProps}
        >
          <IconNext />
        </IconButton>
      )}

      {last && (
        <IconButton
          onClick={() => onChange(total)}

          disabled={value === total}

          {...IconButtonProps}
        >
          <IconLast />
        </IconButton>
      )}
    </Line>
  );
});

Pagination.displayName = 'amaui-Pagination';

export default Pagination;
