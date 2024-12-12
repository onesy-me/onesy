import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSharedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedW100Filled'

      short_name='FolderShared'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm284-104h248v-2q0-32-32.5-49T600-384q-59 0-91.5 17T476-318v2Zm124-140q23 0 38.5-15.5T654-510q0-23-15.5-38.5T600-564q-23 0-38.5 15.5T546-510q0 23 15.5 38.5T600-456Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedW100Filled.displayName = 'OnesyIconMaterialFolderSharedW100Filled';

export default IconMaterialFolderSharedW100Filled;
