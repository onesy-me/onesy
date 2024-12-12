import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWifiRouterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiRouterFilled'

      short_name='NestWifiRouter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-77 0-138.5-44T134-280h692q-26 72-87.5 116T600-120H360ZM120-360v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240H120Z"/>
    </Icon>
  );
});

IconMaterialNestWifiRouterFilled.displayName = 'OnesyIconMaterialNestWifiRouterFilled';

export default IconMaterialNestWifiRouterFilled;
