import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnKeyAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyAlertW100Filled'

      short_name='VpnKeyAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440q16.5 0 28.25-11.75T320-480q0-16.5-11.75-28.25T280-520q-16.5 0-28.25 11.75T240-480q0 16.5 11.75 28.25T280-440Zm546.04 160q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5ZM812-384v-164h28v164h-28Zm-532 92q-78.33 0-133.17-54.76Q92-401.53 92-479.76 92-558 146.83-613q54.84-55 133.17-55 71 0 120.5 43T464-520h256v228h-40v-148H464q-14 62-63.5 105T280-292Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyAlertW100Filled.displayName = 'OnesyIconMaterialVpnKeyAlertW100Filled';

export default IconMaterialVpnKeyAlertW100Filled;
