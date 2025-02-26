import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2'

      short_name='Filter2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360h240v-80H520v-80h160v-240H440v80h160v80H440v240ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFilter2.displayName = 'OnesyIconMaterialFilter2';

export default IconMaterialFilter2;
