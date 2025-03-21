import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeOffW100Filled'

      short_name='VolumeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-104 638-224q-14 9-29 16t-31 13v-30q11-4 21-8.5t19-10.5L458-404v118L332-412H202v-136h112L118-744l20-20 640 640-20 20Zm-38-191-19-19q27-35 42-77.5t15-89.5q0-86-49.5-156T578-737v-30q93 33 150.5 111T786-481q0 52-17.5 99.5T720-295ZM616-399l-38-38v-169q30 22 45 55.5t15 70.5q0 22-5.5 42.5T616-399ZM458-557l-58-59 58-58v117Z"/>
    </Icon>
  );
});

IconMaterialVolumeOffW100Filled.displayName = 'OnesyIconMaterialVolumeOffW100Filled';

export default IconMaterialVolumeOffW100Filled;
