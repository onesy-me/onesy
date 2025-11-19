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

const TimeRangePicker: React.FC<ITimeRangePicker> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTimeRangePicker?.props?.default, ...props_ };

  const TimePicker = theme?.elements?.TimePicker || TimePickerElement;

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <TimePicker
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
};

TimeRangePicker.displayName = 'onesy-TimeRangePicker';

export default TimeRangePicker;
