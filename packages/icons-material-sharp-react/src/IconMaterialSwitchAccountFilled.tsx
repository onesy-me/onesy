import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountFilled'

      short_name='SwitchAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-520q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-240h480q-42-57-105.5-88.5T560-440q-71 0-134.5 31.5T320-320Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountFilled.displayName = 'OnesyIconMaterialSwitchAccountFilled';

export default IconMaterialSwitchAccountFilled;
