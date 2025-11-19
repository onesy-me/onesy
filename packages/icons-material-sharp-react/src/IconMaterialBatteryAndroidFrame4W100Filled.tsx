import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrame4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrame4W100Filled'

      short_name='BatteryAndroidFrame4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-380v-200h268v200H180Zm-88 88v-376h696v376H92Zm28-28h640v-320H120v320Zm708-80v-159h40v159h-40Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrame4W100Filled.displayName = 'OnesyIconMaterialBatteryAndroidFrame4W100Filled';

export default IconMaterialBatteryAndroidFrame4W100Filled;
