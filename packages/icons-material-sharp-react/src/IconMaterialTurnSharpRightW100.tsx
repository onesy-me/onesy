import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpRightW100'

      short_name='TurnSharpRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-172v-262h400v-300l-90 90-20-20 124-124 124 124-20 20-90-90v328H294v234h-28Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpRightW100.displayName = 'OnesyIconMaterialTurnSharpRightW100';

export default IconMaterialTurnSharpRightW100;
