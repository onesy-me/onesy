import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHeatW100Filled'

      short_name='EmergencyHeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-400q0-83 45-165.5T340-712q15-13 32.5-5t17.5 26v5q0 41 40 75.5t91 34.5q19 0 37.5-6t35.5-17q8-5 16.5-4.5T626-597q39 38 60.5 89.5T708-400q0 93-55 163.5T513-142q23-17 36-42t13-54q0-23-9-45t-26-39l-87-85-86 85q-17 17-26.5 38.5T318-238q0 29 13 54t36 42q-85-24-140-94.5T172-400Zm268 32 67 66q13 13 20 29t7 35q0 38-27.5 65T440-146q-39 0-66.5-27T346-238q0-18 6.5-34t20.5-30l67-66Zm400-178q-6 0-10-4t-4-10q0-6 4-10t10-4q6 0 10 4t4 10q0 6-4 10t-10 4Zm0-108q-6 0-10-4t-4-10v-132q0-6 4-10t10-4q6 0 10 4t4 10v132q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHeatW100Filled.displayName = 'OnesyIconMaterialEmergencyHeatW100Filled';

export default IconMaterialEmergencyHeatW100Filled;
