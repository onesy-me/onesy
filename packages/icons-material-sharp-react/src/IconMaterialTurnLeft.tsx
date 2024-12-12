import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeft'

      short_name='TurnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160v-360H272l64 64-56 56-160-160 160-160 56 56-64 64h408v440h-80Z"/>
    </Icon>
  );
});

IconMaterialTurnLeft.displayName = 'OnesyIconMaterialTurnLeft';

export default IconMaterialTurnLeft;
