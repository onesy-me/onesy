import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWifiRouter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiRouter'

      short_name='NestWifiRouter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70H360ZM200-360h560v-240q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v240Zm22 80q21 36 57 58t81 22h240q45 0 81-22t57-58H222Zm258-80Z"/>
    </Icon>
  );
});

IconMaterialNestWifiRouter.displayName = 'OnesyIconMaterialNestWifiRouter';

export default IconMaterialNestWifiRouter;
