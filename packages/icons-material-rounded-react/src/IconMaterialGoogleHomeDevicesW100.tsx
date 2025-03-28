import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoogleHomeDevicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleHomeDevicesW100'

      short_name='GoogleHomeDevices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-252H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v60h-28v-60q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h268v108h-84q-12.75 0-21.37-8.63Q346-189.25 346-202v-50Zm262-64q0-31.53 22.23-53.77Q652.47-392 684-392q31.53 0 53.77 22.23Q760-347.53 760-316q0 31.53-22.23 53.77Q715.53-240 684-240q-31.53 0-53.77-22.23Q608-284.47 608-316Zm188.38-272q13.62 0 22.62 9.21 9 9.21 9 22.82v352.36q0 13.61-9.21 22.61-9.22 9-22.84 9H571.62Q558-172 549-181.21q-9-9.21-9-22.82v-352.36q0-13.61 9.21-22.61 9.22-9 22.84-9h224.33Zm-112.52 32q-20.86 0-34.36 13.64t-13.5 34.5q0 20.86 13.64 34.36t34.5 13.5q20.86 0 34.36-13.64t13.5-34.5q0-20.86-13.64-34.36t-34.5-13.5Zm0 352q47.14 0 79.64-32.36t32.5-79.5q0-47.14-32.36-79.64t-79.5-32.5q-47.14 0-79.64 32.36t-32.5 79.5q0 47.14 32.36 79.64t79.5 32.5Z"/>
    </Icon>
  );
});

IconMaterialGoogleHomeDevicesW100.displayName = 'OnesyIconMaterialGoogleHomeDevicesW100';

export default IconMaterialGoogleHomeDevicesW100;
