import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraOutdoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoor'

      short_name='CameraOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M18,13c0-0.55-0.45-1-1-1h-4c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-1l2,1.06v-4.12L18,14V13z M12,3 L4,9v12h16v-2H6v-9l6-4.5l6,4.5v1h2V9L12,3z"/></g>
    </Icon>
  );
});

IconMaterialCameraOutdoor.displayName = 'OnesyIconMaterialCameraOutdoor';

export default IconMaterialCameraOutdoor;
