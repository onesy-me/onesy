import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffW100Filled'

      short_name='AlarmOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M708-353 379-682q-14-14-10-33t23-24q17-5 36-7t39-2q64 0 120 24t98 66q42 42 66 98t24 120q0 19-2 37.5t-7 37.5q-5 19-24.5 22.5T708-353Zm-11-427q-4-4-4.5-9.5T697-800q5-5 10-5t10 5l110 110q4 4 4.5 9.5T827-670q-5 5-10 5t-10-5L697-780ZM467-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-62 24-119t66-99l-67-67-55 55q-4 4-9.5 4.5T107-670q-5-5-5-10t5-10l55-55-55-55q-4-4-4.5-9.5T107-820q5-5 10-5t10 5l696 696q4 4 4.5 9.5T823-104q-5 5-10 5t-10-5L685-222q-40 40-96 65t-122 25Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffW100Filled.displayName = 'OnesyIconMaterialAlarmOffW100Filled';

export default IconMaterialAlarmOffW100Filled;
