import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpRightFilled'

      short_name='TurnSharpRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-320h400v-248l-64 64-56-56 160-160 160 160-56 56-64-64v328H320v240h-80Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpRightFilled.displayName = 'OnesyIconMaterialTurnSharpRightFilled';

export default IconMaterialTurnSharpRightFilled;
