import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileFilled'

      short_name='InstallMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h240q17 0 28.5 11.5T560-880v120q0 17-11.5 28.5T520-720H280v480h400v-40q0-17 11.5-28.5T720-320q17 0 28.5 11.5T760-280v160q0 33-23.5 56.5T680-40H280Zm400-512v-248q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v248l76-76q11-11 28-11t28 11q11 11 11 28t-11 28L748-428q-12 12-28 12t-28-12L548-572q-11-11-11-28t11-28q11-11 28-11t28 11l76 76Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileFilled.displayName = 'OnesyIconMaterialInstallMobileFilled';

export default IconMaterialInstallMobileFilled;
