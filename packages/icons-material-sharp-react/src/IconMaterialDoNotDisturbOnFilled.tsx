import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOnFilled'

      short_name='DoNotDisturbOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOnFilled.displayName = 'OnesyIconMaterialDoNotDisturbOnFilled';

export default IconMaterialDoNotDisturbOnFilled;
