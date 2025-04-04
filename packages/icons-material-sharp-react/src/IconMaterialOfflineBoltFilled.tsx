import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflineBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineBoltFilled'

      short_name='OfflineBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m456-200 174-340H510v-220L330-420h126v220Zm24 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialOfflineBoltFilled.displayName = 'OnesyIconMaterialOfflineBoltFilled';

export default IconMaterialOfflineBoltFilled;
