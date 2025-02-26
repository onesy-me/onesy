import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeftFilled'

      short_name='UTurnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120v-480q0-66-47-113t-113-47q-66 0-113 47t-47 113v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-100 70-170t170-70q100 0 170 70t70 170v480h-80Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeftFilled.displayName = 'OnesyIconMaterialUTurnLeftFilled';

export default IconMaterialUTurnLeftFilled;
