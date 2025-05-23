import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapCallsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapCallsW100Filled'

      short_name='SwapCalls'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-306v-315q0-53 36.5-89.5T368-747q53 0 89.5 36.5T494-621v243q0 41 28.5 69.5T592-280q41 0 69.5-28.5T690-378v-315l-80 80q-4 4-9.5 4.5T590-613q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T818-613q-5 5-10 5t-10-5l-80-80v315q0 53-36.5 89.5T592-252q-53 0-89.5-36.5T466-378v-243q0-41-28.5-69.5T368-719q-41 0-69.5 28.5T270-621v315l80-80q4-4 9.5-4.5T370-386q5 5 5 10t-5 10l-93 93q-5 5-10 7t-11 2q-6 0-11-2t-10-7l-93-93q-4-4-4.5-9.5T142-386q5-5 10-5t10 5l80 80Z"/>
    </Icon>
  );
});

IconMaterialSwapCallsW100Filled.displayName = 'OnesyIconMaterialSwapCallsW100Filled';

export default IconMaterialSwapCallsW100Filled;
