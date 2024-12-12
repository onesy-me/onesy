import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorOfflineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOfflineW100'

      short_name='DetectorOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-172-19-19 104-104-104-104 19-19 104 104 104-104 19 19-104 104 104 104-19 19-104-104-104 104ZM200-760v80h560v-80H200Zm94 108 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303ZM200-760v80-80Z"/>
    </Icon>
  );
});

IconMaterialDetectorOfflineW100.displayName = 'OnesyIconMaterialDetectorOfflineW100';

export default IconMaterialDetectorOfflineW100;
