import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoyW100Filled'

      short_name='Boy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.8-660q-20.8 0-35.3-14.7-14.5-14.7-14.5-35.5t14.7-35.3q14.7-14.5 35.5-14.5t35.3 14.7q14.5 14.7 14.5 35.5t-14.7 35.3Q500.6-660 479.8-660ZM434-244v-150h-10q-12.75 0-21.37-8.63Q394-411.25 394-424v-146q0-18.97 13.51-32.49Q421.02-616 440-616h80q18.97 0 32.49 13.51Q566-588.97 566-570v146q0 12.75-8.62 21.37Q548.75-394 536-394h-10v150q0 12.75-8.62 21.37Q508.75-214 496-214h-32q-12.75 0-21.37-8.63Q434-231.25 434-244Z"/>
    </Icon>
  );
});

IconMaterialBoyW100Filled.displayName = 'OnesyIconMaterialBoyW100Filled';

export default IconMaterialBoyW100Filled;
