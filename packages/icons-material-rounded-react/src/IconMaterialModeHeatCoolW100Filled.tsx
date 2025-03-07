import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatCoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatCoolW100Filled'

      short_name='ModeHeatCool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M421-619q15 0 29-5t26-13q5-4 11.5-3.5T499-635q13 12 23 25.5t18 29.5q5 10 2.5 21T532-540L425-433l-44-44q-9-9-21-9t-21 9l-46 46q-17 17-24 39t-2 46q2 12-9 18.5t-22-1.5q-11-8-21-19t-18-22q-18-25-28-55t-10-62q0-88 41-136t100-105q6-6 13.5-2.5T321-719q0 42 29 71t71 29Zm-61 161 46 45-78 78q-5 5-11 5t-11-5q-5-5-9-12t-4-18q0-14 5.5-25.5T313-411l47-47Zm162 80-83 83v220q0 6-4 10t-10 4q-6 0-10-4t-4-10v-192L216-71q-4 5-9.5 5T196-71q-5-5-5-10t5-10l633-633q4-4 9.5-4.5T849-724q5 5 5 10t-5 10L653-508h192q6 0 10 4t4 10q0 6-4 10t-10 4H624l-82 82 83 83h220q6 0 10 4t4 10q0 6-4 10t-10 4H653l143 143q4 4 4.5 9.5T796-124q-5 5-10 5t-10-5L633-267v192q0 6-4 10t-10 4q-6 0-10-4t-4-10v-220l-83-83Z"/>
    </Icon>
  );
});

IconMaterialModeHeatCoolW100Filled.displayName = 'OnesyIconMaterialModeHeatCoolW100Filled';

export default IconMaterialModeHeatCoolW100Filled;
