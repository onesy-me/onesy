import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotFrameW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFrameW100'

      short_name='ScreenshotFrame'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-680q-6 0-10-4t-4-10v-74q0-26 17-43t43-17h74q6 0 10 4t4 10q0 6-4 10t-10 4h-74q-12 0-22 10t-10 22v74q0 6-4 10t-10 4Zm46 548q-26 0-43-17t-17-43v-74q0-6 4-10t10-4q6 0 10 4t4 10v74q0 12 10 22t22 10h74q6 0 10 4t4 10q0 6-4 10t-10 4h-74Zm382-548q-6 0-10-4t-4-10v-74q0-12-10-22t-22-10h-74q-6 0-10-4t-4-10q0-6 4-10t10-4h74q26 0 43 17t17 43v74q0 6-4 10t-10 4ZM574-132q-6 0-10-4t-4-10q0-6 4-10t10-4h74q12 0 22-10t10-22v-74q0-6 4-10t10-4q6 0 10 4t4 10v74q0 26-17 43t-43 17h-74Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFrameW100.displayName = 'OnesyIconMaterialScreenshotFrameW100';

export default IconMaterialScreenshotFrameW100;
