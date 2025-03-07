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
      <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v400H480Z"/>
    </Icon>
  );
});

IconMaterialLoupeFilled.displayName = 'OnesyIconMaterialLoupeFilled';

export default IconMaterialLoupeFilled;
