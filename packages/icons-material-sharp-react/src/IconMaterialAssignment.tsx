import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Assignment'

      short_name='Assignment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h248q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h248v720H120Zm80-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAssignment.displayName = 'OnesyIconMaterialAssignment';

export default IconMaterialAssignment;
