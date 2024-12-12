import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonW100Filled'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M322-146q-16 0-30-8t-22-22L111-450q-8-14-8-30t8-30l159-274q8-14 22-22t30-8h316q16 0 30 8t22 22l159 274q8 14 8 30t-8 30L690-176q-8 14-22 22t-30 8H322Z"/>
    </Icon>
  );
});

IconMaterialHexagonW100Filled.displayName = 'OnesyIconMaterialHexagonW100Filled';

export default IconMaterialHexagonW100Filled;
