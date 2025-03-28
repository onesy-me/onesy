import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSim = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSim'

      short_name='NoSim'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M433-880h287q33 0 56.5 23.5T800-800v447q0 17-11.5 28.5T760-313q-17 0-28.5-11.5T720-353v-447H434l-52 52q-12 12-28 11.5T326-748q-12-12-12.5-28.5T325-805l52-52q11-11 25.5-17t30.5-6ZM240-80q-33 0-56.5-23.5T160-160v-447q0-16 6-30.5t17-25.5l1-1L56-792q-12-12-11.5-28T57-848q12-11 28-11.5t28 11.5l735 735q11 11 11 27.5T848-57q-12 12-28.5 12T791-57L240-608v448h480v-81l80 80v1q0 33-23.5 56.5T720-80H240Zm301-453Zm-75 152Z"/>
    </Icon>
  );
});

IconMaterialNoSim.displayName = 'OnesyIconMaterialNoSim';

export default IconMaterialNoSim;
