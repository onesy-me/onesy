import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentAddW100Filled'

      short_name='AssignmentAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-780q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Zm-14-34h28v-100h100v-28H734v-100h-28v100H606v28h100v100ZM306-614h348v-28H306v28Zm153 442H172v-616h254q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h254v289q-17-4-34-6.5t-34-2.5q-23 0-45 4t-43 11v-1H306v28h269q-34 22-59.5 52.5T474-346H306v28h157q-5 19-8 38.5t-3 39.5q0 14 1 34t6 34Z"/>
    </Icon>
  );
});

IconMaterialAssignmentAddW100Filled.displayName = 'OnesyIconMaterialAssignmentAddW100Filled';

export default IconMaterialAssignmentAddW100Filled;
