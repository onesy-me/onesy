import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltitude = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Altitude'

      short_name='Altitude'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-480q-17 0-28.5-11.5T720-520v-128l-37 36q-11 11-27 11.5T628-612q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q12 12 12 28t-12 28q-12 12-28.5 12T835-612l-35-35v127q0 17-11.5 28.5T760-480ZM120-80q-25 0-36-22t4-42l160-213q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l148 197h300L560-426l-68 90q-12 16-28 16.5t-28-8.5q-12-9-16-24.5t8-31.5l100-133q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l280 373q15 20 4 42t-36 22H120Zm340-80Z"/>
    </Icon>
  );
});

IconMaterialAltitude.displayName = 'OnesyIconMaterialAltitude';

export default IconMaterialAltitude;
