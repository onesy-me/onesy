import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckFilled'

      short_name='PriceCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-361v-40H160v-80h200v-80H160v-240h100v-40h80v40h100v80H240v80h200v240H340v40h-80Zm298 240L388-291l56-56 114 114 226-226 56 56-282 282Z"/>
    </Icon>
  );
});

IconMaterialPriceCheckFilled.displayName = 'OnesyIconMaterialPriceCheckFilled';

export default IconMaterialPriceCheckFilled;
