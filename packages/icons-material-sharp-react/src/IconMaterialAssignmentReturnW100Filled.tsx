import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentReturnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnW100Filled'

      short_name='AssignmentReturn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-356 20-20-90-90h194v-28H410l90-90-20-20-124 124 124 124ZM172-172v-616h254q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h254v616H172Zm308-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnW100Filled.displayName = 'OnesyIconMaterialAssignmentReturnW100Filled';

export default IconMaterialAssignmentReturnW100Filled;
