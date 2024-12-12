import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileW100'

      short_name='InstallMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h312v28H280v66h284v28H280v532h400v-80h28v202H252Zm28-94v66h400v-66H280Zm440-251L556-601l20-20 130 130v-323h28v323l130-130 20 20-164 164ZM280-774v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileW100.displayName = 'OnesyIconMaterialInstallMobileW100';

export default IconMaterialInstallMobileW100;
