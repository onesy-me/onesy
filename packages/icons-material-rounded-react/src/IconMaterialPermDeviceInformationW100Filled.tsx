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
      <path d="M479.96-328q-5.96 0-9.96-4.02-4-4.03-4-9.98v-166q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v166q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm.04-264q-8.5 0-14.25-5.75T460-612q0-8.5 5.75-14.25T480-632q8.5 0 14.25 5.75T500-612q0 8.5-5.75 14.25T480-592ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationW100Filled.displayName = 'OnesyIconMaterialPermDeviceInformationW100Filled';

export default IconMaterialPermDeviceInformationW100Filled;
