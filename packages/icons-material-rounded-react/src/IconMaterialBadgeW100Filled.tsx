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
      <path d="M256-270h208v-2q0-12.93-7-23.97Q450-307 438-312q-17-8-37-12t-41-4q-21 0-41 4t-37 12q-12 5-19 16.03-7 11.04-7 23.97v2Zm318-62h132q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H574q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4Zm-214.24-28Q378-360 391-372.76q13-12.77 13-31Q404-422 391.24-435q-12.77-13-31-13Q342-448 329-435.24q-13 12.77-13 31Q316-386 328.76-373q12.77 13 31 13ZM574-420h132q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H574q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4ZM192-132q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h220v-172q0-11.55 8.23-19.78Q428.45-828 440-828h80q11.55 0 19.78 8.22Q548-811.55 548-800v172h220q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm248-428h80v-240h-80v240Z"/>
    </Icon>
  );
});

IconMaterialBadgeW100Filled.displayName = 'OnesyIconMaterialBadgeW100Filled';

export default IconMaterialBadgeW100Filled;
