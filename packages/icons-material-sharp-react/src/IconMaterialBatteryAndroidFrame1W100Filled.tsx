import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrame1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrame1W100Filled'

      short_name='BatteryAndroidFrame1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-292v-376h696v376H92Zm28-28h640v-320H120v320Zm708-80v-159h40v159h-40Zm-648 20v-200h28v200h-28Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrame1W100Filled.displayName = 'OnesyIconMaterialBatteryAndroidFrame1W100Filled';

export default IconMaterialBatteryAndroidFrame1W100Filled;
