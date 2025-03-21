import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDeviceInformation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformation'

      short_name='PermDeviceInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 20h10v1H7zM7 3h10v1H7z" opacity=".3"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm6-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformation.displayName = 'OnesyIconMaterialPermDeviceInformation';

export default IconMaterialPermDeviceInformation;
