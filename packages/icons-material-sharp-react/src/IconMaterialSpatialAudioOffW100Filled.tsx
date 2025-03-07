import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialAudioOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioOffW100Filled'

      short_name='SpatialAudioOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m741-438 20-20q-42-42-65-95.5T673-666q0-59 23-112.5t65-95.5l-20-20q-46 46-71 104.5T645-666q0 65 25 123.5T741-438Zm134-134 20-20q-15-15-23.5-34t-8.5-40q0-21 8.5-40t23.5-34l-20-20q-19 19-29.5 43.5T835-666q0 26 10.5 50.5T875-572Zm-490 80q-45 0-76.5-31.5T277-600q0-45 31.5-76.5T385-708q45 0 76.5 31.5T493-600q0 45-31.5 76.5T385-492ZM117-212v-52q0-26 13-43.5t37-28.5q48-23 106-37.5T385-388q54 0 112 14.5T603-336q24 11 37 28.5t13 43.5v52H117Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioOffW100Filled.displayName = 'OnesyIconMaterialSpatialAudioOffW100Filled';

export default IconMaterialSpatialAudioOffW100Filled;
