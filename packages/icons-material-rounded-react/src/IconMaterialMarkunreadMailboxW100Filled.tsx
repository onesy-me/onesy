import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkunreadMailboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxW100Filled'

      short_name='MarkunreadMailbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h80v-210q0-12.75 8.71-21.38 8.71-8.62 21.59-8.62h181.82q12.88 0 21.38 8.62 8.5 8.63 8.5 21.38v80q0 12.75-8.62 21.37Q496.75-688 484-688H300v238q0 21.25 14.32 35.62Q328.65-400 349.82-400q21.18 0 35.68-14.38Q400-428.75 400-450v-138h368q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxW100Filled.displayName = 'OnesyIconMaterialMarkunreadMailboxW100Filled';

export default IconMaterialMarkunreadMailboxW100Filled;
