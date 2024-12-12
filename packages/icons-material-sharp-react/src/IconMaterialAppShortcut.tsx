import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppShortcut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcut'

      short_name='AppShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M686-440H480v120h-80v-200h286l-62-64 56-56 160 160-160 160-56-56 62-64ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialAppShortcut.displayName = 'OnesyIconMaterialAppShortcut';

export default IconMaterialAppShortcut;
