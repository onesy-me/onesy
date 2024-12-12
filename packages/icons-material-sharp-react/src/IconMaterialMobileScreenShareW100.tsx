import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareW100'

      short_name='MobileScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-370v-144h144v-44l58 58-58 58v-44H414v116h-28ZM252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-28h400v-532H280v532Zm0-560h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShareW100.displayName = 'OnesyIconMaterialMobileScreenShareW100';

export default IconMaterialMobileScreenShareW100;
