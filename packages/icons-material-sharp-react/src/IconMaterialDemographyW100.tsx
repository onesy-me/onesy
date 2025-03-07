import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDemographyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DemographyW100'

      short_name='Demography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-234q25 0 42.5-17.5T780-294q0-25-17.5-42.5T720-354q-25 0-42.5 17.5T660-294q0 25 17.5 42.5T720-234Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-167q17 25 43 39t56 14Zm-548-58v-616h616v289q-8-2-14.5-3t-13.5-3v-255H200v560h254q1 8 2 14.5t3 13.5H172Zm28-67.65V-200v-560 255-3 268.35ZM306-318h157q2-7 5-13.5t6-14.5H306v28Zm0-148h269q16-9 29-15.5t28-11.5v-1H306v28Zm0-148h348v-28H306v28ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Z"/>
    </Icon>
  );
});

IconMaterialDemographyW100.displayName = 'OnesyIconMaterialDemographyW100';

export default IconMaterialDemographyW100;
