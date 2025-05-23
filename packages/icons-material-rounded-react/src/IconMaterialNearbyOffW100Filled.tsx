import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffW100Filled'

      short_name='NearbyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M796-482q0 11-4.5 22T778-440l-72 72q-5 5-13 5t-13-5q-5-5-5-13t5-13l70-70q8-8 8-16.5t-8-16.5L496-751q-8-8-17.5-8t-17.5 8l-70 70q-5 5-13 5t-13-5q-5-5-5-13t5-13l71-71q9-9 20.5-14t22.5-5q11 0 22 4.5t20 13.5l256 256q9 9 14 19.5t5 21.5ZM617-279l-95 95q-9 9-20 13.5t-23 4.5q-11 0-22.5-4.5T436-184L182-438q-9-9-13.5-20.5T164-481q0-12 4.5-23t13.5-20l95-95-146-146q-4-4-4.5-9.5T131-785q5-5 10-5t10 5l630 630q4 4 4.5 9.5T781-135q-5 5-10 5t-10-5L617-279ZM208-464l254 254q8 8 17 8t17-8l95-95-79-79-12 12q-9 9-21 9t-21-9l-88-88q-9-9-9-21t9-21l12-12-79-79-95 95q-8 8-8 17t8 17Zm390-6q-5 5-10 5t-10-5L468-580q-4-4-4.5-9.5T468-600q5-5 10-5t10 5l110 110q4 4 4.5 9.5T598-470Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffW100Filled.displayName = 'OnesyIconMaterialNearbyOffW100Filled';

export default IconMaterialNearbyOffW100Filled;
