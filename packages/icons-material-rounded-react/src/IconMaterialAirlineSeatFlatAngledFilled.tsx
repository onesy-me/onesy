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
      <path d="m376-489 55-150q11-31 41-45t61-3l263 96q63 23 91 82.5t5 122.5l-27 75q-6 16-21 23t-31 1L400-437q-16-6-23-21t-1-31Zm395 315L94-420q-16-5-22.5-20T70-471q5-16 20.5-23t31.5-1l677 246q16 5 22.5 20t1.5 31q-5 16-20.5 23t-31.5 1ZM253-498q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledFilled.displayName = 'OnesyIconMaterialAirlineSeatFlatAngledFilled';

export default IconMaterialAirlineSeatFlatAngledFilled;
