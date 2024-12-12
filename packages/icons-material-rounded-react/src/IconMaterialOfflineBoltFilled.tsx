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
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-24-340v137q0 16 15 19.5t23-10.5l121-237q5-10-1-19.5t-17-9.5h-87v-139q0-16-15-20t-23 10L346-449q-5 11 .5 20t16.5 9h93Z"/>
    </Icon>
  );
});

IconMaterialOfflineBoltFilled.displayName = 'OnesyIconMaterialOfflineBoltFilled';

export default IconMaterialOfflineBoltFilled;
