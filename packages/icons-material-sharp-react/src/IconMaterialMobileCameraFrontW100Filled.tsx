import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCameraFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCameraFrontW100Filled'

      short_name='MobileCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m420-96-20-20 70-70H252v-28h218l-70-70 20-20 104 104L420-96Zm140-90v-28h148v28H560Zm-79.88-336q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM252-280v-548h456v190h36v134h-36v224H501l-81-81-81 81h-87Zm28-126q44-20 99-33t101-13q46 0 101 13t99 33v-394H280v394Z"/>
    </Icon>
  );
});

IconMaterialMobileCameraFrontW100Filled.displayName = 'OnesyIconMaterialMobileCameraFrontW100Filled';

export default IconMaterialMobileCameraFrontW100Filled;
