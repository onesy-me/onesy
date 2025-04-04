import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryProfile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfile'

      short_name='BatteryProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160Zm-40 80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v160q0 17-11.5 28.5T640-560q-17 0-28.5-11.5T600-600v-120H360v560h60q17 0 28.5 11.5T460-120q0 17-11.5 28.5T420-80H320Zm336 0q-8 0-12.5-4.5T637-96l-9-44q-12-5-22.5-11T585-165l-42 15q-7 2-13.5-.5T519-159l-24-41q-4-6-2.5-13t6.5-12l33-29q-2-15-2-25.5t2-25.5l-33-29q-5-5-6.5-12t2.5-13l24-41q4-6 10.5-8.5t13.5-.5l42 15q10-8 20.5-14.5T628-420l9-44q2-7 6.5-11.5T656-480h48q8 0 12.5 4.5T723-464l9 44q12 5 22.5 11t20.5 14l42-15q7-2 13.5.5T841-401l24 41q4 6 2.5 13t-6.5 12l-33 29q2 15 2 25.5t-2 25.5l33 29q5 5 6.5 12t-2.5 13l-24 41q-4 6-10 8.5t-13 .5l-43-14q-10 8-20.5 14T732-140l-9 44q-2 7-6.5 11.5T704-80h-48Zm24-120q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfile.displayName = 'OnesyIconMaterialBatteryProfile';

export default IconMaterialBatteryProfile;
