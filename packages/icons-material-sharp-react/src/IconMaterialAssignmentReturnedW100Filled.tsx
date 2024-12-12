import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentReturnedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnedW100Filled'

      short_name='AssignmentReturned'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-356 124-124-20-20-90 88v-192h-28v192l-90-88-20 20 124 124ZM172-172v-616h254q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h254v616H172Zm308-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnedW100Filled.displayName = 'OnesyIconMaterialAssignmentReturnedW100Filled';

export default IconMaterialAssignmentReturnedW100Filled;
