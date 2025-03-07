import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdate'

      short_name='SystemUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm200-80L320-480l56-56 64 62v-166h80v166l64-62 56 56-160 160ZM280-800h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdate.displayName = 'OnesyIconMaterialSystemUpdate';

export default IconMaterialSystemUpdate;
