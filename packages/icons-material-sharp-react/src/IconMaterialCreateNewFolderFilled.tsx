import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreateNewFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderFilled'

      short_name='CreateNewFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm480-160h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderFilled.displayName = 'OnesyIconMaterialCreateNewFolderFilled';

export default IconMaterialCreateNewFolderFilled;
