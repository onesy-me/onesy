import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLampW100Filled'

      short_name='WallLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M158-172v-188h28v188h-28Zm108-80v-28h240v-160H296l89-296h270l89 296H534v188H266Z"/>
    </Icon>
  );
});

IconMaterialWallLampW100Filled.displayName = 'OnesyIconMaterialWallLampW100Filled';

export default IconMaterialWallLampW100Filled;
