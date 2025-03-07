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
      <path d="M172-400q0-62 21.5-115t54-97q32.5-44 70.5-78t70-57v39q0 61.05 41.05 96.53Q470.1-576 521-576q19.83 0 37.92-6Q577-588 594-599l17-11q45 38 71 92.5T708-400q0 93-55 163.5T513-142q23-17 36-42t13-54q0-23-9.05-44.87Q543.9-304.75 527-322l-87-85-86 85q-17 17-26.5 38.32T318-238q0 29 13 54t36 42q-85-24-140-94.5T172-400Zm268 32 67 66q13.11 13.11 20.06 29.3Q534-256.51 534-238q0 38.2-27.38 65.1-27.38 26.9-66.5 26.9-39.12 0-66.62-26.91-27.5-26.92-27.5-65.15 0-17.94 6.5-33.94 6.5-16 20.5-30l67-66Zm399.96-178q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4ZM826-654v-160h28v160h-28Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHeatW100Filled.displayName = 'OnesyIconMaterialEmergencyHeatW100Filled';

export default IconMaterialEmergencyHeatW100Filled;
