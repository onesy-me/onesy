import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRoll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRoll'

      short_name='CameraRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-760h120v-80h240v80h120v80h320v600H560v80H80Zm80-80h320v-80h320v-440H480v-80H160v600Zm200-120h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80ZM320-460Z"/>
    </Icon>
  );
});

IconMaterialCameraRoll.displayName = 'OnesyIconMaterialCameraRoll';

export default IconMaterialCameraRoll;
