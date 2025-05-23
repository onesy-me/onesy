import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChargingStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStation'

      short_name='ChargingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M17,3v1H7V3H17 M17,20H7v1h10V20" opacity=".3"/><path d="M14.5,11l-3,6v-4h-2l3-6v4H14.5z M17,3H7v1h10V3 M17,20H7v1h10V20 M17,1c1.1,0,2,0.9,2,2v18c0,1.1-0.9,2-2,2H7 c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H17L17,1z M7,18h10V6H7V18L7,18z"/></g>
    </Icon>
  );
});

IconMaterialChargingStation.displayName = 'OnesyIconMaterialChargingStation';

export default IconMaterialChargingStation;
