import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsSystemDaydreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSystemDaydreamFilled'

      short_name='SettingsSystemDaydream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h260q42 0 71-29t29-71q0-42-29-71t-71-29h-2q-8-51-44.5-85.5T486-640q-42 0-78 21t-54 59h-5q-47 0-78 36t-31 84q0 50 35 85t85 35ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialSettingsSystemDaydreamFilled.displayName = 'OnesyIconMaterialSettingsSystemDaydreamFilled';

export default IconMaterialSettingsSystemDaydreamFilled;
