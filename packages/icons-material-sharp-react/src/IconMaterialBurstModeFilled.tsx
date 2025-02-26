import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBurstModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeFilled'

      short_name='BurstMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h80v560H40Zm160 0v-560h80v560h-80Zm160 0v-560h560v560H360Zm120-160h320L696-500l-76 100-56-74-84 114Z"/>
    </Icon>
  );
});

IconMaterialBurstModeFilled.displayName = 'OnesyIconMaterialBurstModeFilled';

export default IconMaterialBurstModeFilled;
