import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesFold = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold'

      short_name='DevicesFold'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="15,3 12,4.29 12,17.97 15,16.68"/><path d="M20,3h-3c0-1.44-1.47-2.4-2.79-1.84l-3,1.29C10.48,2.76,10,3.49,10,4.29V19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M12,4.29L15,3v13.68l-3,1.29V4.29z M20,19h-5.33l1.12-0.48C16.52,18.2,17,17.48,17,16.68V5h3V19z"/><g><rect height="2" width="2" x="2" y="3"/></g><g><rect height="2" width="2" x="2" y="19"/></g><g><rect height="2" width="2" x="2" y="15"/></g><g><rect height="2" width="2" x="2" y="11"/></g><g><rect height="2" width="2" x="2" y="7"/></g><g><rect height="2" width="2" x="6" y="3"/></g><g><rect height="2" width="2" x="6" y="19"/></g></g></g>
    </Icon>
  );
});

IconMaterialDevicesFold.displayName = 'OnesyIconMaterialDevicesFold';

export default IconMaterialDevicesFold;
