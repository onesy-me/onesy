import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3dRotationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dRotationFilled'

      short_name='3dRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480h80q0 115 72.5 203T418-166l-58-58 56-56L598-98q-29 10-58.5 14T480-80Zm20-280v-240h120l40 40v160l-40 40H500Zm-200 0v-60h100v-40h-60v-40h60v-40H300v-60h160v240H300Zm260-60h40v-120h-40v120Zm240-60q0-115-72.5-203T542-794l58 58-56 56-182-182q29-10 58.5-14t59.5-4q83 0 156 31.5T763-763q54 54 85.5 127T880-480h-80Z"/>
    </Icon>
  );
});

IconMaterial3dRotationFilled.displayName = 'OnesyIconMaterial3dRotationFilled';

export default IconMaterial3dRotationFilled;
