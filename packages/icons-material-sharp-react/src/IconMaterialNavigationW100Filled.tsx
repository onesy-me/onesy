import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationW100Filled'

      short_name='Navigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m250-198-12-10 242-544 242 544-12 10-230-98-230 98Z"/>
    </Icon>
  );
});

IconMaterialNavigationW100Filled.displayName = 'OnesyIconMaterialNavigationW100Filled';

export default IconMaterialNavigationW100Filled;
