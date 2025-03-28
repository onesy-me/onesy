import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostatAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatAutoFilled'

      short_name='ThermostatAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m639-532-25 73q-3 8-10.5 13.5T587-440q-15 0-23.5-12.5T560-479l113-302q3-9 11-14t17-5h22q9 0 17 5t11 14l115 303q5 14-3 26t-23 12q-9 0-17-5.5T812-460l-25-72H639Zm18-52h110l-53-150h-2l-55 150ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120ZM200-320h240q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320Z"/>
    </Icon>
  );
});

IconMaterialThermostatAutoFilled.displayName = 'OnesyIconMaterialThermostatAutoFilled';

export default IconMaterialThermostatAutoFilled;
