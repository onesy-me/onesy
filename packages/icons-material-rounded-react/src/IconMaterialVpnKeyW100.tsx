import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyW100'

      short_name='VpnKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-292q-78.33 0-133.17-54.76Q92-401.53 92-479.76 92-558 146.83-613q54.84-55 133.17-55 56 0 106 33t70 87h352q24.75 0 42.38 17.62Q868-512.75 868-488v16q0 24.75-17.62 42.37Q832.75-412 808-412h-20v60q0 24.75-17.62 42.37Q752.75-292 728-292h-16q-24.75 0-42.37-17.63Q652-327.25 652-352v-60H456q-20 54-70 87t-106 33Zm0-28q66 0 106-40.5t48-79.5h246v88q0 14 9 23t23 9h16q14 0 23-9t9-23v-88h48q14 0 23-9t9-23v-16q0-14-9-23t-23-9H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-120q16.5 0 28.25-11.75T320-480q0-16.5-11.75-28.25T280-520q-16.5 0-28.25 11.75T240-480q0 16.5 11.75 28.25T280-440Zm0-40Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyW100.displayName = 'OnesyIconMaterialVpnKeyW100';

export default IconMaterialVpnKeyW100;
