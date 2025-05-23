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
      <path d="m791-55-91-91q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-91-91 57-57 736 736-57 57ZM280-440h126l-80-80h-46v80Zm534 180L634-440h46v-80H554L260-814q49-32 104.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 60-17 115.5T814-260Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffFilled.displayName = 'OnesyIconMaterialDoNotDisturbOffFilled';

export default IconMaterialDoNotDisturbOffFilled;
