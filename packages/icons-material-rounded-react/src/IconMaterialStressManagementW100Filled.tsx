import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStressManagementW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StressManagementW100Filled'

      short_name='StressManagement'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-346q62 0 135.5-22T822-449q3-15 4.5-29.5T828-509q0-25-20-41t-44-8q-15 5-32.5 11.5T687-529q-68 28-113.5 38.5T480-480q-50 0-96-11t-117-40q-23-10-39.5-16T196-558q-24-8-44 7.5T132-509q0 16 1.5 31t3.5 29q110 53 195 78t148 25Zm0 162q118 0 209.5-64T813-414q-110 51-188 73.5T480-318q-67 0-151-24.5T145-415q30 106 119.5 168.5T480-184Zm0-376q-56 0-95-39t-39-95q0-56 39-95t95-39q56 0 95 39t39 95q0 56-39 95t-95 39Z"/>
    </Icon>
  );
});

IconMaterialStressManagementW100Filled.displayName = 'OnesyIconMaterialStressManagementW100Filled';

export default IconMaterialStressManagementW100Filled;
