import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreamAppsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamAppsW100Filled'

      short_name='StreamApps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M566-323v-281h290v228H619l-53 53ZM252-92v-776h456v184h-28v-62H280v532h400v-62h28v184H252Z"/>
    </Icon>
  );
});

IconMaterialStreamAppsW100Filled.displayName = 'OnesyIconMaterialStreamAppsW100Filled';

export default IconMaterialStreamAppsW100Filled;
