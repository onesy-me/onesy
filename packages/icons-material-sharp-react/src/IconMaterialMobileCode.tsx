import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCode'

      short_name='MobileCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-720 720Zm200-600q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720ZM200-40v-880h560v204h40v192h-40v84h-80v-400H280v720h80v80H200Zm384-16L440-200l144-144 56 57-87 87 87 87-56 57Zm192 0-56-57 87-87-87-87 56-57 144 144L776-56Z"/>
    </Icon>
  );
});

IconMaterialMobileCode.displayName = 'OnesyIconMaterialMobileCode';

export default IconMaterialMobileCode;
