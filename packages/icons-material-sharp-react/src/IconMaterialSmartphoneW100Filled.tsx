import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartphoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneW100Filled'

      short_name='Smartphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm28-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneW100Filled.displayName = 'OnesyIconMaterialSmartphoneW100Filled';

export default IconMaterialSmartphoneW100Filled;
