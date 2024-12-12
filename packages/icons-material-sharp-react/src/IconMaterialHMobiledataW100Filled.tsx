import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataW100Filled'

      short_name='HMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-280v-400h28v186h292v-186h28v400h-28v-186H334v186h-28Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataW100Filled.displayName = 'OnesyIconMaterialHMobiledataW100Filled';

export default IconMaterialHMobiledataW100Filled;
