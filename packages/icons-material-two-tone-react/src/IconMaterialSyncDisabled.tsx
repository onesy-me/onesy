import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabled'

      short_name='SyncDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16zM20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5C19.63 14.74 20 13.41 20 12zM4.27 4L2.86 5.41l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41L4.27 4z"/>
    </Icon>
  );
});

IconMaterialSyncDisabled.displayName = 'OnesyIconMaterialSyncDisabled';

export default IconMaterialSyncDisabled;
