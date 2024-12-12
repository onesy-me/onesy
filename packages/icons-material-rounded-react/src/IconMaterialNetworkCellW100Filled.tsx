import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkCellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellW100Filled'

      short_name='NetworkCell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-132q-11 0-16.5-7t-5.5-16q0-5 1-8t5-7l620-620q4-4 7-5t8-1q9 0 16 5.5t7 16.5v612q0 13-8.5 21.5T798-132H186Zm483-28h131v-600L669-629v469Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellW100Filled.displayName = 'OnesyIconMaterialNetworkCellW100Filled';

export default IconMaterialNetworkCellW100Filled;
