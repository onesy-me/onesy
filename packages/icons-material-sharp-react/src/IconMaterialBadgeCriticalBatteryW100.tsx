import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBadgeCriticalBatteryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeCriticalBatteryW100'

      short_name='BadgeCriticalBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-326v-90h-53v-128h53v-90h643v308H185Zm27-28h548v-252H212v252Z"/>
    </Icon>
  );
});

IconMaterialBadgeCriticalBatteryW100.displayName = 'OnesyIconMaterialBadgeCriticalBatteryW100';

export default IconMaterialBadgeCriticalBatteryW100;
