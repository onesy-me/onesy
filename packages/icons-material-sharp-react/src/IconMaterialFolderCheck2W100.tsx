import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCheck2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCheck2W100'

      short_name='FolderCheck2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 245-29 264Zm-28 28v-536h247l80 80h369v210q-7-5-13.5-9t-14.5-8v-165H448l-80-80H160v480h277q1 7 1 14t2 14H132Zm524 34 132-132-20-20-112 112-56-56-20 20 76 76Zm28-226q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Z"/>
    </Icon>
  );
});

IconMaterialFolderCheck2W100.displayName = 'OnesyIconMaterialFolderCheck2W100';

export default IconMaterialFolderCheck2W100;
