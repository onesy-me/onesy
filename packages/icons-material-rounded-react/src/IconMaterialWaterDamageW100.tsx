import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDamageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100'

      short_name='WaterDamage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-240h336q14 0 23-9t9-23v-334L499-739q-8-6-19-6t-19 6L280-606v334q0 14 9 23t23 9Zm0 28q-25 0-42.5-17.5T252-272v-313l-132 97q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-252q16-12 36-12t36 12l342 252q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-133-98v314q0 25-17.5 42.5T648-212H312Zm168-134q23 0 38.5-15.5T534-400q0-17-9.5-35T480-504q-37 54-45.5 70t-8.5 34q0 23 15.5 38.5T480-346Zm0-54Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100.displayName = 'OnesyIconMaterialWaterDamageW100';

export default IconMaterialWaterDamageW100;
