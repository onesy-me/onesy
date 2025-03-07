import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentLateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentLateW100Filled'

      short_name='AssignmentLate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-306q8.5 0 14.25-5.75T500-326q0-8.5-5.75-14.25T480-346q-8.5 0-14.25 5.75T460-326q0 8.5 5.75 14.25T480-306Zm-14-106h28v-244h-28v244ZM172-172v-616h254q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h254v616H172Zm308-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAssignmentLateW100Filled.displayName = 'OnesyIconMaterialAssignmentLateW100Filled';

export default IconMaterialAssignmentLateW100Filled;
