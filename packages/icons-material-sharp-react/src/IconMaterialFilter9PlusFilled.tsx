import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter9PlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusFilled'

      short_name='Filter9Plus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm320-320h160v-320H360v200h120v40h-80v80Zm80-200h-40v-40h40v40Zm180 160h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialFilter9PlusFilled.displayName = 'OnesyIconMaterialFilter9PlusFilled';

export default IconMaterialFilter9PlusFilled;
