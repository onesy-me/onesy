import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChurch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Church'

      short_name='Church'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M16,10.04L12,8l-4,2.04v3.35l-4,1.81V20h5v-2.04c0-1.69,1.35-3.06,3-3.06c1.65,0,3,1.37,3,3.06V20h5v-4.79 l-4-1.81V10.04z M12,13.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,13.5,12,13.5z" opacity=".3"/><path d="M18,12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6,9v3.22L2,14v8h9v-4c0-0.55,0.45-1,1-1s1,0.45,1,1v4h9v-8L18,12.22z M20,20h-5v-2.04c0-1.69-1.35-3.06-3-3.06c-1.65,0-3,1.37-3,3.06V20H4v-4.79l4-1.81v-3.35L12,8l4,2.04v3.35l4,1.81V20z"/><circle cx="12" cy="12" r="1.5"/></g></g>
    </Icon>
  );
});

IconMaterialChurch.displayName = 'OnesyIconMaterialChurch';

export default IconMaterialChurch;
