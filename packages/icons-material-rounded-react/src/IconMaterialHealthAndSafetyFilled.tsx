import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthAndSafetyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetyFilled'

      short_name='HealthAndSafety'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-440v60q0 17 11.5 28.5T460-340h40q17 0 28.5-11.5T540-380v-60h60q17 0 28.5-11.5T640-480v-40q0-17-11.5-28.5T600-560h-60v-60q0-17-11.5-28.5T500-660h-40q-17 0-28.5 11.5T420-620v60h-60q-17 0-28.5 11.5T320-520v40q0 17 11.5 28.5T360-440h60Zm60 356q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetyFilled.displayName = 'OnesyIconMaterialHealthAndSafetyFilled';

export default IconMaterialHealthAndSafetyFilled;
