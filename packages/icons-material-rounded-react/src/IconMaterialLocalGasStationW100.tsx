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
      <path d="M212-202v-526q0-26 17-43t43-17h176q26 0 43 17t17 43v228h36q24.75 0 42.38 17.62Q604-464.75 604-440v184q0 23 16.5 39.5T660-200q23 0 39.5-16.5T716-256v-268q-9 6-19 9t-21 3q-28.56 0-48.28-19.72Q608-551.44 608-580q0-26 16-45.5t42-22.5l-90-90q-4-4-4.5-9.5t4.79-10.79Q581-763 586-763q5 0 10 5l124 124q11 11 17.5 25.1 6.5 14.1 6.5 28.9v324q0 35.28-24.3 59.64Q695.39-172 660.2-172q-35.2 0-59.7-24.36T576-256v-184q0-14-9-23t-23-9h-36v270q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63H241.58q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37Zm28-332h240v-194q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v194Zm436-6q17 0 28.5-11.5T716-580q0-17-11.5-28.5T676-620q-17 0-28.5 11.5T636-580q0 17 11.5 28.5T676-540ZM240-200h240v-306H240v306Zm240 0H240h240Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStationW100.displayName = 'OnesyIconMaterialLocalGasStationW100';

export default IconMaterialLocalGasStationW100;
