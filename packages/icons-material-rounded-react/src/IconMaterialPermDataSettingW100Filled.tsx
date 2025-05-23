import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDataSettingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSettingW100Filled'

      short_name='PermDataSetting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M729-104q-5 0-9-4t-5-9l-1-15q-26-5-42-14t-30-26l-16 7q-5 2-9.5 1t-7.5-5l-1-3q-3-5-3-9.5t5-8.5l12-10q-8-24-8-46t8-46l-12-10q-4-3-5-8t2-10l3-3q3-4 7-5t9 1l16 7q14-18 30-26.5t42-13.5l1-15q1-5 5-9t9-4h2q5 0 9 4t5 9l1 15q26 5 42 13.5t30 26.5l16-7q5-2 9.5-1t7.5 5l1 3q3 5 3 9.5t-5 8.5l-12 10q8 24 8 46t-8 46l12 10q4 3 5 8t-2 10l-3 3q-3 4-7 5t-9-1l-16-7q-14 17-30 26t-42 14l-1 15q-1 5-5 9t-9 4h-2Zm1-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Zm-526 26q-20 0-27.5-18.5T183-183l594-594q14-14 32.5-6.5T828-756v252q0 14-11 21.5t-24 2.5q-15-5-31-7t-33-2q-102 0-173 71t-71 173q0 17 3.5 37t9.5 40q5 13-2.5 24.5T475-132H204Z"/>
    </Icon>
  );
});

IconMaterialPermDataSettingW100Filled.displayName = 'OnesyIconMaterialPermDataSettingW100Filled';

export default IconMaterialPermDataSettingW100Filled;
