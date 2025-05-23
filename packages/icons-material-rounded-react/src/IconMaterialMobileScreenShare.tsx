import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileScreenShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShare'

      short_name='MobileScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360q-17 0-28.5-11.5T360-400v-20q0-50 35-85t85-35h40v-56q0-7 6-9.5t11 2.5l89 89q6 6 6 14t-6 14l-89 89q-5 5-11 2.5t-6-9.5v-56h-40q-17 0-28.5 11.5T440-420v20q0 17-11.5 28.5T400-360ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShare.displayName = 'OnesyIconMaterialMobileScreenShare';

export default IconMaterialMobileScreenShare;
