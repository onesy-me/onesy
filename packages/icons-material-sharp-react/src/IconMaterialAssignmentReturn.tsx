import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentReturn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturn'

      short_name='AssignmentReturn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-320 56-56-63-64h167v-80H473l63-64-56-56-160 160 160 160ZM120-120v-720h248q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h248v720H120Zm80-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturn.displayName = 'OnesyIconMaterialAssignmentReturn';

export default IconMaterialAssignmentReturn;
