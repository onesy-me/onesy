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
      <path d="M280-292q-78.33 0-133.17-54.76Q92-401.53 92-479.76 92-558 146.83-613q54.84-55 133.17-55 56 0 106 33t70 87h412v136h-80v120H652v-120H456q-20 54-70 87t-106 33Zm0-28q66 0 106-40.5t48-79.5h246v120h80v-120h80v-80H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-120q16.5 0 28.25-11.75T320-480q0-16.5-11.75-28.25T280-520q-16.5 0-28.25 11.75T240-480q0 16.5 11.75 28.25T280-440Zm0-40Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyW100.displayName = 'OnesyIconMaterialVpnKeyW100';

export default IconMaterialVpnKeyW100;
