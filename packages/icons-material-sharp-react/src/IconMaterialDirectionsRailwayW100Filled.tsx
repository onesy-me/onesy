import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsRailwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayW100Filled'

      short_name='DirectionsRailway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m212-132 56-56h424l56 56H212Zm84-84 28-28h-7q-45 0-75-31.5T212-352v-278q0-109 77.5-173.5T480-868q113 0 190.5 64.5T748-630v278q0 45-30 76.5T643-244h-7l28 28H296Zm184-126q21 0 35.5-14.5T530-392q0-21-14.5-35.5T480-442q-21 0-35.5 14.5T430-392q0 21 14.5 35.5T480-342ZM240-540h480v-90q0-25-5-47.5T700-720H260q-10 20-15 42.5t-5 47.5v90Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayW100Filled.displayName = 'OnesyIconMaterialDirectionsRailwayW100Filled';

export default IconMaterialDirectionsRailwayW100Filled;
