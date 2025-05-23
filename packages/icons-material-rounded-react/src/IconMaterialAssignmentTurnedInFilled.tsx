import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentTurnedInFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInFilled'

      short_name='AssignmentTurnedIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-430-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-430ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInFilled.displayName = 'OnesyIconMaterialAssignmentTurnedInFilled';

export default IconMaterialAssignmentTurnedInFilled;
