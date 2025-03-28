import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncLock'

      short_name='SyncLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M10,4.26v2.09C7.67,7.18,6,9.39,6,12c0,1.77,0.78,3.34,2,4.44V14h2v6H4v-2h2.73C5.06,16.54,4,14.4,4,12 C4,8.27,6.55,5.15,10,4.26z M20,4h-6v6h2V7.56c1.22,1.1,2,2.67,2,4.44h2c0-2.4-1.06-4.54-2.73-6H20V4z M20,17v-1c0-1.1-0.9-2-2-2 s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3C21,17.45,20.55,17,20,17z M19,17h-2v-1 c0-0.55,0.45-1,1-1s1,0.45,1,1V17z"/></g>
    </Icon>
  );
});

IconMaterialSyncLock.displayName = 'OnesyIconMaterialSyncLock';

export default IconMaterialSyncLock;
