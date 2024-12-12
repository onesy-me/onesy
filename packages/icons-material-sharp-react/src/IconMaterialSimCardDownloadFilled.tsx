import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardDownloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadFilled'

      short_name='SimCardDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-280 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160ZM160-80v-560l240-240h400v800H160Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadFilled.displayName = 'OnesyIconMaterialSimCardDownloadFilled';

export default IconMaterialSimCardDownloadFilled;
