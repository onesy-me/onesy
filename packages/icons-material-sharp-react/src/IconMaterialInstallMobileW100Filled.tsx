import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileW100Filled'

      short_name='InstallMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h312v122H280v532h400v-80h28v202H252Zm468-345L556-601l20-20 130 130v-323h28v323l130-130 20 20-164 164Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileW100Filled.displayName = 'OnesyIconMaterialInstallMobileW100Filled';

export default IconMaterialInstallMobileW100Filled;
