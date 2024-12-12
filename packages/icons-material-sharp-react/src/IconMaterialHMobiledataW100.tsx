import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataW100'

      short_name='HMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-280v-400h28v186h292v-186h28v400h-28v-186H334v186h-28Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataW100.displayName = 'OnesyIconMaterialHMobiledataW100';

export default IconMaterialHMobiledataW100;
