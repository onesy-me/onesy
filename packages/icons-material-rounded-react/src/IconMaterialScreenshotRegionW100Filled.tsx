import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotRegionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRegionW100Filled'

      short_name='ScreenshotRegion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M228-228h158q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H230q-12.75 0-21.37-8.63Q200-217.25 200-230v-156q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v158Zm0-504v158q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-156q0-12.75 8.63-21.38Q217.25-760 230-760h156q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H228Zm504 0H574q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h156q12.75 0 21.38 8.62Q760-742.75 760-730v156q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-158Zm-52 480h-80q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h80v-80q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v80h80q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-80v80q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-80Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRegionW100Filled.displayName = 'OnesyIconMaterialScreenshotRegionW100Filled';

export default IconMaterialScreenshotRegionW100Filled;
