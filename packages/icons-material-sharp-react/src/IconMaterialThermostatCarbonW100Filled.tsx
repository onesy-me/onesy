import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostatCarbonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatCarbonW100Filled'

      short_name='ThermostatCarbon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-122 122-480l358-358 358 358-358 358Z"/>
    </Icon>
  );
});

IconMaterialThermostatCarbonW100Filled.displayName = 'OnesyIconMaterialThermostatCarbonW100Filled';

export default IconMaterialThermostatCarbonW100Filled;
