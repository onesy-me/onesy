import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScheduleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleFilled'

      short_name='Schedule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialScheduleFilled.displayName = 'OnesyIconMaterialScheduleFilled';

export default IconMaterialScheduleFilled;
