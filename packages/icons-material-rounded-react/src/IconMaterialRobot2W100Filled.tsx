import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRobot2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Robot2W100Filled'

      short_name='Robot2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-172q-12.75 0-21.37-8.64-8.63-8.63-8.63-21.4v-120.17q0-24.79 17.63-42.29Q247.25-382 272-382h416q24.75 0 42.38 17.65Q748-346.7 748-321.92v120.15q0 12.77-8.62 21.27-8.63 8.5-21.38 8.5H242Zm133-290q-67.64 0-115.32-47.68Q212-557.35 212-625q0-67.65 47.68-115.32Q307.36-788 375-788h210q67.65 0 115.32 47.68Q748-692.65 748-625q0 67.65-47.68 115.32Q652.65-462 585-462H375Zm-.04-137q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Zm210 0q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialRobot2W100Filled.displayName = 'OnesyIconMaterialRobot2W100Filled';

export default IconMaterialRobot2W100Filled;
