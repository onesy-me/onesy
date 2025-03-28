import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZonePersonAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonAlertFilled'

      short_name='ZonePersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-200h80v120h120v80H80Zm272-160 40-204-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-640q21 0 39 11t29 29l40 64 8 12q4 6 9 11-49 32-81 82.5T483-320H352Zm188-340q-33 0-56.5-23.5T460-740q0-33 23.5-56.5T540-820q33 0 56.5 23.5T620-740q0 33-23.5 56.5T540-660ZM80-760v-200h200v80H160v120H80Zm720 0v-120H680v-80h200v200h-80ZM760-80q-83 0-141.5-58.5T560-280q0-83 58.5-141.5T760-480q83 0 141.5 58.5T960-280q0 83-58.5 141.5T760-80Zm-20-160h40v-160h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialZonePersonAlertFilled.displayName = 'OnesyIconMaterialZonePersonAlertFilled';

export default IconMaterialZonePersonAlertFilled;
