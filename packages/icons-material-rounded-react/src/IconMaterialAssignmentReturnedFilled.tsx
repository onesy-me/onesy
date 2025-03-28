import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentReturnedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnedFilled'

      short_name='AssignmentReturned'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-474-36-35q-11-11-27.5-11T348-508q-11 11-11 28t11 28l104 104q12 12 28 12t28-12l104-104q11-11 11.5-27.5T612-508q-11-11-27.5-11.5T556-509l-36 35v-126q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v126ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnedFilled.displayName = 'OnesyIconMaterialAssignmentReturnedFilled';

export default IconMaterialAssignmentReturnedFilled;
