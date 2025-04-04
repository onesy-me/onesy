import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCenterFocusStrong = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrong'

      short_name='CenterFocusStrong'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusStrong.displayName = 'OnesyIconMaterialCenterFocusStrong';

export default IconMaterialCenterFocusStrong;
