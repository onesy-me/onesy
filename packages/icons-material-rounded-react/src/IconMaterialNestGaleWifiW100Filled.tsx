import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestGaleWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestGaleWifiW100Filled'

      short_name='NestGaleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m159-528 11-164q2-24 19-40t41-16h500q24 0 41 16t19 40l11 164H159Zm77 316-10-32h-21q-26 0-44-19t-16-45l12-191h646l12 191q2 26-16 45t-44 19h-21l-10 32H236Z"/>
    </Icon>
  );
});

IconMaterialNestGaleWifiW100Filled.displayName = 'OnesyIconMaterialNestGaleWifiW100Filled';

export default IconMaterialNestGaleWifiW100Filled;
