import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxW100Filled'

      short_name='AddBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-306h28v-160h160v-28H494v-160h-28v160H306v28h160v160ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialAddBoxW100Filled.displayName = 'OnesyIconMaterialAddBoxW100Filled';

export default IconMaterialAddBoxW100Filled;
