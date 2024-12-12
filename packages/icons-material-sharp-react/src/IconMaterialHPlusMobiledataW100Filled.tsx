import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHPlusMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataW100Filled'

      short_name='HPlusMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-280v-400h28v186h292v-186h28v400h-28v-186H220v186h-28Zm548-106v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataW100Filled.displayName = 'OnesyIconMaterialHPlusMobiledataW100Filled';

export default IconMaterialHPlusMobiledataW100Filled;
