import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRampRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampRight'

      short_name='RampRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M11,21h2V6.83l1.59,1.59L16,7l-4-4L8,7l1.41,1.41L11,6.83V9c0,4.27-4.03,7.13-6,8.27l1.46,1.46 C8.37,17.56,9.9,16.19,11,14.7L11,21z"/></g>
    </Icon>
  );
});

IconMaterialRampRight.displayName = 'OnesyIconMaterialRampRight';

export default IconMaterialRampRight;
