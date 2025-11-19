import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCancel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCancel'

      short_name='MobileCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m386-330 94-94 94 94 56-56-94-94 94-94-56-56-94 94-94-94-56 56 94 94-94 94 56 56ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileCancel.displayName = 'OnesyIconMaterialMobileCancel';

export default IconMaterialMobileCancel;
