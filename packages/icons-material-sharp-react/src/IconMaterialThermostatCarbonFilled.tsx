import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostatCarbonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatCarbonFilled'

      short_name='ThermostatCarbon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-48 48-480l432-432 432 432L480-48Z"/>
    </Icon>
  );
});

IconMaterialThermostatCarbonFilled.displayName = 'OnesyIconMaterialThermostatCarbonFilled';

export default IconMaterialThermostatCarbonFilled;
