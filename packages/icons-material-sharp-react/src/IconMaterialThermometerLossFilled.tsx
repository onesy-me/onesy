import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermometerLossFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerLossFilled'

      short_name='ThermometerLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-640H560v-80h320v80ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120Zm-40-440h80v-160q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerLossFilled.displayName = 'OnesyIconMaterialThermometerLossFilled';

export default IconMaterialThermometerLossFilled;
