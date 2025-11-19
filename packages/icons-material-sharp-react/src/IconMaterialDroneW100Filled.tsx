import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDroneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DroneW100Filled'

      short_name='Drone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212q0-63 35-112t91-67l-19-161H211v-168H93v-28h264v28H239v140h76l-3-28h335l-3 28h75v-140H601v-28h265v28H748v168H641l-19 161q56 18 91 67t35 112h-28q0-66-44-113t-109-47H392q-64 0-108 47t-44 113h-28Z"/>
    </Icon>
  );
});

IconMaterialDroneW100Filled.displayName = 'OnesyIconMaterialDroneW100Filled';

export default IconMaterialDroneW100Filled;
