import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsNightSightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsNightSightW100Filled'

      short_name='SettingsNightSight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M668-132q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm70-91q4-5 2-10t-7-6q-21-3-39-15t-29-32q-11-20-13-41t6-41q2-5-2-9.5t-9-3.5q-54 10-73 61t16 95q28 35 73.5 36t74.5-34Zm-298 91q-10 0-17.5-6.5T413-155l-11-89q-21-6-46.5-20T313-294l-81 35q-9 4-18.5.5T199-270l-42-72q-5-8-3-18t10-16l71-53q-2-12-3.5-24.5T230-479q0-13 1.5-26t3.5-26l-71-53q-8-6-9.5-16t3.5-19l41-69q5-8 14.5-11.5t18.5.5l80 34q20-17 42-30t47-21l12-89q2-10 9.5-16.5T440-828h80q10 0 17.5 6.5T547-805l11 90q24 8 45.5 20.5T644-665l85-34q9-4 18.5-.5T762-688l41 70q5 8 3 18t-10 16l-45 34q-5 4-11.5 5.5T727-545q-14-4-28-5.5t-28-1.5q-31 0-60.5 6.5T554-525q-12-20-32.5-31.5T478-568q-37 0-62.5 25.5T390-480q0 23 11 43t31 32q-11 32-17 65t-6 67q0 33 11 63.5t29 58.5q4 6 1 12.5t-10 6.5Z"/>
    </Icon>
  );
});

IconMaterialSettingsNightSightW100Filled.displayName = 'OnesyIconMaterialSettingsNightSightW100Filled';

export default IconMaterialSettingsNightSightW100Filled;
