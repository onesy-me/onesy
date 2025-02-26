import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeW100Filled'

      short_name='Badge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-270h208v-2q0-12.93-7-23.97Q450-307 438-312q-17-8-37-12t-41-4q-21 0-41 4t-37 12q-12 5-19 16.03-7 11.04-7 23.97v2Zm304-62h160v-28H560v28Zm-200.24-28Q378-360 391-372.76q13-12.77 13-31Q404-422 391.24-435q-12.77-13-31-13Q342-448 329-435.24q-13 12.77-13 31Q316-386 328.76-373q12.77 13 31 13ZM560-420h160v-28H560v28ZM132-132v-496h280v-200h136v200h280v496H132Zm308-428h80v-240h-80v240Z"/>
    </Icon>
  );
});

IconMaterialBadgeW100Filled.displayName = 'OnesyIconMaterialBadgeW100Filled';

export default IconMaterialBadgeW100Filled;
