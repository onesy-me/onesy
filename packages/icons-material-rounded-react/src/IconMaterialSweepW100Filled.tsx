import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSweepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SweepW100Filled'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-266q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H440Zm-198-50 356-356q4-4 9.5-4.5T618-672q5 5 5 10t-5 10L263-297q-9 9-21 9t-21-9L62-456q-4-4-4.5-9.5T62-476q5-5 10-5t10 5l160 160Zm358-110q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H600Zm160-160q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H760Z"/>
    </Icon>
  );
});

IconMaterialSweepW100Filled.displayName = 'OnesyIconMaterialSweepW100Filled';

export default IconMaterialSweepW100Filled;
