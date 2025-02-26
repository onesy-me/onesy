import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBurstMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstMode'

      short_name='BurstMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h80v560H40Zm160 0v-560h80v560h-80Zm160 0v-560h560v560H360Zm80-80h400v-400H440v400Zm40-80h320L696-500l-76 100-56-74-84 114Zm-40 80v-400 400Z"/>
    </Icon>
  );
});

IconMaterialBurstMode.displayName = 'OnesyIconMaterialBurstMode';

export default IconMaterialBurstMode;
