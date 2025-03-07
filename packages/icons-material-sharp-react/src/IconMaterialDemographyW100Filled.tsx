import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDemographyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DemographyW100Filled'

      short_name='Demography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-234q25 0 42.5-17.5T780-294q0-25-17.5-42.5T720-354q-25 0-42.5 17.5T660-294q0 25 17.5 42.5T720-234Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-167q17 25 43 39t56 14Zm0 28q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86ZM306-614h348v-28H306v28Zm153 442H172v-616h616v289q-17-4-34-6.5t-34-2.5q-23 0-45 4t-43 11v-1H306v28h269q-34 22-59.5 52.5T474-346H306v28h157q-5 19-8 38.5t-3 39.5q0 14 1 34t6 34Z"/>
    </Icon>
  );
});

IconMaterialDemographyW100Filled.displayName = 'OnesyIconMaterialDemographyW100Filled';

export default IconMaterialDemographyW100Filled;
