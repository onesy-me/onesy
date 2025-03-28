import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorBatteryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorBatteryW100'

      short_name='DetectorBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240h320v-120H360v120Zm-78 28q-12 0-21-9t-9-21v-116q0-13 9-21.5t21-8.5h396q13 0 21.5 8.5T708-358v24h10q13 0 21.5 8.5T748-304v8q0 13-8.5 21.5T718-266h-10v24q0 13-8.5 21.5T678-212H282Zm-82-548v48q0 14 9 23t23 9h496q14 0 23-9t9-23v-48H200Zm94 108 22 59q4 10 12 15.5t18 5.5h268q10 0 18-5.5t12-15.5l22-59H294Zm52 108q-19 0-34.5-10.5T289-583l-25-69h-32q-25 0-42.5-17.5T172-712v-46q0-13 8.5-21.5T202-788h556q13 0 21.5 8.5T788-758v46q0 25-17.5 42.5T728-652h-32l-27 69q-7 17-22 28t-34 11H346ZM200-760v80-80Z"/>
    </Icon>
  );
});

IconMaterialDetectorBatteryW100.displayName = 'OnesyIconMaterialDetectorBatteryW100';

export default IconMaterialDetectorBatteryW100;
