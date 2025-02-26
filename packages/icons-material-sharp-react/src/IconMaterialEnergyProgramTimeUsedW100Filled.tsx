import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnergyProgramTimeUsedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyProgramTimeUsedW100Filled'

      short_name='EnergyProgramTimeUsed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-506q-32 0-61-10.8T605-548l-42 38-19-19 41-40q-17-25-28-52.98-11-27.97-11-58.02 0-72.21 50.9-123.1Q647.79-854 720-854h174v174q0 72.21-50.9 123.1Q792.21-506 720-506Zm-73-85 116-116-21-20-117 117 22 19ZM92-132v-616h374v322h242v294H92Zm146-134h28v-228h-28v228Zm148 0h28v-348h-28v348Zm148 0h28v-108h-28v108Z"/>
    </Icon>
  );
});

IconMaterialEnergyProgramTimeUsedW100Filled.displayName = 'OnesyIconMaterialEnergyProgramTimeUsedW100Filled';

export default IconMaterialEnergyProgramTimeUsedW100Filled;
