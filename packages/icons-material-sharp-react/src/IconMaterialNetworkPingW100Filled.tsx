import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkPingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingW100Filled'

      short_name='NetworkPing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M228-296v-28h249L168-633l20-19 292 291 200-200q-5-12-7.5-21.5t-2.5-16.64q0-27.24 18.79-46.05t46-18.81Q762-664 781-645.21t19 46Q800-572 781.11-553t-46.25 19q-5.86 0-14.36-2t-19.5-7L483-324h249v28H228Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingW100Filled.displayName = 'OnesyIconMaterialNetworkPingW100Filled';

export default IconMaterialNetworkPingW100Filled;
