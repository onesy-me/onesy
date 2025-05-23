import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Screenshot'

      short_name='Screenshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,21H7v-1h10V21z M17,18H7V6h10V18z M17,4H7V3h10V4z M9.5,8.5H12V7H8v4h1.5V8.5z M12,17h4v-4h-1.5v2.5H12V17z"/></g><g opacity=".3"><rect height="1" width="10" x="7" y="3"/><rect height="1" width="10" x="7" y="20"/></g></g></g>
    </Icon>
  );
});

IconMaterialScreenshot.displayName = 'OnesyIconMaterialScreenshot';

export default IconMaterialScreenshot;
