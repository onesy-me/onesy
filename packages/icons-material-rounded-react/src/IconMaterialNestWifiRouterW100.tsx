import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWifiRouterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiRouterW100'

      short_name='NestWifiRouter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-172q-72.5 0-123.25-50.75T172-346v-268q0-72.5 50.75-123.25T346-788h268q72.5 0 123.25 50.75T788-614v268q0 72.5-50.75 123.25T614-172H346ZM200-328h560v-286q0-60.22-42.89-103.11T614-760H346q-60.23 0-103.11 42.89Q200-674.22 200-614v286Zm7 28q16 44 53.5 72t85.5 28h268q48 0 85.5-28t53.5-72H207Zm273-28Z"/>
    </Icon>
  );
});

IconMaterialNestWifiRouterW100.displayName = 'OnesyIconMaterialNestWifiRouterW100';

export default IconMaterialNestWifiRouterW100;
