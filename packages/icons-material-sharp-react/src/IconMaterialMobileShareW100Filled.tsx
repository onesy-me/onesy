import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileShareW100Filled'

      short_name='MobileShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-346h28v-120h162l-70 69 20 20 103-103-103-103-20 19 69 70H360v148ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileShareW100Filled.displayName = 'OnesyIconMaterialMobileShareW100Filled';

export default IconMaterialMobileShareW100Filled;
