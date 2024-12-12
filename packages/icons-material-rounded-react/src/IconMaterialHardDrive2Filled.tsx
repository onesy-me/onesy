import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardDrive2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive2Filled'

      short_name='HardDrive2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-200q17 0 28.5-11.5T600-240q0-17-11.5-28.5T560-280q-17 0-28.5 11.5T520-240q0 17 11.5 28.5T560-200Zm120 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-440v-360q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v360H120Zm80 360q-33 0-56.5-23.5T120-160v-200h720v200q0 33-23.5 56.5T760-80H200Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2Filled.displayName = 'OnesyIconMaterialHardDrive2Filled';

export default IconMaterialHardDrive2Filled;
