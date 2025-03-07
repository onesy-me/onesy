import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCenterFocusStrongW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrongW100'

      short_name='CenterFocusStrong'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188h28v160h160v28H172Zm428 0v-28h160v-160h28v188H600ZM172-600v-188h188v28H200v160h-28Zm588 0v-160H600v-28h188v188h-28ZM480-332q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-28q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusStrongW100.displayName = 'OnesyIconMaterialCenterFocusStrongW100';

export default IconMaterialCenterFocusStrongW100;
