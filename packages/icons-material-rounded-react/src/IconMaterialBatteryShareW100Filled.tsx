import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryShareW100Filled'

      short_name='BatteryShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M447.5-306q-5.5 0-9.5-4.02-4-4.03-4-9.98v-74q0-24.75 17.25-42.38Q468.5-454 494-454h195l-79-79q-5-5-5-10t5-10q4-4 9.5-4t9.5 4l93 92q8 9.07 8 21.53 0 12.47-8 21.47l-93 92q-4 4-9.5 4t-9.5-4q-5-5-4.79-10.5.21-5.5 4.79-9.5l79-80H494q-14 0-23 9.5t-9 22.5v75q0 5-4.5 9t-10 4Zm-91.33 174q-13.17 0-21.67-8.63-8.5-8.62-8.5-21.37v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v88q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-91H354v588h252v-63q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v60.67q0 12.89-8.62 21.61Q616.75-132 604-132H356.17Z"/>
    </Icon>
  );
});

IconMaterialBatteryShareW100Filled.displayName = 'OnesyIconMaterialBatteryShareW100Filled';

export default IconMaterialBatteryShareW100Filled;
