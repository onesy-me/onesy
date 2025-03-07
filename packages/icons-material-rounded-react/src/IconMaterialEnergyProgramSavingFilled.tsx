import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnergyProgramSavingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyProgramSavingFilled'

      short_name='EnergyProgramSaving'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-280q75 0 127.5-52.5T640-460v-180H460q-75 0-127.5 52.5T280-460q0 26 7 50t21 46l-16 16q-11 11-11 28t11 28q11 11 28 11t28-11l16-16q22 14 46 21t50 7Zm20 240L342-148l-173-21-21-173L40-480l108-138 21-173 173-21 138-108 138 108 173 21 21 173 108 138-108 138-21 173-173 21L480-40Zm28-412q11-12 11-28.5T508-508q-11-11-27.5-11T452-508l-56 56q-12 12-12 28.5t12 28.5q12 12 28.5 12t27.5-12l56-57Z"/>
    </Icon>
  );
});

IconMaterialEnergyProgramSavingFilled.displayName = 'OnesyIconMaterialEnergyProgramSavingFilled';

export default IconMaterialEnergyProgramSavingFilled;
