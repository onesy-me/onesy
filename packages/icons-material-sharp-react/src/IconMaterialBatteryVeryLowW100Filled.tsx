import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryVeryLowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVeryLowW100Filled'

      short_name='BatteryVeryLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-326v-90h-53v-128h53v-90h643v308H185Zm27-28h548v-252H212v252Z"/>
    </Icon>
  );
});

IconMaterialBatteryVeryLowW100Filled.displayName = 'OnesyIconMaterialBatteryVeryLowW100Filled';

export default IconMaterialBatteryVeryLowW100Filled;
