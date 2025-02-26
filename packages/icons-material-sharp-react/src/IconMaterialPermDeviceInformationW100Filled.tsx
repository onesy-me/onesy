import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDeviceInformationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationW100Filled'

      short_name='PermDeviceInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-328v-194h28v194h-28Zm14-264q-8.5 0-14.25-5.75T460-612q0-8.5 5.75-14.25T480-632q8.5 0 14.25 5.75T500-612q0 8.5-5.75 14.25T480-592ZM252-92v-776h456v776H252Zm28-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationW100Filled.displayName = 'OnesyIconMaterialPermDeviceInformationW100Filled';

export default IconMaterialPermDeviceInformationW100Filled;
