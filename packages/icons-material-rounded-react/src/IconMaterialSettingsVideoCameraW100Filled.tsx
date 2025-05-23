import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsVideoCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVideoCameraW100Filled'

      short_name='SettingsVideoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M427-132q-5 0-9-4t-5-10l-11-98q-21-6-46.5-20T313-294l-81 35q-9 4-18.5 1T199-270l-42-72q-5-9-3-18.5t10-15.5l71-53q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-71-53q-8-6-9.5-16t3.5-19l41-69q5-8 14.5-11.5t18.5.5l80 34q20-17 43.5-30.5T401-716l12-89q2-10 9-16.5t17-6.5h81q10 0 17.5 6.5T547-805l11 90q26 9 45.5 20.5T644-665l85-34q9-4 18.5-.5T762-688l41 70q5 9 3 18.5T796-584l-75 56q2 5 2.5 9t1.5 9q2 12-7 21t-22 9l-131-1q0-36-26-61.5T477-568q-36 0-61.5 25.5T390-481q0 26 13.5 47.5T440-401v254q0 6-4 10.5t-9 4.5Zm330 0H571q-13 0-22-9t-9-22v-186q0-13 9-22t22-9h186q13 0 22 9t9 22v62l49-49q4-4 8.5-2t4.5 7v150q0 5-4.5 7t-8.5-2l-49-49v62q0 13-9 22t-22 9Z"/>
    </Icon>
  );
});

IconMaterialSettingsVideoCameraW100Filled.displayName = 'OnesyIconMaterialSettingsVideoCameraW100Filled';

export default IconMaterialSettingsVideoCameraW100Filled;
