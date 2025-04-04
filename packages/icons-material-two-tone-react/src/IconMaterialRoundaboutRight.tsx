import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRight'

      short_name='RoundaboutRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M13.92,8C13.44,5.16,10.97,3,8,3C4.69,3,2,5.69,2,9c0,2.97,2.16,5.44,5,5.92L7,21h2l0-6.09c0-0.98-0.71-1.8-1.67-1.97 C5.44,12.63,4,10.98,4,9c0-2.21,1.79-4,4-4c1.98,0,3.63,1.44,3.94,3.33C12.11,9.29,12.93,10,13.91,10l4.26,0l-1.59,1.59L18,13l4-4 l-4-4l-1.41,1.41L18.17,8L13.92,8z"/></g>
    </Icon>
  );
});

IconMaterialRoundaboutRight.displayName = 'OnesyIconMaterialRoundaboutRight';

export default IconMaterialRoundaboutRight;
