import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraW100Filled'

      short_name='Camera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m447-596 126-219q78 20 142 80t93 139H447Zm-86 91L235-727q50-49 113-75t132-26q16 0 36.5 2t29.5 4L361-505ZM143-394q-6-26-8.5-46.5T132-480q0-61 21-118t62-108l178 312H143Zm249 251q-84-22-150-83t-91-141h368L392-143Zm88 11q-15 0-33-2t-28-4l184-311 123 215q-49 49-113 75.5T480-132Zm265-122L567-568h250q5 23 8 45.5t3 42.5q0 63-20.5 119T745-254Z"/>
    </Icon>
  );
});

IconMaterialCameraW100Filled.displayName = 'OnesyIconMaterialCameraW100Filled';

export default IconMaterialCameraW100Filled;
