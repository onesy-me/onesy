import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChargingStationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationW100Filled'

      short_name='ChargingStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M464-448h-40q-8 0-12-7t-1-15l71-162q2-5 8-3.5t6 7.5v116h40q8 0 12 7t1 15l-71 162q-2 5-8 3.5t-6-7.5v-116ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialChargingStationW100Filled.displayName = 'OnesyIconMaterialChargingStationW100Filled';

export default IconMaterialChargingStationW100Filled;
