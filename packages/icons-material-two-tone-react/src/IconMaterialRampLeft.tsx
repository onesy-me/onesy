import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRampLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeft'

      short_name='RampLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M13,21h-2V6.83L9.41,8.41L8,7l4-4l4,4l-1.41,1.41L13,6.83V9c0,4.27,4.03,7.13,6,8.27l-1.46,1.46 c-1.91-1.16-3.44-2.53-4.54-4.02L13,21z"/></g>
    </Icon>
  );
});

IconMaterialRampLeft.displayName = 'OnesyIconMaterialRampLeft';

export default IconMaterialRampLeft;
