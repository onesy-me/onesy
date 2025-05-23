import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocation'

      short_name='EditLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M14.11,14h-0.83H10H8v-2V8.74V7.91l0.59-0.59L11.91,4C8.61,4.05,6,6.6,6,10.2c0,2.34,1.95,5.44,6,9.14 c4.05-3.7,6-6.79,6-9.14c0-0.03,0-0.06,0-0.08l-3.3,3.3L14.11,14z" opacity=".3"/><path d="M18.17,4.91L17.1,3.84l-5.55,5.55v1.08h1.08L18.17,4.91z M16,2.74l1.29-1.29c0.58-0.59,1.52-0.59,2.11-0.01 c0,0,0.01,0.01,0.01,0.01l1.15,1.15c0.59,0.59,0.59,1.54,0,2.12L19.88,5.4l-0.02,0.02L19.28,6l-6,6H10V8.74L16,2.74z M13.72,2.19 l-0.55,0.55L11.9,4.01C8.6,4.06,6,6.61,6,10.21c0,2.34,1.95,5.44,6,9.14c4.05-3.7,6-6.79,6-9.14v-0.1l1.8-1.8 c0.13,0.6,0.2,1.24,0.2,1.9c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8c0-4.98,3.8-8.2,8-8.2 C12.58,2.01,13.16,2.07,13.72,2.19z"/><polygon opacity=".3" points="18.17,4.91 17.1,3.84 11.55,9.39 11.55,10.47 12.63,10.47"/>
    </Icon>
  );
});

IconMaterialEditLocation.displayName = 'OnesyIconMaterialEditLocation';

export default IconMaterialEditLocation;
