import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdminPanelSettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminPanelSettingsW100Filled'

      short_name='AdminPanelSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q32 0 57.5-14t42.5-38q-23-14-48-21t-52-7q-27 0-52 7t-48 21q17 24 42.5 38t57.5 14Zm0 28q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-200-2q-115-36-191.5-142T212-516v-208l268-100 268 100v226q-14-5-32.5-7.5T680-508q-95 0-161.5 66.5T452-280q0 35 11 71t36 68q-5 2-9.5 3.5T480-134Z"/>
    </Icon>
  );
});

IconMaterialAdminPanelSettingsW100Filled.displayName = 'OnesyIconMaterialAdminPanelSettingsW100Filled';

export default IconMaterialAdminPanelSettingsW100Filled;
