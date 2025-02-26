import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialParkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkW100Filled'

      short_name='Park'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M508-132h-56v-160H218l160-240h-78l180-258 180 258h-78l160 240H508v160Z"/>
    </Icon>
  );
});

IconMaterialParkW100Filled.displayName = 'OnesyIconMaterialParkW100Filled';

export default IconMaterialParkW100Filled;
