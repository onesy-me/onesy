import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveGroupW100Filled'

      short_name='MoveGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-292q-26 0-43-17t-17-43v-40q0-6 4-10t10-4q6 0 10 4t4 10v40q0 12 10 22t22 10h416q12 0 22-10t10-22v-368H294v72q0 6-4 10t-10 4q-6 0-10-4t-4-10v-120q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm361-322H280q-6 0-10-4t-4-10q0-6 4-10t10-4h299l-99-101q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l112 113q9 9 9 21t-9 21L499-386q-4 4-9.5 3.5T480-387q-4-4-4-9t4-9l99-101Z"/>
    </Icon>
  );
});

IconMaterialMoveGroupW100Filled.displayName = 'OnesyIconMaterialMoveGroupW100Filled';

export default IconMaterialMoveGroupW100Filled;
