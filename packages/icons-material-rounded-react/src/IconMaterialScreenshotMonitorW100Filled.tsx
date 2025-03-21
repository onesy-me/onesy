import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotMonitorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorW100Filled'

      short_name='ScreenshotMonitor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M716-364h-76q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h74q12.75 0 21.38-8.63Q744-353.25 744-366v-74q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v76ZM244-676h76q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4h-74q-12.75 0-21.37 8.62Q216-686.75 216-674v74q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-76Zm-52 424q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 12.75-8.62 21.37Q570.75-172 558-172H402q-12.75 0-21.37-8.63Q372-189.25 372-202v-50H192Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorW100Filled.displayName = 'OnesyIconMaterialScreenshotMonitorW100Filled';

export default IconMaterialScreenshotMonitorW100Filled;
