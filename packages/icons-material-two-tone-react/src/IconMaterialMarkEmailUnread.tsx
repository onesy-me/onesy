import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnread'

      short_name='MarkEmailUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" x="0"/><path d="M4,6h10.1c0.22,1.07,0.79,2,1.57,2.71L12,11L4,6z M4,8v10h16V9.9c-0.32,0.07-0.66,0.1-1,0.1 c-0.6,0-1.16-0.12-1.7-0.32L12,13L4,8z" opacity=".3"/><path d="M20,9.9c0.74-0.15,1.42-0.48,2-0.92V18c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10.1 C14.04,4.32,14,4.66,14,5s0.04,0.68,0.1,1H4l8,5l3.67-2.29c0.47,0.43,1.02,0.76,1.63,0.98L12,13L4,8v10h16V9.9z M16,5 c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S16,3.34,16,5z"/></g>
    </Icon>
  );
});

IconMaterialMarkEmailUnread.displayName = 'OnesyIconMaterialMarkEmailUnread';

export default IconMaterialMarkEmailUnread;
