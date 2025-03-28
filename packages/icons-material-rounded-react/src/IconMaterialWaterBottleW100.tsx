import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleW100'

      short_name='WaterBottle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-546H400q-2 20-11.5 37.5T364-477l26 288q2 12 10.5 20.5T422-160h156q13 0 21.5-8.5T610-189l26-288q-15-14-24.5-31.5T600-546ZM382-680l-11 44q11 14 19 29.5t10 32.5h200q2-17 9.5-33t19.5-29l-11-44H382Zm39.65 548q-22.65 0-40.02-15.38Q364.27-162.75 362-186l-27-290q-1-6.67 2-12.33 3-5.67 8-10.67 13-12 19.5-28t6.5-32.84q0-15.16-5-29.66T351-615q-5-5-7-11.5t0-12.5l11-46q2-10 10.56-16.5 8.55-6.5 19.44-6.5h101v-64h-46q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h120q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-46v64h101q10.68 0 18.7 6.13 8.01 6.14 10.3 16.87l11 44q2 6 0 12.5t-7 11.5q-10 11-15 25.5t-5 29.5q0 17 6.5 33t18.5 28q5 5 8 10.67 3 5.66 2 12.33l-25 291q-2.25 23.36-19.5 39.18T578-132H421.65ZM500-546Zm0-28Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleW100.displayName = 'OnesyIconMaterialWaterBottleW100';

export default IconMaterialWaterBottleW100;
