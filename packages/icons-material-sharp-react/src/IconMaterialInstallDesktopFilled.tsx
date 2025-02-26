import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallDesktopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallDesktopFilled'

      short_name='InstallDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80H80v-640h400v80H160v480h640v-120h80v200H640v80H320Zm360-280L480-600l56-56 104 103v-287h80v287l104-103 56 56-200 200Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktopFilled.displayName = 'OnesyIconMaterialInstallDesktopFilled';

export default IconMaterialInstallDesktopFilled;
