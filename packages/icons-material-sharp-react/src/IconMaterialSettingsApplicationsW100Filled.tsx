import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsApplicationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsApplicationsW100Filled'

      short_name='SettingsApplications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M470-320h20l6-46q26-5 42-14t30-26l44 18 11-18-35-28q8-24 8-46t-8-46l35-28-11-18-44 18q-14-17-30-26t-42-14l-6-46h-20l-6 46q-26 5-42 14t-30 26l-44-18-11 18 35 28q-8 24-8 46t8 46l-35 28 11 18 44-18q14 17 30 26t42 14l6 46Zm10-80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialSettingsApplicationsW100Filled.displayName = 'OnesyIconMaterialSettingsApplicationsW100Filled';

export default IconMaterialSettingsApplicationsW100Filled;
