import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubblesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubblesFilled'

      short_name='Bubbles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m402-654 118 117v-89h80v226H374v-80h90L346-598l56-56Zm358 494q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-680 0v-640h800v320h-80v-240H160v480h400v80H80Z"/>
    </Icon>
  );
});

IconMaterialBubblesFilled.displayName = 'OnesyIconMaterialBubblesFilled';

export default IconMaterialBubblesFilled;
