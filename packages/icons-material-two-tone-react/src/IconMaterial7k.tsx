import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial7k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7k'

      short_name='7k'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M13,9h1.5v2.25L16.25,9H18l-2.25,3L18,15h-1.75l-1.75-2.25V15H13V9z M6.5,9H10 c0.67,0,1.15,0.65,0.96,1.29L9.5,15H7.75l1.38-4.5H6.5V9z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><path d="M7.75,15H9.5l1.46-4.71C11.15,9.65,10.67,9,10,9H6.5v1.5h2.63L7.75,15z"/><polygon points="14.5,12.75 16.25,15 18,15 15.75,12 18,9 16.25,9 14.5,11.25 14.5,9 13,9 13,15 14.5,15"/></g></g>
    </Icon>
  );
});

IconMaterial7k.displayName = 'OnesyIconMaterial7k';

export default IconMaterial7k;
