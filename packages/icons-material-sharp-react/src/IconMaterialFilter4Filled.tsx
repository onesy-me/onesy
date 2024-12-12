import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4Filled'

      short_name='Filter4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm520-280h80v-400h-80v160h-80v-160h-80v240h160v160Z"/>
    </Icon>
  );
});

IconMaterialFilter4Filled.displayName = 'OnesyIconMaterialFilter4Filled';

export default IconMaterialFilter4Filled;
