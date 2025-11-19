import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrameBoltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrameBoltW100Filled'

      short_name='BatteryAndroidFrameBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-292v-376h613l-22 28H120v320h522l-6 28H92Zm625-28 23-128H632l154-192h17l-23 128h108L734-320h-17Zm-537-60v-200h455L475-380H180Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrameBoltW100Filled.displayName = 'OnesyIconMaterialBatteryAndroidFrameBoltW100Filled';

export default IconMaterialBatteryAndroidFrameBoltW100Filled;
