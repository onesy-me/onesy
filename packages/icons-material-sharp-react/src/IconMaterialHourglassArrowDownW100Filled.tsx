import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassArrowDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassArrowDownW100Filled'

      short_name='HourglassArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212v-28h60v-108q0-49 31-87t79-45q-49-7-79.5-45.5T212-614v-106h-60v-28h396v28h-58v106q0 51-31.5 89T378-480q49 7 80.5 44.5T490-348v108h58v28H152Zm622 0-98-98 20-20 64 64v-482h28v482l64-64 20 20-98 98Z"/>
    </Icon>
  );
});

IconMaterialHourglassArrowDownW100Filled.displayName = 'OnesyIconMaterialHourglassArrowDownW100Filled';

export default IconMaterialHourglassArrowDownW100Filled;
