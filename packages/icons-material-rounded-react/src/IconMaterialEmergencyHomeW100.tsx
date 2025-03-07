import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeW100'

      short_name='EmergencyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-144q-11 0-21.96-4.7-10.97-4.69-20.04-13.3L162-438q-8.61-9.07-13.3-20.04Q144-469 144-480t4.5-22q4.5-11 13.5-20l276-276q9.07-9.39 20.04-13.7Q469-816 480-816t22 4.5q11 4.5 20 13.5l276 276q9 9 13.5 19.76Q816-491.48 816-480q0 11-4.3 21.96-4.31 10.97-13.7 20.04L522-162q-9 9-19.76 13.5Q491.48-144 480-144Zm23-38 275-275q8-8 8-23t-8-23L503-778q-8-8-23-8t-23 8L182-503q-8 8-8 23t8 23l275 275q8 8 23 8t23-8Zm-22.96-249q5.96 0 9.96-4.02 4-4.03 4-9.98v-172q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v172q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm-.04 80q8.5 0 14.25-5.75T500-371q0-8.5-5.75-14.25T480-391q-8.5 0-14.25 5.75T460-371q0 8.5 5.75 14.25T480-351Zm0-129Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeW100.displayName = 'OnesyIconMaterialEmergencyHomeW100';

export default IconMaterialEmergencyHomeW100;
