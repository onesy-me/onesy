import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7Filled'

      short_name='Filter7'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360h80l160-320v-80H440v80h160L440-360ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialFilter7Filled.displayName = 'OnesyIconMaterialFilter7Filled';

export default IconMaterialFilter7Filled;
