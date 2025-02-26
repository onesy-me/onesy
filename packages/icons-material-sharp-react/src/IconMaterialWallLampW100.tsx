import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLampW100'

      short_name='WallLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M158-172v-188h28v188h-28Zm176-296h372l-72-240H406l-72 240Zm0 0h372-372Zm-68 216v-28h240v-160H296l89-296h270l89 296H534v188H266Z"/>
    </Icon>
  );
});

IconMaterialWallLampW100.displayName = 'OnesyIconMaterialWallLampW100';

export default IconMaterialWallLampW100;
