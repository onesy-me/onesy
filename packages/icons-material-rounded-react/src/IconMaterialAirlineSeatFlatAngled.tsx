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
      <path d="m376-489 55-150q11-31 41-45t61-3l263 96q63 23 91 82.5t5 122.5l-27 75q-6 16-21 23t-31 1L400-437q-16-6-23-21t-1-31Zm130-122q-8 20-14.5 37.5T478-536l-13 37 41-112Zm266 437L95-420q-16-5-22.5-20T71-471q5-16 20.5-23t31.5-1l677 246q16 5 22.5 20t1.5 31q-5 16-20.5 23t-31.5 1ZM253-498q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T293-618q0-17-11.5-28.5T253-658q-17 0-28.5 11.5T213-618q0 17 11.5 28.5T253-578Zm212 79 338 124 14-38q11-32-2.5-62T769-516l-263-95-41 112ZM253-617Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngled.displayName = 'OnesyIconMaterialAirlineSeatFlatAngled';

export default IconMaterialAirlineSeatFlatAngled;
