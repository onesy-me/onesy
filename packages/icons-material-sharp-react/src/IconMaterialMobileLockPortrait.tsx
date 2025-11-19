import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileLockPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileLockPortrait'

      short_name='MobileLockPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Zm80-200h240v-200h-40v-40q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560v40h-40v200Zm80-200v-40q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560v40h-80Z"/>
    </Icon>
  );
});

IconMaterialMobileLockPortrait.displayName = 'OnesyIconMaterialMobileLockPortrait';

export default IconMaterialMobileLockPortrait;
