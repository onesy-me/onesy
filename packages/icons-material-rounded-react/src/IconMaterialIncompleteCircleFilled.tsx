import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIncompleteCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IncompleteCircleFilled'

      short_name='IncompleteCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31-156.5T196-764l284 284v-400q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialIncompleteCircleFilled.displayName = 'OnesyIconMaterialIncompleteCircleFilled';

export default IconMaterialIncompleteCircleFilled;
