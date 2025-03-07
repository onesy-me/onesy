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
      <path d="M243-446q47-24 97-36t103-12q29 0 58 3.5t57 11.5q54 15 82 20t61 5h16l39-346H203l40 354Zm63 314q-23 0-41-15t-20-38l-69-610q-2-14 7-23.5t23-9.5h548q14 0 23 9.5t7 23.5l-68 610q-2 23-20.5 38T654-132H306Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumW100Filled.displayName = 'OnesyIconMaterialWaterMediumW100Filled';

export default IconMaterialWaterMediumW100Filled;
