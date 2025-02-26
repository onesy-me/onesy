import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChargingStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationFilled'

      short_name='ChargingStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-280v-160h-80l120-240v160h80L460-280ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialChargingStationFilled.displayName = 'OnesyIconMaterialChargingStationFilled';

export default IconMaterialChargingStationFilled;
