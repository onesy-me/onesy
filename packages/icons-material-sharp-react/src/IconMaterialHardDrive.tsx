import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardDrive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive'

      short_name='HardDrive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280h640v-240H160v240Zm520-60q25 0 42.5-17.5T740-400q0-25-17.5-42.5T680-460q-25 0-42.5 17.5T620-400q0 25 17.5 42.5T680-340Zm200-260H767l-80-80H273l-80 80H80l160-160h480l160 160ZM80-200v-400h800v400H80Z"/>
    </Icon>
  );
});

IconMaterialHardDrive.displayName = 'OnesyIconMaterialHardDrive';

export default IconMaterialHardDrive;
