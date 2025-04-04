import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeft'

      short_name='SwipeLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7S12,7.22,12,7.5v6.18h1.76L18,15.56L17.08,21 z" opacity=".3"/><path d="M18.89,13.77l-3.8-1.67C14.96,12.04,14.81,12,14.65,12H14V7.5C14,6.12,12.88,5,11.5,5S9,6.12,9,7.5v8.15l-1.87-0.4 c-0.19-0.03-1.02-0.15-1.73,0.56L4,17.22l5.12,5.19C9.49,22.79,10,23,10.53,23h6.55c0.98,0,1.81-0.7,1.97-1.67l0.92-5.44 C20.12,15.03,19.68,14.17,18.89,13.77z M17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7S12,7.22,12,7.5v6.18h1.76 L18,15.56L17.08,21z M4.09,5.5H7V7H2V2h1.5v2.02C5.82,2.13,8.78,1,12,1c5.49,0,9.27,3.12,10,6h-1.57C19.67,5.02,16.74,2.5,12,2.5 C8.97,2.5,6.21,3.64,4.09,5.5z"/></g>
    </Icon>
  );
});

IconMaterialSwipeLeft.displayName = 'OnesyIconMaterialSwipeLeft';

export default IconMaterialSwipeLeft;
