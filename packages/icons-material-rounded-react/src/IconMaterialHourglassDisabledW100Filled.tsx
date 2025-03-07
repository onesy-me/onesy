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
      <path d="m842-78-54-54H226q-6 0-10-4t-4-10q0-6 4-10t10-4h56v-120q0-81 48.5-134T440-478v-5q-39-8-89-47t-64-103L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM650-800H278q-7 0-10.5-4.5T264-814q0-5 3.5-9.5T278-828h456q6 0 10 4t4 10q0 6-4 10t-10 4h-56v120q0 48-32 91.5T574-515q-4 3-9 2.5t-8-5.5q-3-4-2-9t5-8q35-25 62.5-63.5T650-680v-120ZM310-160h340v-110L466-453q-57 5-106.5 50.5T310-280v120Zm368 0h70l-70-82v82Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledW100Filled.displayName = 'OnesyIconMaterialHourglassDisabledW100Filled';

export default IconMaterialHourglassDisabledW100Filled;
