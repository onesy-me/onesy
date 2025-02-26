import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestHeatLinkE = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestHeatLinkE'

      short_name='NestHeatLinkE'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialNestHeatLinkE.displayName = 'OnesyIconMaterialNestHeatLinkE';

export default IconMaterialNestHeatLinkE;
