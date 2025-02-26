import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatterySaverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverW100Filled'

      short_name='BatterySaver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-132v-100H560v-28h100v-100h28v100h100v28H688v100h-28Zm-334 0v-643h90v-53h128v53h90v305q-81 14-135.5 77.5T444-243q0 30 7 58t21 53H326Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverW100Filled.displayName = 'OnesyIconMaterialBatterySaverW100Filled';

export default IconMaterialBatterySaverW100Filled;
