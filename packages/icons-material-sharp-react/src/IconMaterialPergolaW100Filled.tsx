import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPergolaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaW100Filled'

      short_name='Pergola'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-656h28v80h560v-80h28v656h-28v-400H200v400h-28Zm294 0v-111H355v-28h249v28H494v111h-28Z"/>
    </Icon>
  );
});

IconMaterialPergolaW100Filled.displayName = 'OnesyIconMaterialPergolaW100Filled';

export default IconMaterialPergolaW100Filled;
