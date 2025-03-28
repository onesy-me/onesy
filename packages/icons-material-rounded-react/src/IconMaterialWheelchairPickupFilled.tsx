import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWheelchairPickupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickupFilled'

      short_name='WheelchairPickup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-720q-33 0-56.5-23.5T180-800q0-33 23.5-56.5T260-880q33 0 56.5 23.5T340-800q0 33-23.5 56.5T260-720Zm-60 600v-240h-40q-17 0-28.5-11.5T120-400v-200q0-33 23.5-56.5T200-680h120q33 0 56.5 23.5T400-600v78q-63 36-101.5 100T260-280q0 57 21 107.5T340-84v4H240q-17 0-28.5-11.5T200-120Zm340 40q-83 0-141.5-58.5T340-280q0-67 39.5-118.5T480-470v87q-27 16-43.5 43T420-280q0 50 35 85t85 35q50 0 85-35t35-85h80q0 83-58.5 141.5T540-80Zm275-125-77-115H600q-33 0-56.5-23.5T520-400v-200q0-17 11.5-28.5T560-640q17 0 28.5 11.5T600-600v200h139q20 0 38 9.5t29 26.5l76 115q9 14 5.5 30T870-194q-14 9-30 6t-25-17Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickupFilled.displayName = 'OnesyIconMaterialWheelchairPickupFilled';

export default IconMaterialWheelchairPickupFilled;
