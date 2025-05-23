import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAltOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffW100Filled'

      short_name='DirectionsAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M638-281 521-164q-9 9-20 13.5t-22 4.5q-11 0-22-4.5T437-164L163-438q-9-9-13.5-20t-4.5-22q0-11 4.5-22t13.5-20l117-117L99-820q-4-4-4.5-9.5T99-840q5-5 10-5t10 5L861-98q4 4 4.5 9.5T861-78q-5 5-10 5t-10-5L638-281Zm-97-97-20-20-52 52q-4 4-4.5 9.5T469-326q5 5 10 5t10-5l52-52Zm-88-88-28-28h-96q-6 0-10 4t-4 10q0 6 4 10t10 4h124Zm159 7 9-9q5-5 5-11t-5-11L478-633q-4-4-9.5-4.5T458-633q-5 5-5 10t5 10l-81-81q-9-9-9-21t9-21l60-60q9-9 20-13.5t22-4.5q11 0 22 4.5t20 13.5l274 274q9 9 13.5 20t4.5 22q0 11-4.5 22T795-438l-60 60q-9 9-21 9t-21-9l-81-81Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffW100Filled.displayName = 'OnesyIconMaterialDirectionsAltOffW100Filled';

export default IconMaterialDirectionsAltOffW100Filled;
