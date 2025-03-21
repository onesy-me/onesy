import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppPromo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppPromo'

      short_name='AppPromo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-514v-126q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v126l36-35q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-388q-12 12-28 12t-28-12L348-492q-11-11-11.5-27.5T348-548q11-11 27.5-11.5T404-549l36 35ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Zm140 640h120q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialAppPromo.displayName = 'OnesyIconMaterialAppPromo';

export default IconMaterialAppPromo;
