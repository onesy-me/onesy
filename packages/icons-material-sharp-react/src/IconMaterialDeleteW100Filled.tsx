import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteW100Filled'

      short_name='Delete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-280h28v-360h-28v360Zm128 0h28v-360h-28v360ZM252-172v-548h-40v-28h148v-28h240v28h148v28h-40v548H252Z"/>
    </Icon>
  );
});

IconMaterialDeleteW100Filled.displayName = 'OnesyIconMaterialDeleteW100Filled';

export default IconMaterialDeleteW100Filled;
