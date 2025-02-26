import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelFilled'

      short_name='Hotel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200q-17 0-28.5-11.5T40-240v-520q0-17 11.5-28.5T80-800q17 0 28.5 11.5T120-760v360h320v-240q0-33 23.5-56.5T520-720h240q66 0 113 47t47 113v320q0 17-11.5 28.5T880-200q-17 0-28.5-11.5T840-240v-80H120v80q0 17-11.5 28.5T80-200Zm200-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialHotelFilled.displayName = 'OnesyIconMaterialHotelFilled';

export default IconMaterialHotelFilled;
