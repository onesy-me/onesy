import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockW100'

      short_name='ShiftLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-342v-110h-82.51Q271-452 262-468.5t2-31.5l192-264q9.36-13 24.18-13T504-764l192 264q11 15 2 31.5T670.51-452H588v110q0 12.75-8.62 21.37Q570.75-312 558-312H402q-12.75 0-21.37-8.63Q372-329.25 372-342Zm28 2h160v-140h111L480-749 289-480h111v140Zm80-205ZM226-184q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Z"/>
    </Icon>
  );
});

IconMaterialShiftLockW100.displayName = 'OnesyIconMaterialShiftLockW100';

export default IconMaterialShiftLockW100;
