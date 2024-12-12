import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMemoryAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAltW100Filled'

      short_name='MemoryAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-386h28v-188h-28v188Zm200 0h28v-188h-28v188Zm200 0h28v-188h-28v188ZM226-172v-80h-94v-456h94v-80h28v80h212v-80h28v80h212v-80h28v80h94v456h-94v80h-28v-80H494v80h-28v-80H254v80h-28Z"/>
    </Icon>
  );
});

IconMaterialMemoryAltW100Filled.displayName = 'OnesyIconMaterialMemoryAltW100Filled';

export default IconMaterialMemoryAltW100Filled;
