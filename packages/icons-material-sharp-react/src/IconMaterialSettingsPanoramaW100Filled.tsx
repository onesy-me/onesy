import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPanoramaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPanoramaW100Filled'

      short_name='SettingsPanorama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-133q-15 4-27.5-5.5T540-164v-170q0-16 13-25t28-5q29 8 59 11t60 3q30 0 60.5-3.5T820-365q15-5 27.5 5t12.5 26v170q0 16-12.5 26t-27.5 5q-29-8-59.5-11.5T700-148q-30 0-60.5 3.5T580-133Zm-164 1-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5v14H565q1-4 1-7v-7q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 26 13.5 47.5T440-400v268h-24Z"/>
    </Icon>
  );
});

IconMaterialSettingsPanoramaW100Filled.displayName = 'OnesyIconMaterialSettingsPanoramaW100Filled';

export default IconMaterialSettingsPanoramaW100Filled;
