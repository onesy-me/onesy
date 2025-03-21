import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryChargingFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChargingFull'

      short_name='BatteryChargingFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-200h-62q-12 0-17.5-10.5T582-231l100-143q5-6 11.5-4t6.5 10v88h62q12 0 17.5 10.5T778-249L678-106q-5 6-11.5 4t-6.5-10v-88Zm-300 40Zm-40 80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v240q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-200H360v560h101q17 0 28.5 11.5T501-120q0 17-11.5 28.5T461-80H320Z"/>
    </Icon>
  );
});

IconMaterialBatteryChargingFull.displayName = 'OnesyIconMaterialBatteryChargingFull';

export default IconMaterialBatteryChargingFull;
