import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOff'

      short_name='FileDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="13,5 11,5 11,8.17 13,10.17"/><path d="M11,8.17l-2-2V3h6v6h4l-3.59,3.59L13,10.17V5h-2V8.17z M21.19,21.19L2.81,2.81L1.39,4.22L6.17,9H5l7,7l0.59-0.59L15.17,18H5 v2h12.17l2.61,2.61L21.19,21.19z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOff.displayName = 'OnesyIconMaterialFileDownloadOff';

export default IconMaterialFileDownloadOff;
