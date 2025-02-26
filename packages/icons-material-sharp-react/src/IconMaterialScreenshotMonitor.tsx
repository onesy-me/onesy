import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotMonitor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitor'

      short_name='ScreenshotMonitor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-320h160v-160h-60v100H600v60ZM200-560h60v-100h100v-60H200v160Zm120 440v-80H80v-640h800v640H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitor.displayName = 'OnesyIconMaterialScreenshotMonitor';

export default IconMaterialScreenshotMonitor;
