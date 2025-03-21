import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRememberMe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMe'

      short_name='RememberMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm200 480q-54 0-105 15.5T280-260v20h400v-20q-44-29-95-44.5T480-320Zm0-80q54 0 104.5 12.5T680-352v-368H280v368q45-23 95.5-35.5T480-400Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0 280h200-400 200Zm0-320Zm0-240Zm0 640Z"/>
    </Icon>
  );
});

IconMaterialRememberMe.displayName = 'OnesyIconMaterialRememberMe';

export default IconMaterialRememberMe;
