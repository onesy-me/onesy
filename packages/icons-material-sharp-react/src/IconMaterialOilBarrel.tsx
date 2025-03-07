import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOilBarrel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrel'

      short_name='OilBarrel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v-240h-80v-80h80v-240h-80v-80h720v80h-80v240h80v80h-80v240h80v80H120Zm160-80h400v-240h-40v-80h40v-240H280v240h40v80h-40v240Zm200-120q50 0 85-34.5t35-83.5q0-39-22.5-67T480-620q-75 86-97.5 114.5T360-438q0 49 35 83.5t85 34.5ZM280-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialOilBarrel.displayName = 'OnesyIconMaterialOilBarrel';

export default IconMaterialOilBarrel;
