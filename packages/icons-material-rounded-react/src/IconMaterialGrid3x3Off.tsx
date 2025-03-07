import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrid3x3Off = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3Off'

      short_name='Grid3x3Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m753-320-80-80h87q17 0 28.5 11.5T800-360q0 17-11.5 28.5T760-320h-7ZM640-433 433-640h127v-120q0-17 11.5-28.5T600-800q17 0 28.5 11.5T640-760v120h120q17 0 28.5 11.5T800-600q0 17-11.5 28.5T760-560H640v127ZM400-673l-80-80v-7q0-17 11.5-28.5T360-800q17 0 28.5 11.5T400-760v87Zm160 386-33-33H400v120q0 17-11.5 28.5T360-160q-17 0-28.5-11.5T320-200v-120H200q-17 0-28.5-11.5T160-360q0-17 11.5-28.5T200-400h120v-127l-33-33h-87q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h7L84-763q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l678 679q12 12 12 28t-12 28q-12 12-28 12t-28-12L640-207v7q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-87Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3Off.displayName = 'OnesyIconMaterialGrid3x3Off';

export default IconMaterialGrid3x3Off;
