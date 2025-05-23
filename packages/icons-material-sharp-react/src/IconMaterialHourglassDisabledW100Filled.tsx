import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledW100Filled'

      short_name='HourglassDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m852-68-64-64H212v-28h70v-120q0-81 48.5-134T440-478v-5q-39-8-89-47t-64-103L90-830l20-20L872-88l-20 20ZM564-508l-18-18q39-24 71.5-65.5T650-680v-120H310v38l-28-28v-10h-10l-28-28h504v28h-70v120q0 51-36 97t-78 75ZM310-160h340v-110L466-453q-57 5-106.5 50.5T310-280v120Zm368 0h70l-70-82v82Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledW100Filled.displayName = 'OnesyIconMaterialHourglassDisabledW100Filled';

export default IconMaterialHourglassDisabledW100Filled;
