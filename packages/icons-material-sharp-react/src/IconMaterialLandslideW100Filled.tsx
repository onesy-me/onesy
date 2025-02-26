import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandslideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideW100Filled'

      short_name='Landslide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-128l108 35 372-123 164 216H132Zm108-123-108-35v-120l108 35 187-62 156 68-343 114Zm468-185 120-54v-84l-115-26-61 49v70l56 45Zm-468 35-108-35v-148h162l103 132-157 51Zm246-253 142-57v-122l-137-28-79 53v104l74 50Z"/>
    </Icon>
  );
});

IconMaterialLandslideW100Filled.displayName = 'OnesyIconMaterialLandslideW100Filled';

export default IconMaterialLandslideW100Filled;
