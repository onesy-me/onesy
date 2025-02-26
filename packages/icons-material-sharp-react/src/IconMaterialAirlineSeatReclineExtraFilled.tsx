import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatReclineExtraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineExtraFilled'

      short_name='AirlineSeatReclineExtra'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-720q-33 0-56.5-23.5T260-800q0-33 23.5-56.5T340-880q33 0 56.5 23.5T420-800q0 33-23.5 56.5T340-720ZM223-160 120-680h82l88 440h270v80H223Zm557 80L664-280H321l-57-278q-11-48 22.5-85t81.5-37q35 0 63.5 21t36.5 57l44 202h175l163 280-70 40Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineExtraFilled.displayName = 'OnesyIconMaterialAirlineSeatReclineExtraFilled';

export default IconMaterialAirlineSeatReclineExtraFilled;
