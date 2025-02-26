import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpgradeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeFilled'

      short_name='Upgrade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-80h400v80H280Zm160-160v-327L336-544l-56-56 200-200 200 200-56 56-104-103v327h-80Z"/>
    </Icon>
  );
});

IconMaterialUpgradeFilled.displayName = 'OnesyIconMaterialUpgradeFilled';

export default IconMaterialUpgradeFilled;
