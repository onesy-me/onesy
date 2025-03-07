import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestThermostatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestThermostatFilled'

      short_name='NestThermostat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m398-551-86 152q-5 8-2 16t11 13q8 4 15.5 2t12.5-10l95-168q1-2 3-10v-19q0-8-6.5-14t-14.5-6H312q-8 0-14 6t-6 14q0 8 6.5 14.5T313-554h83l2 3Zm176 191q45 0 70.5-34.5T670-480q0-51-26-85.5T574-600q-45 0-70.5 34.5T478-480q0 51 25.5 85.5T574-360Zm0-41q-26 0-39-23.5T522-480q0-24 11-51.5t41-27.5q30 0 41 27.5t11 51.5q0 32-13 55.5T574-401ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialNestThermostatFilled.displayName = 'OnesyIconMaterialNestThermostatFilled';

export default IconMaterialNestThermostatFilled;
