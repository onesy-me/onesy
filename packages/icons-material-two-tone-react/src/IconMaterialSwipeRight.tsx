import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRight'

      short_name='SwipeRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7S12,7.22,12,7.5v6.18h1.76L18,15.56L17.08,21 z" opacity=".3"/><path d="M18.89,13.77l-3.8-1.67C14.96,12.04,14.81,12,14.65,12H14V7.5C14,6.12,12.88,5,11.5,5S9,6.12,9,7.5v8.15l-1.87-0.4 c-0.19-0.03-1.02-0.15-1.73,0.56L4,17.22l5.12,5.19C9.49,22.79,10,23,10.53,23h6.55c0.98,0,1.81-0.7,1.97-1.67l0.92-5.44 C20.12,15.03,19.68,14.17,18.89,13.77z M17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7S12,7.22,12,7.5v6.18h1.76 L18,15.56L17.08,21z M12,2.5C7.26,2.5,4.33,5.02,3.57,7H2c0.73-2.88,4.51-6,10-6c3.22,0,6.18,1.13,8.5,3.02V2H22v5h-5V5.5h2.91 C17.79,3.64,15.03,2.5,12,2.5z"/></g>
    </Icon>
  );
});

IconMaterialSwipeRight.displayName = 'OnesyIconMaterialSwipeRight';

export default IconMaterialSwipeRight;
