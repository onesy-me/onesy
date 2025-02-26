import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyFilled'

      short_name='FileCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200v-720h360l240 240v480H240Zm320-440h200L560-840v200ZM80-40v-640h80v560h440v80H80Z"/>
    </Icon>
  );
});

IconMaterialFileCopyFilled.displayName = 'OnesyIconMaterialFileCopyFilled';

export default IconMaterialFileCopyFilled;
