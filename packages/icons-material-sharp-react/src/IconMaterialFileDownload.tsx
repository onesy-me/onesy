import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownload'

      short_name='FileDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Zm-8 4v-5h2v3h12v-3h2v5Z"/>
    </Icon>
  );
});

IconMaterialFileDownload.displayName = 'OnesyIconMaterialFileDownload';

export default IconMaterialFileDownload;
