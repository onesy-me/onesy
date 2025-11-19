import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCancelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCancelW100'

      short_name='MobileCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m386-366 94-94 94 94 20-20-94-94 94-94-20-20-94 94-94-94-20 20 94 94-94 94 20 20ZM252-92v-776h460v190h36v134h-36v452H252Zm28-28h404v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileCancelW100.displayName = 'OnesyIconMaterialMobileCancelW100';

export default IconMaterialMobileCancelW100;
