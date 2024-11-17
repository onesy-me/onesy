import React from 'react';

import { clamp, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialLastPage from '@amaui/icons-material-rounded-react/IconMaterialLastPageW100';
import IconMaterialFirstPage from '@amaui/icons-material-rounded-react/IconMaterialFirstPageW100';
import IconMaterialNavigateNext from '@amaui/icons-material-rounded-react/IconMaterialNavigateNextW100';
import IconMaterialNavigateBefore from '@amaui/icons-material-rounded-react/IconMaterialNavigateBeforeW100';

import LineElement from '../Line';
import TypeElement from '../Type';
import SelectElement from '../Select';
import ListItemElement from '../ListItem';
import IconButtonElement from '../IconButton';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IElementReference, ISize, ITonal, IVersion } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  select: {
    minWidth: '140px'
  },

  text: {
    flex: '0 0 auto'
  }
}), { name: 'amaui-TablePagination' });

export interface ITableRow extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  elevation?: boolean;
  size?: ISize;

  page?: number;
  pageDefault?: number;

  onChange?: (value: number) => any;

  rowsPerPage?: number;
  rowsPerPageDefault?: number;
  rowsPerPageOptions?: Array<number>;
  rowsPerPageText?: string;

  onRowsPerPageChange?: (value: number) => any;

  total?: number;
  first?: boolean;
  before?: boolean;
  next?: boolean;
  last?: boolean;

  IconFirst?: IElementReference;
  IconBefore?: IElementReference;
  IconNext?: IElementReference;
  IconLast?: IElementReference;
}

const TablePagination: React.FC<ITableRow> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTablePagination?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = false,
    color = 'default',
    version = 'text',
    elevation = false,
    size = 'regular',

    page: page_ = 0,
    pageDefault,
    onChange,

    rowsPerPage: rowsPerPage_ = props.total < 4 ? props.total : props.total * 0.05,
    rowsPerPageDefault,
    rowsPerPageOptions = props.total < 4 ? [props.total] : [props.total * 0.05, props.total * 0.1, props.total * 0.25, props.total * 0.5, props.total],
    rowsPerPageText = 'Rows per page',
    onRowsPerPageChange,

    total,
    first = false,
    before = true,
    next = true,
    last = false,

    IconFirst = IconMaterialFirstPage,
    IconBefore = IconMaterialNavigateBefore,
    IconNext = IconMaterialNavigateNext,
    IconLast = IconMaterialLastPage,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [page, setPage] = React.useState(pageDefault !== undefined ? pageDefault : page_);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageDefault !== undefined ? rowsPerPageDefault : rowsPerPage_);

  React.useEffect(() => {
    if (rowsPerPage_ !== rowsPerPage) setRowsPerPage(rowsPerPage_);
  }, [rowsPerPage_]);

  const onUpdateRowsPerPage = (value: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('rowsPerPage')) setRowsPerPage(value);

    if (is('function', onRowsPerPageChange)) onRowsPerPageChange(value);

    update(0);
  };

  const update = (value: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('page')) setPage(value);

    if (is('function', onChange)) onChange(value);
  };

  const maxPage = Math.ceil(total / rowsPerPage) - 1;

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

      gap={3}

      direction='row'

      justify='flex-start'

      align='center'

      Component={Component}

      className={classNames([
        staticClassName('TablePagination', theme) && [
          `amaui-TablePagination-root`,
          `amaui-TablePagination-version-${version}`,
          `amaui-TablePagination-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={1}

        direction='row'

        justify='flex-start'

        align='center'
      >
        <Select
          tonal={tonal}

          color={color}

          label={rowsPerPageText}

          size='small'

          value={rowsPerPage}

          onChange={onUpdateRowsPerPage}

          className={classNames([
            staticClassName('TablePagination', theme) && [
              `amaui-TablePagination-select`
            ],

            classes.select
          ])}
        >
          {rowsPerPageOptions.map(item => (
            <ListItem
              key={item}

              primary={item}

              value={item}

              button
            />
          ))}
        </Select>
      </Line>

      <Type
        version='b2'

        gap={1}

        direction='row'

        justify='flex-start'

        align='center'

        Component={Line}

        className={classNames([
          staticClassName('TablePagination', theme) && [
            `amaui-TablePagination-text`
          ],

          classes.text
        ])}
      >
        <span>{(page * rowsPerPage) + 1} - {((page + 1) * rowsPerPage) || total}</span> <span>of</span> <span>{total}</span>
      </Type>

      <Line
        gap={1}

        direction='row'

        justify='flex-start'

        align='center'
      >
        {first && (
          <IconButton
            onClick={() => update(0)}

            disabled={page === 0}

            {...IconButtonProps}
          >
            <IconFirst />
          </IconButton>
        )}

        {before && (
          <IconButton
            onClick={() => update(clamp(page - 1, 0, maxPage))}

            disabled={page === 0}

            {...IconButtonProps}
          >
            <IconBefore />
          </IconButton>
        )}

        {next && (
          <IconButton
            onClick={() => update(clamp(page + 1, 0, maxPage))}

            disabled={page === maxPage}

            {...IconButtonProps}
          >
            <IconNext />
          </IconButton>
        )}

        {last && (
          <IconButton
            onClick={() => update(maxPage)}

            disabled={page === maxPage}

            {...IconButtonProps}
          >
            <IconLast />
          </IconButton>
        )}
      </Line>
    </Line>
  );
});

TablePagination.displayName = 'amaui-TablePagination';

export default TablePagination;
