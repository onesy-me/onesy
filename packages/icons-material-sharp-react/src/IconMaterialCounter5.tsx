import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter5'

      short_name='Counter5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h240v-240H440v-80h160v-80H360v240h160v80H360v80Z"/>
    </Icon>
  );
});

IconMaterialCounter5.displayName = 'OnesyIconMaterialCounter5';

export default IconMaterialCounter5;
