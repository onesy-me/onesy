import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotorcycleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotorcycleW100'

      short_name='Motorcycle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-520H306h220-106ZM220-252q-62 0-105-43T72-400q0-62 43-105t105-43h476L564-680H460v-28h116l160 160q63-2 107.5 41.5T888-400q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-35 17.5-66t44.5-54h-88L432-386h-66q-4 57-46 95.5T220-252Zm520-28q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-520 0q46 0 80-30.5t40-75.5H220v-28h120q-6-45-40-75.5T220-520q-50 0-85 35t-35 85q0 50 35 85t85 35Zm148-134h52l106-106H306q27 18 43.5 46t18.5 60Z"/>
    </Icon>
  );
});

IconMaterialMotorcycleW100.displayName = 'OnesyIconMaterialMotorcycleW100';

export default IconMaterialMotorcycleW100;
