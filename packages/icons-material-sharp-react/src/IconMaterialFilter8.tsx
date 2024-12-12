import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter8 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8'

      short_name='Filter8'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-560-40 40v160h240v-160l-40-40 40-40v-160H440v160l40 40Zm120-120v80h-80v-80h80Zm0 160v80h-80v-80h80ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFilter8.displayName = 'OnesyIconMaterialFilter8';

export default IconMaterialFilter8;
