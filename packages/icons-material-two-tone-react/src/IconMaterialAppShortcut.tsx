import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppShortcut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcut'

      short_name='AppShortcut'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1" opacity=".3" width="10" x="7" y="20"/><rect height="1" opacity=".3" width="10" x="7" y="3"/><path d="M17,18H7V6h10v1h2V3c0-1.1-0.9-2-2-2H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-4h-2V18z M7,3h10v1H7V3z M17,21H7v-1h10V21z"/><polygon points="20.38,9.62 21,11 21.62,9.62 23,9 21.62,8.38 21,7 20.38,8.38 19,9"/><polygon points="16,8 14.75,10.75 12,12 14.75,13.25 16,16 17.25,13.25 20,12 17.25,10.75"/><polygon points="21,13 20.38,14.38 19,15 20.38,15.62 21,17 21.62,15.62 23,15 21.62,14.38"/></g></g>
    </Icon>
  );
});

IconMaterialAppShortcut.displayName = 'OnesyIconMaterialAppShortcut';

export default IconMaterialAppShortcut;
