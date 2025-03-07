import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorAlarmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarmW100Filled'

      short_name='DetectorAlarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-6 0-10-4t-4-10v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 6-4 10t-10 4Zm292-132q-4 4-9 4t-9-4l-86-85q-4-4-4.5-9.5T668-409q5-5 10-5t10 5l85 86q4 4 3.5 9.5T772-304Zm-585-1q-4-4-4-9t4-9l85-86q4-4 9.5-4.5T292-409q5 5 5 10t-5 10l-86 85q-4 4-9.5 3.5T187-305Zm107-347 22 59q4 10 12 15.5t18 5.5h268q10 0 18-5.5t12-15.5l22-59H294Zm52 108q-19 0-34.5-10.5T289-583l-25-69h-32q-25 0-42.5-17.5T172-712v-46q0-13 8.5-21.5T202-788h556q13 0 21.5 8.5T788-758v46q0 25-17.5 42.5T728-652h-32l-27 69q-7 17-22 28t-34 11H346Z"/>
    </Icon>
  );
});

IconMaterialDetectorAlarmW100Filled.displayName = 'OnesyIconMaterialDetectorAlarmW100Filled';

export default IconMaterialDetectorAlarmW100Filled;
