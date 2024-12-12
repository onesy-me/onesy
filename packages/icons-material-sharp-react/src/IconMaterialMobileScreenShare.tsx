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
      <path d="M360-360v-180h160v-80l120 120-120 120v-80h-80v100h-80ZM200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShare.displayName = 'OnesyIconMaterialMobileScreenShare';

export default IconMaterialMobileScreenShare;
