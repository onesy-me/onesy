import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAddCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheck'

      short_name='LibraryAddCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m508-398 226-226-56-58-170 170-86-84-56 56 142 142ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheck.displayName = 'OnesyIconMaterialLibraryAddCheck';

export default IconMaterialLibraryAddCheck;
