import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertW100Filled'

      short_name='SettingsAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m416-132-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l91 68-64 112-104-45q-21 18-42 30.5T558-245l-14 113H416Zm64-241q6 0 10-4t4-10q0-6-4-10t-10-4q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-14-67h28v-174h-28v174Z"/>
    </Icon>
  );
});

IconMaterialSettingsAlertW100Filled.displayName = 'OnesyIconMaterialSettingsAlertW100Filled';

export default IconMaterialSettingsAlertW100Filled;
