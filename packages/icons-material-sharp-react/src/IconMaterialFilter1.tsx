import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1'

      short_name='Filter1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-360h80v-400H480v80h80v320ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFilter1.displayName = 'OnesyIconMaterialFilter1';

export default IconMaterialFilter1;
