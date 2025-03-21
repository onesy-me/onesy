import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraIndoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoor'

      short_name='CameraIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,10v9h12v-9l-6-4.5L6,10z M14,12v1l2-1.06v4.12L14,15v1c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-4 c0-0.55,0.45-1,1-1h4C13.55,11,14,11.45,14,12z" opacity=".3"/><path d="M8,12v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-1l2,1.06v-4.12L14,13v-1c0-0.55-0.45-1-1-1H9C8.45,11,8,11.45,8,12z"/><path d="M12,3L4,9v12h16V9L12,3z M18,19H6v-9l6-4.5l6,4.5V19z"/></g></g>
    </Icon>
  );
});

IconMaterialCameraIndoor.displayName = 'OnesyIconMaterialCameraIndoor';

export default IconMaterialCameraIndoor;
