import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHostW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HostW100'

      short_name='Host'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-616h298v616H132Zm398 0v-616h298v616H530Zm-370-28h242v-560H160v560Zm398 0h242v-560H558v560ZM220-392h120v-28H220v28Zm400 0h120v-28H620v28ZM220-502h120v-28H220v28Zm400 0h120v-28H620v28ZM220-613h120v-28H220v28Zm400 0h120v-28H620v28ZM160-200h242-242Zm398 0h242-242Z"/>
    </Icon>
  );
});

IconMaterialHostW100.displayName = 'OnesyIconMaterialHostW100';

export default IconMaterialHostW100;
