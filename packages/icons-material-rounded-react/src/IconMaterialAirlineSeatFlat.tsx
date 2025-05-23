import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlat'

      short_name='AirlineSeatFlat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-400q-17 0-28.5-11.5T360-440v-160q0-33 23.5-56.5T440-680h280q66 0 113 47t47 113v80q0 17-11.5 28.5T840-400H400Zm40-200v120-120Zm400 320H120q-17 0-28.5-11.5T80-320q0-17 11.5-28.5T120-360h720q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280ZM200-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T240-520q0-17-11.5-28.5T200-560q-17 0-28.5 11.5T160-520q0 17 11.5 28.5T200-480Zm240 0h360v-40q0-33-23.5-56.5T720-600H440v120Zm-240-40Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlat.displayName = 'OnesyIconMaterialAirlineSeatFlat';

export default IconMaterialAirlineSeatFlat;
