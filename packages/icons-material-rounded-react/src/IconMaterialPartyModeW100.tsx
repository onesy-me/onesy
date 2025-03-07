import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartyModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeW100'

      short_name='PartyMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H640l-74-80H394l-74 80H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm288-240Zm0 140q59 0 99.5-43T620-446q0-6-4-10t-10-4q-6 0-10 4t-4 10q0 48-32 83t-80 35h-36q-9 0-11 8.5t6 12.5q10 4 20 5.5t21 1.5ZM354-420q6 0 10-4t4-10q0-48 32-83t80-35h36q9 0 11-8.5t-6-12.5q-10-4-20-5.5t-21-1.5q-59 0-99.5 43T340-434q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialPartyModeW100.displayName = 'OnesyIconMaterialPartyModeW100';

export default IconMaterialPartyModeW100;
