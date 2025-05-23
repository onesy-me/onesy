import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartDisplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplay'

      short_name='SmartDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M4,18.01h16V5.99H4V18.01z M9.5,7.5l7,4.5l-7,4.5V7.5z" opacity=".3"/><polygon points="9.5,7.5 9.5,16.5 16.5,12"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z"/></g></g>
    </Icon>
  );
});

IconMaterialSmartDisplay.displayName = 'OnesyIconMaterialSmartDisplay';

export default IconMaterialSmartDisplay;
