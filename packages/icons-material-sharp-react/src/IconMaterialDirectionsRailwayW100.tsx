import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsRailwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayW100'

      short_name='DirectionsRailway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m212-132 56-56h424l56 56H212Zm84-84 28-28h-7q-45 0-75-31.63T212-352v-278q0-109 77.46-173.5 77.45-64.5 190.5-64.5Q593-868 670.5-803.5 748-739 748-630v278q0 44.74-30 76.37Q688-244 643-244h-7l28 28H296Zm21-56h326q32.08 0 54.54-23.33Q720-318.67 720-352v-160H240v160q0 33.33 22.46 56.67Q284.92-272 317-272Zm163.12-70q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5ZM240-540h480v-90q0-25-5-47.5T700-720H260q-10 20-15 42.5t-5 47.5v90Zm37-208h406q-32-44-85-68t-118-24q-65 0-118 24t-85 68Zm203 236Zm0-236Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayW100.displayName = 'OnesyIconMaterialDirectionsRailwayW100';

export default IconMaterialDirectionsRailwayW100;
