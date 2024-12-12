import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteW100'

      short_name='FolderDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm28-28h640v-400H447.82L368-720H160v480Zm0 0v-480 480Zm362-60h188v-232h30v-28h-90v-20h-68v20h-90v28h30v232Zm28-28v-204h132v204H550Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteW100.displayName = 'OnesyIconMaterialFolderDeleteW100';

export default IconMaterialFolderDeleteW100;
