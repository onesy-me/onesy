import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Screenshot'

      short_name='Screenshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280v-60h100v-100h60v160H480ZM320-520v-160h160v60H380v100h-60ZM200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialScreenshot.displayName = 'OnesyIconMaterialScreenshot';

export default IconMaterialScreenshot;
