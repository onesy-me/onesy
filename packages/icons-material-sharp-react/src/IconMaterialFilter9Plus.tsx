import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter9Plus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9Plus'

      short_name='Filter9Plus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-400h160v-320H360v200h120v40h-80v80Zm80-200h-40v-40h40v40ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Zm340-120h80v-80h60v-80h-60v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialFilter9Plus.displayName = 'OnesyIconMaterialFilter9Plus';

export default IconMaterialFilter9Plus;
