import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownload'

      short_name='SimCardDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,8.83V20h12V4h-7.17L6,8.83z M11,9.02L13,9v4h3l-4,4l-4-4h3V9.02z" opacity=".3"/><path d="M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,20H6V8.83L10.83,4H18V20z"/><polygon points="12,17 16,13 13,13 13,9 11,9.02 11,13 8,13"/></g></g>
    </Icon>
  );
});

IconMaterialSimCardDownload.displayName = 'OnesyIconMaterialSimCardDownload';

export default IconMaterialSimCardDownload;
