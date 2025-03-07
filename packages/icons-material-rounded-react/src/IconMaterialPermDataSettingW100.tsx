import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDataSettingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSettingW100'

      short_name='PermDataSetting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M714-132q-26-5-42-14t-30-26l-16 7q-5 2-9.5 1t-7.5-5l-1-3q-3-5-3-9.5t5-8.5l12-10q-8-24-8-46t8-46l-12-10q-4-3-5-8t2-10l3-3q3-4 7-5t9 1l16 7q14-18 30-26.5t42-13.5l1-15q1-5 5-9t9-4h2q5 0 9 4t5 9l1 15q26 5 42 13.5t30 26.5l16-7q5-2 9.5-1t7.5 5l1 3q3 5 3 9.5t-5 8.5l-12 10q8 24 8 46t-8 46l12 10q4 3 5 8t-2 10l-3 3q-3 4-7 5t-9-1l-16-7q-14 17-30 26t-42 14l-1 15q-1 5-5 9t-9 4h-2q-5 0-9-4t-5-9l-1-15Zm16-26q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Zm-526 26q-20 0-27.5-18.5T183-183l594-594q14-14 32.5-6.5T828-756v257q0 5-4 9t-10 4q-6 0-10-4t-4-10v-260L200-160h292q6 0 10 4t4 10q0 6-4 10t-10 4H204Zm-4-28 600-600-300 300-300 300Z"/>
    </Icon>
  );
});

IconMaterialPermDataSettingW100.displayName = 'OnesyIconMaterialPermDataSettingW100';

export default IconMaterialPermDataSettingW100;
