import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentTurnedIn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedIn'

      short_name='AssignmentTurnedIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-318 282-282-56-56-226 226-114-114-56 56 170 170ZM120-120v-720h248q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h248v720H120Zm80-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedIn.displayName = 'OnesyIconMaterialAssignmentTurnedIn';

export default IconMaterialAssignmentTurnedIn;
