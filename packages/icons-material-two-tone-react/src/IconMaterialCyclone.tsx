import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCyclone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cyclone'

      short_name='Cyclone'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S15.31,6,12,6z M12,16c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C16,14.21,14.21,16,12,16z" opacity=".3"/><circle cx="12" cy="12" opacity=".3" r="2"/><path d="M12,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4C16,9.79,14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z"/><path d="M22,5.35C20.05,4.77,16.56,4,12,4C9.85,4,7.89,4.86,6.46,6.24C6.59,5.39,6.86,3.84,7.47,2H5.35C4.77,3.95,4,7.44,4,12 c0,2.15,0.86,4.11,2.24,5.54c-0.85-0.14-2.4-0.4-4.24-1.01v2.12C3.95,19.23,7.44,20,12,20c2.15,0,4.11-0.86,5.54-2.24 c-0.14,0.85-0.4,2.4-1.01,4.24h2.12C19.23,20.05,20,16.56,20,12c0-2.15-0.86-4.11-2.24-5.54c0.85,0.14,2.4,0.4,4.24,1.01V5.35z M18,12c0,3.31-2.69,6-6,6s-6-2.69-6-6s2.69-6,6-6S18,8.69,18,12z"/></g></g>
    </Icon>
  );
});

IconMaterialCyclone.displayName = 'OnesyIconMaterialCyclone';

export default IconMaterialCyclone;
