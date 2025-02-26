import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryHoriz050W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz050W100Filled'

      short_name='BatteryHoriz050'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-326v-90h-53v-128h53v-90h643v308H185Zm27-28h308v-252H212v252Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz050W100Filled.displayName = 'OnesyIconMaterialBatteryHoriz050W100Filled';

export default IconMaterialBatteryHoriz050W100Filled;
