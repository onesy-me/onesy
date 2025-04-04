import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyW100Filled'

      short_name='VpnKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-292q-78.33 0-133.17-54.76Q92-401.53 92-479.76 92-558 146.83-613q54.84-55 133.17-55 71 0 120.5 43T464-520h404v80H760v148h-80v-148H464q-14 62-63.5 105T280-292Zm0-148q16.5 0 28.25-11.75T320-480q0-16.5-11.75-28.25T280-520q-16.5 0-28.25 11.75T240-480q0 16.5 11.75 28.25T280-440Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyW100Filled.displayName = 'OnesyIconMaterialVpnKeyW100Filled';

export default IconMaterialVpnKeyW100Filled;
