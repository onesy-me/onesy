import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertW100'

      short_name='SettingsAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-373q6 0 10-4t4-10q0-6-4-10t-10-4q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-67q6 0 10-4t4-10v-146q0-6-4-10t-10-4q-6 0-10 4t-4 10v146q0 6 4 10t10 4Zm-40 308q-10 0-17.5-6.5T413-155l-11-89q-21-6-46.5-20T313-294l-81 35q-9 4-18.5 1T199-270l-42-72q-5-9-3-18.5t10-15.5l71-53q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-71-53q-8-6-9.5-16t3.5-19l41-69q5-8 14.5-11.5t18.5.5l80 34q20-17 43.5-30.5T401-716l12-89q2-10 9.5-16.5T440-828h80q10 0 17.5 6.5T547-805l11 90q26 9 45.5 20.5T644-665l85-34q9-4 18.5-.5T762-688l41 70q5 9 3 18.5T796-584l-75 56q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l72 54q8 6 10.5 15.5T801-342l-41 71q-5 9-15 12t-19-1l-82-35q-21 18-42 30.5T558-245l-11 90q-2 10-9.5 16.5T520-132h-80Zm0-28h78l15-109q30-8 53.5-21.5T636-329l100 43 40-68-88-66q5-18 6.5-32t1.5-28q0-15-1.5-28t-6.5-30l90-68-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q24 24 49 38t57 22l13 108Zm40-320Z"/>
    </Icon>
  );
});

IconMaterialSettingsAlertW100.displayName = 'OnesyIconMaterialSettingsAlertW100';

export default IconMaterialSettingsAlertW100;
