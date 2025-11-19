import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCancelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCancelW100Filled'

      short_name='MobileCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m386-366 94-94 94 94 20-20-94-94 94-94-20-20-94 94-94-94-20 20 94 94-94 94 20 20ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileCancelW100Filled.displayName = 'OnesyIconMaterialMobileCancelW100Filled';

export default IconMaterialMobileCancelW100Filled;
