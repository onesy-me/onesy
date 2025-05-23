import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRightW100Filled'

      short_name='TurnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-226v-288q0-25 17.5-42.5T365-574h369l-80-80q-4-4-4.5-9.5T654-674q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T654-446q-5-5-5-10t5-10l80-80H365q-14 0-23 9t-9 23v288q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialTurnRightW100Filled.displayName = 'OnesyIconMaterialTurnRightW100Filled';

export default IconMaterialTurnRightW100Filled;
