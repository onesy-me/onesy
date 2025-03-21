import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionSensorIdleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorIdleFilled'

      short_name='MotionSensorIdle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-807v80q-8 2-16 4.5t-16 5.5l-60-60q21-11 44-18.5t48-11.5Zm316 316q-4 25-11.5 48T726-399l-60-60q3-8 5.5-16t4.5-16h80ZM80-132v-240h80v160h160v80H80Zm720-560v-160H640v-80h240v240h-80ZM273-852l-80-80h127v80h-47Zm607 607-80-80v-47h80v127ZM204-491h80q12 59 54.5 101.5T440-335v80q-92-14-157-79t-79-157Zm79-238 56 56q-20 21-34.5 47T284-571h-80q7-46 27.5-86t51.5-72Zm339 339 56 56q-32 31-72 51.5T520-255v-80q29-6 55-20.5t47-34.5ZM520-807q92 14 157.5 79T756-571h-80q-12-59-54.5-101.5T520-727v-80Zm246 675H640v-80h46L160-738v46H80v-126l-53-53 57-57 792 792-57 57-53-53Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorIdleFilled.displayName = 'OnesyIconMaterialMotionSensorIdleFilled';

export default IconMaterialMotionSensorIdleFilled;
