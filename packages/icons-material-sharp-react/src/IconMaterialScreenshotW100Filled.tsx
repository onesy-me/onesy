import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotW100Filled'

      short_name='Screenshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M492-274v-28h100v-100h28v128H492ZM340-558v-128h128v28H368v100h-28ZM252-92v-776h456v776H252Zm28-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialScreenshotW100Filled.displayName = 'OnesyIconMaterialScreenshotW100Filled';

export default IconMaterialScreenshotW100Filled;
