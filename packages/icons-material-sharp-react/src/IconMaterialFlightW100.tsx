import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightW100'

      short_name='Flight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M373-132v-26l74-54v-239l-315 94v-32l315-188v-219q0-14 9.5-23.5T480-829q14 0 23.5 9.5T513-796v219l315 188v32l-315-94v237l74 56v26l-107-32-107 32Z"/>
    </Icon>
  );
});

IconMaterialFlightW100.displayName = 'OnesyIconMaterialFlightW100';

export default IconMaterialFlightW100;
