import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadW100'

      short_name='CloudDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-49T92-380q0-66 47-117t115-51q8-75 71.5-136.5T466-746q11 0 19.5 8.5T494-718v306l88-88 20 20-122 122-122-122 20-20 88 88v-306q-75 0-130.5 63T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-50-22-91.5T600-680v-34q51 30 79.5 82T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H260Zm220-281Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadW100.displayName = 'OnesyIconMaterialCloudDownloadW100';

export default IconMaterialCloudDownloadW100;
