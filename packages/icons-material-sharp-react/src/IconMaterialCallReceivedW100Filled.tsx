import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallReceivedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedW100Filled'

      short_name='CallReceived'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-252v-348h28v300l448-448 20 20-448 448h300v28H252Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedW100Filled.displayName = 'OnesyIconMaterialCallReceivedW100Filled';

export default IconMaterialCallReceivedW100Filled;
