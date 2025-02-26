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
      <path d="M240-160v-400 400-15 15Zm120-480h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM160-80v-560h120v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h120v244q-11-2-21-3t-21-1q-10 0-19.5 1t-18.5 3v-164H240v400h324q5 23 14 43t23 37H160Zm600 0q-42 0-71-29t-29-71q0-20 7-36.5t19-30.5l74-83 74 83q12 14 19 30.5t7 36.5q0 42-29 71t-71 29ZM480-280q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWaterLock.displayName = 'OnesyIconMaterialWaterLock';

export default IconMaterialWaterLock;
