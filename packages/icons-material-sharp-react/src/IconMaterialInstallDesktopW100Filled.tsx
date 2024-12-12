import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallDesktopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallDesktopW100Filled'

      short_name='InstallDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-172v-80H132v-536h344v28H160v480h640v-94h28v122H588v80H372Zm300-267L508-603l19-19 131 131v-297h28v297l131-131 19 19-164 164Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktopW100Filled.displayName = 'OnesyIconMaterialInstallDesktopW100Filled';

export default IconMaterialInstallDesktopW100Filled;
