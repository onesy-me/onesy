import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartphoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneW100'

      short_name='Smartphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-28h400v-532H280v532Zm0-560h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneW100.displayName = 'OnesyIconMaterialSmartphoneW100';

export default IconMaterialSmartphoneW100;
