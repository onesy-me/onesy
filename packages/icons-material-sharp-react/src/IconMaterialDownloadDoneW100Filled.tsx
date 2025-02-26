import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadDoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDoneW100Filled'

      short_name='DownloadDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-362 212-532l20-20 150 150 346-346 20 20-366 366ZM252-212v-28h456v28H252Z"/>
    </Icon>
  );
});

IconMaterialDownloadDoneW100Filled.displayName = 'OnesyIconMaterialDownloadDoneW100Filled';

export default IconMaterialDownloadDoneW100Filled;
