import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkAlertW100Filled'

      short_name='WorkAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-668h160v-48q0-14-9-23t-23-9h-96q-14 0-23 9t-9 23v48ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm-528-80q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v129q0 14-11 21t-24 2q-17-6-36-9t-37-3q-95 0-161.5 66.5T492-240v17q0 9 2 17 2 14-6 24t-21 10H192Zm528 22q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm0-72q6 0 10-4t4-10v-80q0-6-4-10t-10-4q-6 0-10 4t-4 10v80q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialWorkAlertW100Filled.displayName = 'OnesyIconMaterialWorkAlertW100Filled';

export default IconMaterialWorkAlertW100Filled;
