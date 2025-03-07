import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBar'

      short_name='TableBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><ellipse cx="12" cy="7.5" opacity=".3" rx="7.72" ry="1.5"/><path d="M22,7.5C22,5.57,17.52,4,12,4S2,5.57,2,7.5c0,1.81,3.95,3.31,9,3.48V15H9.35c-0.82,0-1.55,0.5-1.86,1.26L6,20h2l1.2-3h5.6 l1.2,3h2l-1.5-3.74C16.2,15.5,15.46,15,14.65,15H13v-4.02C18.05,10.81,22,9.31,22,7.5z M12,9C7.95,9,5.26,8.14,4.28,7.5 C5.26,6.86,7.95,6,12,6s6.74,0.86,7.72,1.5C18.74,8.14,16.05,9,12,9z"/></g></g>
    </Icon>
  );
});

IconMaterialTableBar.displayName = 'OnesyIconMaterialTableBar';

export default IconMaterialTableBar;
