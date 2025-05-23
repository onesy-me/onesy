import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadForOfflineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadForOfflineW100Filled'

      short_name='DownloadForOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-306h320q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm146-184-80-80q-4-4-9.5-4.5t-10.72 4.72Q361-565 361-560q0 5 5 10l93 93q9 9 21 9t21-9l93-93q4-4 4.5-9.5t-4.72-10.72Q589-575 584-575q-5 0-10 5l-80 80v-190q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v190Zm14.17 358q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialDownloadForOfflineW100Filled.displayName = 'OnesyIconMaterialDownloadForOfflineW100Filled';

export default IconMaterialDownloadForOfflineW100Filled;
