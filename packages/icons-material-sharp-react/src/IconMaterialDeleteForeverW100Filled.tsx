import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteForeverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverW100Filled'

      short_name='DeleteForever'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-336 104-104 104 104 20-20-104-104 104-104-20-20-104 104-104-104-20 20 104 104-104 104 20 20ZM252-172v-548h-40v-28h148v-28h240v28h148v28h-40v548H252Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverW100Filled.displayName = 'OnesyIconMaterialDeleteForeverW100Filled';

export default IconMaterialDeleteForeverW100Filled;
