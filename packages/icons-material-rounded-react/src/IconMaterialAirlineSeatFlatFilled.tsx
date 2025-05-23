import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatFilled'

      short_name='AirlineSeatFlat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-400q-17 0-28.5-11.5T360-440v-160q0-33 23.5-56.5T440-680h280q66 0 113 47t47 113v80q0 17-11.5 28.5T840-400H400Zm440 120H120q-17 0-28.5-11.5T80-320q0-17 11.5-28.5T120-360h720q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280ZM200-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatFilled.displayName = 'OnesyIconMaterialAirlineSeatFlatFilled';

export default IconMaterialAirlineSeatFlatFilled;
