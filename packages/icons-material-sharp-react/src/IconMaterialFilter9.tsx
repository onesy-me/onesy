import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter9 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9'

      short_name='Filter9'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360h200v-400H440v240h160v80H480v80Zm120-240h-80v-80h80v80ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFilter9.displayName = 'OnesyIconMaterialFilter9';

export default IconMaterialFilter9;
