import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial8k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8k'

      short_name='8k'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1.5" opacity=".3" width="1.5" x="8" y="10"/><rect height="1.5" opacity=".3" width="1.5" x="8" y="12.5"/><path d="M5,19h14V5H5V19z M13,9h1.5v2.25L16.25,9H18l-2.25,3L18,15h-1.75l-1.75-2.25V15H13V9z M6.5,10 c0-0.55,0.45-1,1-1H10c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H7.5c-0.55,0-1-0.45-1-1V10z" opacity=".3"/><path d="M7.5,15H10c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H7.5c-0.55,0-1,0.45-1,1v4C6.5,14.55,6.95,15,7.5,15z M8,10h1.5v1.5H8 V10z M8,12.5h1.5V14H8V12.5z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><polygon points="14.5,12.75 16.25,15 18,15 15.75,12 18,9 16.25,9 14.5,11.25 14.5,9 13,9 13,15 14.5,15"/></g></g>
    </Icon>
  );
});

IconMaterial8k.displayName = 'OnesyIconMaterial8k';

export default IconMaterial8k;
