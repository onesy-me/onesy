import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPhotoCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCameraW100'

      short_name='SettingsPhotoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-132v-256h96l32-32h64l32 32h96v256H540Zm160-64q26 0 45-19t19-45q0-26-19-45t-45-19q-26 0-45 19t-19 45q0 26 19 45t45 19ZM480-480Zm-2-88q-37 0-62.5 25.5T390-480q0 27 13.5 48t36.5 32v-32q-10-8-16-21.5t-6-26.5q0-25 17.5-42.5T478-540q14 0 25.5 5.5T523-520h33q-11-22-31.5-35T478-568Zm-62 436-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q1 2 1 4t1 4h-31q-1-5-1.5-9t-2.5-9l90-68-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q24 24 54.5 39.5T440-265v133h-24Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraW100.displayName = 'OnesyIconMaterialSettingsPhotoCameraW100';

export default IconMaterialSettingsPhotoCameraW100;
