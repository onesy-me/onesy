import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnKeyAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyAlert'

      short_name='VpnKeyAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q66 0 121 33t87 87h232q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47q66 0 106-40.5t48-79.5h206q17 0 28.5 11.5T680-400v80h40q17 0 28.5 11.5T760-280q0 17-11.5 28.5T720-240h-80q-17 0-28.5-11.5T600-280v-80H488q-32 54-87 87t-121 33Zm0-160q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0-80Zm600 240q-17 0-28.5-11.5T840-280q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240Zm0-160q-17 0-28.5-11.5T840-440v-120q0-17 11.5-28.5T880-600q17 0 28.5 11.5T920-560v120q0 17-11.5 28.5T880-400Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyAlert.displayName = 'OnesyIconMaterialVpnKeyAlert';

export default IconMaterialVpnKeyAlert;
