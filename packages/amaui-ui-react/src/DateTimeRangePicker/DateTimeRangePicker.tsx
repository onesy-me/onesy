import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import DateTimePickerElement from '../DateTimePicker';
import { IDateTimePicker } from '../DateTimePicker/DateTimePicker';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-DateTimeRangePicker' });

export interface IDateTimeRangePicker extends IDateTimePicker {

}

const DateTimeRangePicker: React.FC<IDateTimeRangePicker> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyDateTimeRangePicker?.props?.default, ...props_ }), [props_]);

  const DateTimePicker = React.useMemo(() => theme?.elements?.DateTimePicker || DateTimePickerElement, [theme]);

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <DateTimePicker
      ref={ref}

      range

      className={classNames([
        staticClassName('DateTimeRangePicker', theme) && [
          'onesy-DateTimeRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DateTimeRangePicker.displayName = 'onesy-DateTimeRangePicker';

export default DateTimeRangePicker;
