import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifi1BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1BarW100'

      short_name='NetworkWifi1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M361-353q25-18 55.5-28t63.5-10q33 0 63.5 10t55.5 28l245-245q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l245 245Zm98 138L99-575q-5-5-7-10.67-2-5.66-2-11.33 0-6.8 3-13t9-11q85-63 178.5-95T480-748q106 0 199.5 32T858-621q6 4.8 9 11t3 13q0 6-2 11.5t-7 10.5L501-215q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi1BarW100.displayName = 'OnesyIconMaterialNetworkWifi1BarW100';

export default IconMaterialNetworkWifi1BarW100;
