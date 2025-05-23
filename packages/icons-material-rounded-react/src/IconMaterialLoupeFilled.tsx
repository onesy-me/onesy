import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoupeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeFilled'

      short_name='Loupe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v120q0 17 11.5 28.5T480-280q17 0 28.5-11.5T520-320v-120h120q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H520v-120q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v120H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440h120Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v320q0 33-23.5 56.5T800-80H480Z"/>
    </Icon>
  );
});

IconMaterialLoupeFilled.displayName = 'OnesyIconMaterialLoupeFilled';

export default IconMaterialLoupeFilled;
