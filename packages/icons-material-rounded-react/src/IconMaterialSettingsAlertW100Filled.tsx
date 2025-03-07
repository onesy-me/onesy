import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertW100Filled'

      short_name='SettingsAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-373q6 0 10-4t4-10q0-6-4-10t-10-4q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-67q6 0 10-4t4-10v-146q0-6-4-10t-10-4q-6 0-10 4t-4 10v146q0 6 4 10t10 4Zm-40 308q-10 0-17.5-6.5T413-155l-11-89q-21-6-46.5-20T313-294l-81 35q-9 4-18.5 1T199-270l-42-72q-5-9-3-18.5t10-15.5l71-53q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-71-53q-8-6-9.5-16t3.5-19l41-69q5-8 14.5-11.5t18.5.5l80 34q20-17 43.5-30.5T401-716l12-89q2-10 9.5-16.5T440-828h80q10 0 17.5 6.5T547-805l11 90q26 9 45.5 20.5T644-665l85-34q9-4 18.5-.5T762-688l41 70q5 9 3 18.5T796-584l-75 56q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l72 54q8 6 10.5 15.5T801-342l-41 71q-5 9-15 12t-19-1l-82-35q-21 18-42 30.5T558-245l-11 90q-2 10-9.5 16.5T520-132h-80Z"/>
    </Icon>
  );
});

IconMaterialSettingsAlertW100Filled.displayName = 'OnesyIconMaterialSettingsAlertW100Filled';

export default IconMaterialSettingsAlertW100Filled;
