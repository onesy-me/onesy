import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCenterFocusStrongW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrongW100Filled'

      short_name='CenterFocusStrong'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-332q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM232-172q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm496 0H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q12 0 22-10t10-22v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 26-17 43t-43 17ZM172-614v-114q0-26 17-43t43-17h114q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm588 0v-114q0-12-10-22t-22-10H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusStrongW100Filled.displayName = 'OnesyIconMaterialCenterFocusStrongW100Filled';

export default IconMaterialCenterFocusStrongW100Filled;
