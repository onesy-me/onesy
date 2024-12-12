import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardTravel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravel'

      short_name='CardTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200h640v-80H160v80Zm-80 80v-600h200v-160h400v160h200v600H80Zm80-280h640v-240H680v80h-80v-80H360v80h-80v-80H160v240Zm200-320h240v-80H360v80ZM160-200v-440 80-80 80-80 440Z"/>
    </Icon>
  );
});

IconMaterialCardTravel.displayName = 'OnesyIconMaterialCardTravel';

export default IconMaterialCardTravel;
