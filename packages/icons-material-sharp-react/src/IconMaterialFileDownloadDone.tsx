import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDone'

      short_name='FileDownloadDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDone.displayName = 'OnesyIconMaterialFileDownloadDone';

export default IconMaterialFileDownloadDone;
