import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsKrxOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxOff'

      short_name='SensorsKrxOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m697-379-62-62q2-10 3.5-19.5T640-480q0-66-47-113t-113-47q-10 0-19.5 1.5T441-635l-62-62q23-11 48.5-17t52.5-6q100 0 170 70t70 170q0 27-6 52.5T697-379Zm-217 59q11 0 21.5-1.5T522-326L326-522q-3 10-4.5 20.5T320-480q0 66 47 113t113 47ZM763-84 584-264q-23 11-49.5 17.5T480-240q-100 0-170-70t-70-170q0-28 6.5-54.5T264-584L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q12 12 11.5 28T819-84q-12 11-28 11.5T763-84ZM536-540ZM426-421Zm-266-59q0 38 8.5 74.5T194-337q8 15 4.5 32T181-279q-14 10-30 5.5T127-293q-23-42-35-89t-12-98q0-51 12-98.5t35-89.5q8-15 24-19t30 6q14 9 17.5 26t-4.5 32q-17 32-25.5 68.5T160-480Zm640 0q0-38-8.5-74.5T766-623q-8-15-5-32t17-26q14-10 30.5-6t24.5 19q23 42 35 89.5t12 98.5q0 51-12 98t-35 89q-8 15-24.5 19.5T778-279q-14-9-17-26t5-32q17-32 25.5-68.5T800-480Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxOff.displayName = 'OnesyIconMaterialSensorsKrxOff';

export default IconMaterialSensorsKrxOff;
