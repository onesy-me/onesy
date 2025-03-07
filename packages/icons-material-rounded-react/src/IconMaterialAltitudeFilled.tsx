import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltitudeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeFilled'

      short_name='Altitude'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-25 0-36-22t4-42l160-213q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l124 165q10 14 26 16t30-8q14-10 16.5-26.5T500-241l-72-95q-8-11-8-24t8-24l100-133q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l280 373q15 20 4 42t-36 22H120Zm640-400q-17 0-28.5-11.5T720-520v-128l-37 36q-11 11-27 11.5T628-612q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q12 12 12 28t-12 28q-12 12-28.5 12T835-612l-35-35v127q0 17-11.5 28.5T760-480Z"/>
    </Icon>
  );
});

IconMaterialAltitudeFilled.displayName = 'OnesyIconMaterialAltitudeFilled';

export default IconMaterialAltitudeFilled;
