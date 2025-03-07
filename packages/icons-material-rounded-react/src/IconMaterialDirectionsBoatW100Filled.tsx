import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBoatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBoatW100Filled'

      short_name='DirectionsBoat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m198-254-52-194q-2-9 1.5-19t12.5-13l52-18v-170q0-26 17-43t43-17h140v-90q0-13 8.5-21.5T442-848h76q13 0 21.5 8.5T548-818v90h140q26 0 43 17t17 43v170l52 18q11 4 16 13.5t2 18.5l-56 194q-31-14-53.5-34T663-333q-9-10-22.5-10T618-332q-27 32-60 56t-78 24q-11 0-20-1t-18-4q-29-8-52.5-28T343-331q-9-11-23-11.5T297-332q-22 25-45.5 44.5T198-254ZM480-92q-41 0-81.5-10T320-132q-38 20-78 30t-82 10h-40q-6 0-10-4t-4-10q0-6 4-10t10-4h40q38 0 74.5-11t69.5-31q8-5 16-5t16 5q25 16 53 25t57 13q8 1 17 1.5t17 .5q38 0 74.5-10t69.5-30q8-5 16-5t16 5q33 20 69 31t75 11h40q6 0 10 4t4 10q0 6-4 10t-10 4h-40q-42 0-82-10t-78-30q-38 20-78.5 30T480-92ZM240-508l221-72q9-3 19-3t19 3l221 72v-160q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v160Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBoatW100Filled.displayName = 'OnesyIconMaterialDirectionsBoatW100Filled';

export default IconMaterialDirectionsBoatW100Filled;
