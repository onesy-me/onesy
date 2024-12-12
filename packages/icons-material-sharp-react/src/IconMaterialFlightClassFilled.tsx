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
      <path d="M480-440v-360h240v360H480Zm240 200H320L200-640v-160h80v160l100 320h340v80ZM320-120v-80h400v80H320Z"/>
    </Icon>
  );
});

IconMaterialFlightClassFilled.displayName = 'OnesyIconMaterialFlightClassFilled';

export default IconMaterialFlightClassFilled;
