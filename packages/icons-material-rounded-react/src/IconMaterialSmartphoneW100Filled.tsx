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
      <path d="M312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneW100Filled.displayName = 'OnesyIconMaterialSmartphoneW100Filled';

export default IconMaterialSmartphoneW100Filled;
