import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestorePageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageW100Filled'

      short_name='RestorePage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-282q66 0 112-46t46-112q0-66-46-112t-112-46q-44 0-75 20t-51 44v-70h-28v118h118v-28h-70q15-23 43-39.5t63-16.5q54 0 92 38t38 92q0 54-38 92t-92 38q-44 0-77-25.5T356-400h-30q17 56 59 87t95 31ZM212-132v-696h326l210 210v486H212Z"/>
    </Icon>
  );
});

IconMaterialRestorePageW100Filled.displayName = 'OnesyIconMaterialRestorePageW100Filled';

export default IconMaterialRestorePageW100Filled;
