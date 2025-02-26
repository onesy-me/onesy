import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeRepairServiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceFilled'

      short_name='HomeRepairService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-640h240v-80H360v80ZM80-160v-200h160v40h80v-40h320v40h80v-40h160v200H80Zm0-240v-240h200v-160h400v160h200v240H720v-80h-80v80H320v-80h-80v80H80Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceFilled.displayName = 'OnesyIconMaterialHomeRepairServiceFilled';

export default IconMaterialHomeRepairServiceFilled;
