import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRampRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampRightW100Filled'

      short_name='RampRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-173v-294q-26 61-79 118T262-244l-20-20q33-21 72-53.5t73-74.5q34-42 56.5-94.5T466-600v-133l-90 90-20-20 124-124 124 124-20 20-90-90v560h-28Z"/>
    </Icon>
  );
});

IconMaterialRampRightW100Filled.displayName = 'OnesyIconMaterialRampRightW100Filled';

export default IconMaterialRampRightW100Filled;
