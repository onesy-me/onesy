import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraOutdoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorW100Filled'

      short_name='CameraOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-402l268-202 268 202v54H416v320h332v28H212Zm264-88v-200h200v84l72-38v108l-72-38v84H476Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorW100Filled.displayName = 'OnesyIconMaterialCameraOutdoorW100Filled';

export default IconMaterialCameraOutdoorW100Filled;
