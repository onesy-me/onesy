import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortrait'

      short_name='ScreenLockPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320v-200h40v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h40v200H360Zm80-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40ZM200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortrait.displayName = 'OnesyIconMaterialScreenLockPortrait';

export default IconMaterialScreenLockPortrait;
