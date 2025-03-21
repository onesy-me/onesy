import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthAndSafetyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetyW100Filled'

      short_name='HealthAndSafety'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-466v85q0 6 4.5 10.5T461-366h38q7 0 11-4.5t4-10.5v-85h85q7 0 11-4.5t4-10.5v-38q0-7-4-11t-11-4h-85v-85q0-7-4-11t-11-4h-38q-6 0-10.5 4t-4.5 11v85h-85q-6 0-10.5 4t-4.5 11v38q0 6 4.5 10.5T361-466h85Zm34 327q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetyW100Filled.displayName = 'OnesyIconMaterialHealthAndSafetyW100Filled';

export default IconMaterialHealthAndSafetyW100Filled;
