import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryProfileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileW100'

      short_name='BatteryProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-160Zm2 28q-13 0-21.5-8.5T326-162v-583q0-13 8.5-21.5T356-775h60v-23q0-13 8.5-21.5T446-828h68q13 0 21.5 8.5T544-798v23h60q13 0 21.5 8.5T634-745v212q0 6-4 10t-10 4q-6 0-10-4t-4-10v-215H354v588h85q6 0 10 4t4 10q0 6-4 10t-10 4h-83Zm301 0q-6 0-10-4t-5-10l-1-13q-26-5-42-15t-30-25l-13 7q-5 3-10.5 2t-8.5-6l-1-2q-4-5-3-11t6-10l11-9q-9-24-9-46t9-46l-11-9q-5-4-6-10t3-11l1-2q3-5 8.5-6t10.5 2l13 7q14-15 30-25t42-15l1-13q1-6 5-10t10-4q6 0 10 4t5 10l1 13q26 5 42 15t30 25l13-7q5-3 10.5-2t8.5 6l1 2q4 5 3 11t-6 10l-11 9q9 24 9 46t-9 46l11 9q5 4 6 10t-3 11l-1 2q-3 5-8.5 6t-10.5-2l-13-7q-14 15-30 25t-42 15l-1 13q-1 6-5 10t-10 4Zm0-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfileW100.displayName = 'OnesyIconMaterialBatteryProfileW100';

export default IconMaterialBatteryProfileW100;
