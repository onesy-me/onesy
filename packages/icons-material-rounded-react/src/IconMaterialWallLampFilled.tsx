import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallLampFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLampFilled'

      short_name='WallLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160v-160q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v160q0 17-11.5 28.5T160-120Zm120-80q-17 0-28.5-11.5T240-240q0-17 11.5-28.5T280-280h160q17 0 28.5-11.5T480-320v-120H280q-20 0-32-15.5t-6-35.5l96-320q4-13 14-21t24-8h288q14 0 24 8t14 21l96 320q6 20-6 35.5T760-440H560v120q0 50-35 85t-85 35H280Z"/>
    </Icon>
  );
});

IconMaterialWallLampFilled.displayName = 'OnesyIconMaterialWallLampFilled';

export default IconMaterialWallLampFilled;
