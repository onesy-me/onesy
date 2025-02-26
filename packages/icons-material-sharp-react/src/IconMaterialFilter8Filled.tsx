import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter8Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8Filled'

      short_name='Filter8'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm400-480-40 40v160h240v-160l-40-40 40-40v-160H440v160l40 40Zm120-120v80h-80v-80h80Zm0 160v80h-80v-80h80Z"/>
    </Icon>
  );
});

IconMaterialFilter8Filled.displayName = 'OnesyIconMaterialFilter8Filled';

export default IconMaterialFilter8Filled;
