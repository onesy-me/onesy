import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentAddW100'

      short_name='AssignmentAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h254q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h254v289q-8-2-14.5-3t-13.5-3v-255H200v560h254q1 8 2 14.5t3 13.5H172Zm28-67.65V-200v-560 255-3 268.35ZM306-318h157q2-7 5-13.5t6-14.5H306v28Zm0-148h269q16-9 29-15.5t28-11.5v-1H306v28Zm0-148h348v-28H306v28Zm174-166q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Zm-14-34h28v-100h100v-28H734v-100h-28v100H606v28h100v100Z"/>
    </Icon>
  );
});

IconMaterialAssignmentAddW100.displayName = 'OnesyIconMaterialAssignmentAddW100';

export default IconMaterialAssignmentAddW100;
