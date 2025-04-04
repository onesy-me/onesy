import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiHomeW100'

      short_name='WifiHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-516ZM212-212v-375l-79 61-17-22 364-279 364 279-17 22-80-61-267-204-240 183v368h198v14q0 7 1 14H212ZM666-54H538v-28h79q-35-29-57-70t-22-86q0-62 36-109.5t92-65.5v29q-44 17-72 56.5T566-238q0 39 20 75t52 62v-81h28v128Zm100-9v-30q45-17 72.5-57t27.5-88q0-39-20-75t-52-62v81h-28v-128h128v28h-79q35 29 57 70t22 86q0 62-36 109.5T766-63Z"/>
    </Icon>
  );
});

IconMaterialWifiHomeW100.displayName = 'OnesyIconMaterialWifiHomeW100';

export default IconMaterialWifiHomeW100;
