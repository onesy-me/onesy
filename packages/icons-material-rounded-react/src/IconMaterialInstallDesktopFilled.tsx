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
      <path d="M320-160v-40H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h280q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H160v480h640v-80q0-17 11.5-28.5T840-400q17 0 28.5 11.5T880-360v80q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Zm320-393v-247q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v247l76-75q11-11 27.5-11.5T852-628q11 11 11 28t-11 28L708-428q-12 12-28 12t-28-12L508-572q-11-11-11.5-27.5T508-628q11-11 28-11t28 11l76 75Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktopFilled.displayName = 'OnesyIconMaterialInstallDesktopFilled';

export default IconMaterialInstallDesktopFilled;
