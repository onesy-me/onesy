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
      <path d="M540-132v-256h96l32-32h64l32 32h96v256H540Zm160-64q26 0 45-19t19-45q0-26-19-45t-45-19q-26 0-45 19t-19 45q0 26 19 45t45 19Zm-284 64-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q0 2 .5 4t.5 4H556q-11-21-31.5-34.5T478-568q-37 0-62.5 25.5T390-480q0 27 13.5 48t36.5 32v268h-24Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraW100Filled.displayName = 'OnesyIconMaterialSettingsPhotoCameraW100Filled';

export default IconMaterialSettingsPhotoCameraW100Filled;
