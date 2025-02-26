import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotStartedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotStartedFilled'

      short_name='NotStarted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h80v-320h-80v320Zm160 0 240-160-240-160v320Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialNotStartedFilled.displayName = 'OnesyIconMaterialNotStartedFilled';

export default IconMaterialNotStartedFilled;
