import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6Filled'

      short_name='Filter6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-600v-80h120v-80H440v400h240v-240H520Zm0 80h80v80h-80v-80ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialFilter6Filled.displayName = 'OnesyIconMaterialFilter6Filled';

export default IconMaterialFilter6Filled;
