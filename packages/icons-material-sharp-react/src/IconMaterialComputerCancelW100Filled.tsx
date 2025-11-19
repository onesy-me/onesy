import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComputerCancelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerCancelW100Filled'

      short_name='ComputerCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-392 104-104 104 104 20-20-104-104 104-104-20-20-104 104-104-104-20 20 104 104-104 104 20 20ZM80-200v-28h800v28H80Zm52-68v-496h696v496H132Z"/>
    </Icon>
  );
});

IconMaterialComputerCancelW100Filled.displayName = 'OnesyIconMaterialComputerCancelW100Filled';

export default IconMaterialComputerCancelW100Filled;
