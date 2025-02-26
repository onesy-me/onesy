import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeFilled'

      short_name='Landscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-240 240-320 180 240h101L410-520l150-200 360 480H40Z"/>
    </Icon>
  );
});

IconMaterialLandscapeFilled.displayName = 'OnesyIconMaterialLandscapeFilled';

export default IconMaterialLandscapeFilled;
