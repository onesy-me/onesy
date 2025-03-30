import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TimePickerElement from '../TimePicker';
import { ITimePicker } from '../TimePicker/TimePicker';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-TimeRangePicker' });

export type ITimeRangePicker = ITimePicker & {

};

const TimeRangePicker: React.FC<ITimeRangePicker> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTimeRangePicker?.props?.default, ...props_ }), [props_]);

  const TimePicker = React.useMemo(() => theme?.elements?.TimePicker || TimePickerElement, [theme]);

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <TimePicker
      ref={ref}

      range

      className={classNames([
        staticClassName('TimeRangePicker', theme) && [
          'onesy-TimeRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

TimeRangePicker.displayName = 'onesy-TimeRangePicker';

export default TimeRangePicker;
