import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryHoriz000W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz000W100Filled'

      short_name='BatteryHoriz000'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-326v-90h-53v-128h53v-90h643v308H185Zm27-28h588v-252H212v252Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz000W100Filled.displayName = 'OnesyIconMaterialBatteryHoriz000W100Filled';

export default IconMaterialBatteryHoriz000W100Filled;
