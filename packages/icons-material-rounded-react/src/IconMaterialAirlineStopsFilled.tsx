import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineStopsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsFilled'

      short_name='AirlineStops'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280q-14-127-102.5-214.5T124-597q-18-2-31-14t-13-29q0-17 12-28.5t29-9.5q117 11 212.5 77T480-428q38-81 100-143.5T719-680H600q-17 0-28.5-11.5T560-720q0-17 11.5-28.5T600-760h200q17 0 28.5 11.5T840-720v200q0 17-11.5 28.5T800-480q-17 0-28.5-11.5T760-520v-92q-93 57-160 141t-80 191h40q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H400q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h40Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsFilled.displayName = 'OnesyIconMaterialAirlineStopsFilled';

export default IconMaterialAirlineStopsFilled;
