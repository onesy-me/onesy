import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatIndividualSuite = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatIndividualSuite'

      short_name='AirlineSeatIndividualSuite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-280H120q-33 0-56.5-23.5T40-360v-280q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v280h320v-240q0-33 23.5-56.5T520-680h240q66 0 113 47t47 113v160q0 33-23.5 56.5T840-280Zm-320-80h320v-160q0-33-23.5-56.5T760-600H520v240Zm0-240v240-240ZM280-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T240-520q0-17 11.5-28.5T280-560q17 0 28.5 11.5T320-520q0 17-11.5 28.5T280-480Zm0-40Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuite.displayName = 'OnesyIconMaterialAirlineSeatIndividualSuite';

export default IconMaterialAirlineSeatIndividualSuite;
