import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyW100Filled'

      short_name='FolderCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-184q-24.75 0-42.37-17.63Q92-219.25 92-244v-406q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v406q0 14 9 23t23 9h582q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H152Zm108-108q-24.75 0-42.37-17.63Q200-327.25 200-352v-416q0-24.75 17.63-42.38Q235.25-828 260-828h173q12.44 0 23.72 5T476-810l62 62h270q24.75 0 42.38 17.62Q868-712.75 868-688v336q0 24.75-17.62 42.37Q832.75-292 808-292H260Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyW100Filled.displayName = 'OnesyIconMaterialFolderCopyW100Filled';

export default IconMaterialFolderCopyW100Filled;
