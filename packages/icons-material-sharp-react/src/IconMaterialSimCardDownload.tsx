import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownload'

      short_name='SimCardDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-280 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160ZM160-80v-560l240-240h400v800H160Zm80-80h480v-640H434L240-606v446Zm0 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownload.displayName = 'OnesyIconMaterialSimCardDownload';

export default IconMaterialSimCardDownload;
