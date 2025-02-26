import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontW100Filled'

      short_name='CameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-186v-28h218l-70-70 20-20 104 104L420-96l-20-20 70-70H252Zm308 0v-28h148v28H560Zm-308-94v-548h456v548H501l-81-81-81 81h-87Zm28-126q44-20 99-33t101-13q46 0 101 13t99 33v-394H280v394Zm200.12-116q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontW100Filled.displayName = 'OnesyIconMaterialCameraFrontW100Filled';

export default IconMaterialCameraFrontW100Filled;
