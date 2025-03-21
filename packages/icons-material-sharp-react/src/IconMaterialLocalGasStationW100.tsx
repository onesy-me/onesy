import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalGasStationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStationW100'

      short_name='LocalGasStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-616h296v288h96v300h112v-324q-9 6-19 9t-21 3q-28.56 0-48.28-19.72Q608-551.44 608-580q0-26 16-45.5t42-22.5L566-748l20-20 134 134q11 11 17.5 25.1 6.5 14.1 6.5 28.9v408H576v-300h-68v300H212Zm28-362h240v-226H240v226Zm436-6q17 0 28.5-11.5T716-580q0-17-11.5-28.5T676-620q-17 0-28.5 11.5T636-580q0 17 11.5 28.5T676-540ZM240-200h240v-306H240v306Zm240 0H240h240Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStationW100.displayName = 'OnesyIconMaterialLocalGasStationW100';

export default IconMaterialLocalGasStationW100;
