import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatReclineExtra = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineExtra'

      short_name='AirlineSeatReclineExtra'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-720q-33 0-56.5-23.5T260-800q0-33 23.5-56.5T340-880q33 0 56.5 23.5T420-800q0 33-23.5 56.5T340-720Zm180 560H302q-33 0-60.5-23.5T207-240l-78-392q-4-19 8-33.5t32-14.5q14 0 25 9t14 23l82 408h230q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160Zm240 45-96-165H386q-29 0-50.5-17.5T308-344l-44-214q-11-48 22.5-85t81.5-37q35 0 63.5 21t36.5 57l44 202h130q21 0 39 11t29 29l120 205q8 14 3.5 30.5T815-100q-14 8-30.5 3.5T760-115Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineExtra.displayName = 'OnesyIconMaterialAirlineSeatReclineExtra';

export default IconMaterialAirlineSeatReclineExtra;
