import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSync = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sync'

      short_name='Sync'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M.01 0h24v24h-24V0z" fill="none"/><path d="M12.01 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46c.78-1.23 1.24-2.69 1.24-4.26 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.25 7.74C4.47 8.97 4.01 10.43 4.01 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
    </Icon>
  );
});

IconMaterialSync.displayName = 'OnesyIconMaterialSync';

export default IconMaterialSync;
