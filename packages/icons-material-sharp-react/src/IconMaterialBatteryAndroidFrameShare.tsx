import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrameShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrameShare'

      short_name='BatteryAndroidFrameShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-240v-480h687l-80 80H120v320h320v80H40Zm480-80v-200h247l-63-64 56-56 160 160-160 160-57-57 64-63H600v120h-80Zm-80-40H160v-240h447-167v240Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrameShare.displayName = 'OnesyIconMaterialBatteryAndroidFrameShare';

export default IconMaterialBatteryAndroidFrameShare;
