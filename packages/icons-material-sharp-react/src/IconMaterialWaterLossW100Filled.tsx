import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLossW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLossW100Filled'

      short_name='WaterLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-332q45-21 91.5-31.5T443-374q29 0 58 3.5t57 11.5q54 15 82 20t61 5h3l52-466H203l53 468Zm-5 200-79-696h616l-78 696H251Z"/>
    </Icon>
  );
});

IconMaterialWaterLossW100Filled.displayName = 'OnesyIconMaterialWaterLossW100Filled';

export default IconMaterialWaterLossW100Filled;
