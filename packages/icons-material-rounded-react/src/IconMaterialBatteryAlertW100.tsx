import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertW100'

      short_name='BatteryAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356.17-132q-13.17 0-21.67-8.63-8.5-8.62-8.5-21.37v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v583q0 12.75-8.62 21.37Q616.75-132 604-132H356.17ZM354-160h252v-588H354v588Zm0 0h252-252Zm126.04-252q5.96 0 9.96-4.02 4-4.03 4-9.98v-160q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v160q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm-.08 104q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlertW100.displayName = 'OnesyIconMaterialBatteryAlertW100';

export default IconMaterialBatteryAlertW100;
