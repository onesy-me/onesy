import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKey'

      short_name='VpnKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q66 0 121 33t87 87h352q33 0 56.5 23.5T920-520v80q0 33-23.5 56.5T840-360v40q0 33-23.5 56.5T760-240h-80q-33 0-56.5-23.5T600-320v-40H488q-32 54-87 87t-121 33Zm0-80q66 0 106-40.5t48-79.5h246v120h80v-120h80v-80H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialVpnKey.displayName = 'OnesyIconMaterialVpnKey';

export default IconMaterialVpnKey;
