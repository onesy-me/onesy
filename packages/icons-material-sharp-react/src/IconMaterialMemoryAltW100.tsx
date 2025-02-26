import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMemoryAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAltW100'

      short_name='MemoryAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-386h28v-188h-28v188Zm200 0h28v-188h-28v188Zm200 0h28v-188h-28v188ZM160-280h640v-400H160v400Zm0 0v-400 400Zm66 108v-80h-94v-456h94v-80h28v80h212v-80h28v80h212v-80h28v80h94v456h-94v80h-28v-80H494v80h-28v-80H254v80h-28Z"/>
    </Icon>
  );
});

IconMaterialMemoryAltW100.displayName = 'OnesyIconMaterialMemoryAltW100';

export default IconMaterialMemoryAltW100;
