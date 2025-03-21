import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppShortcutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutW100Filled'

      short_name='AppShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M750-466H448v152h-28v-180h330l-90-90 20-20 124 124-124 124-20-20 90-90ZM252-92v-776h456v184h-28v-62H280v532h400v-62h28v184H252Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutW100Filled.displayName = 'OnesyIconMaterialAppShortcutW100Filled';

export default IconMaterialAppShortcutW100Filled;
