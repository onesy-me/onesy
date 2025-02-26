import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenW100Filled'

      short_name='FolderOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h360v28H160v398l89-298h658l-98 328H132Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenW100Filled.displayName = 'OnesyIconMaterialFolderOpenW100Filled';

export default IconMaterialFolderOpenW100Filled;
