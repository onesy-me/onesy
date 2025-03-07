import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedW100Filled'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-139q-6.16 0-11.44-1-5.28-1-10.56-3-114-45-180-147.5T212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v144q0 12.98-9 21.99-9 9.01-23 9.01-38 2-72.5 15.5T580-449q-27 27-43 63t-16 78v138q0 9-5 16.5T502-143q-5.28 2-10.56 3T480-139Zm169 7q-14.82 0-25.41-10.59T613-168v-106q0-14 10.59-24T649-308h4v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h4q14.41 0 24.71 10Q828-288 828-274v106q0 14.82-10 25.41T793-132H649Zm32-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedW100Filled.displayName = 'OnesyIconMaterialShieldLockedW100Filled';

export default IconMaterialShieldLockedW100Filled;
