import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteFilled'

      short_name='FolderDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm420-120h80q25 0 42.5-17.5T720-340v-160h10q13 0 21.5-8.5T760-530q0-13-8.5-21.5T730-560h-70v-20q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v20h-70q-13 0-21.5 8.5T480-530q0 13 8.5 21.5T510-500h10v160q0 25 17.5 42.5T580-280Zm0-220h80v160h-80v-160Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteFilled.displayName = 'OnesyIconMaterialFolderDeleteFilled';

export default IconMaterialFolderDeleteFilled;
