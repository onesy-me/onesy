import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSupervisedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervisedW100'

      short_name='FolderSupervised'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 179-19 320Zm-28 28v-536h247l80 80h369v140q-7-4-13.5-7t-14.5-6v-99H448l-80-80H160v480h298q2 8 4 14.5t5 13.5H132Zm448 0v-2q0-32 32-49t92-17q60 0 92 17t32 49v2H580Zm124-140q-23 0-38.5-15.5T650-406q0-23 15.5-38.5T704-460q23 0 38.5 15.5T758-406q0 23-15.5 38.5T704-352Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedW100.displayName = 'OnesyIconMaterialFolderSupervisedW100';

export default IconMaterialFolderSupervisedW100;
