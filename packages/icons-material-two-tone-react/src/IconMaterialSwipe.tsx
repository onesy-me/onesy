import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Swipe'

      short_name='Swipe'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M20.13,3.87C18.69,2.17,15.6,1,12,1S5.31,2.17,3.87,3.87L2,2v5h5L4.93,4.93c1-1.29,3.7-2.43,7.07-2.43 s6.07,1.14,7.07,2.43L17,7h5V2L20.13,3.87z"/></g></g><g><path d="M12,13.68V7.5C12,7.22,11.78,7,11.5,7S11,7.22,11,7.5v10.61l-4.17-0.89 l3.7,3.78h6.55L18,15.56l-4.24-1.89H12z" enableBackground="new" opacity=".3"/><path d="M18.89,13.77l-3.8-1.67C14.96,12.04,14.81,12,14.65,12H14V7.63c0-1.32-0.96-2.5-2.27-2.62C10.25,4.88,9,6.05,9,7.5v8.15 l-1.87-0.4c-0.19-0.03-1.02-0.15-1.73,0.56L4,17.22l5.12,5.19C9.49,22.79,10,23,10.53,23h6.55c0.98,0,1.81-0.7,1.97-1.67 l0.92-5.44C20.12,15.03,19.68,14.17,18.89,13.77z M17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7S12,7.22,12,7.5 v6.18h1.76L18,15.56L17.08,21z"/></g></g>
    </Icon>
  );
});

IconMaterialSwipe.displayName = 'OnesyIconMaterialSwipe';

export default IconMaterialSwipe;
