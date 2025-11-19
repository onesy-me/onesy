import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HostW100Filled'

      short_name='Host'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-616h298v616H132Zm398 0v-616h298v616H530ZM220-392h120v-28H220v28Zm400 0h120v-28H620v28ZM220-502h120v-28H220v28Zm400 0h120v-28H620v28ZM220-613h120v-28H220v28Zm400 0h120v-28H620v28Z"/>
    </Icon>
  );
});

IconMaterialHostW100Filled.displayName = 'OnesyIconMaterialHostW100Filled';

export default IconMaterialHostW100Filled;
