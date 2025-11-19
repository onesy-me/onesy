import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileArrowUpRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileArrowUpRightW100Filled'

      short_name='MobileArrowUpRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m385-366 161-161v136h28v-184H390v28h137L365-386l20 20ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileArrowUpRightW100Filled.displayName = 'OnesyIconMaterialMobileArrowUpRightW100Filled';

export default IconMaterialMobileArrowUpRightW100Filled;
