import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleW100Filled'

      short_name='WaterBottle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M421.65-132q-22.65 0-40.02-15.38Q364.27-162.75 362-186l-27-290q-1-6.67 2-12.33 3-5.67 8-10.67 13-12 19.5-28t6.5-32.84q0-15.16-5-29.66T351-615q-5-5-7-11.5t0-12.5l11-46q2-10 10.56-16.5 8.55-6.5 19.44-6.5h101v-64h-46q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h120q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-46v64h101q10.68 0 18.7 6.13 8.01 6.14 10.3 16.87l11 44q2 6 0 12.5t-7 11.5q-10 11-15 25.5t-5 29.5q0 17 6.5 33t18.5 28q5 5 8 10.67 3 5.66 2 12.33l-25 291q-2.25 23.36-19.5 39.18T578-132H421.65Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleW100Filled.displayName = 'OnesyIconMaterialWaterBottleW100Filled';

export default IconMaterialWaterBottleW100Filled;
