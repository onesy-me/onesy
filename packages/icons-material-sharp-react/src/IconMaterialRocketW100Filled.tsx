import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketW100Filled'

      short_name='Rocket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M239-153v-196q0-15 7-28.5t20-21.5l49-32q7 66 17 115t33 112l-126 51Zm148-69q-21-60-33-121.5T342-468q0-100 32-182t106-154q74 72 106 154t32 182q0 63-12 124.5T573-222H387Zm93-244q23 0 38.5-15.5T534-520q0-23-15.5-38.5T480-574q-23 0-38.5 15.5T426-520q0 23 15.5 38.5T480-466Zm240 313-126-50q23-63 33-112.5T644-431l49 33q13 8 20 21.5t7 28.5v195Z"/>
    </Icon>
  );
});

IconMaterialRocketW100Filled.displayName = 'OnesyIconMaterialRocketW100Filled';

export default IconMaterialRocketW100Filled;
