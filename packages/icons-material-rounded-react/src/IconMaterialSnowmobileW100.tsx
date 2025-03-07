import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowmobileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowmobileW100'

      short_name='Snowmobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M78-214h190q66 0 107-35t41-99l-127-36L75-268q-9 5-16 11t-7 17q0 11 7.5 18.5T78-214Zm348-160h315q39 0 61-14.5t22-51.5L621-628 453-503l-344-39-34 68 351 100Zm24-127Zm481 251q0 2-.5 4.5T928-241q-14 26-38.5 40.5T838-186H638q-6 0-10-4t-4-10q0-6 4-10t10-4h142L638-346H444q0 74-49 117t-127 43H78q-26 0-40-17t-14-37q0-14 7.5-26.5T53-287l198-108-181-51q-14-4-19.5-16.5T51-488l33-65q5-8 12.5-13t17.5-4l331 38 155-116-53-49q-5-5-10.5-7t-11.5-2h-67q-6 0-10-4t-4-10q0-6 4-10t10-4h67q11 0 22 4t19 12l272 253q8 7 11 16t3 19q0 33-27 58.5T741-346h-62l142 132h17q19 0 36.5-10.5T903-255q2-4 5.5-6.5t8.5-2.5q6 0 10 4t4 10Z"/>
    </Icon>
  );
});

IconMaterialSnowmobileW100.displayName = 'OnesyIconMaterialSnowmobileW100';

export default IconMaterialSnowmobileW100;
