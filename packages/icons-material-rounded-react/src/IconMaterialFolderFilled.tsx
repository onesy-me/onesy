import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderFilled'

      short_name='Folder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialFolderFilled.displayName = 'OnesyIconMaterialFolderFilled';

export default IconMaterialFolderFilled;
