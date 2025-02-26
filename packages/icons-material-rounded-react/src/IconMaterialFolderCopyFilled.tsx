import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyFilled'

      short_name='FolderCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-480q0-17 11.5-28.5T80-720q17 0 28.5 11.5T120-680v480h640q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h167q16 0 30.5 6t25.5 17l57 57h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyFilled.displayName = 'OnesyIconMaterialFolderCopyFilled';

export default IconMaterialFolderCopyFilled;
