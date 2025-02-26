import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityUpdateWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateWarningW100Filled'

      short_name='SecurityUpdateWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-308q-8.5 0-14.25-5.75T460-328q0-8.5 5.75-14.25T480-348q8.5 0 14.25 5.75T500-328q0 8.5-5.75 14.25T480-308Zm-14-106v-244h28v244h-28ZM252-92v-776h456v776H252Zm28-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningW100Filled.displayName = 'OnesyIconMaterialSecurityUpdateWarningW100Filled';

export default IconMaterialSecurityUpdateWarningW100Filled;
