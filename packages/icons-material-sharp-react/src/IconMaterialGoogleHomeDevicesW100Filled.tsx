import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoogleHomeDevicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleHomeDevicesW100Filled'

      short_name='GoogleHomeDevices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-172v-80H132v-536h696v120h-28v-92H160v480h300v108H346Zm262-144q0-31.53 22.23-53.77Q652.47-392 684-392q31.53 0 53.77 22.23Q760-347.53 760-316q0 31.53-22.23 53.77Q715.53-240 684-240q-31.53 0-53.77-22.23Q608-284.47 608-316Zm220-272v416H540v-416h288Zm-144.14 32q-20.86 0-34.36 13.64t-13.5 34.5q0 20.86 13.64 34.36t34.5 13.5q20.86 0 34.36-13.64t13.5-34.5q0-20.86-13.64-34.36t-34.5-13.5Zm0 352q47.14 0 79.64-32.36t32.5-79.5q0-47.14-32.36-79.64t-79.5-32.5q-47.14 0-79.64 32.36t-32.5 79.5q0 47.14 32.36 79.64t79.5 32.5Z"/>
    </Icon>
  );
});

IconMaterialGoogleHomeDevicesW100Filled.displayName = 'OnesyIconMaterialGoogleHomeDevicesW100Filled';

export default IconMaterialGoogleHomeDevicesW100Filled;
