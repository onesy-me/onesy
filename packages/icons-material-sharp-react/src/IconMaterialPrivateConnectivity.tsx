import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivateConnectivity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivity'

      short_name='PrivateConnectivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-106 0-184.5-68.5T203-440H80v-80h123q14-103 92.5-171.5T480-760q106 0 184.5 68.5T757-520h123v80H757q-14 103-92.5 171.5T480-200Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-120-60h240v-200h-40v-36q0-35-23-59.5T480-660q-33 0-56.5 23.5T400-580v40h-40v200Zm120-70q-13 0-21.5-8.5T450-440q0-13 8.5-21.5T480-470q13 0 21.5 8.5T510-440q0 13-8.5 21.5T480-410Zm-40-130v-40q0-17 11.5-28.5T480-620q17 0 28.5 11.5T520-580v40h-80Zm40 100Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivity.displayName = 'OnesyIconMaterialPrivateConnectivity';

export default IconMaterialPrivateConnectivity;
