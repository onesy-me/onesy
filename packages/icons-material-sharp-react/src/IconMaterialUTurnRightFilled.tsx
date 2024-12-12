import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnRightFilled'

      short_name='UTurnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z"/>
    </Icon>
  );
});

IconMaterialUTurnRightFilled.displayName = 'OnesyIconMaterialUTurnRightFilled';

export default IconMaterialUTurnRightFilled;
