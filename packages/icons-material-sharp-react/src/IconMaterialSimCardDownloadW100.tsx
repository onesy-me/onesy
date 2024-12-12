import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadW100'

      short_name='SimCardDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-326 124-124-20-20-90 88v-192h-28v192l-90-88-20 20 124 124ZM212-132v-486l210-210h326v696H212Zm28-28h480v-640H434L240-606v446Zm0 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadW100.displayName = 'OnesyIconMaterialSimCardDownloadW100';

export default IconMaterialSimCardDownloadW100;
