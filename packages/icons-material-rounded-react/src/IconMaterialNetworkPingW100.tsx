import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkPingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingW100'

      short_name='NetworkPing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-296q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h235L178-623q-4-4-4.5-9.89-.5-5.9 4.43-10.18 3.93-3.93 10-3.93t10.07 4l282 282 200-200q-5-12-7.5-21.5t-2.5-16.64q0-27.24 18.79-46.05t46-18.81Q762-664 781-645.21t19 46Q800-572 781.11-553t-46.25 19q-5.86 0-14.36-2t-19.5-7L483-324h235q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H242Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingW100.displayName = 'OnesyIconMaterialNetworkPingW100';

export default IconMaterialNetworkPingW100;
