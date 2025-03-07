import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnergyProgramTimeUsedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyProgramTimeUsedW100'

      short_name='EnergyProgramTimeUsed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-440ZM92-132v-616h374v28H120v560h560v-266h28v294H92Zm146-134h28v-228h-28v228Zm148 0h28v-348h-28v348Zm148 0h28v-108h-28v108Zm186-240q-32 0-61-10.8T605-548l-42 38-19-19 41-40q-17-25-28-52.98-11-27.97-11-58.02 0-72.21 50.9-123.1Q647.79-854 720-854h174v174q0 72.21-50.9 123.1Q792.21-506 720-506Zm0-28q60.83 0 103.42-42.58Q866-619.17 866-680v-146H720q-60.83 0-103.42 42.58Q574-740.83 574-680q0 24.24 9.5 46.62T605-590l137-137 21 20-137 137q19 18 43.7 27 24.69 9 50.3 9Zm-26-125Z"/>
    </Icon>
  );
});

IconMaterialEnergyProgramTimeUsedW100.displayName = 'OnesyIconMaterialEnergyProgramTimeUsedW100';

export default IconMaterialEnergyProgramTimeUsedW100;
