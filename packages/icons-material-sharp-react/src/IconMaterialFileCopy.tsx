import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileCopy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopy'

      short_name='FileCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200v-720h360l240 240v480H240Zm320-440v-200H320v560h440v-360H560ZM80-40v-640h80v560h440v80H80Zm240-800v200-200 560-560Z"/>
    </Icon>
  );
});

IconMaterialFileCopy.displayName = 'OnesyIconMaterialFileCopy';

export default IconMaterialFileCopy;
