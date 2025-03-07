import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscape'

      short_name='ScreenLockLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h880v560H40Zm120-80v-400h-40v400h40Zm80 0h480v-400H240v400Zm560 0h40v-400h-40v400ZM160-680h-40 40Zm640 0h40-40ZM360-320v-200h40v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h40v200H360Zm80-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscape.displayName = 'OnesyIconMaterialScreenLockLandscape';

export default IconMaterialScreenLockLandscape;
