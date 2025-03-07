import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowserUpdated = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdated'

      short_name='BrowserUpdated'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24" y="0"/><path d="M22,13v3c0,1.1-0.9,2-2,2h-3l1,1v2H6v-2l1-1H4c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2l8,0v2L4,5v11h16v-3H22z M15,15l-5-5h4V3 h2v7h4L15,15z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdated.displayName = 'OnesyIconMaterialBrowserUpdated';

export default IconMaterialBrowserUpdated;
