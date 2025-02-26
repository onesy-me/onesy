import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelFilled'

      short_name='Cancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialCancelFilled.displayName = 'OnesyIconMaterialCancelFilled';

export default IconMaterialCancelFilled;
