import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottleLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleLargeFilled'

      short_name='WaterBottleLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-240h80v-200h-80v-240h200v-40h-40v-80h240v80h-40v40h200v240h-80v200h80v240H200Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeFilled.displayName = 'OnesyIconMaterialWaterBottleLargeFilled';

export default IconMaterialWaterBottleLargeFilled;
