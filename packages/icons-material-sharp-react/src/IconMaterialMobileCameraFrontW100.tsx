import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCameraFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCameraFrontW100'

      short_name='MobileCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m420-96-20-20 70-70H252v-28h218l-70-70 20-20 104 104L420-96ZM280-406q44-20 99-33t101-13q46 0 101 13t99 33v-394H280v394Zm280 220v-28h148v28H560Zm-79.88-336q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T546-616q0-27-19.5-46.5T480-682q-27 0-46.5 19.5T414-616q0 27 19.5 46.5T480-550Zm0 126Zm0-192ZM252-280v-548h456v190h36v134h-36v224h-28v-94q-37-21-94.5-35.5T480-424q-48 0-105.5 14.5T280-374v94h-28Z"/>
    </Icon>
  );
});

IconMaterialMobileCameraFrontW100.displayName = 'OnesyIconMaterialMobileCameraFrontW100';

export default IconMaterialMobileCameraFrontW100;
