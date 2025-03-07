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
      <path d="M360-400v-280h520v280H360Zm80-200v120-120ZM80-280v-80h800v80H80Zm120-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T240-520q0-17-11.5-28.5T200-560q-17 0-28.5 11.5T160-520q0 17 11.5 28.5T200-480Zm240 0h360v-120H440v120Zm-240-40Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlat.displayName = 'OnesyIconMaterialAirlineSeatFlat';

export default IconMaterialAirlineSeatFlat;
