import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorOfflineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOfflineW100Filled'

      short_name='DetectorOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-172-19-19 104-104-104-104 19-19 104 104 104-104 19 19-104 104 104 104-19 19-104-104-104 104Zm-82-480 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303Z"/>
    </Icon>
  );
});

IconMaterialDetectorOfflineW100Filled.displayName = 'OnesyIconMaterialDetectorOfflineW100Filled';

export default IconMaterialDetectorOfflineW100Filled;
