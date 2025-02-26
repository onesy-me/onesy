import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentInd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentInd'

      short_name='AssignmentInd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h248q14-36 44-58t68-22q38 0 68 22t44 58h248v720H120Zm360-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM280-200h400v-10q-42-35-93-52.5T480-280q-56 0-107 17.5T280-210v10Zm200-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z"/>
    </Icon>
  );
});

IconMaterialAssignmentInd.displayName = 'OnesyIconMaterialAssignmentInd';

export default IconMaterialAssignmentInd;
