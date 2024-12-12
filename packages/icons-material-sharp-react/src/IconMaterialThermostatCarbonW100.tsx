import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostatCarbonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatCarbonW100'

      short_name='ThermostatCarbon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-122 122-480l358-358 358 358-358 358Zm0-38 320-320-320-320-320 320 320 320Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialThermostatCarbonW100.displayName = 'OnesyIconMaterialThermostatCarbonW100';

export default IconMaterialThermostatCarbonW100;
