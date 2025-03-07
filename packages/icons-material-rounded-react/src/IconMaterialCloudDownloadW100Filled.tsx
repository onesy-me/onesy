import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadW100Filled'

      short_name='CloudDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-49T92-380q0-66 47-117t115-51q10-84 69.5-139T466-748v336l-78-78q-4-4-9.5-4.5T368-490q-5 5-5 10t5 10l91 91q9 9 21 9t21-9l91-91q4-4 4.5-9.5T592-490q-5-5-10-5t-10 5l-78 78v-336q90 10 152 73.5T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H260Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadW100Filled.displayName = 'OnesyIconMaterialCloudDownloadW100Filled';

export default IconMaterialCloudDownloadW100Filled;
