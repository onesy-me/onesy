import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestConnectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestConnectFilled'

      short_name='NestConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q83 0 141.5-58.5T680-400v-160q0-83-58.5-141.5T480-760q-83 0-141.5 58.5T280-560v160q0 83 58.5 141.5T480-200Zm0-80q-50 0-85-35t-35-85v-160q0-50 35-85t85-35q50 0 85 35t35 85v160q0 50-35 85t-85 35Zm0-280q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560ZM200-40q-33 0-56.5-23.5T120-120v-720q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v720q0 33-23.5 56.5T760-40H200Z"/>
    </Icon>
  );
});

IconMaterialNestConnectFilled.displayName = 'OnesyIconMaterialNestConnectFilled';

export default IconMaterialNestConnectFilled;
