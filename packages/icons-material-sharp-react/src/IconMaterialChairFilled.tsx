import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairFilled'

      short_name='Chair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80H40v-360h160v200h560v-200h160v360H800v80h-80v-80H240v80h-80Zm120-320v-200H160v-200h640v200H680v200H280Z"/>
    </Icon>
  );
});

IconMaterialChairFilled.displayName = 'OnesyIconMaterialChairFilled';

export default IconMaterialChairFilled;
