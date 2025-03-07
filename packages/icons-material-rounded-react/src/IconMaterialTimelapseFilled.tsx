import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimelapseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelapseFilled'

      short_name='Timelapse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q100 0 170-70t70-170q0-87-55.5-153T524-716q-18-2-31 10t-13 30v196L342-342q-13 13-12 31t15 29q29 23 64 32.5t71 9.5Zm0 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimelapseFilled.displayName = 'OnesyIconMaterialTimelapseFilled';

export default IconMaterialTimelapseFilled;
