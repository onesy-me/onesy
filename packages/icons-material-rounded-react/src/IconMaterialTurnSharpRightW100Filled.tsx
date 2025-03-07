import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpRightW100Filled'

      short_name='TurnSharpRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M273-172q-6 0-10-4t-4-10v-188q0-25 17.5-42.5T319-434h308q14 0 23-9t9-23v-268l-80 80q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l93-93q9-9 21-9t21 9l93 93q5 5 5 10t-5 10q-5 5-10.5 4.5T767-654l-80-80v268q0 25-17.5 42.5T627-406H319q-14 0-23 9t-9 23v188q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpRightW100Filled.displayName = 'OnesyIconMaterialTurnSharpRightW100Filled';

export default IconMaterialTurnSharpRightW100Filled;
