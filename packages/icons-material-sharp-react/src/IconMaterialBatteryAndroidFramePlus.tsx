import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFramePlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFramePlus'

      short_name='BatteryAndroidFramePlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-240v-480h600v80H120v320h520v80H40Zm680-80v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-560-40v-240h360v240H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFramePlus.displayName = 'OnesyIconMaterialBatteryAndroidFramePlus';

export default IconMaterialBatteryAndroidFramePlus;
