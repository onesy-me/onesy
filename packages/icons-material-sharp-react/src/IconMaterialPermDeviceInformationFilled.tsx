import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDeviceInformationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationFilled'

      short_name='PermDeviceInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-300v-220h80v220h-80Zm40-300q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640q0 17-11.5 28.5T480-600ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationFilled.displayName = 'OnesyIconMaterialPermDeviceInformationFilled';

export default IconMaterialPermDeviceInformationFilled;
