import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterRetroluxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterRetroluxW100Filled'

      short_name='FilterRetrolux'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m582-180-88-88q2 42-28 73t-72 31q-42.14 0-71.07-28.9-28.93-28.9-28.93-71t28.93-71.1q28.93-29 71.07-29 20 0 37.5 7t32.5 21L292-594l188-190 188 190-172 258v30l106 106-20 20Zm-188-12q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Z"/>
    </Icon>
  );
});

IconMaterialFilterRetroluxW100Filled.displayName = 'OnesyIconMaterialFilterRetroluxW100Filled';

export default IconMaterialFilterRetroluxW100Filled;
