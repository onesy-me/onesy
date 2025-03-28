import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightModeW100'

      short_name='LightMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 28q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM200-466H66v-28h134v28Zm694 0H760v-28h134v28ZM466-760v-134h28v134h-28Zm0 694v-134h28v134h-28ZM274-668l-82-80 19-21 81 81-18 20Zm475 477-81-81 18-20 82 80-19 21Zm-81-495 80-82 21 19-81 81-20-18ZM191-211l81-81 18 18-79 83-20-20Zm289-269Z"/>
    </Icon>
  );
});

IconMaterialLightModeW100.displayName = 'OnesyIconMaterialLightModeW100';

export default IconMaterialLightModeW100;
