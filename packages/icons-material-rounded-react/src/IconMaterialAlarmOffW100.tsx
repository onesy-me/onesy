import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffW100'

      short_name='AlarmOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M738-324q-6-2-8.5-6.5t-.5-9.5q9-21 13.5-46t4.5-54q0-117-81.5-198.5T467-720q-28 0-52.5 4.5T368-702q-5 2-9.5-.5T352-711q-2-6 1.5-11.5t9.5-7.5q25-9 51-13.5t53-4.5q64 0 120 24t98 66q42 42 66 98t24 120q0 30-4.5 56.5T756-333q-2 5-7.5 8t-10.5 1Zm-41-456q-4-4-4.5-9.5T697-800q5-5 10-5t10 5l110 110q4 4 4.5 9.5T827-670q-5 5-10 5t-10-5L697-780ZM467-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-62 24-119t66-99l-67-67-55 55q-4 4-9.5 4.5T107-670q-5-5-5-10t5-10l55-55-55-55q-4-4-4.5-9.5T107-820q5-5 10-5t10 5l696 696q4 4 4.5 9.5T823-104q-5 5-10 5t-10-5L685-222q-40 40-96 65t-122 25Zm0-28q57 0 107.5-21t90.5-61L269-638q-40 40-61 91t-21 107q0 117 81.5 198.5T467-160Zm0-280Zm78-77Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffW100.displayName = 'OnesyIconMaterialAlarmOffW100';

export default IconMaterialAlarmOffW100;
