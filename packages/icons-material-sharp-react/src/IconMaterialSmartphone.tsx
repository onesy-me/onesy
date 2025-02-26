import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartphone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Smartphone'

      short_name='Smartphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialSmartphone.displayName = 'OnesyIconMaterialSmartphone';

export default IconMaterialSmartphone;
