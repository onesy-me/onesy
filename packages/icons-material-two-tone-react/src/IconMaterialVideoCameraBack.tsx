import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBack'

      short_name='VideoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,18h12V6H4V18z M7.38,12.83L9,15l2.62-3.5L15,16H5L7.38,12.83z" opacity=".3"/><polygon points="11.62,11.5 9,15 7.38,12.83 5,16 15,16"/><path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M16,18 H4V6h12V18z"/></g></g>
    </Icon>
  );
});

IconMaterialVideoCameraBack.displayName = 'OnesyIconMaterialVideoCameraBack';

export default IconMaterialVideoCameraBack;
