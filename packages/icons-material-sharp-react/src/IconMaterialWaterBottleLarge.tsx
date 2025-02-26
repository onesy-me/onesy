import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottleLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleLarge'

      short_name='WaterBottleLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160h400v-80h-80v-280h-80v-80h160v-80H280v80h80v280h80v80H280v80Zm-80 80v-240h80v-200h-80v-240h200v-40h-40v-80h240v80h-40v40h200v240h-80v200h80v240H200Zm280-340Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLarge.displayName = 'OnesyIconMaterialWaterBottleLarge';

export default IconMaterialWaterBottleLarge;
