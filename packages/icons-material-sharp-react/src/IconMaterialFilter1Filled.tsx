import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1Filled'

      short_name='Filter1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-360h80v-400H480v80h80v320ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialFilter1Filled.displayName = 'OnesyIconMaterialFilter1Filled';

export default IconMaterialFilter1Filled;
