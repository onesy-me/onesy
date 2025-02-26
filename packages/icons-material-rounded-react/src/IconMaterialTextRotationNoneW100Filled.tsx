import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationNoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNoneW100Filled'

      short_name='TextRotationNone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M750-226H200q-6 0-10-4t-4-10q0-6 4-10t10-4h550l-58-58q-4-4-4.5-9.5T692-332q5-5 10-5t10 5l71 71q9 9 9 21t-9 21l-71 71q-4 4-9.5 4.5T692-148q-5-5-5-10t5-10l58-58ZM385-532l-39 105q-2 4-5 6.5t-8 2.5q-8 0-11.5-6t-1.5-13l144-377q2-4 5-6t7-2h10q4 0 7 2.5t5 6.5l140 376q2 7-1.5 13t-11.5 6q-5 0-8-2t-5-7l-39-105H385Zm10-26h168l-80-220h-4l-84 220Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNoneW100Filled.displayName = 'OnesyIconMaterialTextRotationNoneW100Filled';

export default IconMaterialTextRotationNoneW100Filled;
