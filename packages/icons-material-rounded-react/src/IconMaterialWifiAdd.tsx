import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAdd'

      short_name='WifiAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-240h-80q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80v-80q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v80h80q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240h-80v80q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-80ZM480-800q113 0 218.5 35.5T892-660q15 12 22.5 28t7.5 34q0 17-6.5 32.5T896-537l-45 46q-12 11-28.5 11.5T794-491q-12-12-12-28.5t12-28.5l50-50q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 11-11q12-12 28.5-12t28.5 12q12 12 12 28.5T548-188l-11 11q-12 12-27 18t-30 6q-15 0-30-6t-27-18L63-537q-13-13-19-28t-6-32q0-17 7-34t22-29q88-69 194-104.5T480-800Zm0 323Z"/>
    </Icon>
  );
});

IconMaterialWifiAdd.displayName = 'OnesyIconMaterialWifiAdd';

export default IconMaterialWifiAdd;
