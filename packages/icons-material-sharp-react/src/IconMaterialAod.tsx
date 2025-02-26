import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAod = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Aod'

      short_name='Aod'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-380v-60h240v60H360Zm-40-120v-60h320v60H320ZM200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialAod.displayName = 'OnesyIconMaterialAod';

export default IconMaterialAod;
