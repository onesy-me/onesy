import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderInfoW100'

      short_name='FolderInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 223-29 286Zm281 28H132v-536h247l80 80h369v188q-7-5-13.5-9t-14.5-8v-143H448l-80.28-80H160v480h275q1 8 2.5 14.5T441-212Zm239-216q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Zm-14 244h28v-112h-28v112Zm14-152q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialFolderInfoW100.displayName = 'OnesyIconMaterialFolderInfoW100';

export default IconMaterialFolderInfoW100;
