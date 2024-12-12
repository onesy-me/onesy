import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSharedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedFilled'

      short_name='FolderShared'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm360-120h320v-22q0-45-44-71.5T600-400q-72 0-116 26.5T440-302v22Zm160-160q33 0 56.5-23.5T680-520q0-33-23.5-56.5T600-600q-33 0-56.5 23.5T520-520q0 33 23.5 56.5T600-440Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedFilled.displayName = 'OnesyIconMaterialFolderSharedFilled';

export default IconMaterialFolderSharedFilled;
