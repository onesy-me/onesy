import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotW100'

      short_name='Screenshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M492-274v-28h100v-100h28v128H492ZM340-558v-128h128v28H368v100h-28ZM252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-28h400v-532H280v532Zm0-560h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialScreenshotW100.displayName = 'OnesyIconMaterialScreenshotW100';

export default IconMaterialScreenshotW100;
