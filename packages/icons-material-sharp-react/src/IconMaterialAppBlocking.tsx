import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBlocking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlocking'

      short_name='AppBlocking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q12 0 23.5-3t22.5-9L632-526q-6 11-9 22.5t-3 23.5q0 42 29 71t71 29Zm88-54q6-11 9-22.5t3-23.5q0-42-29-71t-71-29q-12 0-23.5 3t-22.5 9l134 134ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialAppBlocking.displayName = 'OnesyIconMaterialAppBlocking';

export default IconMaterialAppBlocking;
