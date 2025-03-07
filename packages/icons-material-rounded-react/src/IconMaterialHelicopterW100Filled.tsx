import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelicopterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelicopterW100Filled'

      short_name='Helicopter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M229-593q-33 36-51 81.5T160-416h224q14 0 23-9t9-23v-224q-60 0-107 21.5T229-593Zm-43 421q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h307q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm6-88q-24.75 0-42.37-17.63Q132-295.25 132-320v-96q0-112 76.5-198T416-700h96q24.75 0 42.38 17.62Q572-664.75 572-640v80h194l31-72q2-4 4.5-6t7.5-2h5.18q5.87 0 9.85 4.03Q828-631.95 828-626v159q0 23-15.37 40.34Q797.25-409.31 774-407l-202 21v66q0 24.75-17.62 42.37Q536.75-260 512-260H192Zm-6-500q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h547q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialHelicopterW100Filled.displayName = 'OnesyIconMaterialHelicopterW100Filled';

export default IconMaterialHelicopterW100Filled;
