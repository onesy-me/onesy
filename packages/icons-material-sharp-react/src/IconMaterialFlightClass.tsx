import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightClass = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClass'

      short_name='FlightClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440v-360h240v360H480Zm80-80h80v-200h-80v200Zm160 280H320L200-640v-160h80v160l100 320h340v80ZM320-120v-80h400v80H320Zm240-600h80-80Z"/>
    </Icon>
  );
});

IconMaterialFlightClass.displayName = 'OnesyIconMaterialFlightClass';

export default IconMaterialFlightClass;
