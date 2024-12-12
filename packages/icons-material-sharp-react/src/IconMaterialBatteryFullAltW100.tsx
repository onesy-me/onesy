import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryFullAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullAltW100'

      short_name='BatteryFullAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-326v-90h-53v-128h53v-90h643v308H185Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullAltW100.displayName = 'OnesyIconMaterialBatteryFullAltW100';

export default IconMaterialBatteryFullAltW100;
