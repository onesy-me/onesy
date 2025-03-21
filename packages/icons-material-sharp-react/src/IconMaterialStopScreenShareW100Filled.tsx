import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopScreenShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100Filled'

      short_name='StopScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M856-64 720-200H80v-28h612l-40-40H132v-488h32L64-856l20-20L876-84l-20 20ZM404-517l-19-19q-9 9-17 25t-8 37v80h28v-80q0-14 4-24t12-19Zm394 241L557-517l35-37-58-58v44h-28L310-764h518v488h-30Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100Filled.displayName = 'OnesyIconMaterialStopScreenShareW100Filled';

export default IconMaterialStopScreenShareW100Filled;
