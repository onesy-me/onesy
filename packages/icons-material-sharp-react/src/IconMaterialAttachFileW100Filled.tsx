import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileW100Filled'

      short_name='AttachFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M686-341q0 86.94-59.5 147.97T480.5-132Q394-132 334-193.03T274-341v-343q0-60 41-102t101-42q60 0 101 42t41 102v325q0 32-22.36 55.5t-54.5 23.5q-32.14 0-55.64-22.98T402-359v-321h28v321q0 21 14.5 36t35.5 15q21 0 35.5-15t14.5-36v-326q0-48-32.82-81.5T416-800q-47.88 0-80.94 34Q302-732 302-684v343q0 75 52 128t126.86 53q73.81 0 125.47-53Q658-266 658-341v-339h28v339Z"/>
    </Icon>
  );
});

IconMaterialAttachFileW100Filled.displayName = 'OnesyIconMaterialAttachFileW100Filled';

export default IconMaterialAttachFileW100Filled;
