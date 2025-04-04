import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoAccounts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAccounts'

      short_name='NoAccounts'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M12,6c-0.52,0-1,0.12-1.44,0.32l4.62,4.62c0.2-0.44,0.32-0.92,0.32-1.44C15.5,7.57,13.93,6,12,6z M12,2C6.48,2,2,6.48,2,12 s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M4,12c0-1.85,0.63-3.55,1.69-4.9l2.86,2.86c0.21,1.56,1.43,2.79,2.99,2.99l2.2,2.2 C13.17,15.05,12.59,15,12,15c-2.32,0-4.45,0.8-6.14,2.12C4.7,15.73,4,13.95,4,12z M12,20c-1.74,0-3.34-0.56-4.65-1.5 C8.66,17.56,10.26,17,12,17s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20z M18.31,16.9L7.1,5.69C8.45,4.63,10.15,4,12,4 c4.42,0,8,3.58,8,8C20,13.85,19.37,15.54,18.31,16.9z"/><path d="M7.35,18.5C8.66,19.44,10.26,20,12,20s3.34-0.56,4.65-1.5 C15.34,17.56,13.74,17,12,17S8.66,17.56,7.35,18.5z M15.18,10.94l-4.62-4.62C11,6.12,11.48,6,12,6c1.93,0,3.5,1.57,3.5,3.5 C15.5,10.02,15.38,10.5,15.18,10.94z" enableBackground="new" opacity=".3"/></g>
    </Icon>
  );
});

IconMaterialNoAccounts.displayName = 'OnesyIconMaterialNoAccounts';

export default IconMaterialNoAccounts;
