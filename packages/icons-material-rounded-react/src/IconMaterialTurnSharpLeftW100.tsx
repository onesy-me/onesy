import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeftW100'

      short_name='TurnSharpLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M666-186v-188q0-14-9-23t-23-9H326q-25 0-42.5-17.5T266-466v-268l-80 80q-4 4-9.5 4.5T166-654q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T394-654q-5 5-10 5t-10-5l-80-80v268q0 14 9 23t23 9h308q25 0 42.5 17.5T694-374v188q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeftW100.displayName = 'OnesyIconMaterialTurnSharpLeftW100';

export default IconMaterialTurnSharpLeftW100;
