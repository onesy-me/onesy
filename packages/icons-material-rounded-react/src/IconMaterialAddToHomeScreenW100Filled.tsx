import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToHomeScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100Filled'

      short_name='AddToHomeScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-566 186-326q-4 4-9.5 4.5T166-326q-5-5-5-10t5-10l240-240H240q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h184q12.75 0 21.38 8.62Q454-596.75 454-584v184q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-166ZM352-92q-24.75 0-42.37-17.63Q292-127.25 292-152v-110q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v48h400v-532H320v48q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-110q0-24.75 17.63-42.38Q327.25-868 352-868h336q24.75 0 42.38 17.62Q748-832.75 748-808v656q0 24.75-17.62 42.37Q712.75-92 688-92H352Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100Filled.displayName = 'OnesyIconMaterialAddToHomeScreenW100Filled';

export default IconMaterialAddToHomeScreenW100Filled;
