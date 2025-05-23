import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFull'

      short_name='BatteryFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
    </Icon>
  );
});

IconMaterialBatteryFull.displayName = 'OnesyIconMaterialBatteryFull';

export default IconMaterialBatteryFull;
