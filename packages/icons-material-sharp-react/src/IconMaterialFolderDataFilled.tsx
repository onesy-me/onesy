import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderDataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDataFilled'

      short_name='FolderData'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v80H600q-66 0-113 47t-47 113q0 31 10.5 58t29.5 48v148q-13 14-21.5 30.5T445-160H80ZM600-40q-33 0-56.5-23.5T520-120q0-23 11-41t29-29v-221q-18-11-29-28.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 23-11 40.5T640-411v115l160-53v-62q-18-11-29-28.5T760-480q0-33 23.5-56.5T840-560q33 0 56.5 23.5T920-480q0 23-11 40.5T880-411v119l-240 80v22q18 11 29 29t11 41q0 33-23.5 56.5T600-40Z"/>
    </Icon>
  );
});

IconMaterialFolderDataFilled.displayName = 'OnesyIconMaterialFolderDataFilled';

export default IconMaterialFolderDataFilled;
