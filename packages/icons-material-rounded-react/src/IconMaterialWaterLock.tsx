import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLock'

      short_name='WaterLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160v-400 400-15 15Zm120-480h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v120q0 20-12.5 30T760-400q-15 0-27.5-10T720-440v-120H240v400h300q20 0 30 12.5t10 27.5q0 15-10 27.5T540-80H240Zm520 0q-42 0-71-29t-29-71q0-20 7-36.5t19-30.5l52-58q9-10 22-10t22 10l52 58q12 14 19 30.5t7 36.5q0 42-29 71t-71 29ZM480-280q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWaterLock.displayName = 'OnesyIconMaterialWaterLock';

export default IconMaterialWaterLock;
