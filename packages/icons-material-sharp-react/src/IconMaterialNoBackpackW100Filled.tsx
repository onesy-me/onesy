import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoBackpackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackW100Filled'

      short_name='NoBackpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-425 108 101v-295q0-51-34.5-87T628-747v-81h-68v80H400v-80h-68v81q-2 0-3.5.5t-3.5.5l294 300h21v21Zm154 299L680-240h40l28 28v80H212v-487q0-26 10-49.5t29-40.5l8 8v40L126-794l20-20 668 668-20 20ZM320-418h182l-28-28H320v28Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100Filled.displayName = 'OnesyIconMaterialNoBackpackW100Filled';

export default IconMaterialNoBackpackW100Filled;
