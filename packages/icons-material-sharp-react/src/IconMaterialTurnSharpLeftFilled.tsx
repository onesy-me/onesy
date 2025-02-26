import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeftFilled'

      short_name='TurnSharpLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120v-240H240v-328l-64 64-56-56 160-160 160 160-56 56-64-64v248h400v320h-80Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeftFilled.displayName = 'OnesyIconMaterialTurnSharpLeftFilled';

export default IconMaterialTurnSharpLeftFilled;
