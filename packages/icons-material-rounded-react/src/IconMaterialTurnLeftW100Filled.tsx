import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeftW100Filled'

      short_name='TurnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m226-546 80 80q4 4 4.5 9.5T306-446q-5 5-10 5t-10-5l-93-93q-9-9-9-21t9-21l93-93q4-4 9.5-4.5T306-674q5 5 5 10t-5 10l-80 80h369q25 0 42.5 17.5T655-514v288q0 6-4 10t-10 4q-6 0-10-4t-4-10v-288q0-14-9-23t-23-9H226Z"/>
    </Icon>
  );
});

IconMaterialTurnLeftW100Filled.displayName = 'OnesyIconMaterialTurnLeftW100Filled';

export default IconMaterialTurnLeftW100Filled;
