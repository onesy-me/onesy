import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWifiRouterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiRouterW100Filled'

      short_name='NestWifiRouter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-172q-59 0-105-35.5T178-300h604q-17 57-63 92.5T614-172H346ZM173-328q-1-5-1-9v-277q0-72 51-123t123-51h268q72 0 123 51t51 123v277q0 4-1 9H173Z"/>
    </Icon>
  );
});

IconMaterialNestWifiRouterW100Filled.displayName = 'OnesyIconMaterialNestWifiRouterW100Filled';

export default IconMaterialNestWifiRouterW100Filled;
