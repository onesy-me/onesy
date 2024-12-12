import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlatAngledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngledFilled'

      short_name='AirlineSeatFlatAngled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M850-273 361-451l96-263 489 178-96 263Zm-41 113L57-434l27-75 752 274-27 75ZM253-498q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledFilled.displayName = 'OnesyIconMaterialAirlineSeatFlatAngledFilled';

export default IconMaterialAirlineSeatFlatAngledFilled;
