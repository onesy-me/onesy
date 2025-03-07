import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFilled'

      short_name='Screenshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280v-60h100v-100h60v160H480ZM320-520v-160h160v60H380v100h-60ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFilled.displayName = 'OnesyIconMaterialScreenshotFilled';

export default IconMaterialScreenshotFilled;
