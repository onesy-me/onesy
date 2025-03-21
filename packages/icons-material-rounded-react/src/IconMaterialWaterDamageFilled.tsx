import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDamageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageFilled'

      short_name='WaterDamage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160q-33 0-56.5-23.5T200-240v-286l-80 62q-13 10-29.5 8T64-472q-10-13-7.5-29T72-527l359-276q22-17 49-17t49 17l359 275q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5l-80-61v286q0 33-23.5 56.5T680-160H280Zm200-160q33 0 56.5-23.5T560-400q0-27-15-57.5T480-560q-50 72-65 102.5T400-400q0 33 23.5 56.5T480-320Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageFilled.displayName = 'OnesyIconMaterialWaterDamageFilled';

export default IconMaterialWaterDamageFilled;
