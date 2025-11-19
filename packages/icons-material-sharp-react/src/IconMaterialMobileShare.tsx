import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileShare'

      short_name='MobileShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h80v-120h86l-42 44 56 56 140-140-140-140-56 56 42 44H320v200ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileShare.displayName = 'OnesyIconMaterialMobileShare';

export default IconMaterialMobileShare;
