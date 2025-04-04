import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeft'

      short_name='TurnSharpLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M6,6.83L4.41,8.41L3,7l4-4l4,4L9.59,8.41L8,6.83V13h8c1.1,0,2,0.9,2,2v6h-2v-6H8c-1.1,0-2-0.9-2-2V6.83z"/></g>
    </Icon>
  );
});

IconMaterialTurnSharpLeft.displayName = 'OnesyIconMaterialTurnSharpLeft';

export default IconMaterialTurnSharpLeft;
