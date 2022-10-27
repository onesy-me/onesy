import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import DatePicker from '../DatePicker';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiDateRangePicker' });

const DateRangePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDateRangePicker?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <DatePicker
      range

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'AmauiDateRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DateRangePicker.displayName = 'AmauiDateRangePicker';

export default DateRangePicker;
