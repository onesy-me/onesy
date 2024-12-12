import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDamageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100Filled'

      short_name='WaterDamage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-212q-25 0-42.5-17.5T252-272v-313l-132 97q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-252q16-12 36-12t36 12l342 252q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-133-98v314q0 25-17.5 42.5T648-212H312Zm168-134q23 0 38.5-15.5T534-400q0-17-9-34.5T480-504q-38 57-46 72t-8 32q0 23 15.5 38.5T480-346Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100Filled.displayName = 'OnesyIconMaterialWaterDamageW100Filled';

export default IconMaterialWaterDamageW100Filled;
