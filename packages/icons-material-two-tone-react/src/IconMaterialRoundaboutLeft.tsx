import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeft'

      short_name='RoundaboutLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M10.08,8c0.48-2.84,2.94-5,5.92-5c3.31,0,6,2.69,6,6c0,2.97-2.16,5.44-5,5.92L17,21h-2l0-6.09c0-0.98,0.71-1.8,1.67-1.97 C18.56,12.63,20,10.98,20,9c0-2.21-1.79-4-4-4c-1.98,0-3.63,1.44-3.94,3.33C11.89,9.29,11.07,10,10.09,10l-4.26,0l1.59,1.59L6,13 L2,9l4-4l1.41,1.41L5.83,8L10.08,8z"/></g>
    </Icon>
  );
});

IconMaterialRoundaboutLeft.displayName = 'OnesyIconMaterialRoundaboutLeft';

export default IconMaterialRoundaboutLeft;
