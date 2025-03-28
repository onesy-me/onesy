import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputHdmiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiW100Filled'

      short_name='SettingsInputHdmi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M432-132q-25 0-42.5-17.5T372-192v-26L258-447q-3-6-4.5-13t-1.5-14v-130q0-22 11-38.5t29-23.5v-97q0-28 17-46.5t43-18.5h256q26 0 43 18.5t17 46.5v97q18 7 29 23.5t11 38.5v130q0 7-1.5 14t-4.5 13L588-218v26q0 25-17.5 42.5T528-132h-96ZM320-669h86v-73q0-6 4-10t10-4q6 0 10 4t4 10v73h92v-73q0-6 4-10t10-4q6 0 10 4t4 10v73h86v-94q0-16-9-26.5T608-800H352q-14 0-23 10.5t-9 26.5v94Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiW100Filled.displayName = 'OnesyIconMaterialSettingsInputHdmiW100Filled';

export default IconMaterialSettingsInputHdmiW100Filled;
