import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeb = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Web'

      short_name='Web'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><rect height="3.5" opacity=".3" width="10.5" x="4" y="9"/><rect height="3.5" opacity=".3" width="10.5" x="4" y="14.5"/><rect height="9" opacity=".3" width="3.5" x="16.5" y="9"/><path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M14.5,18L4,18v-3.5h10.5 V18z M14.5,12.5H4V9h10.5V12.5z M20,18l-3.5,0V9H20V18z"/></g></g>
    </Icon>
  );
});

IconMaterialWeb.displayName = 'OnesyIconMaterialWeb';

export default IconMaterialWeb;
