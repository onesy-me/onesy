import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraswitchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraswitchW100Filled'

      short_name='Cameraswitch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-332v-296h88l40-40h120l40 40h88v296H292Zm188-98q21 0 35.5-14.5T530-480q0-21-14.5-35.5T480-530q-21 0-35.5 14.5T430-480q0 21 14.5 35.5T480-430Zm-66-474q16-3 32-3.5t32-.5q83 0 157.5 29.5T768-797q58 52 95 123t45 154h-28q-8-77-42.5-143T749-777q-54-48-123.5-75.5T478-880l82 82-20 20-126-126ZM546-56q-16 3-32 3.5t-32 .5q-83 0-157.5-29.5T192-163q-58-52-95-123T52-440h28q8 77 42.5 143T211-183q54 48 123.5 75.5T482-80l-82-82 20-20L546-56Z"/>
    </Icon>
  );
});

IconMaterialCameraswitchW100Filled.displayName = 'OnesyIconMaterialCameraswitchW100Filled';

export default IconMaterialCameraswitchW100Filled;
