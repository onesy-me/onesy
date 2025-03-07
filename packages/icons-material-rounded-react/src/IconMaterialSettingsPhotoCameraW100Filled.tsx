import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPhotoCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCameraW100Filled'

      short_name='SettingsPhotoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-132q-20 0-34-14t-14-34v-160q0-20 14-34t34-14h48l23.06-23.06Q664-416 669.22-418q5.21-2 10.78-2h40q5.57 0 10.78 2 5.22 2 10.16 6.94L764-388h48q20 0 34 14t14 34v160q0 20-14 34t-34 14H588Zm112-64q26.4 0 45.2-18.8Q764-233.6 764-260q0-26.4-18.8-45.2Q726.4-324 700-324q-26.4 0-45.2 18.8Q636-286.4 636-260q0 26.4 18.8 45.2Q673.6-196 700-196Zm-273 64q-5.29 0-9.33-3.95-4.05-3.95-4.67-10.05l-11-98q-21-6-46.5-20T313-294l-81 35q-9 4-18.5 1T199-270l-42-72q-5-9-2.82-18.42 2.18-9.42 9.82-15.58l71-53q-2-12-3.5-25t-1.5-24.5q0-11.5 1.5-24T235-531l-71-53q-8-6-9.5-16t3.5-19l41-69q5.25-8.41 14.63-11.71Q223-703 232-699l80 34q20-17 43.5-30.5T401-716l12-89q2-10 9.16-16.5 7.17-6.5 16.84-6.5h81q10.07 0 17.54 6.5Q545-815 547-805l11 90q26 9 45.5 20.5T644-665l85-34q9-4 18.42-.71 9.41 3.3 14.58 11.71l41 70q5 9 2.94 18.42-2.06 9.42-9.94 15.58l-75 56q2 5 2.5 9t1.5 9q2 12-7 21t-22 9l-131-1q0-36.04-25.9-61.52Q513.2-568 477-568q-36 0-61.5 25.5T390-481q0 26 13.5 47.5T440-401v254q0 6.18-4 10.59t-9 4.41Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraW100Filled.displayName = 'OnesyIconMaterialSettingsPhotoCameraW100Filled';

export default IconMaterialSettingsPhotoCameraW100Filled;
