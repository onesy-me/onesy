import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryW100Filled'

      short_name='WorkHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m786-154 20-20-72-71.61V-354h-28v120l80 80ZM400-668h160v-80H400v80ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm-588-80v-496h240v-108h216v108h240v227q-25-14-52.5-20.5T720-468q-95 0-161.5 66.5T492-240q0 17.18 2.5 34.09Q497-189 502-172H132Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryW100Filled.displayName = 'OnesyIconMaterialWorkHistoryW100Filled';

export default IconMaterialWorkHistoryW100Filled;
