import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkHistoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryW100'

      short_name='WorkHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-440 440Zm-28 28v-496h240v-108h216v108h240v227q-7-4-13.5-7t-14.5-6v-186H160v440h335q2 7 3.43 14.12 1.43 7.12 3.57 13.88H132Zm268-496h160v-80H400v80ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm14-153.61V-354h-28v120l80 80 20-20-72-71.61Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryW100.displayName = 'OnesyIconMaterialWorkHistoryW100';

export default IconMaterialWorkHistoryW100;
