import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorW100Filled'

      short_name='CameraIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-402l268-202 268 202v402H212Zm136-128h200v-84l72 38v-108l-72 38v-84H348v200Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorW100Filled.displayName = 'OnesyIconMaterialCameraIndoorW100Filled';

export default IconMaterialCameraIndoorW100Filled;
