import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMediumW100Filled'

      short_name='WaterMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M243-446q47-24 97-36t103-12q29 0 58 3.5t57 11.5q54 15 82 20t61 5h16l39-346H203l40 354Zm8 314-79-696h616l-78 696H251Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumW100Filled.displayName = 'OnesyIconMaterialWaterMediumW100Filled';

export default IconMaterialWaterMediumW100Filled;
