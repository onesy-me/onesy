import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentTurnedInW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInW100'

      short_name='AssignmentTurnedIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m422-352 248-248-20-20-228 228-114-114-20 20 134 134ZM172-172v-616h254q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h254v616H172Zm28-28h560v-560H200v560Zm280-580q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInW100.displayName = 'OnesyIconMaterialAssignmentTurnedInW100';

export default IconMaterialAssignmentTurnedInW100;
