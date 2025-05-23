import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadForOffline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadForOffline'

      short_name='DownloadForOffline'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M11,10V6h2v4h3l-4,4l-4-4H11 z M17,17H7v-2h10V17z" opacity=".3"/><polygon points="16,10 13,10 13,6 11,6 11,10 8,10 12,14"/><rect height="2" width="10" x="7" y="15"/><path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z"/></g></g>
    </Icon>
  );
});

IconMaterialDownloadForOffline.displayName = 'OnesyIconMaterialDownloadForOffline';

export default IconMaterialDownloadForOffline;
