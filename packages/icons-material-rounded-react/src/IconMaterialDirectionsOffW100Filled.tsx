import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffW100Filled'

      short_name='DirectionsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-78 639-281 522-164q-8.96 9-19.78 13.5-10.83 4.5-22.02 4.5-11.2 0-22.16-4.5Q447.07-155 438-164L164-438q-9-8.96-13.5-19.78-4.5-10.83-4.5-22.02 0-11.2 4.5-22.16Q155-512.93 164-522l137-137 233 232v41L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM360.04-387q5.96 0 9.96-4.02 4-4.03 4-9.98v-106h80l-28-28h-50q-12 0-21 9t-9 21v104q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM814-480.2q0 11.2-4.5 22.16Q805-447.07 796-438l-60 60q-9 9-21 9t-21-9l-96-97 25.13-25.28q8.87-8.93 8.87-20.82 0-11.9-9-20.9l-36-35q-6-6-13.5-2.63-7.5 3.38-7.5 11.63v33h-28L378-694q-9-9-9-21t9-21l60-60q8.96-9 19.78-13.5 10.83-4.5 22.02-4.5 11.2 0 22.16 4.5Q512.93-805 522-796l274 274q9 8.96 13.5 19.78 4.5 10.83 4.5 22.02Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffW100Filled.displayName = 'OnesyIconMaterialDirectionsOffW100Filled';

export default IconMaterialDirectionsOffW100Filled;
