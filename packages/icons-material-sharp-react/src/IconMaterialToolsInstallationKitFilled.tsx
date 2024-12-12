import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsInstallationKitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsInstallationKitFilled'

      short_name='ToolsInstallationKit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160q-134 0-227-93T40-480q0-134 93-227t227-93h240q134 0 227 93t93 227q0 134-93 227t-227 93H360Zm120-240q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm-80-200h160v-80H400v80Zm0 320h160v-80H400v80Zm200-120h80v-160h-80v160Zm-320 0h80v-160h-80v160Z"/>
    </Icon>
  );
});

IconMaterialToolsInstallationKitFilled.displayName = 'OnesyIconMaterialToolsInstallationKitFilled';

export default IconMaterialToolsInstallationKitFilled;
