import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffFilled'

      short_name='DoNotDisturbOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-63-62q-49 32-104.5 49T480-80ZM326-520h-6q-17 0-28.5 11.5T280-480q0 17 11 28.5t28 11.5h87l-80-80Zm441 213L634-440h6q17 0 28.5-11.5T680-480q0-17-11-28.5T641-520h-87L307-767q-18-18-14.5-43t26.5-36q38-17 78.5-25.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 42-8.5 82.5T846-319q-11 23-35.5 27T767-307Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffFilled.displayName = 'OnesyIconMaterialDoNotDisturbOffFilled';

export default IconMaterialDoNotDisturbOffFilled;
