import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardDriveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDriveFilled'

      short_name='HardDrive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-320q25 0 42.5-17.5T740-380q0-25-17.5-42.5T680-440q-25 0-42.5 17.5T620-380q0 25 17.5 42.5T680-320Zm200-280H80l160-160h480l160 160ZM80-200v-320h800v320H80Z"/>
    </Icon>
  );
});

IconMaterialHardDriveFilled.displayName = 'OnesyIconMaterialHardDriveFilled';

export default IconMaterialHardDriveFilled;
