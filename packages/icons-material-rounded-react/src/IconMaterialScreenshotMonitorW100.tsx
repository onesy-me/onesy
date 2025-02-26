import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotMonitorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorW100'

      short_name='ScreenshotMonitor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M716-364h-76q-6 0-10 4t-4 10q0 6 4 10t10 4h74q13 0 21.5-8.5T744-366v-74q0-6-4-10t-10-4q-6 0-10 4t-4 10v76ZM244-676h76q6 0 10-4t4-10q0-6-4-10t-10-4h-74q-13 0-21.5 8.5T216-674v74q0 6 4 10t10 4q6 0 10-4t4-10v-76Zm-52 424q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 13-8.5 21.5T558-172H402q-13 0-21.5-8.5T372-202v-50H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorW100.displayName = 'OnesyIconMaterialScreenshotMonitorW100';

export default IconMaterialScreenshotMonitorW100;
