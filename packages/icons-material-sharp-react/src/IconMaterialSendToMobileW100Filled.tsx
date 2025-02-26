import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendToMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileW100Filled'

      short_name='SendToMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-356-20-20 90-90H506v-28h244l-90-90 20-20 124 124-124 124ZM252-92v-776h456v184h-28v-62H280v532h400v-62h28v184H252Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileW100Filled.displayName = 'OnesyIconMaterialSendToMobileW100Filled';

export default IconMaterialSendToMobileW100Filled;
