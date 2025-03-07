import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxW100Filled'

      short_name='NightSightMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-666H600q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H734v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106Zm2 346q-35 80-107.37 127-72.36 47-160.66 47Q318-146 232-232t-86-208q0-105.91 66-186.96Q278-708 381-728q5-1 8.5 1t5.5 5q2 3 2.5 6.5T396-707q-11 25.56-16.5 52.28Q374-628 374-600q0 110.83 77.58 188.42Q529.17-334 640-334q13.48 0 25.74-1.5Q678-337 691-339q5-1 8.83.5 3.84 1.5 6.17 4.5 2 3 3 6.5t-1 7.5Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxW100Filled.displayName = 'OnesyIconMaterialNightSightMaxW100Filled';

export default IconMaterialNightSightMaxW100Filled;
