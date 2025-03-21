import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltitudeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeW100Filled'

      short_name='Altitude'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M199-174q-19 0-27-16.5t3-31.5l86-116q5-6 11-9t13-3q7 0 13 3t11 9l94 125q4 5 9 6t10-3q5-4 6-9.5t-3-10.5l-23-31q-6-8-6.5-18t5.5-18l140-187q5-6 11-9t13-3q7 0 13 3t11 9l196 262q11 15 3 31.5T761-174H199Zm561-306q-6 0-10-4t-4-10v-190l-81 80q-4 4-9.5 3.5T646-605q-4-4-4-9.5t4-9.5l93-92q9-9 21-9t21 9l93 92q4 4 3.5 9.5T873-604q-4 4-9.5 4t-9.5-4l-80-80v190q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialAltitudeW100Filled.displayName = 'OnesyIconMaterialAltitudeW100Filled';

export default IconMaterialAltitudeW100Filled;
