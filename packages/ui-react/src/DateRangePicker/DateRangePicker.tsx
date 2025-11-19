import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import DatePickerElement from '../DatePicker';
import { IDatePicker } from '../DatePicker/DatePicker';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-DateRangePicker' });

export type IDateRangePicker = IDatePicker & {

};

const DateRangePicker: React.FC<IDateRangePicker> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyDateRangePicker?.props?.default, ...props_ };

  const DatePicker = theme?.elements?.DatePicker || DatePickerElement;

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <DatePicker
      range

      className={classNames([
        staticClassName('DateRangePicker', theme) && [
          'onesy-DateRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
};

DateRangePicker.displayName = 'onesy-DateRangePicker';

export default DateRangePicker;
