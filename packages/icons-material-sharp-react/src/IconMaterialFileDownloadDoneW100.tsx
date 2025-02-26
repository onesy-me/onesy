import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDoneW100'

      short_name='FileDownloadDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-362 212-532l20-20 150 150 346-346 20 20-366 366ZM252-212v-28h456v28H252Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDoneW100.displayName = 'OnesyIconMaterialFileDownloadDoneW100';

export default IconMaterialFileDownloadDoneW100;
