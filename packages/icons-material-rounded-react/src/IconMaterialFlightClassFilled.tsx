import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightClassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassFilled'

      short_name='FlightClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-440q-33 0-56.5-23.5T480-520v-200q0-33 23.5-56.5T560-800h80q33 0 56.5 23.5T720-720v200q0 33-23.5 56.5T640-440h-80ZM380-240q-27 0-48-15.5T303-297L203-629q-2-5-2.5-11t-.5-12v-108q0-17 11.5-28.5T240-800q17 0 28.5 11.5T280-760v120l100 320h300q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240H380Zm-20 120q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h320q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H360Z"/>
    </Icon>
  );
});

IconMaterialFlightClassFilled.displayName = 'OnesyIconMaterialFlightClassFilled';

export default IconMaterialFlightClassFilled;
