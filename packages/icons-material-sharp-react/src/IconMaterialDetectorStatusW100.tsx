import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorStatusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorStatusW100'

      short_name='DetectorStatus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-170 333-275l20-19 85 85 169-170 20 20-189 189ZM200-760v80h560v-80H200Zm94 108 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303ZM200-760v80-80Z"/>
    </Icon>
  );
});

IconMaterialDetectorStatusW100.displayName = 'OnesyIconMaterialDetectorStatusW100';

export default IconMaterialDetectorStatusW100;
