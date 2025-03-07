import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontW100'

      short_name='CameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-186v-28h218l-70-70 20-20 104 104L420-96l-20-20 70-70H252Zm0-94v-548h456v548h-28v-94q-37-21-94.5-35.5T480-424q-48 0-105.5 14.5T280-374v94h-28Zm28-126q44-20 99-33t101-13q46 0 101 13t99 33v-394H280v394Zm280 220v-28h148v28H560Zm-79.88-336q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T546-616q0-27-19.5-46.5T480-682q-27 0-46.5 19.5T414-616q0 27 19.5 46.5T480-550Zm0 126Zm0-192Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontW100.displayName = 'OnesyIconMaterialCameraFrontW100';

export default IconMaterialCameraFrontW100;
