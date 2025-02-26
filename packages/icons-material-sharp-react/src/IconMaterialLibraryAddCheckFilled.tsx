import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAddCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckFilled'

      short_name='LibraryAddCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m508-398 226-226-56-58-170 170-86-84-56 56 142 142ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckFilled.displayName = 'OnesyIconMaterialLibraryAddCheckFilled';

export default IconMaterialLibraryAddCheckFilled;
