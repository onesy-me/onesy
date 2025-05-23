import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsSystemDaydream = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSystemDaydream'

      short_name='SettingsSystemDaydream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h260q42 0 71-29t29-71q0-42-29-71t-71-29h-2q-8-51-44.5-85.5T486-640q-42 0-78 21t-54 59h-5q-47 0-78 36t-31 84q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480h50v-10q0-29 20.5-49.5T480-560q29 0 49.5 20.5T550-490v50h70q8 0 14 6t6 14q0 8-6 14t-14 6H360ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSettingsSystemDaydream.displayName = 'OnesyIconMaterialSettingsSystemDaydream';

export default IconMaterialSettingsSystemDaydream;
