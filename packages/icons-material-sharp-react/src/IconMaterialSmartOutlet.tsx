import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartOutlet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartOutlet'

      short_name='SmartOutlet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h80v-160h-80v160Zm160 160h80v-40q0-18-11-29t-29-11q-18 0-29 11t-11 29v40Zm160-160h80v-160h-80v160ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialSmartOutlet.displayName = 'OnesyIconMaterialSmartOutlet';

export default IconMaterialSmartOutlet;
