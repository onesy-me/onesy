import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcoming = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upcoming'

      short_name='Upcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,17c-2.04,0-3.81-1.24-4.58-3H4v5h16v-5h-3.42C15.81,15.76,14.04,17,12,17z" opacity=".3"/><path d="M21.16,7.26l-1.41-1.41L16.19,9.4l1.41,1.41C17.6,10.81,21.05,7.29,21.16,7.26z"/><rect height="5" width="2" x="11" y="3"/><path d="M20,12h-5c0,1.66-1.34,3-3,3s-3-1.34-3-3H4c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-5 C22,12.9,21.1,12,20,12z M20,19H4v-5h3.42c0.77,1.76,2.54,3,4.58,3s3.81-1.24,4.58-3H20V19z"/><path d="M6.4,10.81L7.81,9.4L4.26,5.84L2.84,7.26C2.95,7.29,6.4,10.81,6.4,10.81z"/></g></g>
    </Icon>
  );
});

IconMaterialUpcoming.displayName = 'OnesyIconMaterialUpcoming';

export default IconMaterialUpcoming;
