import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirportShuttle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirportShuttle'

      short_name='AirportShuttle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200q-50 0-85-35t-35-85q-33 0-56.5-23.5T40-400v-280q0-33 23.5-56.5T120-760h527q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v87q0 33-23.5 56.5T840-320q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM328-400h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80h32q17-18 39-29t49-11q27 0 49 11t39 29Zm512-80H120h720Z"/>
    </Icon>
  );
});

IconMaterialAirportShuttle.displayName = 'OnesyIconMaterialAirportShuttle';

export default IconMaterialAirportShuttle;
