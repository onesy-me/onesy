import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlatAngled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngled'

      short_name='AirlineSeatFlatAngled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M851-273 362-451l96-263 489 178-96 263ZM506-611l-41 112 41-112Zm304 451L58-434l27-75 752 274-27 75ZM253-498q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T293-618q0-17-11.5-28.5T253-658q-17 0-28.5 11.5T213-618q0 17 11.5 28.5T253-578Zm212 79 338 124 42-114-339-122-41 112ZM253-617Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngled.displayName = 'OnesyIconMaterialAirlineSeatFlatAngled';

export default IconMaterialAirlineSeatFlatAngled;
