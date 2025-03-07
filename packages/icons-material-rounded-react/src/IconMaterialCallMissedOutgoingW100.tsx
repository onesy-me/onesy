import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMissedOutgoingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingW100'

      short_name='CallMissedOutgoing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-585 517-342q-9 9-20 13t-22 4q-11 0-22-4t-20-13L181-594q-4-4-4.5-9.5T181-614q5-5 10-5t10 5l251 251q9 9 23 9t23-9l242-242H534q-6 0-10-4t-4-10q0-6 4-10t10-4h224q13 0 21.5 8.5T788-603v224q0 6-4 10t-10 4q-6 0-10-4t-4-10v-206Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingW100.displayName = 'OnesyIconMaterialCallMissedOutgoingW100';

export default IconMaterialCallMissedOutgoingW100;
